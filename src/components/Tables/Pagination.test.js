import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { fakeTable, render, screen, fireEvent } from '../../utils/test-utils';
import App from '../App';
import initialState from '../../store/initialState';

fetchMock.enableMocks();

const tables = [
	fakeTable( 1, 'Table 1' ),
	fakeTable( 2, 'Table 2' ),
	fakeTable( 3, 'Table 3' ),
	fakeTable( 4, 'Table 4' ),
	fakeTable( 5, 'Table 5' ),
	fakeTable( 6, 'Table 6' ),
	fakeTable( 7, 'Table 7' ),
	fakeTable( 8, 'Table 8' ),
	fakeTable( 9, 'Table 9' ),
	fakeTable( 10, 'Table 10' ),
	fakeTable( 11, 'Table 11' ),
	fakeTable( 12, 'Table 12' ),
];

describe( 'Tables/Pagination', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should paginate the tables', async function () {
		const responseInit = {
			status: 200,
			headers: { 'X-WP-Total': 12, 'X-WP-TotalPages': 2 }
		};

		fetchMock.mockResponses(
			[
				JSON.stringify( tables.slice( 0, 10 ) ),
				responseInit
			],
			[
				JSON.stringify( tables.slice( 0, 10 ) ),
				responseInit
			],
			[
				JSON.stringify( tables.slice( 10 ) ),
				responseInit
			]
		);

		render( <App />, initialState );

		await screen.findByText( 'Table 1' );
		screen.getByText( 'Table 10' );

		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );

		fireEvent.click( nodes[ 0 ] );

		await screen.findByText( 'Table 11' );
		screen.getByText( 'Table 12' );
	} );
} );
