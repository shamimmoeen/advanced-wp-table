import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiClipboardOutline } from '@mdi/js';
import { Button, Tooltip } from '@wordpress/components';

import { getShortcode, textToClipboard } from '../../../../utils/table';

const CopyShortcode = () => {
	const { table } = useSelector( state => state.table );
	const [ loading, setLoading ] = useState( false );

	const handleShortcodeCopy = () => {
		if ( loading ) {
			return;
		}

		setLoading( true );
		const shortcode = getShortcode( table.id );
		textToClipboard( shortcode );

		setTimeout( () => {
			setLoading( false );
		}, 1500 );
	};

	let button;

	let buttonClasses = 'has-icon copy-shortcode';

	if ( loading ) {
		button = <Icon
			className={ 'isLoading' }
			path={ mdiCheckCircle }
			size={ '20px' }
			data-testid={'copy-shortcode-loading'}
		/>;

		buttonClasses = 'has-icon copy-shortcode isLoading'
	} else {
		button = <Icon path={ mdiClipboardOutline } size={ '20px' } />;
	}

	return (
		<Tooltip
			text={ __( 'Copy the shortcode', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<Button
				className={ buttonClasses }
				onClick={ handleShortcodeCopy }
			>
				{ button }
			</Button>
		</Tooltip>
	);
};

export default CopyShortcode;
