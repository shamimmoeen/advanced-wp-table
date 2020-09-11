import React from 'react';
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { getShortcode, textToClipboard } from '../../../utils/table';
import { toastSuccess } from '../../../utils/utils';
import { useSelector } from 'react-redux';

const CopyShortcodeButton = () => {
	const { table } = useSelector( state => state.table );

	const handleShortcodeCopy = () => {
		const shortcode = getShortcode( table.id );
		textToClipboard( shortcode );
		toastSuccess( __( 'Shortcode copied', 'advanced-wp-table' ), { position: 'bottom-right' } );
	};

	return (
		<Tooltip
			text={ __( 'Click to copy the shortcode', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				className={ 'advanced-wp-table-shortcode' }
				role={ 'presentation' }
				onClick={ handleShortcodeCopy }
			>
				<span className={ 'dashicons dashicons-clipboard' } />
			</div>
		</Tooltip>
	);
};

export default CopyShortcodeButton;
