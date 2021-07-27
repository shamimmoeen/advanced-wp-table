import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { offsetIndex } from '../utils/utils';
import { setTable } from '../store/reducers/table';

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

const useDraggableTable = ( table ) => {
	const dispatch = useDispatch();
	const { advanced_wp_table_data: tableData } = table;

	let { rows = [] } = tableData;

	const [ dragState, setDragState ] = useState( { ...defaultDragState } );

	const rowsRef = useRef( [] ),
		previewRef = useRef( null );

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

	// https://stackoverflow.com/a/56063129/2647905
	useEffect( () => {
		rowsRef.current = rowsRef.current.slice( 0, rows.length );
	}, [ rows ] );

	const updateRows = ( newRows ) => {
		const updatedTable = {
			...table,
			advanced_wp_table_data: {
				...table.advanced_wp_table_data,
				rows: newRows
			}
		};

		dispatch( setTable( updatedTable ) );
	};

	const style = ( i, j ) => {
		return {
			cursor: dragState.direction ? 'move' : 'initial',
			opacity: setOpacity( i, j ),
		}
	}

	const onDragStart = ( e, i, j ) => {
		e.dataTransfer.setDragImage( previewRef.current, 0, 0 );
		// noinspection JSCheckFunctionSignatures
		setDragState( {
			...dragState,
			row: i,
			column: j,
			startPoint: {
				x: e.pageX,
				y: e.pageY,
			},
		} );
	}

	const onDragEnter = ( i, j ) => {
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
	}

	const onDragEnd = () => {
		updateRows( rows );
		setDragState( { ...defaultDragState } );
	}

	const preview = (
		<div
			ref={ previewRef }
			style={ {
				position: 'absolute',
				width: 0,
				height: 0,
				overflow: 'hidden',
			} }
		/>
	);

	return [
		rowsRef,
		rows,
		style,
		onDragStart,
		onDragEnter,
		onDragEnd,
		preview,
	];
}

export default useDraggableTable;
