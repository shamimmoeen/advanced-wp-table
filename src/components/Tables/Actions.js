import React from 'react';
import { __ } from '@wordpress/i18n';

import { getTablePreviewUrl, postTable, prepareTableToDuplicate } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setTable } from '../../store/reducers/table';
import { setTablesLoading, setView } from '../../store/reducers/ui';
import { TABLE } from '../../utils/views';
import { setTableDeleteDialog } from '../../store/reducers/dialogs';
import { setTables, setTotal, setTotalPages } from '../../store/reducers/tables';

const Actions = ( { table } ) => {
	const tablesState = useSelector( state => state.tables );
	const { tables, total } = tablesState;
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
			.then( () => {
				dispatch( setTotal( total + 1 ) );
			} )
			.catch( () => {
				toastError( __( 'Oops, there was a problem when duplicating the table', 'advanced-wp-table' ) );
			} );
	};

	const onHandleDeleteTable = ( e ) => {
		e.preventDefault();

		dispatch( setTableDeleteDialog( id ) );
	};

	return (
		<div className={ 'row-actions' }>
			<span className={ 'edit' }>
				<button
					className={ 'button-link' }
					onClick={ onHandleNavigateToTable }
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
				>
					{ __( 'Preview', 'advanced-wp-table' ) }
				</a>
			</span>
			{ ` | ` }
			<span className={ 'duplicate' }>
				<button
					className={ 'button-link' }
					onClick={ onHandleDuplicateTable }
				>
					{ __( 'Duplicate', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'trash' }>
				<a href={ '#/' } onClick={ onHandleDeleteTable }>{ __( 'Delete', 'advanced-wp-table' ) }</a>
			</span>
		</div>
	);
};

export default Actions;
