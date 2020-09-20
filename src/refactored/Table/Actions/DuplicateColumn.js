import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { setTable } from '../../../store/reducers/table';

const DuplicateColumn = ( { j } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleDuplicateColumn = () => {
		const tempSize = { ...size };
		const newContent = [];

		rows.forEach( ( content, key ) => {
			const columnContent = content[ j ];
			const updatedRowContent = [ ...content ];
			updatedRowContent.splice( j, 0, columnContent );
			newContent[ key ] = updatedRowContent;
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newContent } };

		dispatch( setTable( updatedTable ) );
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleDuplicateColumn }
			role="presentation"
		>
			{ __( 'Duplicate Column', 'advanced-wp-table' ) }
		</div>
	);
};

export default DuplicateColumn;
