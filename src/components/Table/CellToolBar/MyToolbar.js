import React from 'react';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { alignLeft, formatBold, formatItalic, link } from '@wordpress/icons';

function MyToolbar() {
	return (
		<Toolbar label="Options">
			<ToolbarButton icon={ formatBold } label="Bold" onClick={ () => console.log( 'bold' ) } />
			<ToolbarButton icon={ formatItalic } label="Italic" />
			<ToolbarButton icon={ link } label="Link" />
			<ToolbarButton icon={ alignLeft } label="Align Left" />
		</Toolbar>
	);
}

export default MyToolbar;
