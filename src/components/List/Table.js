import { getShortcode } from '../../utils/table';
import { StateContext } from '../App';
import Actions from './Actions';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Table = () => {
	const stateContext = useContext( StateContext );
	const { state, dispatch } = stateContext;

	const onHandleNavigateToTable = ( e, table ) => {
		e.preventDefault();
		dispatch( { type: 'UNSET_TABLE_CHANGED' } );
		dispatch( { type: 'SET_TABLE', payload: table } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const handleShortcodeCopy = ( e ) => {
		e.target.select();
		document.execCommand( 'copy' );
	};

	return (
		<table className={ 'wp-list-table widefat fixed striped posts advanced-wp-table-list' }>
			<thead>
				<tr>
					<td className={ 'title' }>{ __( 'Title', 'advanced-wp-table' ) }</td>
					<td className={ 'shortcode' }>{ __( 'Shortcode', 'advanced-wp-table' ) }</td>
				</tr>
			</thead>
			<tbody>
				{ state.tables.length ? state.tables.map( ( table ) => (
					<tr key={ table.id }>
						<td>
							<strong>
								<a
									href={ '#/' }
									className={ 'row-title' }
									onClick={ ( e ) => onHandleNavigateToTable( e, table ) }
								>
									{ table.title.rendered }
								</a>
							</strong>
							<Actions table={ table } />
						</td>
						<td>
							<input
								type="text"
								className={ 'advanced-wp-table-shortcode' }
								value={ getShortcode( table.id ) }
								readOnly={ true }
								onClick={ handleShortcodeCopy }
							/>
						</td>
					</tr>
				) ) : (
					<tr>
						<td colSpan={ 2 }>{ __( 'No tables found.', 'advanced-wp-table' ) }</td>
					</tr>
				) }
			</tbody>
			<tfoot>
				<tr>
					<td>{ __( 'Title', 'advanced-wp-table' ) }</td>
					<td>{ __( 'Shortcode', 'advanced-wp-table' ) }</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default Table;
