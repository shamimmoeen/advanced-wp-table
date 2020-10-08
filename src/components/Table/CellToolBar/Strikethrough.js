import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Strikethrough = () => {
	return (
		<Tooltip
			text={ __( 'Strikethrough', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Strikethrough' }
				role={ 'presentation' }
			>
				<span className={ 'dashicons dashicons-editor-strikethrough' } />
			</div>
		</Tooltip>
	);
};

export default Strikethrough;
