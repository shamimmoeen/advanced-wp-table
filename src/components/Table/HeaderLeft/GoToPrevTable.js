import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Tooltip } from '@wordpress/components';
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
	const enabled = !! prevTable;

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
			<Button disabled={ ! enabled } onClick={ onHandleGoToPrevTable }>
				<Dashicon icon={ 'arrow-left-alt' } />
			</Button>
		</Tooltip>
	);
};

export default GoToPrevTable;
