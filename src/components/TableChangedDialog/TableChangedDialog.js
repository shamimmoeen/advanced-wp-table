import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { StateContext } from '../App';

const { Fragment, useContext } = wp.element;
const { __ } = wp.i18n;

const TableChangedDialog = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tableChangedDialog } = state;
	const { status, callbackCancel, callbackLeave } = tableChangedDialog;

	const onHandleCancel = () => {
		if ( callbackCancel ) {
			callbackCancel();
		}

		dispatch( { type: 'UNSET_TABLE_CHANGED_DIALOG' } );
	};

	const onHandleLeave = () => {
		if ( callbackLeave ) {
			callbackLeave();
		}

		dispatch( { type: 'UNSET_TABLE_CHANGED_DIALOG' } );
	};

	return (
		<Fragment>
			{ status && (
				<Dialog aria-label={ 'Leave Changes?' }>
					<p className={ 'advanced-wp-table-alert-title' }>
						{ __( 'Leave changes?', 'advanced-wp-table' ) }
					</p>
					<p className={ 'advanced-wp-table-alert-desc' }>
						{ __( 'The changes you made will be lost if you leave this.', 'advanced-wp-table' ) }
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
							onClick={ onHandleLeave }
						>
							{ __( 'Leave', 'advanced-wp-table' ) }
						</button>
					</div>
				</Dialog>
			) }
		</Fragment>
	);
};

export default TableChangedDialog;
