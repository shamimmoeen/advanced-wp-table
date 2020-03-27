import _ from 'lodash';
import { duplicateTable } from '../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../utils/utils';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Actions = ( { table } ) => {
	const stateContext = useContext( StateContext );
	const { state, dispatch } = stateContext;
	const { tables } = state;
	const { id } = table;

	const onHandleNavigateToTable = () => {
		dispatch( { type: 'UNSET_TABLE_CHANGED' } );
		dispatch( { type: 'SET_TABLE', payload: table } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const onHandleDuplicateTable = () => {
		const oldTables = [ ...tables ];
		const targetTable = _.find( oldTables, ( item ) => id === item.id );

		const tempId = `new${ targetTable.id }`;
		const newTableTitle = `${ targetTable.title.rendered } (${ __( 'Duplicated', 'advanced-wp-table' ) })`;
		const newTableData = targetTable.advanced_wp_table_data;
		const tempTable = {
			...targetTable,
			id: tempId,
			title: { ...targetTable.title, rendered: newTableTitle },
		};
		const tempTables = [ tempTable, ...oldTables ];

		dispatch( { type: 'UPDATE_TABLES', payload: tempTables } );
		toastSuccess( __( 'Table duplicated successfully', 'advanced-wp-table' ) );

		duplicateTable( newTableTitle, newTableData )
			.then( ( newTable ) => {
				const newTables = tempTables.map( ( item ) => {
					if ( tempId === item.id ) {
						return newTable;
					}

					return item;
				} );

				dispatch( { type: 'UPDATE_TABLES', payload: newTables } );
			} )
			.catch( () => {
				dismissToasts();
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
				toastError( __( 'Oops, there was a problem when duplicating the table', 'advanced-wp-table' ) );
			} );
	};

	const onHandleDeleteTable = ( e ) => {
		e.preventDefault();

		dispatch( {
			type: 'SET_TABLE_DELETE_DIALOG',
			payload: {
				status: true,
				id,
			},
		} );
	};

	return (
		<div className={ 'row-actions' }>
			<span className={ 'edit' }>
				<button
					className={ 'button-link' }
					onClick={ onHandleNavigateToTable }
				>
					{ __( 'Edit', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'duplicate' }>
				<button
					className={ 'button-link' }
					onClick={ onHandleDuplicateTable }
				>
					{ __( 'Duplicate', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'trash' }>
				<a href={ '#/' } onClick={ onHandleDeleteTable }>{ __( 'Delete', 'advanced-wp-table' ) }</a>
			</span>
		</div>
	);
};

export default Actions;
