import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelector } from 'react-redux';

import { setTable } from '../../../../store/reducers/table';

const AddColumn = ( { j, hideActions } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleAddColumn = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRows = [];

		tempRows.map( ( row ) => {
			const newRow = [ ...row ];
			newRow.splice( j + 1, 0, '' );
			return newRows.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const newData = { ...tableData, size: newSize, rows: newRows };
		const updatedTable = { ...table, advanced_wp_table_data: newData };

		dispatch( setTable( updatedTable ) );

		hideActions();
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleAddColumn }
			role="presentation"
		>
			{ __( 'Add Column', 'advanced-wp-table' ) }
		</div>
	);
};

export default AddColumn;
