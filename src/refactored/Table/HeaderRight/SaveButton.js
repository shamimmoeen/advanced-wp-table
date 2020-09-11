import React from 'react';
import { __ } from '@wordpress/i18n';
import { updateTable } from '../../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setTables } from '../../../store/reducers/tables';

const SaveButton = () => {
	const dispatch = useDispatch();
	const { tables } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );

	const onHandleSaveTable = () => {
		const oldTables = [ ...tables ];

		const newTables = oldTables.map( ( item ) => {
			if ( item.id === table.id ) {
				return table;
			}

			return item;
		} );

		dispatch( setTables( newTables ) );
		toastSuccess( __( 'Successfully updated', 'advanced-wp-table' ) );

		// eslint-disable-next-line camelcase
		const { id, advanced_wp_table_data } = table;
		const title = table.title.rendered;

		updateTable( id, title, advanced_wp_table_data )
			.catch( () => {
				dismissToasts();
				dispatch( setTables( oldTables ) );
				toastError( __( 'Oops, there was a problem when updating the table', 'advanced-wp-table' ) );
			} );
	};

	return (
		<button
			type={ 'button' }
			className={ 'button button-primary' }
			onClick={ onHandleSaveTable }
		>
			{ __( 'Save', 'advanced-wp-table' ) }
		</button>
	);
};

export default SaveButton;
