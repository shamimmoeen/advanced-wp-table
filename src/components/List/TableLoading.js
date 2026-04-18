const { __ } = wp.i18n;

const TableLoading = () => {
	const rows = [];
	const skeletonRows = 5;

	for ( let i = 0; i < skeletonRows; i++ ) {
		rows.push(
			<tr key={ i }>
				<th scope="row" className={ 'check-column' }>
					<input type="checkbox" disabled />
				</th>
				<td className={ 'column-title column-primary' }>
					<div className={ 'advanced-wp-table-liner-loading title-loading' } />
				</td>
				<td className={ 'column-shortcode' }>
					<div className={ 'advanced-wp-table-liner-loading shortcode-loading' } />
				</td>
			</tr>,
		);
	}

	return (
		<table className={ 'wp-list-table widefat fixed striped posts table-view-list advanced-wp-table-list-loading' }>
			<thead>
				<tr>
					<td id="cb" className={ 'manage-column column-cb check-column' }>
						<input type="checkbox" disabled />
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
				{ rows }
			</tbody>
			<tfoot>
				<tr>
					<td className={ 'manage-column column-cb check-column' }>
						<input type="checkbox" disabled />
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

export default TableLoading;
