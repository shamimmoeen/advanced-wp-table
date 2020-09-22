import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import _ from 'lodash';

import { setTableChangedDialog, unsetTableChangedDialog } from '../../../store/reducers/dialogs';
import { unsetTable } from '../../../store/reducers/table';
import { setView } from '../../../store/reducers/ui';
import { parseTableSize } from '../../../utils/table';

const BackToList = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const tableState = useSelector( state => state.table );
	const { table } = tableState;
	const navigateToListRef = useRef( null );

	const navigateToList = () => {
		dispatch( setView( 'list' ) );
		dispatch( unsetTable() );
	};

	const isTableChanged = () => {
		const oldTable = _.find( tables, ( item ) => item.id === table.id );
		const { advanced_wp_table_data: oldTableData } = parseTableSize( oldTable );
		const { advanced_wp_table_data: newTableData } = table;
		const isEqual = _.isEqual( oldTableData, newTableData );

		return ! isEqual;
	};

	const isTitleChanged = () => {
		const oldTable = _.find( tables, ( item ) => item.id === table.id );
		const oldTitle = oldTable.title.rendered;
		const newTitle = table.title.rendered;
		const isEqual = _.isEqual( oldTitle, newTitle );

		return ! isEqual;
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
		if ( isTableChanged() || isTitleChanged() ) {
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
