import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Tooltip } from '@wordpress/components';
import _ from 'lodash';

import { setTable } from '../../../store/reducers/table';
import { setTableChangedDialog, unsetTableChangedDialog } from '../../../store/reducers/dialogs';
import { isTableChanged } from '../../../utils/table';

const GoToNextTable = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );
	const currentTableIndex = _.findIndex( tables, { id: table.id } );
	const nextTable = tables[ currentTableIndex + 1 ];
	const enabled = !! nextTable;

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
			if ( isTableChanged( tables, table ) ) {
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
			<Button disabled={ ! enabled } onClick={ onHandleGoToNextTable }>
				<Dashicon icon={ 'arrow-right-alt' } />
			</Button>
		</Tooltip>
	);
};

export default GoToNextTable;
