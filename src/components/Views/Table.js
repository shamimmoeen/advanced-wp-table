import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Table/Header';
import TableCell from '../Table/TableCell';
import { setIsChanged, unsetIsChanged } from '../../store/reducers/table';
import { isTableChanged } from '../../utils/table';
import useDraggableTable from '../../hooks/useDraggableTable';

const Table = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );

	const toolbarRef = useRef( null );
	const rowsEl = useRef( null );

	const [
		rowsRef,
		preview,
		rows,
		style,
		onDragStart,
		onDragEnter,
		onDragEnd,
	] = useDraggableTable( table );

	useEffect( () => {
		if ( isTableChanged( tables, table ) ) {
			dispatch( setIsChanged() );
		} else {
			dispatch( unsetIsChanged() );
		}
	}, [ table ] );

	return (
		<Fragment>
			<Header ref={ toolbarRef } />
			<table className={ 'advanced-wp-table advanced-wp-table-post-item' }>
				<tbody ref={ rowsEl }>{
					rows.map( ( x = [], i ) => (
						<tr key={ i } ref={ el => rowsRef.current[ i ] = el }>
							{ x.map( ( y, j ) => (
								<td
									className={ 'advanced-wp-table-cell' }
									key={ j }
									draggable="true"
									style={ style( i, j ) }
									onDragStart={ ( e ) => onDragStart( e, i, j ) }
									onDragEnter={ () => onDragEnter( i, j ) }
									onDragEnd={ onDragEnd }
								>
									<TableCell
										i={ i }
										j={ j }
										content={ y }
										rowsRef={ rowsRef }
										ref={ toolbarRef }
									/>
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
