import { Inserter, BlockNavigationDropdown, ToolSelector } from '@wordpress/block-editor';
import _ from 'lodash';
import { parseTableSize, updateTable, updateTableWithCellData } from '../../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../../utils/utils';
import { StateContext } from '../../App';

const { useContext, React } = wp.element;
const { __ } = wp.i18n;

const Header = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, table, activeCell } = state;
	const { i, j, content } = activeCell;

	const onHandleSave = () => {
		const oldTables = [ ...tables ];
		const updatedTable = updateTableWithCellData( table, activeCell );

		const newTables = oldTables.map( ( item ) => {
			if ( item.id === updatedTable.id ) {
				return updatedTable;
			}

			return item;
		} );

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
		dispatch( { type: 'UPDATE_TABLES', payload: newTables } );
		dispatch( { type: 'UNSET_ACTIVE_CELL' } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
		toastSuccess( __( 'Successfully updated', 'advanced-wp-table' ) );

		// eslint-disable-next-line camelcase
		const { id, advanced_wp_table_data } = updatedTable;
		const title = updatedTable.title.rendered;

		updateTable( id, title, advanced_wp_table_data )
			.catch( ( err ) => {
				// eslint-disable-next-line no-console
				console.log( err.message );

				dismissToasts();
				dispatch( { type: 'SET_TABLE', payload: table } );
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError( __( 'Oops, there was a problem when updating the table', 'advanced-wp-table' ) );
			} );
	};

	const navigateToTable = () => {
		dispatch( { type: 'UNSET_ACTIVE_CELL' } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const isActiveCellChanged = () => {
		const oldTable = _.find( state.tables, ( item ) => item.id === table.id );
		const { advanced_wp_table_data: oldTableData } = parseTableSize( oldTable );
		const oldContent = oldTableData.rows[ i ][ j ];
		// @todo Serialize content only if gutenberg active.
		const newContent = wp.blocks.serialize( content );

		const isEqual = _.isEqual( oldContent, newContent );

		return ! isEqual;
	};

	const onHandleCloseModal = () => {
		if ( isActiveCellChanged() ) {
			dispatch( {
				type: 'SET_TABLE_CHANGED_DIALOG',
				payload: {
					status: true,
					callbackLeave: navigateToTable,
				},
			} );
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
