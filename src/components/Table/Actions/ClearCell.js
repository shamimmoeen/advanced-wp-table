import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

import { setTable } from '../../../store/reducers/table';

const ClearCell = ( { i, j, y } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleClearCell = () => {
		if ( ! y ) {
			return;
		}

		const newRows = [ ...rows ];

		const newRowsAfterClearCell = newRows.map( ( rowContent, rowIndex ) => {
			return rowContent.map( ( oldCellContent, cellIndex ) => {
				if ( rowIndex === i && cellIndex === j ) {
					return '';
				}

				return oldCellContent;
			} );
		} );

		const updatedTable = { ...table, advanced_wp_table_data: { size, rows: newRowsAfterClearCell } };

		dispatch( setTable( updatedTable ) );
	};

	const clearCellClasses = classNames(
		'advanced-wp-table-action-item',
		'clear-cell-btn',
		{
			'advanced-wp-table-action-item-disabled': ! y
		}
	);

	return (
		<div
			className={ clearCellClasses }
			onClick={ onHandleClearCell }
			role="presentation"
		>
			{ __( 'Clear Cell', 'advanced-wp-table' ) }
		</div>
	);
};

export default ClearCell;
