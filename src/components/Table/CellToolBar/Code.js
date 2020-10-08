import React from 'react';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Code = () => {
	return (
		<Tooltip
			text={ __( 'Code', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				aria-label={ 'Code' }
				role={ 'presentation' }
			>
				<span className={ 'dashicons dashicons-editor-code' } />
			</div>
		</Tooltip>
	);
};

export default Code;
