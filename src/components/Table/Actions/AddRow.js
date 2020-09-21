import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelector } from 'react-redux';

import { setTable } from '../../../store/reducers/table';

const AddRow = ( { i } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleAddRow = () => {
		const tempSize = { ...size };
		const newRows = [ ...rows ];
		const newRow = [];

		for ( let increment = 0; increment < tempSize.columns; increment++ ) {
			newRow.push( '' );
		}

		newRows.splice( i + 1, 0, newRow );
		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( setTable( updatedTable ) );
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleAddRow }
			role="presentation"
		>
			{ __( 'Add Row', 'advanced-wp-table' ) }
		</div>
	);
};

export default AddRow;
