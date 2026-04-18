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
			<a
				href={ '#/' }
				className={ 'page-title-action' }
				onClick={ ( e ) => {
					e.preventDefault();
					dispatch( { type: 'SET_VIEW', payload: 'form' } );
				} }
			>
				{ __( 'Add New', 'advanced-wp-table' ) }
			</a>
			<hr className={ 'wp-header-end' } />
		</>
	);
};

export default Header;
