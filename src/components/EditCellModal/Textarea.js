import _ from 'lodash';
import { parseTableSize, updateTable, updateTableWithCellData } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Textarea = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, table, activeCell } = state;
	const { i, j, content } = activeCell;

	const onHandleChange = ( e ) => {
		dispatch( { type: 'SET_ACTIVE_CELL', payload: { ...activeCell, content: e.target.value } } );
	};

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
				dispatch( { type: 'SET_TABLE', payload: table } ); // @todo Check if we need to set the old table
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

		const isEqual = _.isEqual( oldContent, content );

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
		<div>
			<div className={ 'advanced-wp-table-editor-action-buttons' }>
				<div>
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
			<div style={ { maxWidth: '500px', margin: '2em auto' } }>
				<textarea
					name={ 'textarea' }
					value={ content }
					onChange={ onHandleChange }
					rows={ 5 }
					style={ { width: '100%' } }
				/>
			</div>
		</div>
	);
};

export default Textarea;
