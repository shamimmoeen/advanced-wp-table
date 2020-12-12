import React from 'react';
import { useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import Icon from '@mdi/react';
import { mdiClipboardOutline } from '@mdi/js';
import { Button, Tooltip } from '@wordpress/components';

import { getShortcode, textToClipboard } from '../../../../utils/table';
import { toastSuccess } from '../../../../utils/utils';

const CopyShortcode = () => {
	const { table } = useSelector( state => state.table );

	const handleShortcodeCopy = () => {
		const shortcode = getShortcode( table.id );
		textToClipboard( shortcode );
		toastSuccess( __( 'Shortcode copied', 'advanced-wp-table' ), { position: 'bottom-right' } );
	};

	return (
		<Tooltip
			text={ __( 'Copy the shortcode', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<Button
				className={ 'has-icon copy-shortcode' }
				onClick={ handleShortcodeCopy }
			>
				<Icon path={ mdiClipboardOutline } size={ '20px' } />
			</Button>
		</Tooltip>
	);
};

export default CopyShortcode;
