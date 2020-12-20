import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { BlockNavigationDropdown, Inserter, ToolSelector } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import Icon from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';

import { isActiveCellChanged, updateTable, updateTableWithCellData } from '../../utils/table';
import { toastError } from '../../utils/utils';
import { TABLE } from '../../utils/views';
import { setView } from '../../store/reducers/ui';
import {
	setIsBlocksChanged,
	setTable,
	unsetActiveCell,
	unsetIsBlocksChanged,
	unsetIsChanged
} from '../../store/reducers/table';
import { setTableChangedDialog, unsetTableChangedDialog } from '../../store/reducers/dialogs';
import { setCache, setTables } from '../../store/reducers/tables';

const Header = () => {
	const dispatch = useDispatch();
	const { tables, cache } = useSelector( state => state.tables );
	const tableState = useSelector( state => state.table );
	const { table, activeCell, isBlocksChanged } = tableState;
	const [ btnBusy, setBtnBusy ] = useState( false );

	useEffect( () => {
		if ( isActiveCellChanged( table, activeCell ) ) {
			dispatch( setIsBlocksChanged() );
		} else {
			dispatch( unsetIsBlocksChanged() );
		}
	}, [ activeCell ] );

	const onHandleSave = () => {
		if ( btnBusy ) {
			return;
		}

		setBtnBusy( true );

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

		// eslint-disable-next-line camelcase
		const { id, advanced_wp_table_data } = updatedTable;
		const title = updatedTable.title.rendered;

		updateTable( id, title, advanced_wp_table_data )
			.then( () => {
				dispatch( setTable( updatedTable ) );
				dispatch( setTables( newTables ) );
				dispatch( setCache( newCache ) );
				dispatch( unsetIsChanged() );
				dispatch( unsetIsBlocksChanged() );
				setBtnBusy( false );
			} )
			.catch( () => {
				dispatch( setTable( table ) );
				dispatch( setTables( oldTables ) );
				dispatch( setCache( oldCache ) );
				setBtnBusy( false );

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
		if ( isActiveCellChanged( table, activeCell ) ) {
			dispatch( setTableChangedDialog( {
				callbackCancel,
				callbackLeave,
			} ) );
		} else {
			navigateToTable();
		}
	};

	let btnTitle = __( 'Save', 'advanced-wp-table' );

	if ( btnBusy ) {
		btnTitle = __( 'Saving...', 'advanced-wp-table' );
	}

	return (
		<div className={ 'advanced-wp-table-editor-header' }>
			<div className={ 'advanced-wp-table-editor-toolbar' }>
				<Inserter />
				<ToolSelector />
				<BlockNavigationDropdown />
			</div>
			<div className={ 'advanced-wp-table-editor-settings' }>
				<Button
					isPrimary
					onClick={ onHandleSave }
					isBusy={ btnBusy }
					aria-disabled={ btnBusy }
					disabled={ ! isBlocksChanged }
				>
					{ btnTitle }
				</Button>
				<Button
					className={ 'has-icon close-btn' }
					onClick={ onHandleCloseModal }
					isDestructive
					data-testid={ 'close-btn' }
					disabled={ btnBusy }
				>
					<Icon path={ mdiCloseCircle } size={ '20px' } />
				</Button>
			</div>
		</div>
	);
};

export default Header;
