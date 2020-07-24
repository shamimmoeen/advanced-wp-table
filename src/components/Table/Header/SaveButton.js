import { updateTable } from '../../../utils/table';
import { dismissToasts, toastError, toastSuccess } from '../../../utils/utils';
import {StateContext} from "../../App";

const { useContext, React } = wp.element;
const { __ } = wp.i18n;

const SaveButton = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, table } = state;

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
			.catch( ( err ) => {
				// eslint-disable-next-line no-console
				console.log( err.message );

				dismissToasts();
				dispatch( { type: 'UPDATE_TABLES', payload: oldTables } );
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
