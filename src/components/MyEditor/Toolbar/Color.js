import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Color = () => {
	return (
		<Tooltip
			text={ __( 'Color', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Color' }
				role={ 'presentation' }
			>
				<span className={ 'dashicons dashicons-editor-textcolor' } />
			</div>
		</Tooltip>
	);
};

export default Color;
