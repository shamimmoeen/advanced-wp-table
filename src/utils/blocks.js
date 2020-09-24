import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { parse } from '@wordpress/blocks';

export function getBlocks( content ) {
	return parse( content );
}

export function getEmbedPreview( url ) {
	const options = { path: addQueryArgs( '/oembed/1.0/proxy', { url } ) };

	return apiFetch( options );
}
