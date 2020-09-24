import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelector } from 'react-redux';

import { setTable } from '../../../store/reducers/table';

const AddRow = () => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleAddRow = () => {
		const tempSize = { ...size };
		const columnSize = tempSize.columns ? tempSize.columns : 1;
		const tempRows = [ ...rows ];
		const newRow = [];

		for ( let i = 0; i < columnSize; i++ ) {
			newRow.push( '' );
		}

		const newRows = [ ...tempRows, newRow ];
		const newSize = { ...tempSize, rows: tempSize.rows + 1, columns: columnSize };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( setTable( updatedTable ) );
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
			</div>
		</Tooltip>
	);
};

export default AddRow;
