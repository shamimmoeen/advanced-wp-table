import React from 'react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import ServerSideRender from '@wordpress/server-side-render';

import { act, render, screen } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import App from '../App';

jest.mock( '@wordpress/server-side-render' );

fetchMock.enableMocks();

const blockUtils = require( '../../utils/blocks' );

const calendarContent = '<!-- wp:calendar /-->';
const demoContent = '<!-- wp:paragraph --><p>Hello World!!</p><!-- /wp:paragraph -->';

const calendarTable = {
	id: 1,
	title: { rendered: 'Table 1' },
	advanced_wp_table_data: {
		size: {
			rows: 2,
			columns: 2,
		},
		type: 'layout',
		rows: [
			[
				calendarContent,
				demoContent,
			],
			[
				'',
				'',
			],
		]
	}
};

const stateWithCalendar = {
	...initialState,
	tables: {
		...initialState.tables,
		tables: [ calendarTable ]
	},
	table: {
		table: calendarTable
	},
	ui: {
		...initialState.ui,
		view: 'table',
	}
};

const youtubeEmbedContent = '<!-- wp:core-embed/youtube {"url":"https://www.youtube.com/watch?v=ISzELygBywM\u0026list=RDISzELygBywM","type":"video","providerNameSlug":"youtube","className":"wp-embed-aspect-4-3 wp-has-aspect-ratio"} --> <figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-4-3 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"> https://www.youtube.com/watch?v=ISzELygBywM&amp;list=RDISzELygBywM</div></figure><!-- /wp:core-embed/youtube -->';

const youtubeEmbedTable = {
	id: 1,
	title: { rendered: 'Table 1' },
	advanced_wp_table_data: {
		size: {
			rows: 2,
			columns: 2,
		},
		type: 'layout',
		rows: [
			[
				youtubeEmbedContent,
				demoContent,
			],
			[
				'',
				'',
			],
		]
	}
};

const stateWithYoutubeEmbed = {
	...initialState,
	tables: {
		...initialState.tables,
		tables: [ youtubeEmbedTable ]
	},
	table: {
		table: youtubeEmbedTable
	},
	ui: {
		...initialState.ui,
		view: 'table',
	}
};

describe.skip( 'Blocks/RenderBlock', function () {
	it( 'should render the calendar widget', async function () {
		fetchMock.mockResponse( JSON.stringify( [ calendarTable ] ) );

		global.console.info = jest.fn();

		render( <App />, stateWithCalendar );

		await screen.findByText( 'Hello World!!' );

		expect( ServerSideRender ).toHaveBeenCalled();
	} );

	it( 'should render the youtube embed widget', async function () {
		const promise = Promise.resolve( {
			author_name: 'pongkhiraaj',
			author_url: 'https://www.youtube.com/user/pongkhiraaj',
			height: 338,
			html: '<iframe title="Warfaze - Bewarish [original]" width="600" height="338" src="https://www.youtube.com/embed/CWj31-fnMdo?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			provider_name: 'YouTube',
			provider_url: 'https://www.youtube.com/',
			thumbnail_height: 360,
			thumbnail_url: 'https://i.ytimg.com/vi/CWj31-fnMdo/hqdefault.jpg',
			thumbnail_width: 480,
			title: 'Warfaze - Bewarish [original]',
			type: 'video',
			version: '1.0',
			width: 600,
		} );

		blockUtils.getEmbedPreview = jest.fn( () => promise );

		global.console.info = jest.fn();

		const { container } = render( <App />, stateWithYoutubeEmbed );

		await screen.findByText( 'Hello World!!' );

		await act( () => promise );

		const editor = container.querySelector( '.wp-block-embed' );
		expect( editor ).toBeInTheDocument();
	} );

	it( 'should log the error when embedding the youtube embed', async function () {
		blockUtils.getEmbedPreview = jest.fn( () => Promise.reject( new Error( 'Server offline' ) ) );

		global.console.info = jest.fn();

		render( <App />, stateWithYoutubeEmbed );

		await screen.findByText( 'Hello World!!' );

		expect( screen.getByText( 'Loading...' ) ).toBeInTheDocument();
	} );
} );
