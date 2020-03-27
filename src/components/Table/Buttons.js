import { updateTable } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Buttons = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, table } = state;
	const { advanced_wp_table_data: tableData } = table;
	const { size, rows } = tableData;

	const onHandleSaveTable = () => {
		const oldTables = [ ...tables ];

		const newTables = oldTables.map( ( item ) => {
			if ( item.id === table.id ) {
				return table;
			}

			return item;
		} );

		dispatch( { type: 'UPDATE_TABLES', payload: newTables } );
		toastSuccess( __( 'Successfully updated', 'advanced-wp-table' ) );

		// eslint-disable-next-line camelcase
		const { id, advanced_wp_table_data } = table;
		const title = table.title.rendered;

		updateTable( id, title, advanced_wp_table_data )
			.catch( () => {
				dismissToasts();
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError( __( 'Oops, there was a problem when updating the table', 'advanced-wp-table' ) );
			} );
	};

	const onHandleAddRow = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRow = [];

		for ( let i = 0; i < tempSize.columns; i++ ) {
			newRow.push( '' );
		}

		const newRows = [ ...tempRows, newRow ];
		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	const onHandleAddColumn = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRows = [];

		tempRows.map( ( row ) => {
			const newRow = [ ...row, '' ];
			return newRows.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const updatedTable = { ...table, advanced_wp_table_data: { size: newSize, rows: newRows } };

		dispatch( { type: 'SET_TABLE', payload: updatedTable } );
	};

	return (
		<div className={ 'advanced-wp-table-post-item-buttons' }>
			<div>
				<button
					className={ 'button button-primary' }
					onClick={ onHandleSaveTable }
				>
					{ __( 'Save Changes', 'advanced-wp-table' ) }
				</button>
			</div>
			<div className={ 'button-group' }>
				<button
					className={ 'button button-small' }
					onClick={ onHandleAddRow }
				>
					{ __( 'Add Row', 'advanced-wp-table' ) }
				</button>
				<button
					className={ 'button button-small' }
					onClick={ onHandleAddColumn }
				>
					{ __( 'Add Column', 'advanced-wp-table' ) }
				</button>
			</div>
		</div>
	);
};

export default Buttons;
