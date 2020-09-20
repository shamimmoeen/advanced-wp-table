import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import {
	render,
	fakeTable,
	fireEvent,
	screen
} from '../../../utils/test-utils';
import App from '../../App';
import initialState from '../../../store/initialState';

fetchMock.enableMocks();

const fakeTable1 = fakeTable( 1, 'Table 1' );
const fakeTable2 = fakeTable( 2, 'Table 2' );

const tables = [
	fakeTable1,
	fakeTable2,
];

describe( 'Table/HeaderRight/SaveButton', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should save the table', async function () {
		fetchMock
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			)
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			)
			.mockResponseOnce( JSON.stringify( 'Table updated successfully' ) );

		render( <App />, initialState );

		await screen.findByText( 'Table 1' );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Table 1' ) );

		fireEvent.click( screen.getByLabelText( 'Add Column' ) );

		expect( screen.getByText( 'Save' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Save' ) );

		await screen.findByText( 'Successfully updated' );

		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		expect( screen.queryByText( /The changes you made will be lost if you leave this./ ) )
			.toBeNull();
	} );

	it( 'should throw error if table updated failed', async function () {
		fetchMock
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			)
			.mockResponseOnce(
				JSON.stringify( tables ),
				{ headers: { 'X-WP-Total': 2, 'X-WP-TotalPages': 1 } }
			)
			.mockRejectOnce( new Error( 'Table update failed' ) );

		render( <App />, initialState );

		await screen.findByText( 'Table 1' );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Table 1' ) );

		fireEvent.click( screen.getByLabelText( 'Add Column' ) );

		expect( screen.getByText( 'Save' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Save' ) );

		await screen.findByText( 'Successfully updated' );
		await screen.findByText( 'Oops, there was a problem when updating the table' );

		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		expect( screen.queryByText( /The changes you made will be lost if you leave this./ ) )
			.toBeInTheDocument();
	} );
} );
