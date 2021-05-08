import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setActiveActionCell, unsetActiveActionCell } from '../../../store/reducers/table';

import Edit from './Items/Edit';
import CopyCell from './Items/CopyCell';
import PasteCell from './Items/PasteCell';
import ClearCell from './Items/ClearCell';
import AddRow from './Items/AddRow';
import AddColumn from './Items/AddColumn';
import DuplicateRow from './Items/DuplicateRow';
import DuplicateColumn from './Items/DuplicateColumn';
import DeleteRow from './Items/DeleteRow';
import DeleteColumn from './Items/DeleteColumn';
import Separator from './Items/Separator';

const Actions = ( { i, j, y } ) => {
	const { activeActionCell } = useSelector( state => state.table );
	const dispatch = useDispatch();
	const { i: _i, j: _j } = activeActionCell;
	const wrapperRef = useRef( null );

	const showActions = () => {
		dispatch( setActiveActionCell( { i, j } ) );
		document.getElementById( 'wpwrap' )
			.addEventListener( 'click', hideActionsOnClickOutside );
		document.getElementById( 'advanced-wp-table-wrapper' )
			.addEventListener( 'keyup', bal );
	}

	const hideActions = () => {
		dispatch( unsetActiveActionCell() );
		document.getElementById( 'wpwrap' )
			.removeEventListener( 'click', hideActionsOnClickOutside );
		document.getElementById( 'advanced-wp-table-wrapper' )
			.removeEventListener( 'keyup', bal );
	}

	const hideActionsOnClickOutside = ( e ) => {
		console.log( 'registered' );

		if ( ! wrapperRef.current.contains( e.target ) ) {
			hideActions();
		}
	}

	const bal = ( e ) => {
		console.log( 'bal registered' )
		// if ( e.key === 'Escape' ) {
		// 	hideActions();
		// }
	}

	const forceHideActions = () => {
	}

	let wrapperClasses = 'advanced-wp-table-cell-actions';
	let button = <span
		onClick={ showActions }
		className={ 'dashicons dashicons-ellipsis advanced-wp-table-edit-cell' }
	/>;
	let items = '';

	if ( _i === i && _j === j ) {
		wrapperClasses = 'advanced-wp-table-cell-actions show-cell-actions';

		button = <span
			onClick={ forceHideActions }
			className={ 'dashicons dashicons-ellipsis advanced-wp-table-edit-cell' }
		/>;

		items = (
			<div className={ 'advanced-wp-table-actions-dropdown' }>
				<div className={ 'advanced-wp-table-actions-dropdown-inner' }>
					<Edit i={ i } j={ j } hideActions={ hideActions } />
					<Separator />
					<CopyCell i={ i } j={ j } y={ y } hideActions={ hideActions } />
					<PasteCell i={ i } j={ j } hideActions={ hideActions } />
					<ClearCell i={ i } j={ j } y={ y } hideActions={ hideActions } />
					<Separator />
					<AddRow i={ i } hideActions={ hideActions } />
					<AddColumn j={ j } hideActions={ hideActions } />
					<Separator />
					<DuplicateRow i={ i } hideActions={ hideActions } />
					<DuplicateColumn j={ j } hideActions={ hideActions } />
					<Separator />
					<DeleteRow i={ i } hideActions={ hideActions } />
					<DeleteColumn j={ j } hideActions={ hideActions } />
				</div>
			</div>
		);
	}

	return (
		<div className={ wrapperClasses } ref={ wrapperRef }>
			{ button }
			{ items }
		</div>
	);
};

export default Actions;
