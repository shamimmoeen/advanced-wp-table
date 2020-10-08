import React from 'react';

import AddRow from './AddRow';
import AddColumn from './AddColumn';

const TableToolBar = () => {
	return (
		<div className={ 'advanced-wp-table-table-toolbar' }>
			<div className={ 'advanced-wp-table-header-with-separator' }>
				<div className={ 'advanced-wp-table-button-group' }>
					<AddRow />
					<AddColumn />
				</div>
			</div>
		</div>
	);
};

export default TableToolBar;
