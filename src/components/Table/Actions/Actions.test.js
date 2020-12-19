import React from 'react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

import { fakeTable, fireEvent, render, screen } from '../../../utils/test-utils';
import initialState from '../../../store/initialState';
import Table from '../../Views/Table';
import App from '../../App';
import { TABLE } from '../../../utils/views';

fetchMock.enableMocks();

const fakeTable1 = fakeTable( 1, 'Table 1' );

const tables = [ fakeTable1 ];

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

const content = '<!-- wp:paragraph --><p>Hello World!!</p><!-- /wp:paragraph -->';

const table = {
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
				content,
				'',
			],
			[
				'',
				'',
			],
		]
	}
};

const tablesWithContent = [ table ];

const state = {
	...initialState,
	tables: {
		...initialState.tables,
		tables: [ table ],
	},
	table: {
		table,
	},
	ui: {
		...initialState.ui,
		view: TABLE,
	}
};

const actionItemDisabledClass = 'advanced-wp-table-action-item-disabled';

describe( 'Table/Actions', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should open the gutenberg editor', function () {
		const { container } = render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		const editor = container.querySelector( '.advanced-wp-table-edit-cell-modal' );
		expect( editor ).not.toBeNull();
	} );

	it( 'should delete column', async function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		const { container } = render( <App />, updatedState );

		const buttons = screen.getAllByText( 'Delete Column' );
		fireEvent.click( buttons[ 0 ] );

		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 2 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should delete row', async function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		const { container } = render( <App />, updatedState );

		const buttons = screen.getAllByText( 'Delete Row' );
		fireEvent.click( buttons[ 0 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 1 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should duplicate row', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tablesWithContent ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		global.console.info = jest.fn();

		const { container } = render( <App />, state );

		await screen.findByText( 'Hello World!!' );

		screen.getByText( 'Hello World!!' );

		const buttons = screen.getAllByText( 'Duplicate Row' );
		fireEvent.click( buttons[ 0 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 2 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should duplicate column', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tablesWithContent ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		global.console.info = jest.fn();

		const { container } = render( <App />, state );

		await screen.findByText( 'Hello World!!' );

		screen.getByText( 'Hello World!!' );

		const buttons = screen.getAllByText( 'Duplicate Column' );
		fireEvent.click( buttons[ 0 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 2 );

		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 6 );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 2 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should copy and paste the cell content', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tablesWithContent ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		global.console.info = jest.fn();

		render( <App />, state );

		await screen.findByText( 'Hello World!!' );

		const pasteCellButtons = screen.getAllByText( 'Paste Cell' );
		fireEvent.click( pasteCellButtons[ 1 ] );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 1 );

		const copyCellButtons = screen.getAllByText( 'Copy Cell' );
		fireEvent.click( copyCellButtons[ 0 ] );

		fireEvent.click( pasteCellButtons[ 1 ] );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 2 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should clear the cell content', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tablesWithContent ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		global.console.info = jest.fn();

		render( <App />, state );

		await screen.findByText( 'Hello World!!' );

		const pasteCellButtons = screen.getAllByText( 'Clear Cell' );
		fireEvent.click( pasteCellButtons[ 1 ] );
		expect( screen.queryAllByText( 'Hello World!!' ).length ).toBe( 1 );

		fireEvent.click( pasteCellButtons[ 0 ] );
		expect( screen.queryAllByText( 'Hello World!!' ).length ).toBe( 0 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should add row', async function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		const { container } = render( <App />, updatedState );

		const addRowButtons = screen.getAllByText( 'Add Row' );
		fireEvent.click( addRowButtons[ 2 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should add column', async function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		const { container } = render( <App />, updatedState );

		const addColumnButtons = screen.getAllByText( 'Add Column' );
		fireEvent.click( addColumnButtons[ 2 ] );

		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 6 );

		fireEvent.click( screen.getByText( 'Save' ) );
		expect( screen.getByText( 'Saving...' ) ).toBeInTheDocument();
		await screen.findByText( /save/i );
	} );

	it( 'should be disabled the copy cell buttons', function () {
		render( <Table />, updatedState );

		const buttons = screen.getAllByText( 'Copy Cell' );
		expect( buttons[ 0 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 1 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 2 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 3 ] ).toHaveClass( actionItemDisabledClass );
	} );

	it( 'should be disabled the paste cell buttons', function () {
		render( <Table />, updatedState );

		const buttons = screen.getAllByText( 'Paste Cell' );
		expect( buttons[ 0 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 1 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 2 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 3 ] ).toHaveClass( actionItemDisabledClass );
	} );

	it( 'should be disabled the clear cell buttons', function () {
		render( <Table />, updatedState );

		const buttons = screen.getAllByText( 'Clear Cell' );
		expect( buttons[ 0 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 1 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 2 ] ).toHaveClass( actionItemDisabledClass );
		expect( buttons[ 3 ] ).toHaveClass( actionItemDisabledClass );
	} );
} );
