import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
import Tables from './Tables';
import AddTable from './AddTable';
import { ADD_TABLE, TABLE } from '../../utils/views';

const Views = () => {
	const view = useSelector( state => state.ui.view );

	let content;

	if ( ADD_TABLE === view ) {
		content = <AddTable />;
	} else if ( TABLE === view ) {
		content = <Table />;
	} else {
		content = <Tables />;
	}

	return content;
};

export default Views;
