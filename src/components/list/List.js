const List = ( { list, onHandleSetTable, onHandleDeleteTable } ) => {
	let content;

	if ( list.loading ) {
		content = 'Loading...';
	} else if ( 0 === list.list.length ) {
		content = <div className={ 'advanced-wp-table-not-found' }>No table found!</div>;
	} else {
		content = (
			<table className="advanced-wp-table advanced-wp-table-posts-list">
				<thead>
					<tr>
						<th className={ 'advanced-wp-table-posts-list-titles' }>Title</th>
						<th className={ 'advanced-wp-table-posts-list-shortcodes' }>Shortcode</th>
						<th className={ 'advanced-wp-table-posts-list-actions' }>Actions</th>
					</tr>
				</thead>
				<tbody>{
					list.list.map( ( item, index ) => (
						<tr key={ index }>
							<td className={ 'advanced-wp-table-post-title' }>{ item.title.rendered }</td>
							<td>[advanced_wp_table id={ item.id }]</td>
							<td>
								<button
									className={ 'button' }
									onClick={ () => onHandleSetTable( item ) }
								>
									Edit
								</button>
								{ ` ` }
								<a
									className={ 'button' }
									href={ item.link }
									target={ '_blank' }
									rel="noopener noreferrer"
								>
									View
								</a>
								{ ` ` }
								<button
									className={ 'button' }
									onClick={ () => onHandleDeleteTable( item.id ) }
								>
									Delete
								</button>
							</td>
						</tr>
					) )
				}</tbody>
			</table>
		);
	}

	return content;
};

export default List;
