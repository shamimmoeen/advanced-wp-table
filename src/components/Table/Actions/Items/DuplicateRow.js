import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { setTable } from '../../../../store/reducers/table';

const DuplicateRow = ( { i, hideActions } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleDuplicateRow = () => {
		const tempSize = { ...size };
		const newRows = [ ...rows ];
		const newRowContent = newRows[ i ];
		newRows.splice( i, 0, newRowContent );

		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const newData = { ...tableData, size: newSize, rows: newRows };
		const updatedTable = { ...table, advanced_wp_table_data: newData };

		dispatch( setTable( updatedTable ) );

		hideActions();
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleDuplicateRow }
			role="presentation"
		>
			{ __( 'Duplicate Row', 'advanced-wp-table' ) }
		</div>
	);
};

export default DuplicateRow;
