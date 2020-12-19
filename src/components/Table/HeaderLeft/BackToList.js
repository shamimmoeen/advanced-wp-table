import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { setTableChangedDialog, unsetTableChangedDialog } from '../../../store/reducers/dialogs';
import { unsetTable } from '../../../store/reducers/table';
import { setView } from '../../../store/reducers/ui';
import { isTableChanged } from '../../../utils/table';

const BackToList = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );
	const navigateToListRef = useRef( null );

	const navigateToList = () => {
		dispatch( setView( 'list' ) );
		dispatch( unsetTable() );
	};

	const callbackCancel = () => {
		dispatch( unsetTableChangedDialog() );
	};

	const callbackLeave = () => {
		dispatch( unsetTableChangedDialog() );
		dispatch( setView( 'list' ) );
		dispatch( unsetTable() );
	};

	const onHandleNavigateToList = () => {
		if ( isTableChanged( tables, table ) ) {
			dispatch( setTableChangedDialog( {
				callbackCancel,
				callbackLeave,
			} ) );
		} else {
			navigateToList();
		}
	};

	return (
		<div className={ 'advanced-wp-table-header-navigate-to-list' }>
			<button
				className={ 'button' }
				ref={ navigateToListRef }
				onClick={ onHandleNavigateToList }
			>
				<span className={ 'dashicons dashicons-controls-back' } />
				{ __( 'Back to Tables', 'advanced-wp-table' ) }
			</button>
		</div>
	);
};

export default BackToList;
