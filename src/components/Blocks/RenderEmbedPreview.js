import React, { useState, useEffect } from 'react';
import { getEmbedPreview } from '../../utils/blocks';
import { Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import EmbedPreview from '../EmbedPreviewAWT/embed-preview';
import { toastError } from '../../utils/utils';

const RenderEmbedPreview = ( { block } ) => {
	const [ preview, setPreview ] = useState( '' );

	useEffect( () => {
		getEmbedPreview( block.attributes.url )
			.then( res => setPreview( res ) )
			.catch( ( err ) => toastError( err.message ) );
	}, [] );

	let html;

	if ( ! preview ) {
		html = (
			<Placeholder>{ __( 'Loading...', 'advanced-wp-table' ) }</Placeholder>
		);
	} else {
		const { caption, className, type, url } = block.attributes;

		html = <EmbedPreview
			caption={ caption }
			preview={ preview }
			previewable={ true }
			className={ className }
			type={ type }
			url={ url }
		/>;
	}

	return html;
};

export default RenderEmbedPreview;
