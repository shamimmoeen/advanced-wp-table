import apiFetch from '@wordpress/api-fetch';
import _ from 'lodash';
import { getApiEndpoint } from './utils';
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import { parse, serialize } from '@wordpress/blocks';

export async function getTables( perPage, offset ) {
	const options = {
		path: addQueryArgs( getApiEndpoint(), { per_page: perPage, offset } ),
		parse: false,
	};

	try {
		const response = await apiFetch( options );
		const total = response.headers && parseInt( response.headers.get( 'X-WP-Total' ) );
		const totalPages = response.headers && parseInt( response.headers.get( 'X-WP-TotalPages' ) );
		const tables = await response.json();

		return { total, totalPages, tables };
	} catch ( err ) {
		throw await err.json();
	}
}

export function validateTable( tableData ) {
	const { title, type } = tableData;

	if ( ! title ) {
		throw new Error( __( 'Title is required', 'advanced-wp-table' ) );
	}

	if ( title.length > 40 ) {
		throw new Error( __( 'The title must be less than 40 characters', 'advanced-wp-table' ) );
	}

	if ( ! type ) {
		throw new Error( __( 'Type is required', 'advanced-wp-table' ) );
	}

	const availableTypes = [ 'layout', 'data' ];

	if ( -1 === availableTypes.indexOf( type ) ) {
		throw new Error( __( 'Invalid type', 'advanced-wp-table' ) );
	}
}

export function prepareTable( tableData ) {
	const { title, sizeOfRows, sizeOfColumns, type } = tableData;

	const tableSize = {
		rows: sizeOfRows,
		columns: sizeOfColumns,
	};

	const tableRows = [];

	for ( let i = 0; i < sizeOfRows; i++ ) {
		const emptyRow = [];

		for ( let j = 0; j < sizeOfColumns; j++ ) {
			emptyRow.push( '' );
		}

		tableRows.push( emptyRow );
	}

	return { title, advanced_wp_table_data: { rows: tableRows, size: tableSize, type } };
}

// eslint-disable-next-line camelcase
export function postTable( { title, advanced_wp_table_data } ) {
	const options = {
		path: getApiEndpoint(),
		method: 'POST',
		data: { title, status: 'publish', advanced_wp_table_data },
	};

	return apiFetch( options );
}

export function getTable( id ) {
	const options = {
		path: getApiEndpoint() + '/' + id,
		method: 'GET',
	};

	return apiFetch( options );
}

export function deleteTable( id ) {
	const options = {
		path: getApiEndpoint() + '/' + id,
		method: 'DELETE',
	};

	return apiFetch( options );
}

// eslint-disable-next-line camelcase
export function updateTable( id, title, advanced_wp_table_data ) {
	const options = {
		path: getApiEndpoint() + '/' + id,
		method: 'PUT',
		data: { title, advanced_wp_table_data },
	};

	return apiFetch( options );
}

export function parseTableSize( table ) {
	const { advanced_wp_table_data: tableData } = table;
	const { rows, columns } = tableData.size;
	const size = {
		rows: parseInt( rows ),
		columns: parseInt( columns ),
	};

	return { ...table, advanced_wp_table_data: { ...tableData, size } };
}

export function updateTableWithCellData( table, activeCell ) {
	const { advanced_wp_table_data: tableData } = table;
	const tempRows = [ ...tableData.rows ];
	const { i, j, content } = activeCell;
	const { type } = tableData;
	let serializedContent;

	// @todo Serialize content only if gutenberg active.
	if ( 'data' === type ) {
		serializedContent = content;
	} else {
		serializedContent = serialize( content );
	}

	const newRows = [];

	tempRows.map( ( row, rowIndex ) => {
		if ( i !== rowIndex ) {
			return newRows.push( row );
		}

		const newRow = [];

		row.map( ( data, columnIndex ) => {
			if ( j !== columnIndex ) {
				return newRow.push( data );
			}

			return newRow.push( serializedContent );
		} );

		return newRows.push( newRow );
	} );

	return { ...table, advanced_wp_table_data: { ...tableData, rows: newRows } };
}

export function prepareTableToDuplicate( tables, targetTableId ) {
	const targetTable = _.find( tables, ( item ) => targetTableId === item.id );
	const tempId = `new${ targetTable.id }`;
	const newTableTitle = `${ targetTable.title.rendered } (${ __( 'Duplicated', 'advanced-wp-table' ) })`;

	return {
		...targetTable,
		id: tempId,
		title: { ...targetTable.title, rendered: newTableTitle },
	};
}

export function getShortcode( id ) {
	return `[advanced_wp_table id="${ id }"]`;
}

export function copyShortcode( e ) {
	e.target.select();
	document.execCommand( 'copy' );
}

export function textToClipboard( text ) {
	const dummy = document.createElement( 'textarea' );
	document.body.appendChild( dummy );
	dummy.value = text;
	dummy.select();
	document.execCommand( 'copy' );
	document.body.removeChild( dummy );
}

export function getTablePreviewUrl( tablePageUrl, tableId ) {
	return `${ tablePageUrl }?id=${ tableId }`;
}

/**
 * Check if blocks were changed.
 *
 * @param table
 * @param activeCell
 * @returns {boolean}
 */
export function isActiveCellChanged( table, activeCell ) {
	const { i, j, content } = activeCell;

	const newContent = serialize( content );
	const oldBlocks = table.advanced_wp_table_data.rows[i][j];
	const oldContent = serialize( parse( oldBlocks ) );
	const isEqual = _.isEqual( newContent, oldContent );

	return ! isEqual;
}

export function isTableChanged( tables, table ) {
	const oldTable = _.find( tables, ( item ) => item.id === table.id );
	const { advanced_wp_table_data: oldTableData } = parseTableSize( oldTable );
	const { advanced_wp_table_data: newTableData } = table;
	const isEqual = _.isEqual( oldTableData, newTableData );

	return ! isEqual;
}

export function isTitleChanged( tables, table ) {
	const oldTable = _.find( tables, ( item ) => item.id === table.id );
	const oldTitle = oldTable.title.rendered;
	const newTitle = table.title.rendered;
	const isEqual = _.isEqual( oldTitle, newTitle );

	return ! isEqual;
}

export function getType( table ) {
	const { advanced_wp_table_data: tableData } = table;
	const { type } = tableData;

	if ( 'data' === type ) {
		return __( 'Data Table', 'advanced-wp-table' );
	}

	return __( 'Layout Table', 'advanced-wp-table' );
}
