import React, { useRef, useState } from 'react';

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
	const [ open, setOpen ] = useState( false );

	const wrapperRef = useRef( null );
	const buttonRef = useRef( null );

	const showActions = () => {
		setOpen( true );

		document.getElementById( 'wpwrap' )
			.addEventListener( 'click', hideActionsOnClickOutside );
		document.getElementById( 'wpwrap' )
			.addEventListener( 'keyup', hideActionsOnEscPress );
	}

	const hideActions = () => {
		setOpen( false );

		document.getElementById( 'wpwrap' )
			.removeEventListener( 'click', hideActionsOnClickOutside );
		document.getElementById( 'wpwrap' )
			.removeEventListener( 'keyup', hideActionsOnEscPress );
	}

	const hideActionsOnClickOutside = ( e ) => {
		console.log( 'registered' );

		if ( buttonRef.current.contains( e.target ) ) {
			e.stopPropagation();
		}

		if ( ! wrapperRef.current.contains( e.target ) ) {
			hideActions();
		}
	}

	const hideActionsOnEscPress = ( e ) => {
		console.log( 'esc registered' );

		if ( e.key === 'Escape' ) {
			hideActions();
		}
	}

	let wrapperClasses = 'advanced-wp-table-cell-actions';
	let items = '';

	if ( open ) {
		wrapperClasses = 'advanced-wp-table-cell-actions show-cell-actions';

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
		<div className={ wrapperClasses }>
			<span
				onClick={ showActions }
				className={ 'dashicons dashicons-ellipsis advanced-wp-table-edit-cell' }
				ref={ buttonRef }
				tabIndex={ '0' }
			/>

			<div ref={ wrapperRef }>
				{ items }
			</div>
		</div>
	);
};

export default Actions;
