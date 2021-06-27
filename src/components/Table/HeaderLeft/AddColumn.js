import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Tooltip } from '@wordpress/components';
import { useDispatch, useSelector } from 'react-redux';

import { setTable } from '../../../store/reducers/table';

const AddColumn = () => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;
	const enabled = !! size.rows;

	const onHandleAddColumn = () => {
		if ( ! size.rows ) {
			return;
		}

		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRows = [];

		tempRows.map( ( row ) => {
			const newRow = [ ...row, '' ];
			return newRows.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const newData = { ...tableData, size: newSize, rows: newRows };
		const updatedTable = { ...table, advanced_wp_table_data: newData };

		dispatch( setTable( updatedTable ) );
	};

	return (
		<Tooltip
			text={ __( 'Add column', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<Button disabled={ ! enabled } onClick={ onHandleAddColumn }>
				<Dashicon icon={ 'table-col-before' } />
			</Button>
		</Tooltip>
	);
};

export default AddColumn;
