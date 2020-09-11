import React from 'react';
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiTableColumnPlusAfter } from '@mdi/js';

import { setTable } from '../../../store/reducers/table';

const AddColumn = () => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleAddColumn = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRows = [];

		tempRows.map( ( row ) => {
			const newRow = [ ...row, '' ];
			return newRows.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( setTable( updatedTable ) );
	};

	return (
		<Tooltip
			text={ __( 'Click to add column at the end', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Add Column' }
				role={ 'presentation' }
				onClick={ onHandleAddColumn }
			>
				<Icon
					path={ mdiTableColumnPlusAfter }
					size={ 1 }
					color={ '#555' }
				/>
			</div>
		</Tooltip>
	);
};

export default AddColumn;
