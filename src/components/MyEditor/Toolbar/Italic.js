import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Italic = () => {
	return (
		<Tooltip
			text={ __( 'Italic Ctrl+I', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Italic Ctrl+I' }
				role={ 'presentation' }
			>
				<span className={ 'dashicons dashicons-editor-italic' } />
			</div>
		</Tooltip>
	);
};

export default Italic;
