import _ from 'lodash';
import { parseTableSize } from '../../utils/table';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Header = () => {
	const { state, dispatch } = useContext( StateContext );
	const { table } = state;
	const { rendered: title } = table.title;

	const navigateToList = () => {
		dispatch( { type: 'UNSET_TABLE' } );
		dispatch( { type: 'SET_VIEW', payload: 'list' } );
	};

	const isTableChanged = () => {
		const oldTable = _.find( state.tables, ( item ) => item.id === table.id );
		const { advanced_wp_table_data: oldTableData } = parseTableSize( oldTable );
		const { advanced_wp_table_data: newTableData } = table;
		const isEqual = _.isEqual( oldTableData, newTableData );

		return ! isEqual;
	};

	const onHandleNavigateToList = () => {
		if ( isTableChanged() ) {
			dispatch( {
				type: 'SET_TABLE_CHANGED_DIALOG',
				payload: {
					status: true,
					callbackLeave: navigateToList,
				},
			} );
		} else {
			navigateToList();
		}
	};

	return (
		<div className={ 'advanced-wp-table-header' }>
			<div className={ 'advanced-wp-table-header-inner margin-bottom-large' }>
				<h1>{ title }</h1>
				<button
					className={ 'button' }
					onClick={ onHandleNavigateToList }
				>
					<span className={ 'dashicons dashicons-controls-back' } />
					{ __( 'Back to Tables', 'advanced-wp-table' ) }
				</button>
			</div>
		</div>
	);
};

export default Header;
