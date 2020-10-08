import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Bold = () => {
	return (
		<Tooltip
			text={ __( 'Bold Ctrl+B', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Bold Ctrl+B' }
				role={ 'presentation' }
			>
				<span className={ 'dashicons dashicons-editor-bold' } />
			</div>
		</Tooltip>
	);
};

export default Bold;
