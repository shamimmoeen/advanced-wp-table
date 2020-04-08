import _ from 'lodash';
import { getShortcode, parseTableSize, textToClipboard } from '../../utils/table';
import { toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { Fragment, useContext, useEffect, useState, useRef } = wp.element;
const { __ } = wp.i18n;
const { Tooltip } = wp.components;

const Header = () => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { rendered: title } = table.title;
	const [ elmClass, setElmClass ] = useState( '' );
	const [ isEditing, setEditing ] = useState( false );
	const headerRef = useRef( null );
	const editTitleRef = useRef( null );
	const inputRef = useRef( null );
	const navigateToListRef = useRef( null );

	let lastScroll = 0;

	const handleScroll = () => {
		// @todo I am not sure why removeEventLister not working in the useEffect hook
		if ( null === headerRef.current ) {
			window.removeEventListener( 'scroll', () => handleScroll, false );
			return;
		}

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

	const handleShortcodeCopy = () => {
		const shortcode = getShortcode( table.id );
		textToClipboard( shortcode );
		toastSuccess( __( 'Shortcode copied', 'advanced-wp-table' ) );
	};

	const handleSave = () => {
		toastSuccess( __( 'Successfully updated', 'advanced-wp-table' ) );
	};

	let elmClasses = 'advanced-wp-table-fixed-header';

	if ( elmClass ) {
		elmClasses = `advanced-wp-table-fixed-header ${ elmClass }`;
	}

	return (
		<div className={ 'advanced-wp-table-fixed-header-wrapper' }>
			<div className={ `${ elmClasses }` } ref={ headerRef }>
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
								<div
									className={ 'advanced-wp-table-edit-title-toggle' }
									role={ 'presentation' }
									onClick={ handleToggleEditTitle }
								>
									<Tooltip
										text={ __( 'Click to edit the title', 'advanced-wp-table' ) }
										position={ 'bottom center' }
									>
										<div><span className={ 'dashicons dashicons-edit' } /></div>
									</Tooltip>
								</div>
							</Fragment>
						) }
					</div>
				</div>

				<div className={ 'advanced-wp-table-header-actions' }>
					<Tooltip
						text={ __( 'Click to copy the shortcode', 'advanced-wp-table' ) }
						position={ 'bottom center' }
					>
						<div
							className={ 'advanced-wp-table-shortcode' }
							role={ 'presentation' }
							onClick={ handleShortcodeCopy }
						>
							<span className={ 'dashicons dashicons-clipboard' } />
						</div>
					</Tooltip>

					<button
						type={ 'button' }
						className={ 'button' }
					>
						{ __( 'Preview', 'advanced-wp-table' ) }
					</button>

					<button
						type={ 'button' }
						className={ 'button button-primary' }
						onClick={ handleSave }
					>
						{ __( 'Save', 'advanced-wp-table' ) }
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
