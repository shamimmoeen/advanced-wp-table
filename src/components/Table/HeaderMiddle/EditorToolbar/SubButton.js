import React from 'react';

import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';

export default createInlineStyleButton( {
	style: 'SUBSCRIPT',
	children: (
		<div className="SubButton-button ToolbarButton-button">
			x<sub>2</sub>
		</div>
	)
} );
