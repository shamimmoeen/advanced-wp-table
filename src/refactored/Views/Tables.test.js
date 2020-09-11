import React from 'react';
import fetchMock from 'jest-fetch-mock';

import initialState from '../../store/initialState';
import { render, screen, fakeTable } from '../../utils/test-utils';
import App from '../App';

fetchMock.enableMocks();

const fakeTable1 = fakeTable( 1, 'Table 1' );
const fakeTable2 = fakeTable( 2, 'Table 2' );

const tables = [
	fakeTable1,
	fakeTable2,
];

describe( 'Views/Tables', () => {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'initially render the tables', async () => {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		render( <App />, initialState );
		await screen.findByText( 'Table 1' );
		screen.getByText( 'Table 2' );
	} );
} );
