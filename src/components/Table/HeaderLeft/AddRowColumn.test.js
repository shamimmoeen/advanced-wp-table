import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { fakeTable, render, screen, fireEvent } from '../../../utils/test-utils';
import initialState from '../../../store/initialState';
import Table from '../../Views/Table';

fetchMock.enableMocks();

const fakeTable1 = fakeTable( 1, 'Table 1' );
const fakeTable2 = fakeTable( 2, 'Table 2' );

const tables = [
	fakeTable1,
	fakeTable2,
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

const table = {
	id: 1,
	title: { rendered: 'Table title' },
	advanced_wp_table_data: {
		size: {
			rows: 0,
			columns: 0,
		},
		rows: []
	}
};

const state = {
	...initialState,
	tables: {
		...initialState.tables,
		tables: [ table ]
	},
	table: {
		table
	},
	ui: {
		...initialState.ui,
		view: 'table',
	}
};

describe( 'Table/HeaderLeft/AddRow', function () {
	it( 'should show the icon', function () {
		render( <Table />, updatedState );
		screen.getByLabelText( 'Add row' );
	} );

	it( 'should add new row', function () {
		const { container } = render( <Table />, updatedState );
		fireEvent.click( screen.getByLabelText( 'Add row' ) );
		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );
	} );

	it( 'should add new row for column 0', function () {
		const { container } = render( <Table />, state );
		const prevRows = container.querySelectorAll( 'tr' );
		expect( prevRows.length ).toBe( 0 );

		fireEvent.click( screen.getByLabelText( 'Add row' ) );
		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 1 );
	} );
} );

describe( 'Table/HeaderLeft/AddColumn', function () {
	it( 'should show the icon', function () {
		render( <Table />, updatedState );
		screen.getByLabelText( 'Add column' );
	} );

	it( 'should add new column', function () {
		const { container } = render( <Table />, updatedState );
		fireEvent.click( screen.getByLabelText( 'Add column' ) );
		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 6 );
	} );

	it( 'should not add new column for row 0', function () {
		const { container } = render( <Table />, state );
		const prevRows = container.querySelectorAll( 'tr' );
		expect( prevRows.length ).toBe( 0 );

		fireEvent.click( screen.getByLabelText( 'Add column' ) );
		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 0 );
	} );
} );
