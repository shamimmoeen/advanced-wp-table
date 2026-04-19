import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Header = () => {
	const { dispatch } = useContext( StateContext );

	return (
		<>
			<h1 className={ 'wp-heading-inline' }>
				{ __( 'All Tables', 'advanced-wp-table' ) }
			</h1>
			{ ' ' }
			<button
				type={ 'button' }
				className={ 'page-title-action' }
				aria-label={ __( 'Add new table', 'advanced-wp-table' ) }
				aria-haspopup={ 'dialog' }
				onClick={ () => dispatch( { type: 'SET_NEW_TABLE_DIALOG' } ) }
			>
				{ __( 'Add New', 'advanced-wp-table' ) }
			</button>
			<hr className={ 'wp-header-end' } />
		</>
	);
};

export default Header;
