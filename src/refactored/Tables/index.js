import React from 'react';
import { useSelector } from 'react-redux';

import TablesLoading from './TablesLoading';
import Tables from './Tables';

const List = () => {
	const uiState = useSelector( state => state.ui );
	const { tablesLoading } = uiState;

	return tablesLoading ? <TablesLoading /> : <Tables />;
};

export default List;
