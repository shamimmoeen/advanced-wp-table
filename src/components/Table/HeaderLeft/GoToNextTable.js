import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import _ from 'lodash';
import classNames from 'classnames';

import { setTable } from '../../../store/reducers/table';
import { setTableChangedDialog, unsetTableChangedDialog } from '../../../store/reducers/dialogs';
import { isTableChanged, isTitleChanged } from '../../../utils/table';

const GoToNextTable = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );
	const currentTableIndex = _.findIndex( tables, { id: table.id } );
	const nextTable = tables[ currentTableIndex + 1 ];
	const disabled = !! nextTable;

	const goToNextTable = () => {
		dispatch( setTable( nextTable ) );
		dispatch( unsetTableChangedDialog() );
	};

	const callbackCancel = () => {
		dispatch( unsetTableChangedDialog() );
	};

	const callbackLeave = () => {
		goToNextTable();
	};

	const onHandleGoToNextTable = () => {
		if ( nextTable ) {
			if ( isTableChanged( tables, table ) || isTitleChanged( tables, table ) ) {
				dispatch( setTableChangedDialog( {
					callbackCancel,
					callbackLeave,
				} ) );
			} else {
				goToNextTable();
			}
		}
	};

	return (
		<Tooltip
			text={ __( 'Go to next table', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				className={ classNames( { 'advanced-wp-table-button-disabled': ! disabled } ) }
				aria-label={ 'Go to next table' }
				role={ 'presentation' }
				onClick={ onHandleGoToNextTable }
			>
				<span className="dashicons dashicons-arrow-right-alt" />
			</div>
		</Tooltip>
	);
};

export default GoToNextTable;
