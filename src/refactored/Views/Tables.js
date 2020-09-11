import React, { Fragment } from 'react';

import Header from '../Tables/Header';
import Pagination from '../Tables/Pagination';
import List from '../Tables';

const Tables = () => {
	return (
		<Fragment>
			<Header />
			<Pagination />
			<List />
			<Pagination />
		</Fragment>
	);
};

export default Tables;
