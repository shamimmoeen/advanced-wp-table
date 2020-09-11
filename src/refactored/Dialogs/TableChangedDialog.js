import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { Dialog } from '@reach/dialog';

import '@reach/dialog/styles.css';
import { unsetTableChangedDialog } from '../../store/reducers/dialogs';
import { unsetTable } from '../../store/reducers/table';
import { setView } from '../../store/reducers/ui';

const TableChangedDialog = () => {
	const dispatch = useDispatch();
	const dialogState = useSelector( state => state.dialogs.tableChangedDialog );
	const { show } = dialogState;

	const onHandleCancel = () => {
		dispatch( unsetTableChangedDialog() );
	};

	const onHandleLeave = () => {
		dispatch( unsetTableChangedDialog() );
		dispatch( setView( 'list' ) );
		dispatch( unsetTable() );
	};

	return (
		<Fragment>
			{ show && (
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
