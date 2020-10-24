import { __ } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';
import Icon from '@mdi/react';
import { mdiCog } from '@mdi/js';
import React from 'react';

const Settings = () => {
	const handleOpenSettings = () => {
	};

	return (
		<Tooltip
			text={ __( 'Settings', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<Button
				className={ 'has-icon' }
				onClick={ handleOpenSettings }
			>
				<Icon path={ mdiCog } size={ '20px' } />
			</Button>
		</Tooltip>
	);
}

export default Settings;
