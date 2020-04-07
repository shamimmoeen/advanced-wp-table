import { StateContext } from '../App';

const { Fragment, useState, useContext, useEffect, useRef } = wp.element;

const Title = () => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { rendered: title } = table.title;
	const [ isEditing, setIsEditing ] = useState( false );
	const ref = useRef( '' );

	useEffect( () => {
		return () => {
			document.removeEventListener( 'click', closeEditTitle );
		};
	}, [] );

	const closeEditTitle = ( e ) => {
		if ( ! ref.current.contains( e.target ) ) {
			setIsEditing( false );
			document.removeEventListener( 'click', closeEditTitle );
		}
	};

	const handleToggleEditTitle = () => {
		setIsEditing( true );
		document.addEventListener( 'click', closeEditTitle );
	};

	const handleChange = ( e ) => {
		const newTable = { ...table, title: { ...table.title, rendered: e.target.value } };
		dispatch( { type: 'SET_TABLE', payload: newTable } );
	};

	return (
		<div className={ 'advanced-wp-table-header-title' }>
			<div className={ 'advanced-wp-table-edit-title-wrapper' } ref={ ref }>
				{ isEditing ? (
					<input
						type="text"
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
	);
};

export default Title;
