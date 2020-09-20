import React from 'react';

import { render, screen } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import App from '../App';

const demoContent = '<!-- wp:paragraph --><p>Hello World!!</p><!-- /wp:paragraph -->';

const fakeTable1 = {
	id: 1,
	title: { rendered: 'Table 1' },
	advanced_wp_table_data: {
		size: {
			rows: 2,
			columns: 2,
		},
		rows: [
			[
				demoContent,
				'',
			],
			[
				'',
				'',
			],
		]
	}
};

const tables = [
	fakeTable1,
];

const updatedState = {
	...initialState,
	tables: {
		...initialState.tables,
		tables
	},
	table: {
		table: fakeTable1
	},
	ui: {
		...initialState.ui,
		view: 'table',
	}
};

describe( 'Table/TableCell', function () {
	it( 'should render the gutenberg blocks', function () {
		global.console.info = jest.fn();

		render( <App />, updatedState );

		screen.getByText( 'Hello World!!' );
	} );
} );
