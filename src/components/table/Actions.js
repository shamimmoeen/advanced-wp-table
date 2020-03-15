const Actions = ( props ) => {
	const { onHandleOpenModal, onHandleDeleteColumn, onHandleDeleteRow, onHandleDuplicateRow, x, y, i, j } = props;

	return (
		<div className={ 'advanced-wp-table-cell-actions' }>
			<span className={ 'dashicons dashicons-admin-generic advanced-wp-table-edit-cell' } />
			<div className="advanced-wp-table-actions-dropdown">
				<div
					className="advanced-wp-table-action-item"
					onClick={ () => onHandleOpenModal( i, j ) }
					role="presentation"
				>
					Edit
				</div>
				<div
					className="advanced-wp-table-action-item"
					onClick={ () => onHandleDeleteColumn( j ) }
					role="presentation"
				>
					Delete Column
				</div>
				<div
					className="advanced-wp-table-action-item"
					onClick={ () => onHandleDeleteRow( i ) }
					role="presentation"
				>
					Delete Row
				</div>
				<div
					className="advanced-wp-table-action-item"
					onClick={ () => onHandleDuplicateRow( i ) }
					role="presentation"
				>
					Duplicate Row
				</div>
			</div>
		</div>
	);
};

export default Actions;
