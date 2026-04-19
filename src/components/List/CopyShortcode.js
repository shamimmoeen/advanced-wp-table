import { Button } from '@wordpress/components';
import { check as checkIcon, copy as copyIcon } from '@wordpress/icons';
import { showErrorNotice } from '../../utils';

const { useState } = wp.element;
const { __ } = wp.i18n;

const CopyShortcode = ( { shortcode } ) => {
	const [ copied, setCopied ] = useState( false );

	const onCopy = () => {
		if ( ! navigator.clipboard ) {
			showErrorNotice( __( 'Clipboard is not available', 'advanced-wp-table' ) );
			wp.a11y.speak( __( 'Clipboard is not available', 'advanced-wp-table' ), 'assertive' );
			return;
		}

		navigator.clipboard.writeText( shortcode )
			.then( () => {
				setCopied( true );
				setTimeout( () => setCopied( false ), 2000 );
				wp.a11y.speak( __( 'Shortcode copied', 'advanced-wp-table' ) );
			} )
			.catch( () => {
				showErrorNotice( __( 'Failed to copy shortcode', 'advanced-wp-table' ) );
				wp.a11y.speak( __( 'Failed to copy shortcode', 'advanced-wp-table' ), 'assertive' );
			} );
	};

	return (
		<div className={ 'advanced-wp-table-shortcode' }>
			<code>{ shortcode }</code>
			<Button
				icon={ copied ? checkIcon : copyIcon }
				label={ __( 'Copy shortcode', 'advanced-wp-table' ) }
				size={ 'compact' }
				onClick={ onCopy }
			/>
		</div>
	);
};

export default CopyShortcode;
