import React from 'react';

import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';

export default createInlineStyleButton( {
	style: 'STRIKETHROUGH',
	children: (
		<div className="SupButton-button ToolbarButton-button">
			<del>A</del>
		</div>
	)
} );
