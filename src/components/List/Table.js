import { getShortcode } from '../../utils';
import { StateContext } from '../App';
import Actions from './Actions';
import CopyShortcode from './CopyShortcode';

const { useContext, useEffect, useRef } = wp.element;
const { __, sprintf } = wp.i18n;

const Table = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, perPage, currentPage, selectedTableIds } = state;
	const pageTables = tables.slice( currentPage * perPage, ( currentPage + 1 ) * perPage );

	const allSelected = pageTables.length > 0 && pageTables.every( ( t ) => selectedTableIds.includes( t.id ) );
	const someSelected = selectedTableIds.length > 0 && ! allSelected;
	const selectAllRef = useRef( null );

	useEffect( () => {
		if ( selectAllRef.current ) {
			selectAllRef.current.indeterminate = someSelected;
		}
	}, [ someSelected ] );

	const onHandleNavigateToTable = ( e, table ) => {
		e.preventDefault();
		dispatch( { type: 'SET_TABLE', payload: table } );
		dispatch( { type: 'SET_VIEW', payload: 'table' } );
	};

	const onToggleSelectAll = () => {
		if ( allSelected ) {
			dispatch( { type: 'DESELECT_ALL_TABLES' } );
		} else {
			dispatch( { type: 'SELECT_ALL_TABLES', payload: pageTables.map( ( t ) => t.id ) } );
		}
	};

	const onToggleSelect = ( tableId ) => {
		const isSelected = selectedTableIds.includes( tableId );
		dispatch( {
			type: isSelected ? 'DESELECT_TABLE' : 'SELECT_TABLE',
			payload: tableId,
		} );
	};

	return (
		<table className={ 'wp-list-table widefat fixed striped posts table-view-list advanced-wp-table-list' }>
			<thead>
				<tr>
					<td id="cb" className={ 'manage-column column-cb check-column' }>
						<input
							type="checkbox"
							ref={ selectAllRef }
							checked={ allSelected }
							onChange={ onToggleSelectAll }
							aria-label={ __( 'Select all tables', 'advanced-wp-table' ) }
						/>
					</td>
					<th scope="col" className={ 'manage-column column-title column-primary' }>
						{ __( 'Title', 'advanced-wp-table' ) }
					</th>
					<th scope="col" className={ 'manage-column column-shortcode' }>
						{ __( 'Shortcode', 'advanced-wp-table' ) }
					</th>
				</tr>
			</thead>
			<tbody>
				{ pageTables.map( ( table ) => (
					<tr key={ table.id }>
						<th scope="row" className={ 'check-column' }>
							<input
								type="checkbox"
								checked={ selectedTableIds.includes( table.id ) }
								onChange={ () => onToggleSelect( table.id ) }
								aria-label={ sprintf(
									/* translators: %s: table title. */
									__( 'Select "%s"', 'advanced-wp-table' ),
									table.title.rendered
								) }
							/>
						</th>
						<td className={ 'column-title column-primary has-row-actions' }>
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
						<td className={ 'column-shortcode' }>
							<CopyShortcode shortcode={ getShortcode( table.id ) } />
						</td>
					</tr>
				) ) }
			</tbody>
			<tfoot>
				<tr>
					<td className={ 'manage-column column-cb check-column' }>
						<input
							type="checkbox"
							checked={ allSelected }
							onChange={ onToggleSelectAll }
							aria-label={ __( 'Select all tables', 'advanced-wp-table' ) }
						/>
					</td>
					<th scope="col" className={ 'manage-column column-title column-primary' }>
						{ __( 'Title', 'advanced-wp-table' ) }
					</th>
					<th scope="col" className={ 'manage-column column-shortcode' }>
						{ __( 'Shortcode', 'advanced-wp-table' ) }
					</th>
				</tr>
			</tfoot>
		</table>
	);
};

export default Table;
