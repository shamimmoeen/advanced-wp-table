import React from 'react';
import '@testing-library/jest-dom';

import { fakeTable, render, screen, fireEvent } from '../../../utils/test-utils';
import initialState from '../../../store/initialState';
import Table from '../../Views/Table';
import App from '../../App';

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
		view: 'table',
	}
};

const actionItemDisabledClass = 'advanced-wp-table-action-item-disabled';

describe( 'Table/Actions', function () {
	it( 'should open the gutenberg editor', function () {
		const { container } = render( <App />, updatedState );
		screen.getByLabelText( 'Add Row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		const editor = container.querySelector( '.advanced-wp-table-edit-cell-modal' );
		expect( editor ).not.toBeNull();
	} );

	it( 'should delete column', function () {
		const { container } = render( <Table />, updatedState );

		const buttons = screen.getAllByText( 'Delete Column' );
		fireEvent.click( buttons[ 0 ] );

		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 2 );
	} );

	it( 'should delete row', function () {
		const { container } = render( <Table />, updatedState );

		const buttons = screen.getAllByText( 'Delete Row' );
		fireEvent.click( buttons[ 0 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 1 );
	} );

	it( 'should duplicate row', function () {
		global.console.info = jest.fn();

		const { container } = render( <App />, state );

		screen.getByText( 'Hello World!!' );

		const buttons = screen.getAllByText( 'Duplicate Row' );
		fireEvent.click( buttons[ 0 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 2 );
	} );

	it( 'should duplicate column', function () {
		global.console.info = jest.fn();

		const { container } = render( <App />, state );

		screen.getByText( 'Hello World!!' );

		const buttons = screen.getAllByText( 'Duplicate Column' );
		fireEvent.click( buttons[ 0 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 2 );

		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 6 );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 2 );
	} );

	it( 'should copy and paste the cell content', async function () {
		global.console.info = jest.fn();

		render( <App />, state );

		const pasteCellButtons = screen.getAllByText( 'Paste Cell' );
		fireEvent.click( pasteCellButtons[ 1 ] );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 1 );

		const copyCellButtons = screen.getAllByText( 'Copy Cell' );
		fireEvent.click( copyCellButtons[ 0 ] );

		fireEvent.click( pasteCellButtons[ 1 ] );

		expect( screen.getAllByText( 'Hello World!!' ).length ).toBe( 2 );
	} );

	it( 'should clear the cell content', async function () {
		global.console.info = jest.fn();

		render( <App />, state );

		const pasteCellButtons = screen.getAllByText( 'Clear Cell' );
		fireEvent.click( pasteCellButtons[ 1 ] );
		expect( screen.queryAllByText( 'Hello World!!' ).length ).toBe( 1 );

		fireEvent.click( pasteCellButtons[ 0 ] );
		expect( screen.queryAllByText( 'Hello World!!' ).length ).toBe( 0 );
	} );

	it( 'should add row', function () {
		const { container } = render( <Table />, updatedState );

		const addRowButtons = screen.getAllByText( 'Add Row' );
		fireEvent.click( addRowButtons[ 2 ] );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );
	} );

	it( 'should add column', function () {
		const { container } = render( <Table />, updatedState );

		const addColumnButtons = screen.getAllByText( 'Add Column' );
		fireEvent.click( addColumnButtons[ 2 ] );

		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 6 );
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
