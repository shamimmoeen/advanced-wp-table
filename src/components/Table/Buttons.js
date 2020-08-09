import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { StateContext } from '../App';

const Buttons = () => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleAddRow = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRow = [];

		for ( let i = 0; i < tempSize.columns; i++ ) {
			newRow.push( '' );
		}

		const newRows = [ ...tempRows, newRow ];
		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	const onHandleAddColumn = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRows = [];

		tempRows.map( ( row ) => {
			const newRow = [ ...row, '' ];
			return newRows.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	return (
		<div className={ 'advanced-wp-table-post-item-buttons' }>
			<div className={ 'button-group' }>
				<button
					className={ 'button button-small' }
					onClick={ onHandleAddRow }
				>
					{ __( 'Add Row', 'advanced-wp-table' ) }
				</button>
				<button
					className={ 'button button-small' }
					onClick={ onHandleAddColumn }
				>
					{ __( 'Add Column', 'advanced-wp-table' ) }
				</button>
			</div>
		</div>
	);
};

export default Buttons;
