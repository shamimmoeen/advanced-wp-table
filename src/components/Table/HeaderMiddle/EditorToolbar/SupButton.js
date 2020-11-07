import React from 'react';

import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';

export default createInlineStyleButton( {
	style: 'SUPERSCRIPT',
	children: (
		<div className="SupButton-button ToolbarButton-button">
			x<sup>2</sup>
		</div>
	)
} );
