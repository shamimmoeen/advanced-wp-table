import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { setTable } from '../../../store/reducers/table';

const DeleteColumn = ( { j } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleDeleteColumn = () => {
		const tempSize = { ...size };
		const newRows = rows.map( ( row ) => row.filter( ( column, index ) => index !== j ) );

		const newSize = { ...tempSize, columns: tempSize.columns - 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( setTable( updatedTable ) );
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleDeleteColumn }
			role="presentation"
		>
			{ __( 'Delete Column', 'advanced-wp-table' ) }
		</div>
	);
};

export default DeleteColumn;
