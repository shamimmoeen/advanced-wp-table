import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import classNames from 'classnames';
import _ from 'lodash';

import { setTable } from '../../../store/reducers/table';
import { setTableChangedDialog, unsetTableChangedDialog } from '../../../store/reducers/dialogs';
import { isTableChanged } from '../../../utils/table';

const GoToPrevTable = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );
	const currentTableIndex = _.findIndex( tables, { id: table.id } );
	const prevTable = tables[ currentTableIndex - 1 ];
	const disabled = !! prevTable;

	const goToPrevTable = () => {
		dispatch( setTable( prevTable ) );
		dispatch( unsetTableChangedDialog() );
	};

	const callbackCancel = () => {
		dispatch( unsetTableChangedDialog() );
	};

	const callbackLeave = () => {
		goToPrevTable();
	};

	const onHandleGoToPrevTable = () => {
		if ( prevTable ) {
			if ( isTableChanged( tables, table ) ) {
				dispatch( setTableChangedDialog( {
					callbackCancel,
					callbackLeave,
				} ) );
			} else {
				goToPrevTable();
			}
		}
	};

	return (
		<Tooltip
			text={ __( 'Go to previous table', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				className={ classNames( { 'advanced-wp-table-button-disabled': ! disabled } ) }
				aria-label={ 'Go to previous table' }
				role={ 'presentation' }
				onClick={ onHandleGoToPrevTable }
			>
				<span className="dashicons dashicons-arrow-left-alt" />
			</div>
		</Tooltip>
	);
};

export default GoToPrevTable;
