import React from 'react';

import Edit from './Edit';
import CopyCell from './CopyCell';
import PasteCell from './PasteCell';
import ClearCell from './ClearCell';
import AddRow from './AddRow';
import AddColumn from './AddColumn';
import DuplicateRow from './DuplicateRow';
import DuplicateColumn from './DuplicateColumn';
import DeleteRow from './DeleteRow';
import DeleteColumn from './DeleteColumn';

const Actions = ( { i, j, y } ) => {
	return (
		<div className={ 'advanced-wp-table-cell-actions' }>
			<span className={ 'dashicons dashicons-admin-generic advanced-wp-table-edit-cell' } />
			<div className="advanced-wp-table-actions-dropdown">
				<div className="advanced-wp-table-actions-dropdown-inner">
					<Edit i={ i } j={ j } />
					<hr />
					<CopyCell i={ i } j={ j } />
					<PasteCell i={ i } j={ j } />
					<ClearCell i={ i } j={ j } y={ y } />
					<hr />
					<AddRow i={ i } />
					<AddColumn j={ j } />
					<hr />
					<DuplicateRow i={ i } />
					<DuplicateColumn j={ j } />
					<hr />
					<DeleteRow i={ i } />
					<DeleteColumn j={ j } />
				</div>
			</div>
		</div>
	);
};

export default Actions;
