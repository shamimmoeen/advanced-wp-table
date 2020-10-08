import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { setTable } from '../../../store/reducers/table';

const DeleteRow = ( { i } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleDeleteRow = () => {
		const tempSize = { ...size };
		const newRows = rows.filter( ( row, index ) => index !== i );

		const newSize = { ...tempSize, rows: tempSize.rows - 1 };
		const newData = { ...tableData, size: newSize, rows: newRows };
		const updatedTable = { ...table, advanced_wp_table_data: newData };

		dispatch( setTable( updatedTable ) );
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleDeleteRow }
			role="presentation"
		>
			{ __( 'Delete Row', 'advanced-wp-table' ) }
		</div>
	);
};

export default DeleteRow;
