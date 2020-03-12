const { useRef, useState, Fragment } = wp.element;
import '../App.scss';
import Actions from './Actions';

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

const Table = ( props ) => {
	let { rows = [] } = props;
	const { onDragEnd, onHandleOpenModal, onHandleDeleteColumn, onHandleDeleteRow } = props;
	const [ dragState, setDragState ] = useState( { ...defaultDragState } );
	const rowsEl = useRef( null ),
		preview = useRef( null );

	if ( dragState.direction === DRAG_DIRECTION_COLUMN ) {
		rows = rows.map( ( x ) => offsetIndex( dragState.column, dragState.dropIndex, x ) );
	}

	if ( dragState.direction === DRAG_DIRECTION_ROW ) {
		rows = offsetIndex( dragState.row, dragState.dropIndex, rows );
	}

	function setOpacity( i, j ) {
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
	}

	function offsetIndex( from, to, arr = [] ) {
		if ( from < to ) {
			const start = arr.slice( 0, from ),
				between = arr.slice( from + 1, to + 1 ),
				end = arr.slice( to + 1 );
			return [ ...start, ...between, arr[ from ], ...end ];
		}
		if ( from > to ) {
			const start = arr.slice( 0, to ),
				between = arr.slice( to, from ),
				end = arr.slice( from + 1 );
			return [ ...start, arr[ from ], ...between, ...end ];
		}
		return arr;
	}

	function createMarkup( html ) {
		return { __html: html };
	}

	return (
		<Fragment>
			<table className={ 'advanced-wp-table advanced-wp-table-post-item' }>
				<tbody ref={ rowsEl }>{
					rows.map( ( x = [], i ) => (
						<tr key={ i }>
							{ x.map( ( y, j ) => (
								<td
									key={ j }
									style={ {
										border: '1px solid black',
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
										onDragEnd(
											dragState.direction,
											dragState.direction === DRAG_DIRECTION_COLUMN ?
												dragState.column :
												dragState.row,
											dragState.dropIndex,
											rows,
										);
										setDragState( { ...defaultDragState } );
									} }
								>
									<div className={ 'advanced-wp-table-cell-wrapper' }>
										<div
											className={ 'advanced-wp-table-cell-content' }
											dangerouslySetInnerHTML={ createMarkup( y ) }
										/>
										<Actions
											onHandleOpenModal={ onHandleOpenModal }
											onHandleDeleteColumn={ onHandleDeleteColumn }
											onHandleDeleteRow={ onHandleDeleteRow }
											x={ x }
											y={ y }
											i={ i }
											j={ j }
										/>
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
