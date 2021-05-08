import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { setTable } from '../../../../store/reducers/table';
import classNames from 'classnames';

const PasteCell = ( { i, j, hideActions } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { cellContent } = useSelector( state => state.globals );
	const { advanced_wp_table_data: tableData } = table;
	const { rows } = tableData;

	const onHandlePasteCell = () => {
		if ( ! cellContent ) {
			return;
		}

		const newRows = [ ...rows ];

		const withCellContent = newRows.map( ( rowContent, rowIndex ) => {
			return rowContent.map( ( oldCellContent, cellIndex ) => {
				if ( rowIndex === i && cellIndex === j ) {
					return cellContent;
				}

				return oldCellContent;
			} );
		} );

		const newData = { ...tableData, rows: withCellContent };
		const updatedTable = { ...table, advanced_wp_table_data: newData };

		dispatch( setTable( updatedTable ) );

		hideActions();
	};

	const pasteCellClasses = classNames(
		'advanced-wp-table-action-item',
		'paste-cell-btn',
		{
			'advanced-wp-table-action-item-disabled': ! cellContent
		}
	);

	return (
		<div
			className={ pasteCellClasses }
			onClick={ onHandlePasteCell }
			role="presentation"
		>
			{ __( 'Paste Cell', 'advanced-wp-table' ) }
		</div>
	);
};

export default PasteCell;
