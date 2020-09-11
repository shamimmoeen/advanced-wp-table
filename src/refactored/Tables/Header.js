import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDispatch } from 'react-redux';
import { setView } from '../../store/reducers/ui';
import { ADD_TABLE } from '../../utils/views';

const Header = () => {
	const dispatch = useDispatch();

	const onHandleNavigateToAddNewTable = () => {
		dispatch( setView( ADD_TABLE ) );
	};

	return (
		<div className={ 'advanced-wp-table-header' }>
			<div className={ 'advanced-wp-table-header-inner' }>
				<h1>{ __( 'All Tables', 'advanced-wp-table' ) }</h1>
				<button
					className={ 'button' }
					onClick={ onHandleNavigateToAddNewTable }
				>
					{ __( 'Add New', 'advanced-wp-table' ) }
				</button>
			</div>
		</div>
	);
};

export default Header;
