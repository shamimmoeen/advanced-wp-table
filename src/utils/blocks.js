import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

export function getBlocks( content ) {
	return  wp.blocks.parse( content );
}

export async function getEmbedPreview( url ) {
	const data = { path: addQueryArgs( '/oembed/1.0/proxy', { url } ) };

	try {
		return await apiFetch( data );
	} catch ( err ) {
		throw new Error( err.message );
	}
}
