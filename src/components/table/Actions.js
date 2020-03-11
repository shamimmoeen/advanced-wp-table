const Actions = ( props ) => {
	const { onHandleOpenModal, onHandleDeleteColumn, onHandleDeleteRow, x, y, i, j } = props;

	return (
		<div className={ 'wp-table-advanced-cell-actions' }>
			<span className={ 'dashicons dashicons-admin-generic wp-table-advanced-edit-cell' } />
			<div className="wp-table-advanced-actions-dropdown">
				<div
					className="wp-table-advanced-action-item"
					onClick={ () => onHandleOpenModal( i, j ) }
					role="presentation"
				>
					Edit
				</div>
				<div
					className="wp-table-advanced-action-item"
					onClick={ () => onHandleDeleteColumn( j ) }
					role="presentation"
				>
					Delete Column
				</div>
				<div
					className="wp-table-advanced-action-item"
					onClick={ () => onHandleDeleteRow( i ) }
					role="presentation"
				>
					Delete Row
				</div>
			</div>
		</div>
	);
};

export default Actions;
