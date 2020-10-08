import React from 'react';

import BackToList from './BackToList';
import GoToPrevTable from './GoToPrevTable';
import GoToNextTable from './GoToNextTable';

const HeaderLeft = () => {
	return (
		<div className={ 'advanced-wp-table-header-left' }>
			<div className={ 'advanced-wp-table-header-with-separator' }>
				<BackToList />
			</div>

			<div className={ 'advanced-wp-table-header-with-separator' }>
				<div className={ 'advanced-wp-table-button-group' }>
					<GoToPrevTable />
					<GoToNextTable />
				</div>
			</div>
		</div>
	);
};

export default HeaderLeft;
