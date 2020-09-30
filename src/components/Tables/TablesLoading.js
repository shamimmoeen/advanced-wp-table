import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector } from 'react-redux';

const TablesLoading = () => {
	const tablesState = useSelector( state => state.tables );
	const { perPage } = tablesState;

	const rows = [];

	for ( let i = 0; i < perPage; i++ ) {
		rows.push(
			<tr key={ i }>
				<td>
					<div className={ 'advanced-wp-table-liner-loading title-loading' } />
					<div className={ 'advanced-wp-table-liner-loading actions-loading' } />
				</td>
				<td>
					<div className={ 'advanced-wp-table-liner-loading type-loading' } />
				</td>
				<td>
					<div className={ 'advanced-wp-table-liner-loading shortcode-loading' } />
				</td>
			</tr>,
		);
	}

	return (
		<table className={ 'wp-list-table widefat fixed striped posts advanced-wp-table-list-loading' }>
			<thead>
				<tr>
					<td className={ 'title' }>{ __( 'Title', 'advanced-wp-table' ) }</td>
					<td className={ 'type' }>{ __( 'Type', 'advanced-wp-table' ) }</td>
					<td className={ 'shortcode' }>{ __( 'Shortcode', 'advanced-wp-table' ) }</td>
				</tr>
			</thead>
			<tbody>
				{ rows }
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

export default TablesLoading;
