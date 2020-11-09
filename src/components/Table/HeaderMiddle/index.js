import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import Title from './Title/Title';
import MyEditorToolbar from '../../MyEditor/EditorToolbar';

const HeaderMiddle = ( props, ref ) => {
	const { visibleEditorToolbar } = useSelector( state => state.table );

	let content;

	if ( visibleEditorToolbar ) {
		content = <MyEditorToolbar ref={ ref } />;
	} else {
		content = <Title />;
	}

	return (
		<div className={ 'advanced-wp-table-header-middle' }>
			<MyEditorToolbar ref={ ref } />
		</div>
	);
};

export default forwardRef( HeaderMiddle );
