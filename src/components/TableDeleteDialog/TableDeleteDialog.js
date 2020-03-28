import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { deleteTable } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';

import { StateContext } from '../App';

const { Fragment, useContext } = wp.element;
const { __ } = wp.i18n;

const TableDeleteDialog = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, tableDeleteDialog } = state;
	const { status, id } = tableDeleteDialog;

	const onHandleCancel = () => {
		dispatch( { type: 'UNSET_TABLE_DELETE_DIALOG' } );
	};

	const onHandleDelete = () => {
		const oldTables = [ ...tables ];
		const newTables = oldTables.filter( ( item ) => id !== item.id );

		dispatch( { type: 'UPDATE_TABLES', payload: newTables } );
		dispatch( { type: 'UNSET_TABLE_DELETE_DIALOG' } );
		toastSuccess( __( 'Table deleted successfully', 'advanced-wp-table' ) );

		deleteTable( id )
			.catch( ( err ) => {
				// eslint-disable-next-line no-console
				console.log( err.message );

				dismissToasts();
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError( __( 'Oops, there was a problem when deleting the table', 'advanced-wp-table' ) );
			} );
	};

	return (
		<Fragment>
			{ status && (
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
