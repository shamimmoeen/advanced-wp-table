import { postTable, prepareTableToDuplicate } from '../../utils/table';
import { toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Actions = ( { table } ) => {
	const { state, dispatch } = useContext( StateContext );
	const { tables } = state;
	const { id } = table;
	const total = state.total;

	const onHandleNavigateToTable = () => {
		dispatch( { type: 'SET_TABLE', payload: table } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const onHandleDuplicateTable = () => {
		const oldTables = [ ...tables ];
		const tempTable = prepareTableToDuplicate( oldTables, id );
		const tempTables = [ tempTable, ...oldTables ];
		const newTableData = {
			title: tempTable.title.rendered,
			advanced_wp_table_data: tempTable.advanced_wp_table_data,
		};

		dispatch( { type: 'UPDATE_TOTAL', payload: total + 1 } );
		dispatch( { type: 'UPDATE_TABLES', payload: tempTables } );
		toastSuccess( __( 'Table duplicated successfully', 'advanced-wp-table' ) );

		if ( wp.a11y && wp.a11y.speak ) {
			wp.a11y.speak( __( 'Table duplicated', 'advanced-wp-table' ) );
		}

		postTable( newTableData )
			.then( ( newTable ) => {
				const newTables = tempTables.map( ( item ) => {
					if ( tempTable.id === item.id ) {
						return newTable;
					}
					return item;
				} );

				dispatch( { type: 'UPDATE_TABLES', payload: newTables } );
				dispatch( { type: 'PAGINATE_TABLES', payload: { offset: 0, currentPage: 0 } } );
			} )
			.catch( ( err ) => {
				// eslint-disable-next-line no-console
				console.log( err.message );
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError( __( 'Oops, there was a problem when duplicating the table', 'advanced-wp-table' ) );
			} );
	};

	const onHandleDeleteTable = ( e ) => {
		e.preventDefault();
		dispatch( {
			type: 'SET_TABLE_DELETE_DIALOG',
			payload: { status: true, id },
		} );
	};

	return (
		<div className={ 'row-actions' }>
			<span className={ 'edit' }>
				<button className={ 'button-link' } onClick={ onHandleNavigateToTable }>
					{ __( 'Edit', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'duplicate' }>
				<button className={ 'button-link' } onClick={ onHandleDuplicateTable }>
					{ __( 'Duplicate', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'trash' }>
				<a href={ '#/' } onClick={ onHandleDeleteTable }>
					{ __( 'Delete', 'advanced-wp-table' ) }
				</a>
			</span>
		</div>
	);
};

export default Actions;
