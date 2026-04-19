import { postTable } from '../../api';
import { showErrorNotice, showSuccessNotice } from '../../utils';
import { StateContext } from '../App';

const { useContext, useState } = wp.element;
const { __ } = wp.i18n;

const Actions = ( { table } ) => {
	const { state, dispatch } = useContext( StateContext );
	const { tables } = state;
	const { id } = table;
	const [ duplicating, setDuplicating ] = useState( false );

	const onHandleNavigateToTable = () => {
		dispatch( { type: 'SET_TABLE', payload: table } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const onHandleDuplicateTable = () => {
		setDuplicating( true );

		const copyLabel = __( 'Copy', 'advanced-wp-table' );
		const copySuffix = ` — ${ copyLabel }`;
		const baseTitle = table.title.rendered.replace( new RegExp( `(${ copySuffix })+$` ), '' );

		const newTableData = {
			title: baseTitle + copySuffix,
			advanced_wp_table_data: table.advanced_wp_table_data,
		};

		postTable( newTableData )
			.then( ( newTable ) => {
				setDuplicating( false );
				dispatch( { type: 'UPDATE_TABLES', payload: [ newTable, ...tables ] } );
				showSuccessNotice( __( 'Table duplicated successfully', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Table duplicated', 'advanced-wp-table' ) );
			} )
			.catch( () => {
				setDuplicating( false );
				showErrorNotice( __( 'Oops, there was a problem when duplicating the table', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Error duplicating table', 'advanced-wp-table' ), 'assertive' );
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
		<div className={ duplicating ? 'row-actions is-duplicating' : 'row-actions' }>
			<span className={ 'edit' }>
				<button className={ 'button-link' } onClick={ onHandleNavigateToTable }>
					{ __( 'Edit', 'advanced-wp-table' ) }
				</button>
			</span>
			{ ` | ` }
			<span className={ 'duplicate' }>
				<button
					className={ 'button-link' }
					disabled={ duplicating }
					onClick={ onHandleDuplicateTable }
				>
					{ duplicating
						? __( 'Duplicating…', 'advanced-wp-table' )
						: __( 'Duplicate', 'advanced-wp-table' )
					}
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
