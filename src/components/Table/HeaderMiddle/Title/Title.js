import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { setTable } from '../../../../store/reducers/table';

const Title = () => {
	const dispatch = useDispatch();
	const tableState = useSelector( state => state.table );
	const { table } = tableState;
	const { rendered: title } = table.title;
	const [ isEditing, setEditing ] = useState( false );
	const editTitleRef = useRef( null );
	const inputRef = useRef( null );

	useEffect( () => {
		if ( isEditing ) {
			// noinspection JSUnresolvedFunction
			inputRef.current.focus();
		}
	}, [ isEditing ] );

	const closeEditTitle = ( e ) => {
		// noinspection JSUnresolvedFunction
		if ( ! editTitleRef.current.contains( e.target ) ) {
			unregisterEvents();
		}
	};

	const closeEditTitleFromEscEnterPress = ( e ) => {
		if ( e.key === 'Escape' || e.key === 'Enter' ) {
			unregisterEvents();
		}
	};

	const unregisterEvents = () => {
		setEditing( false );
		document.getElementById( 'wpwrap' )
			.removeEventListener( 'click', closeEditTitle );
		document.getElementById( 'wpwrap' )
			.removeEventListener( 'keyup', closeEditTitleFromEscEnterPress );
	};

	const registerEvents = () => {
		setEditing( true );
		document.getElementById( 'wpwrap' )
			.addEventListener( 'click', closeEditTitle );
		document.getElementById( 'wpwrap' )
			.addEventListener( 'keyup', closeEditTitleFromEscEnterPress );
	};

	const handleToggleEditTitle = () => {
		registerEvents();
	};

	const handleChange = ( e ) => {
		const newTable = { ...table, title: { ...table.title, rendered: e.target.value } };
		dispatch( setTable( newTable ) );
	};

	return (
		<div className={ 'advanced-wp-table-edit-title-wrapper' } ref={ editTitleRef }>
			{ isEditing ? (
				<input
					type="text"
					ref={ inputRef }
					value={ title }
					onChange={ handleChange }
					aria-label={ 'table-title' }
				/>
			) : (
				<Fragment>
					<h1
						className={ 'advanced-wp-table-title' }
						onDoubleClick={ handleToggleEditTitle }
					>
						{ title }
					</h1>
					<div
						className={ 'advanced-wp-table-edit-title-toggle' }
						role={ 'presentation' }
						onClick={ handleToggleEditTitle }
						data-testid={ 'toggle-edit-mode' }
					>
						<Tooltip
							text={ __( 'Edit the title', 'advanced-wp-table' ) }
							position={ 'bottom center' }
						>
							<div><span className={ 'dashicons dashicons-edit' } /></div>
						</Tooltip>
					</div>
				</Fragment>
			) }
		</div>
	);
};

export default Title;
