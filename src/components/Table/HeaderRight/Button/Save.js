import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import _ from 'lodash';

import { updateTable, validateTable } from '../../../../utils/table';
import { toastError } from '../../../../utils/utils';
import { setCache, setTables } from '../../../../store/reducers/tables';
import { Button } from '@wordpress/components';

const Save = () => {
	const dispatch = useDispatch();
	const { tables, cache } = useSelector( state => state.tables );
	const { table } = useSelector( state => state.table );
	const [ btnBusy, setBtnBusy ] = useState( false );

	const onHandleSaveTable = () => {
		if ( btnBusy ) {
			return;
		}

		const { id, advanced_wp_table_data: tableData } = table;
		let { type } = tableData;
		const title = table.title.rendered;

		if ( _.isNil( type ) ) {
			type = 'layout';
		}

		try {
			validateTable( { title, type } );
		} catch ( err ) {
			toastError( err.message );
			return;
		}

		setBtnBusy( true );

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

		updateTable( id, title, tableData )
			.then( () => setBtnBusy( false ) )
			.catch( () => {
				dispatch( setTables( oldTables ) );
				dispatch( setCache( oldCache ) );
				setBtnBusy( false );

				toastError( __( 'Oops, there was a problem when updating the table', 'advanced-wp-table' ) );
			} );
	};

	let btnTitle = __( 'Save', 'advanced-wp-table' );

	if ( btnBusy ) {
		btnTitle = __( 'Saving...', 'advanced-wp-table' );
	}

	return (
		<Button
			isPrimary
			onClick={ onHandleSaveTable }
			isBusy={ btnBusy }
			aria-disabled={ btnBusy }
		>
			{ btnTitle }
		</Button>
	);
};

export default Save;
