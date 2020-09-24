import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { Dialog } from '@reach/dialog';

import '@reach/dialog/styles.css';

import { deleteTable } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { unsetTableDeleteDialog } from '../../store/reducers/dialogs';
import { setTotal } from '../../store/reducers/tables';
import { setTablesLoading, unsetTablesLoading } from '../../store/reducers/ui';

const TableDeleteDialog = () => {
	const dispatch = useDispatch();
	const tablesState = useSelector( state => state.tables );
	const dialogState = useSelector( state => state.dialogs.tableDeleteDialog );
	const { total } = tablesState;
	const { show, id } = dialogState;

	const onHandleCancel = () => {
		dispatch( unsetTableDeleteDialog() );
	};

	const onHandleDelete = () => {
		// Hides the dialog.
		dispatch( unsetTableDeleteDialog() );

		// Shows the success message.
		toastSuccess( __( 'Table deleted successfully', 'advanced-wp-table' ) );

		// Shows the tables as loading.
		dispatch( setTablesLoading() );

		deleteTable( id )
			.then( () => {
				dispatch( setTotal( total - 1 ) );
			} )
			.catch( () => {
				dispatch( unsetTablesLoading() );

				toastError( __( 'Oops, there was a problem when deleting the table', 'advanced-wp-table' ) );
			} );
	};

	return (
		<Fragment>
			{ show && (
				<Dialog aria-label={ 'Delete Table?' }>
					<p className={ 'advanced-wp-table-alert-title' }>
						{ __( 'Delete Table?', 'advanced-wp-table' ) }
					</p>
					<p className={ 'advanced-wp-table-alert-desc' }>
						{ __( 'This action is permanent and can\'t be undone.', 'advanced-wp-table' ) }
					</p>
					<div className={ 'advanced-wp-table-alert-buttons' }>
						<button
							className={ 'button button-cancel' }
							onClick={ onHandleCancel }
						>
							{ __( 'Cancel', 'advanced-wp-table' ) }
						</button>
						{ ` ` }
						<button
							className={ 'button button-primary button-leave' }
							onClick={ onHandleDelete }
							data-testid={ 'delete' }
						>
							{ __( 'Delete', 'advanced-wp-table' ) }
						</button>
					</div>
				</Dialog>
			) }
		</Fragment>
	);
};

export default TableDeleteDialog;
