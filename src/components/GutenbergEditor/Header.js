import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { BlockNavigationDropdown, Inserter, ToolSelector } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import Icon from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';

import { isActiveCellChanged, updateTableWithCellData } from '../../utils/table';
import { TABLE } from '../../utils/views';
import { setView } from '../../store/reducers/ui';
import {
	setIsBlocksChanged,
	setTable,
	unsetActiveCell,
	unsetIsBlocksChanged
} from '../../store/reducers/table';
import { setTableChangedDialog, unsetTableChangedDialog } from '../../store/reducers/dialogs';

const Header = () => {
	const dispatch = useDispatch();
	const tableState = useSelector( state => state.table );
	const { table, activeCell, isBlocksChanged } = tableState;

	useEffect( () => {
		if ( isActiveCellChanged( table, activeCell ) ) {
			dispatch( setIsBlocksChanged() );
		} else {
			dispatch( unsetIsBlocksChanged() );
		}
	}, [ activeCell ] );

	const onHandleSave = () => {
		const updatedTable = updateTableWithCellData( table, activeCell );

		dispatch( setTable( updatedTable ) );
		dispatch( setView( TABLE ) );
		dispatch( unsetActiveCell() );
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
					disabled={ ! isBlocksChanged }
				>
					{ __( 'Save Changes', 'advanced-wp-table' ) }
				</Button>
				<Button
					className={ 'has-icon close-btn' }
					onClick={ onHandleCloseModal }
					isDestructive
					data-testid={ 'close-btn' }
				>
					<Icon path={ mdiCloseCircle } size={ '20px' } />
				</Button>
			</div>
		</div>
	);
};

export default Header;
