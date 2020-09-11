import React from 'react';
import { getBlockType, getBlockContent } from '@wordpress/blocks';
import { createMarkup } from '../../utils/utils';
import ServerSideRender from '@wordpress/server-side-render';
import RenderEmbedPreview from './RenderEmbedPreview';

const RenderBlock = ( { block } ) => {
	const blockType = getBlockType( block.name );

	if ( 'widgets' === blockType.category ) {
		return (
			<ServerSideRender
				block={ block.name }
				attributes={ block.attributes }
			/>
		);
	}

	if ( 'embed' === blockType.category ) {
		return <RenderEmbedPreview block={ block } />;
	}

	return <div dangerouslySetInnerHTML={ createMarkup( getBlockContent( block ) ) } />;
};

export default RenderBlock;
