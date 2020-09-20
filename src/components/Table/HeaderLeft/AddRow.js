import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiTableColumnPlusAfter } from '@mdi/js';

import { setTable } from '../../../store/reducers/table';

const AddRow = () => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleAddRow = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRow = [];

		for ( let i = 0; i < tempSize.columns; i++ ) {
			newRow.push( '' );
		}

		const newRows = [ ...tempRows, newRow ];
		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( setTable( updatedTable ) );
		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	return (
		<Tooltip
			text={ __( 'Click to add row at the end', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Add Row' }
				role={ 'presentation' }
				onClick={ onHandleAddRow }
			>
				<span className="dashicons dashicons-table-row-before" />
				{ /*<Icon path={ mdiTableColumnPlusAfter } size={ 1 } rotate={ 90 } color={ '#555' } />*/ }
			</div>
		</Tooltip>
	);
};

export default AddRow;
