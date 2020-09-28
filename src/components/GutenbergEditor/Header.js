import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { BlockNavigationDropdown, Inserter, ToolSelector } from '@wordpress/block-editor';

import { isActiveCellChanged, updateTable, updateTableWithCellData } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { TABLE } from '../../utils/views';
import { setView } from '../../store/reducers/ui';
import { setTable, unsetActiveCell } from '../../store/reducers/table';
import { setTableChangedDialog, unsetTableChangedDialog } from '../../store/reducers/dialogs';
import { setCache, setTables } from '../../store/reducers/tables';

const Header = () => {
	const dispatch = useDispatch();
	const { tables, cache } = useSelector( state => state.tables );
	const tableState = useSelector( state => state.table );
	const { table, activeCell } = tableState;

	const onHandleSave = () => {
		const oldTables = [ ...tables ];
		const updatedTable = updateTableWithCellData( table, activeCell );

		const newTables = oldTables.map( ( item ) => {
			if ( item.id === updatedTable.id ) {
				return updatedTable;
			}

			return item;
		} );

		const oldCache = [ ...cache ];

		const newCache = oldCache.map( ( item ) => {
			if ( item.id === updatedTable.id ) {
				return updatedTable;
			}

			return item;
		} );

		dispatch( setTable( updatedTable ) );
		dispatch( setTables( newTables ) );
		dispatch( setCache( newCache ) );
		dispatch( unsetActiveCell() );
		dispatch( setView( TABLE ) );

		toastSuccess( __( 'Successfully updated', 'advanced-wp-table' ) );

		// eslint-disable-next-line camelcase
		const { id, advanced_wp_table_data } = updatedTable;
		const title = updatedTable.title.rendered;

		updateTable( id, title, advanced_wp_table_data )
			.catch( () => {
				dispatch( setTable( table ) );
				dispatch( setTables( oldTables ) );
				dispatch( setCache( oldCache ) );

				toastError( __( 'Oops, there was a problem when updating the table', 'advanced-wp-table' ) );
			} );
	};

	const navigateToTable = () => {
		dispatch( setView( TABLE ) );
		dispatch( unsetActiveCell() );
	};

	const callbackCancel = () => {
		dispatch( unsetTableChangedDialog() );
	};

	const callbackLeave = () => {
		dispatch( unsetTableChangedDialog() );
		dispatch( setView( TABLE ) );
		dispatch( unsetActiveCell() );
	};

	const onHandleCloseModal = () => {
		if ( isActiveCellChanged( tables, table, activeCell ) ) {
			dispatch( setTableChangedDialog( {
				callbackCancel,
				callbackLeave,
			} ) );
		} else {
			navigateToTable();
		}
	};

	return (
		<div className={ 'advanced-wp-table-editor-header' }>
			<div className={ 'advanced-wp-table-editor-toolbar' }>
				<Inserter />
				<ToolSelector />
				<BlockNavigationDropdown />
			</div>
			<div className={ 'advanced-wp-table-editor-settings' }>
				<button
					onClick={ onHandleSave }
					className={ 'button button-primary button-large' }
				>
					{ __( 'Save Changes', 'advanced-wp-table' ) }
				</button>
				{ ` ` }
				<button onClick={ onHandleCloseModal } className={ 'button button-large' }>
					{ __( 'Close', 'advanced-wp-table' ) }
				</button>
			</div>
		</div>
	);
};

export default Header;
