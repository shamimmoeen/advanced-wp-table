import React from 'react';

import BackToList from './BackToList';
import AddRow from './AddRow';
import AddColumn from './AddColumn';

const HeaderLeft = () => {
	return (
		<div className={ 'advanced-wp-table-header-left' }>
			<BackToList />
			<AddRow />
			<AddColumn />
		</div>
	);
};

export default HeaderLeft;
