import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import _ from 'lodash';

import { getTablePreviewUrl, postTable, prepareTableToDuplicate } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { setTable } from '../../store/reducers/table';
import { setTablesLoading, setView, unsetTablesLoading } from '../../store/reducers/ui';
import { TABLE } from '../../utils/views';
import { setTableDeleteDialog } from '../../store/reducers/dialogs';
import { setCache, setCurrentPage, setOffset, setTables, setTotal, setTotalPages } from '../../store/reducers/tables';

const Actions = ( { table, onHandleRowFocus, onHandleRowBlur } ) => {
	const tablesState = useSelector( state => state.tables );
	const { perPage, total, tables, cache } = tablesState;
	const { previewPageUrl } = useSelector( state => state.globals );
	const { id } = table;
	const tablePreviewUrl = getTablePreviewUrl( previewPageUrl, id );
	const dispatch = useDispatch();

	const onHandleNavigateToTable = () => {
		dispatch( setTable( table ) );
		dispatch( setView( TABLE ) );
	};

	const onHandleDuplicateTable = () => {
		// Shows the success message.
		toastSuccess( __( 'Table duplicated successfully', 'advanced-wp-table' ) );

		// Shows the tables as loading.
		dispatch( setTablesLoading() );

		const tempTable = prepareTableToDuplicate( tables, id );
		const newTableData = {
			title: tempTable.title.rendered,
			advanced_wp_table_data: tempTable.advanced_wp_table_data,
		};

		// Insert the table into database.
		postTable( newTableData )
			.then( ( newTable ) => {
				const newTotal = total + 1;
				const newTotalPages = Math.ceil( newTotal / perPage );

				const newCache = [ newTable, ...cache ];
				const chunked = _.chunk( newCache, perPage );
				const newTables = chunked[ 0 ];

				batch( () => {
					dispatch( setTotal( newTotal ) );
					dispatch( setTotalPages( newTotalPages ) );
					dispatch( setOffset( 0 ) );
					dispatch( setCurrentPage( 0 ) );
					dispatch( setTables( newTables ) );
					dispatch( setCache( newTables ) );

					dispatch( unsetTablesLoading() );
				} );
			} )
			.catch( () => {
				dispatch( unsetTablesLoading() );

				toastError( __( 'Oops, there was a problem when duplicating the table', 'advanced-wp-table' ) );
			} );
	};

	const onHandleDeleteTable = ( e ) => {
		e.preventDefault();

		dispatch( setTableDeleteDialog( id ) );
	};

	return (
		<>
			<span className={ 'edit' }>
				<button
					className={ 'button-link' }
					onClick={ onHandleNavigateToTable }
					onFocus={ onHandleRowFocus }
					onBlur={ onHandleRowBlur }
				>
					{ __( 'Edit', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'preview-table-btn' }>
				<a
					href={ tablePreviewUrl }
					target={ '_blank' }
					rel={ 'noreferrer' }
					onFocus={ onHandleRowFocus }
					onBlur={ onHandleRowBlur }
				>
					{ __( 'Preview', 'advanced-wp-table' ) }
				</a>
			</span>
			{ ` | ` }
			<span className={ 'duplicate' }>
				<button
					className={ 'button-link' }
					onClick={ onHandleDuplicateTable }
					onFocus={ onHandleRowFocus }
					onBlur={ onHandleRowBlur }
				>
					{ __( 'Duplicate', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'trash' }>
				<a
					href={ '#/' }
					onClick={ onHandleDeleteTable }
					onFocus={ onHandleRowFocus }
					onBlur={ onHandleRowBlur }
				>
					{ __( 'Delete', 'advanced-wp-table' ) }
				</a>
			</span>
		</>
	);
};

export default Actions;
