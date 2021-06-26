import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { setTable } from '../../store/reducers/table';
import { setView } from '../../store/reducers/ui';
import { TABLE } from '../../utils/views';
import Row from './Row';

const Tables = () => {
	const tablesState = useSelector( state => state.tables );
	const { tables } = tablesState;
	const dispatch = useDispatch();

	const onHandleNavigateToTable = ( e, table ) => {
		e.preventDefault();

		dispatch( setTable( table ) );
		dispatch( setView( TABLE ) );
	};

	return (
		<table className={ 'wp-list-table widefat fixed striped posts advanced-wp-table-list' }>
			<thead>
				<tr>
					<td className={ 'title' }>{ __( 'Title', 'advanced-wp-table' ) }</td>
					<td className={ 'type' }>{ __( 'Type', 'advanced-wp-table' ) }</td>
					<td className={ 'shortcode' }>{ __( 'Shortcode', 'advanced-wp-table' ) }</td>
				</tr>
			</thead>
			<tbody>
				{ tables.length ? tables.map( ( table ) => (
					<Row
						key={ table.id }
						table={ table }
						onHandleNavigateToTable={ onHandleNavigateToTable }
					/>
				) ) : (
					<tr>
						<td colSpan={ 3 }>{ __( 'No tables found.', 'advanced-wp-table' ) }</td>
					</tr>
				) }
			</tbody>
			<tfoot>
				<tr>
					<td>{ __( 'Title', 'advanced-wp-table' ) }</td>
					<td>{ __( 'Type', 'advanced-wp-table' ) }</td>
					<td>{ __( 'Shortcode', 'advanced-wp-table' ) }</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default Tables;
