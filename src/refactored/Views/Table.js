import React, { useState, useRef, Fragment } from 'react';
import { offsetIndex } from '../../utils/utils';
import Actions from '../Table/Actions/';
import Header from '../Table/Header';
import TableCell from '../Table/TableCell';
import { useDispatch, useSelector } from 'react-redux';

// tell direction after drag start, the first direction that reach 5px offset
const DRAG_DIRECTION_NONE = '';
const DRAG_DIRECTION_ROW = 'row';
const DRAG_DIRECTION_COLUMN = 'column';

const defaultDragState = {
	column: -1,
	row: -1,
	startPoint: null,
	direction: DRAG_DIRECTION_NONE, // row=move up down/column=move left right,
	dropIndex: -1, // drag target
};

const Table = () => {
	const tableState = useSelector( state => state.table );
	const dispatch = useDispatch();

	let { rows = [] } = tableState.table.advanced_wp_table_data;

	const [ dragState, setDragState ] = useState( { ...defaultDragState } );
	const rowsEl = useRef( null ),
		preview = useRef( null );

	if ( dragState.direction === DRAG_DIRECTION_COLUMN ) {
		rows = rows.map( ( x ) => offsetIndex( dragState.column, dragState.dropIndex, x ) );
	}

	if ( dragState.direction === DRAG_DIRECTION_ROW ) {
		rows = offsetIndex( dragState.row, dragState.dropIndex, rows );
	}

	const setOpacity = ( i, j ) => {
		let opacity = null;
		const { direction, dropIndex } = dragState;

		if ( DRAG_DIRECTION_COLUMN === direction ) {
			if ( j === dropIndex ) {
				opacity = 0.5;
			} else {
				opacity = 1;
			}
		}

		if ( DRAG_DIRECTION_ROW === direction ) {
			if ( i === dropIndex ) {
				opacity = 0.5;
			} else {
				opacity = 1;
			}
		}

		return opacity;
	};

	return (
		<Fragment>
			<Header />
			<table className={ 'advanced-wp-table advanced-wp-table-post-item' }>
				<tbody ref={ rowsEl }>{
					rows.map( ( x = [], i ) => (
						<tr key={ i }>
							{ x.map( ( y, j ) => (
								<td
									key={ j }
									style={ {
										cursor: dragState.direction ? 'move' : 'grab',
										opacity: setOpacity( i, j ),
									} }
									draggable="true"
									onDragStart={ ( e ) => {
										e.dataTransfer.setDragImage( preview.current, 0, 0 );
										setDragState( {
											...dragState,
											row: i,
											column: j,
											startPoint: {
												x: e.pageX,
												y: e.pageY,
											},
										} );
									} }
									onDragEnter={ () => {
										if ( ! dragState.direction ) {
											if ( dragState.column !== j ) {
												setDragState( {
													...dragState,
													direction: DRAG_DIRECTION_COLUMN,
													dropIndex: j,
												} );
												return;
											}
											if ( dragState.row !== i ) {
												setDragState( {
													...dragState,
													direction: DRAG_DIRECTION_ROW,
													dropIndex: i,
												} );
												return;
											}
											return;
										}

										if ( dragState.direction === DRAG_DIRECTION_COLUMN ) {
											if ( j !== dragState.dropIndex ) {
												setDragState( {
													...dragState,
													dropIndex: j,
												} );
											}
											return;
										}
										if ( dragState.direction === DRAG_DIRECTION_ROW ) {
											if ( i !== dragState.dropIndex ) {
												setDragState( {
													...dragState,
													dropIndex: i,
												} );
											}
										}
									} }
									onDragEnd={ () => {
										dispatch( { type: 'ON_DRAG_END_TABLE', payload: rows } );
										setDragState( { ...defaultDragState } );
									} }
								>
									<div className={ 'advanced-wp-table-cell-wrapper' }>
										<TableCell content={ y } />
										<Actions i={ i } j={ j } y={ y } />
									</div>
								</td>
							) ) }
						</tr>
					) )
				}</tbody>
			</table>
			<div
				ref={ preview }
				style={ {
					position: 'absolute',
					width: 0,
					height: 0,
					overflow: 'hidden',
				} }
			/>
		</Fragment>
	);
};

export default Table;
