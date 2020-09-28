import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';

import { updateTable, validateTable } from '../../../utils/table';
import { toastError, toastSuccess } from '../../../utils/utils';
import { setCache, setTables } from '../../../store/reducers/tables';

const SaveButton = () => {
	const dispatch = useDispatch();
	const { tables, cache } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );

	const onHandleSaveTable = () => {
		// eslint-disable-next-line camelcase
		const { id, advanced_wp_table_data } = table;
		const title = table.title.rendered;

		try {
			validateTable( { title } );
		} catch ( err ) {
			toastError( err.message );
			return;
		}

		const oldTables = [ ...tables ];

		const newTables = oldTables.map( ( item ) => {
			if ( item.id === table.id ) {
				return table;
			}

			return item;
		} );

		const oldCache = [ ...cache ];

		const newCache = oldCache.map( ( item ) => {
			if ( item.id === table.id ) {
				return table;
			}

			return item;
		} );

		dispatch( setTables( newTables ) );
		dispatch( setCache( newCache ) );
		toastSuccess( __( 'Successfully updated', 'advanced-wp-table' ) );

		updateTable( id, title, advanced_wp_table_data )
			.catch( () => {
				dispatch( setTables( oldTables ) );
				dispatch( setCache( oldCache ) );

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
