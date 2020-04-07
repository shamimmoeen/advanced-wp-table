import _ from 'lodash';
import { getShortcode, handleShortcodeCopy, parseTableSize } from '../../utils/table';
import { StateContext } from '../App';

const { Fragment, useContext, useEffect, useState, useRef } = wp.element;
const { __ } = wp.i18n;

const Header = () => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { rendered: title } = table.title;
	const [ elmClass, setElmClass ] = useState( '' );
	const [ isEditing, setEditing ] = useState( false );
	const editTitleRef = useRef( null );
	const inputRef = useRef( null );
	const navigateToListRef = useRef( null );

	let lastScroll = 0;

	const handleScroll = () => {
		const currentScroll = window.pageYOffset;

		if ( 0 === currentScroll ) {
			setElmClass( '' );
			return;
		}

		if ( currentScroll > lastScroll && elmClass !== 'no-sticky' ) {
			setElmClass( 'no-sticky' );
		} else if ( currentScroll < lastScroll && elmClass !== 'sticky' ) {
			setElmClass( 'sticky' );
		}

		lastScroll = currentScroll;
	};

	useEffect( () => {
		window.addEventListener( 'scroll', handleScroll );

		return () => {
			window.removeEventListener( 'scroll', () => handleScroll );
		};
	}, [] );

	useEffect( () => {
		if ( isEditing ) {
			inputRef.current.focus();
		}
	}, [ isEditing ] );

	const closeEditTitle = ( e ) => {
		if ( null === editTitleRef.current ) {
			document.getElementById( 'wpwrap' ).removeEventListener( 'click', closeEditTitle );
			return;
		}

		if ( navigateToListRef.current === e.target ) {
			return;
		}

		if ( ! editTitleRef.current.contains( e.target ) ) {
			setEditing( false );
			document.getElementById( 'wpwrap' ).removeEventListener( 'click', closeEditTitle );
		}
	};

	const handleToggleEditTitle = () => {
		setEditing( true );
		document.getElementById( 'wpwrap' ).addEventListener( 'click', closeEditTitle );
	};

	const handleChange = ( e ) => {
		const newTable = { ...table, title: { ...table.title, rendered: e.target.value } };
		dispatch( { type: 'SET_TABLE', payload: newTable } );
	};

	const navigateToList = () => {
		dispatch( { type: 'UNSET_TABLE' } );
		dispatch( { type: 'SET_VIEW', payload: 'list' } );
	};

	const isTableChanged = () => {
		const oldTable = _.find( state.tables, ( item ) => item.id === table.id );
		const { advanced_wp_table_data: oldTableData } = parseTableSize( oldTable );
		const { advanced_wp_table_data: newTableData } = table;
		const isEqual = _.isEqual( oldTableData, newTableData );

		return ! isEqual;
	};

	const isTitleChanged = () => {
		const oldTable = _.find( state.tables, ( item ) => item.id === table.id );
		const oldTitle = oldTable.title.rendered;
		const newTitle = table.title.rendered;
		const isEqual = _.isEqual( oldTitle, newTitle );

		return ! isEqual;
	};

	const onHandleNavigateToList = () => {
		if ( isTableChanged() || isTitleChanged() ) {
			dispatch( {
				type: 'SET_TABLE_CHANGED_DIALOG',
				payload: {
					status: true,
					callbackLeave: navigateToList,
				},
			} );
		} else {
			navigateToList();
		}
	};

	let elmClasses = 'advanced-wp-table-fixed-header';

	if ( elmClass ) {
		elmClasses = `advanced-wp-table-fixed-header ${ elmClass }`;
	}

	return (
		<div className={ 'advanced-wp-table-fixed-header-wrapper' }>
			<div className={ `${ elmClasses }` }>
				<div className={ 'advanced-wp-table-header-navigate-to-list' }>
					<button
						className={ 'button' }
						ref={ navigateToListRef }
						onClick={ onHandleNavigateToList }
					>
						<span className={ 'dashicons dashicons-controls-back' } />
						{ __( 'Back to Tables', 'advanced-wp-table' ) }
					</button>
				</div>

				<div className={ 'advanced-wp-table-header-title' }>
					<div className={ 'advanced-wp-table-edit-title-wrapper' } ref={ editTitleRef }>
						{ isEditing ? (
							<input
								type="text"
								ref={ inputRef }
								value={ title }
								onChange={ handleChange }
							/>
						) : (
							<Fragment>
								<h1 className={ 'advanced-wp-table-title' }>{ title }</h1>
								<span
									className={ 'advanced-wp-table-edit-title-toggle' }
									role={ 'presentation' }
									onClick={ handleToggleEditTitle }
								>
									<span className={ 'dashicons dashicons-edit' } />
								</span>
							</Fragment>
						) }
					</div>
				</div>

				<div className={ 'advanced-wp-table-header-actions' }>
					<input
						type="text"
						className={ 'advanced-wp-table-shortcode' }
						value={ getShortcode( table.id ) }
						onClick={ handleShortcodeCopy }
						readOnly={ true }
					/>

					<button
						type={ 'button' }
						className={ 'button' }
					>
						{ __( 'Preview', 'advanced-wp-table' ) }
					</button>

					<button
						type={ 'button' }
						className={ 'button button-primary' }
					>
						{ __( 'Save Changes', 'advanced-wp-table' ) }
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
