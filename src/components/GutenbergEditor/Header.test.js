import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { fakeTable, render, screen, fireEvent } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import App from '../App';

fetchMock.enableMocks();

const tableUtils = require( '../../utils/table' );

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

describe( 'GutenbergEditor/Header', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it.skip( 'should save the gutenberg blocks', async function () {
		fetchMock
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			)
			.mockResponseOnce( JSON.stringify( fakeTable1 ) )
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			);

		render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Save' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Save' ) );

		await screen.findByText( 'Successfully updated' );
		expect( await screen.queryByText( 'Oops, there was a problem when updating the table' ) )
			.toBeNull();
	} );

	it.skip( 'should throw error if table update failed', async function () {
		fetchMock
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			)
			.mockRejectOnce( new Error( 'Table update failed' ) )
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			);

		render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Save' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Save' ) );

		await screen.findByText( 'Successfully updated' );
		expect( await screen.findByText( 'Oops, there was a problem when updating the table' ) )
			.toBeInTheDocument();
	} );

	it( 'should close the gutenberg editor', function () {
		const { container } = render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByTestId( 'close-btn' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByTestId( 'close-btn' ) );

		const editor = container.querySelector( '.advanced-wp-table-edit-cell-modal' );
		expect( editor ).not.toBeInTheDocument();
	} );

	it( 'should show the dialog when closing the gutenberg editor', function () {
		tableUtils.isActiveCellChanged = jest.fn( () => ({}) );

		render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByTestId( 'close-btn' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByTestId( 'close-btn' ) );

		expect( screen.getByText( /The changes you made will be lost if you leave this./ ) )
			.toBeInTheDocument();
	} );

	it( 'should dismiss the table modified dialog', function () {
		tableUtils.isActiveCellChanged = jest.fn( () => ({}) );

		render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByTestId( 'close-btn' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByTestId( 'close-btn' ) );

		expect( screen.getByText( /The changes you made will be lost if you leave this./ ) )
			.toBeInTheDocument();

		fireEvent.click( screen.getByText( 'Cancel' ) );

		expect( screen.queryByText( /The changes you made will be lost if you leave this./ ) )
			.toBeNull();
	} );

	it( 'should forcefully go to the list from the table modified dialog', function () {
		tableUtils.isActiveCellChanged = jest.fn( () => ({}) );

		const { container } = render( <App />, updatedState );
		screen.getByLabelText( 'Add row' );

		const nodes = screen.getAllByText( 'Edit' );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByTestId( 'close-btn' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByTestId( 'close-btn' ) );

		expect( screen.getByText( /The changes you made will be lost if you leave this./ ) )
			.toBeInTheDocument();

		fireEvent.click( screen.getByText( 'Leave' ) );

		const editor = container.querySelector( '.advanced-wp-table-edit-cell-modal' );
		expect( editor ).not.toBeInTheDocument();
	} );
} );
