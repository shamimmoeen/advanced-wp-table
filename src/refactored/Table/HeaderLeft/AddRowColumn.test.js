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

describe( 'Table/HeaderLeft/AddRow', function () {
	it( 'should show the icon', function () {
		render( <Table />, updatedState );
		screen.getByLabelText( 'Add Row' );
	} );

	it( 'should add new column', function () {
		const { container } = render( <Table />, updatedState );
		fireEvent.click( screen.getByLabelText( 'Add Row' ) );
		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );
	} );
} );

describe( 'Table/HeaderLeft/AddColumn', function () {
	it( 'should show the icon', function () {
		render( <Table />, updatedState );
		screen.getByLabelText( 'Add Column' );
	} );

	it( 'should add new column', function () {
		const { container } = render( <Table />, updatedState );
		fireEvent.click( screen.getByLabelText( 'Add Column' ) );
		const columns = container.querySelectorAll( '[class="advanced-wp-table-cell-wrapper"]' );
		expect( columns.length ).toBe( 6 );
	} );
} );
