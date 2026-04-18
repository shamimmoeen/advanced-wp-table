import apiFetch from '@wordpress/api-fetch';
import { getApiEndpoint } from './utils';

const { __ } = wp.i18n;

export async function getTables( perPage, offset ) {
	const options = {
		path: wp.url.addQueryArgs( getApiEndpoint(), { per_page: perPage, offset } ),
		parse: false,
	};

	try {
		const response = await apiFetch( options );
		const total = parseInt( response.headers && response.headers.get( 'X-WP-Total' ) );
		const totalPages = parseInt( response.headers && response.headers.get( 'X-WP-TotalPages' ) );
		const tables = await response.json();

		return { total, totalPages, tables };
	} catch ( response ) {
		const err = await response.json();
		throw new Error( err.message );
	}
}

export function validateTable( tableData ) {
	const { title, sizeOfRows, sizeOfColumns } = tableData;

	if ( ! title ) {
		throw new Error( __( 'Title shouldn\'t be empty', 'advanced-wp-table' ) );
	}

	if ( parseInt( sizeOfRows ) < 1 ) {
		throw new Error( __( 'Size of rows should be greater than 0', 'advanced-wp-table' ) );
	}

	if ( parseInt( sizeOfColumns ) < 1 ) {
		throw new Error( __( 'Size of columns should be greater than 0', 'advanced-wp-table' ) );
	}
}

export function prepareTable( tableData ) {
	const { title, sizeOfRows, sizeOfColumns } = tableData;

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

	return { title, advanced_wp_table_data: { size: tableSize, rows: tableRows } };
}

// eslint-disable-next-line camelcase
export async function postTable( { title, advanced_wp_table_data } ) {
	const options = {
		path: getApiEndpoint(),
		method: 'POST',
		data: { title, status: 'publish', advanced_wp_table_data },
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

export async function getTable( id ) {
	const options = {
		path: getApiEndpoint() + '/' + id,
		method: 'GET',
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

export async function deleteTable( id ) {
	const options = {
		path: getApiEndpoint() + '/' + id,
		method: 'DELETE',
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

// eslint-disable-next-line camelcase
export async function updateTable( id, title, advanced_wp_table_data ) {
	const options = {
		path: getApiEndpoint() + '/' + id,
		method: 'PUT',
		data: { title, advanced_wp_table_data },
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
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

export function prepareTableToDuplicate( tables, targetTableId ) {
	const targetTable = tables.find( ( item ) => targetTableId === item.id );
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
