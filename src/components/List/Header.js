import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { StateContext } from '../App';

const Header = () => {
	const { dispatch } = useContext( StateContext );

	return (
		<div className={ 'advanced-wp-table-header' }>
			<div className={ 'advanced-wp-table-header-inner' }>
				<h1>{ __( 'All Tables', 'advanced-wp-table' ) }</h1>
				<button
					className={ 'button' }
					onClick={ () => dispatch( { type: 'SET_VIEW', payload: 'form' } ) }
				>
					{ __( 'Add New', 'advanced-wp-table' ) }
				</button>
			</div>
		</div>
	);
};

export default Header;
