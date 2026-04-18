import { Button } from '@wordpress/components';
import { check as checkIcon, copy as copyIcon } from '@wordpress/icons';
import { getShortcode } from '../../utils/table';
import { StateContext } from '../App';
import Actions from './Actions';

const { useContext, useEffect, useRef, useState } = wp.element;
const { __, sprintf } = wp.i18n;

const CopyShortcode = ( { shortcode } ) => {
	const [ copied, setCopied ] = useState( false );

	const onCopy = () => {
		navigator.clipboard.writeText( shortcode ).then( onCopySuccess );
	};

	const onCopySuccess = () => {
		setCopied( true );
		setTimeout( () => setCopied( false ), 2000 );

		if ( wp.a11y && wp.a11y.speak ) {
			wp.a11y.speak( __( 'Shortcode copied', 'advanced-wp-table' ) );
		}
	};

	return (
		<div className={ 'advanced-wp-table-shortcode' }>
			<code>{ shortcode }</code>
			<Button
				icon={ copied ? checkIcon : copyIcon }
				label={ __( 'Copy shortcode', 'advanced-wp-table' ) }
				size={ 'compact' }
				onClick={ onCopy }
			/>
		</div>
	);
};

const Table = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, selectedTableIds } = state;

	const allSelected = tables.length > 0 && selectedTableIds.length === tables.length;
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
		dispatch( { type: allSelected ? 'DESELECT_ALL_TABLES' : 'SELECT_ALL_TABLES' } );
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
				{ tables.length ? tables.map( ( table ) => (
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
				) ) : (
					<tr>
						<td colSpan={ 3 }>{ __( 'No tables found.', 'advanced-wp-table' ) }</td>
					</tr>
				) }
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
