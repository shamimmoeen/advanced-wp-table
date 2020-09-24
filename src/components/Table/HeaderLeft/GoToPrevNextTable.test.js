import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { fakeTable, render, screen, fireEvent } from '../../../utils/test-utils';
import initialState from '../../../store/initialState';
import App from '../../App';

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

describe( 'Table/HeaderLeft/GoToPrevTable', function () {
	it( 'should show the icon', function () {
		render( <App />, updatedState );
		screen.getByLabelText( 'Go to previous table' );
	} );

	it( 'should be disabled for the first table', function () {
		render( <App />, updatedState );
		expect( screen.getByLabelText( 'Go to previous table' ) )
			.toHaveClass( 'advanced-wp-table-button-disabled' );
	} );

	it( 'should go to prev table', function () {
		const state = { ...updatedState, table: { table: fakeTable2 } };

		render( <App />, state );
		expect( screen.getByLabelText( 'Go to previous table' ) )
			.not.toHaveClass( 'advanced-wp-table-button-disabled' );

		fireEvent.click( screen.getByLabelText( 'Go to previous table' ) );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
	} );

	it( 'should not go to prev table', function () {
		render( <App />, updatedState );
		expect( screen.getByLabelText( 'Go to previous table' ) )
			.toHaveClass( 'advanced-wp-table-button-disabled' );

		fireEvent.click( screen.getByLabelText( 'Go to previous table' ) );
		expect( screen.queryByText( 'Table 2' ) ).not.toBeInTheDocument();
	} );

	it( 'should show the table changed dialog', function () {
		const state = { ...updatedState, table: { table: fakeTable2 } };

		const { container } = render( <App />, state );

		fireEvent.click( screen.getByLabelText( 'Add Row' ) );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );

		fireEvent.click( screen.getByLabelText( 'Go to previous table' ) );

		expect( screen.queryByText( /The changes you made will be lost if you leave this./i ) )
			.toBeInTheDocument();
	} );

	it( 'should discard the changes if leaving', async function () {
		const state = { ...updatedState, table: { table: fakeTable2 } };

		render( <App />, state );

		fireEvent.click( screen.getByLabelText( 'Add Row' ) );
		fireEvent.click( screen.getByLabelText( 'Go to previous table' ) );

		screen.getByText( /The changes you made will be lost if you leave this./i );
		fireEvent.click( screen.getByText( 'Leave' ) );

		expect( screen.queryByText( 'Table 1' ) ).toBeInTheDocument();
	} );

	it( 'should hide the dialog if pressed the cancel button', function () {
		const state = { ...updatedState, table: { table: fakeTable2 } };

		render( <App />, state );

		fireEvent.click( screen.getByLabelText( 'Add Row' ) );
		fireEvent.click( screen.getByLabelText( 'Go to previous table' ) );

		screen.getByText( /The changes you made will be lost if you leave this./i );
		fireEvent.click( screen.getByText( 'Cancel' ) );

		expect( screen.queryByText( 'Table 2' ) ).toBeInTheDocument();
	} );
} );

describe( 'Table/HeaderLeft/GoToNextTable', function () {
	it( 'should show the icon', function () {
		render( <App />, updatedState );
		screen.getByLabelText( 'Go to next table' );
	} );

	it( 'should be disabled for the last table', function () {
		const state = { ...updatedState, table: { table: fakeTable2 } };

		render( <App />, state );
		expect( screen.getByLabelText( 'Go to next table' ) )
			.toHaveClass( 'advanced-wp-table-button-disabled' );
	} );

	it( 'should go to next table', function () {
		render( <App />, updatedState );
		expect( screen.getByLabelText( 'Go to next table' ) )
			.not.toHaveClass( 'advanced-wp-table-button-disabled' );

		fireEvent.click( screen.getByLabelText( 'Go to next table' ) );
		expect( screen.getByText( 'Table 2' ) ).toBeInTheDocument();
	} );

	it( 'should not go to next table', function () {
		const state = { ...updatedState, table: { table: fakeTable2 } };

		render( <App />, state );
		expect( screen.getByLabelText( 'Go to next table' ) )
			.toHaveClass( 'advanced-wp-table-button-disabled' );

		fireEvent.click( screen.getByLabelText( 'Go to next table' ) );
		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
	} );

	it( 'should show the table changed dialog', function () {
		const { container } = render( <App />, updatedState );

		fireEvent.click( screen.getByLabelText( 'Add Row' ) );

		const rows = container.querySelectorAll( 'tr' );
		expect( rows.length ).toBe( 3 );

		fireEvent.click( screen.getByLabelText( 'Go to next table' ) );

		expect( screen.queryByText( /The changes you made will be lost if you leave this./i ) )
			.toBeInTheDocument();
	} );

	it( 'should discard the changes if leaving', async function () {
		render( <App />, updatedState );

		fireEvent.click( screen.getByLabelText( 'Add Row' ) );
		fireEvent.click( screen.getByLabelText( 'Go to next table' ) );

		screen.getByText( /The changes you made will be lost if you leave this./i );
		fireEvent.click( screen.getByText( 'Leave' ) );

		expect( screen.queryByText( 'Table 2' ) ).toBeInTheDocument();
	} );

	it( 'should hide the dialog if pressed the cancel button', function () {
		render( <App />, updatedState );

		fireEvent.click( screen.getByLabelText( 'Add Row' ) );
		fireEvent.click( screen.getByLabelText( 'Go to next table' ) );

		screen.getByText( /The changes you made will be lost if you leave this./i );
		fireEvent.click( screen.getByText( 'Cancel' ) );

		expect( screen.queryByText( 'Table 1' ) ).toBeInTheDocument();
	} );
} );
