import { createInlineStyleButton } from 'draft-js-buttons';
import Icon from '@mdi/react';
import React from 'react';
import { mdiFormatBold } from '@mdi/js';

const Bold = createInlineStyleButton( {
	style: 'BOLD',
	children: <Icon path={ mdiFormatBold } size={ '20px' } />,
} );

export default Bold;
