import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { dismissToasts } from '../../../utils/utils';
import { StateContext } from '../../App';
import Edit from './Edit';

const Actions = ( { i, j } ) => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleOpenEditor = () => {
		dismissToasts();
		let content = rows[ i ][ j ];
		// @todo Parse content only if gutenberg active.
		content = wp.blocks.parse( content );
		const activeCell = { i, j, content };
		dispatch( { type: 'SET_ACTIVE_CELL', payload: activeCell } );
		dispatch( { type: 'SET_VIEW', payload: 'editCellModal' } );
	};

	const onHandleDeleteColumn = () => {
		const tempSize = { ...size };
		const newRows = rows.map( ( row ) => row.filter( ( column, index ) => index !== j ) );

		const newSize = { ...tempSize, columns: tempSize.columns - 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	const onHandleDeleteRow = () => {
		const tempSize = { ...size };
		const newRows = rows.filter( ( row, index ) => index !== i );

		const newSize = { ...tempSize, rows: tempSize.rows - 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	const onHandleDuplicateRow = () => {
		const tempSize = { ...size };
		const newRows = [ ...rows ];
		const newRowContent = newRows[ i ];
		newRows.splice( i + 0, 0, newRowContent );

		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	return (
		<div className={ 'advanced-wp-table-cell-actions' }>
			<span className={ 'dashicons dashicons-admin-generic advanced-wp-table-edit-cell' } />
			<div className="advanced-wp-table-actions-dropdown">
				<div className="advanced-wp-table-actions-dropdown-inner">
					<Edit i={ i } j={ j } />
					<div
						className="advanced-wp-table-action-item"
						onClick={ onHandleOpenEditor }
						role="presentation"
					>
						{ __( 'Copy Cell', 'advanced-wp-table' ) }
					</div>
					<div
						className="advanced-wp-table-action-item"
						onClick={ onHandleOpenEditor }
						role="presentation"
					>
						{ __( 'Paste Cell', 'advanced-wp-table' ) }
					</div>
					<div
						className="advanced-wp-table-action-item"
						onClick={ onHandleDeleteColumn }
						role="presentation"
					>
						{ __( 'Delete Column', 'advanced-wp-table' ) }
					</div>
					<div
						className="advanced-wp-table-action-item"
						onClick={ onHandleDeleteRow }
						role="presentation"
					>
						{ __( 'Delete Row', 'advanced-wp-table' ) }
					</div>
					<div
						className="advanced-wp-table-action-item"
						onClick={ onHandleDuplicateRow }
						role="presentation"
					>
						{ __( 'Duplicate Row', 'advanced-wp-table' ) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default Actions;
