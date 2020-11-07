import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import Title from './Title/Title';
import EditorToolbar from './EditorToolbar';
// import Toolbar from '../../MyEditor/Toolbar';

const HeaderMiddle = ( { staticToolbar }, ref ) => {
	const { visibleEditorToolbar } = useSelector( state => state.table );

	let content;

	if ( visibleEditorToolbar ) {
		content = <EditorToolbar staticToolbar={ staticToolbar } ref={ ref } />;
		// content = <Toolbar staticToolbar={ staticToolbar } ref={ ref } />
	} else {
		content = <Title />;
	}

	return (
		<div className={ 'advanced-wp-table-header-middle' }>
			{ content }
		</div>
	);
};

export default forwardRef( HeaderMiddle );
