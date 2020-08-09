import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { getTablePreviewUrl, postTable, prepareTableToDuplicate } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const Actions = ( { table } ) => {
	const stateContext = useContext( StateContext );
	const { state, dispatch } = stateContext;
	const { tables, previewPageUrl } = state;
	const { id } = table;
	const total = parseInt( state.total );

	const tablePreviewUrl = getTablePreviewUrl( previewPageUrl, id );

	const onHandleNavigateToTable = () => {
		dispatch( { type: 'UNSET_TABLE_CHANGED' } );
		dispatch( { type: 'SET_TABLE', payload: table } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const onHandleDuplicateTable = () => {
		const oldTables = [ ...tables ];
		const tempTable = prepareTableToDuplicate( oldTables, id );
		const tempTables = [ tempTable, ...oldTables ];
		const newTableData = {
			title: tempTable.title.rendered,
			advanced_wp_table_data: tempTable.advanced_wp_table_data,
		};

		// Insert the temp table at the top of the tables list.
		dispatch( { type: 'UPDATE_TOTAL', payload: total + 1 } );
		dispatch( { type: 'UPDATE_TABLES', payload: tempTables } );

		toastSuccess( __( 'Table duplicated successfully', 'advanced-wp-table' ) );

		// Insert the table into database.
		postTable( newTableData )
			.then( ( newTable ) => {
				// Replace the duplicated table with the temp table.
				const newTables = tempTables.map( ( item ) => {
					if ( tempTable.id === item.id ) {
						return newTable;
					}

					return item;
				} );

				dispatch( { type: 'UPDATE_TABLES', payload: newTables } );

				// If we are not in the first page then paginate the tables to the first page.
				dispatch( { type: 'PAGINATE_TABLES', payload: { offset: 0, currentPage: 0 } } );
			} )
			.catch( ( err ) => {
				// eslint-disable-next-line no-console
				console.log( err.message );

				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError( __( 'Oops, there was a problem when duplicating the table', 'advanced-wp-table' ) );
			} );
	};

	const onHandleDeleteTable = ( e ) => {
		e.preventDefault();

		dispatch( {
			type: 'SET_TABLE_DELETE_DIALOG',
			payload: {
				status: true,
				id,
			},
		} );
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
