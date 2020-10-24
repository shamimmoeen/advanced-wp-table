import React from 'react';
import { Toolbar as ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { alignLeft, formatBold, formatItalic, link } from '@wordpress/icons';

function Toolbar() {
	return (
		<ToolbarGroup label="Options">
			<ToolbarButton icon={ formatBold } label="Bold" onClick={ () => console.log( 'bold' ) } />
			<ToolbarButton icon={ formatItalic } label="Italic" />
			<ToolbarButton icon={ link } label="Link" />
			<ToolbarButton icon={ alignLeft } label="Align Left" />
		</ToolbarGroup>
	);
}

export default Toolbar;
