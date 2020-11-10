import React from 'react';
import { useSelector } from 'react-redux';

import Title from './Title/Title';

const HeaderMiddle = () => {
	const { visibleEditorToolbar } = useSelector( state => state.table );

	let content = '';

	if ( ! visibleEditorToolbar ) {
		content = (
			<div className={ 'advanced-wp-table-header-middle' }>
				<Title />
			</div>
		)
	}

	return content;
};

export default HeaderMiddle;
