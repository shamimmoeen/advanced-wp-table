import React from 'react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

import { fireEvent, render, screen } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import App from '../App';
import { TABLE } from '../../utils/views';

fetchMock.enableMocks();

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
		view: TABLE,
	}
};

describe( 'Table/TableCell', function () {
	beforeEach( () => {
		fetchMock.resetMocks();

		// https://github.com/jsdom/jsdom/issues/3002
		document.createRange = () => {
			const range = new Range();

			range.getBoundingClientRect = () => {
				return {
					x: 0,
					y: 0,
					bottom: 0,
					height: 0,
					left: 0,
					right: 0,
					top: 0,
					width: 0,
					toJSON: () => {
					}
				};
			};

			range.getClientRects = () => {
				return {
					item: ( index ) => null,
					length: 0,
					* [ Symbol.iterator ]() {
					}
				};
			};

			return range;
		};
	} );

	it( 'should render the gutenberg blocks', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		global.console.info = jest.fn();

		render( <App />, updatedState );

		await screen.findByText( 'Hello World!!' );

		screen.getByText( 'Hello World!!' );
	} );

	it( 'should render the data table', function () {
		const dataTable = {
			id: 1,
			title: { rendered: 'Table 1' },
			advanced_wp_table_data: {
				size: {
					rows: 2,
					columns: 2,
				},
				type: 'data',
				rows: [
					[
						'1',
						'2',
					],
					[
						'3',
						'4',
					],
				]
			}
		};

		const dataTables = [
			fakeTable1,
		];

		const dataTableState = {
			...initialState,
			tables: {
				...initialState.tables,
				tables: dataTables
			},
			table: {
				table: dataTable,
				activeCell: {},
			},
			ui: {
				...initialState.ui,
				view: TABLE,
			}
		};

		render( <App />, dataTableState );

		expect( screen.getByText( '1' ) ).toBeInTheDocument();
		expect( screen.getByText( '2' ) ).toBeInTheDocument();
		expect( screen.getByText( '3' ) ).toBeInTheDocument();
		expect( screen.getByText( '4' ) ).toBeInTheDocument();
	} );

	it( 'should open the draft-js editor', async function () {
		const dataTable = {
			id: 1,
			title: { rendered: 'Table 1' },
			advanced_wp_table_data: {
				size: {
					rows: 1,
					columns: 1,
				},
				type: 'data',
				rows: [
					[
						'hello world',
					],
				]
			}
		};

		const dataTables = [
			dataTable,
		];

		fetchMock.mockResponses(
			[
				JSON.stringify( dataTables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		global.console.warn = jest.fn();

		const wrapper = document.createElement( 'div' );
		wrapper.setAttribute( 'id', 'wpwrap' );

		render( <App />, initialState, {
			container: document.body.appendChild( wrapper ),
		} );

		await screen.findByText( 'Table 1' );
		fireEvent.click( screen.getByText( 'Table 1' ) );

		fireEvent.click( screen.getByText( 'Edit' ) );

		expect( screen.getByTestId( 'quill-editor' ) ).toBeInTheDocument();

		expect( screen.getByText( /hello world/i ) ).toBeInTheDocument();
	} );
} );
