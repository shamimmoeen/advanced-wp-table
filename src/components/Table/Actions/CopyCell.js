import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';

import { setCellContent } from '../../../store/reducers/globals';

const CopyCell = ( { i, j, y } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { rows } = tableData;

	const onHandleCopyCell = () => {
		const newCellContent = rows[ i ][ j ];
		dispatch( setCellContent( newCellContent ) );

		window.localStorage.setItem( 'cellContent', newCellContent );
	};

	const copyCellClasses = classNames(
		'advanced-wp-table-action-item',
		'copy-cell-btn',
		{
			'advanced-wp-table-action-item-disabled': ! y
		}
	);

	return (
		<div
			className={ copyCellClasses }
			onClick={ onHandleCopyCell }
			role="presentation"
		>
			{ __( 'Copy Cell', 'advanced-wp-table' ) }
		</div>
	);
};

export default CopyCell;
