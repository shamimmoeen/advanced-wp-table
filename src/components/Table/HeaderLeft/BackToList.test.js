import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { fakeTable, fireEvent, render, screen } from '../../../utils/test-utils';
import App from '../../App';
import initialState from '../../../store/initialState';

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

describe( 'Table/HeaderLeft/BackToList', function () {
	it( 'should back to tables list', async () => {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		render( <App />, updatedState );
		await screen.findByText( /Back to Tables/ );
		fireEvent.click( screen.getByText( /Back to Tables/ ) );
		await screen.findByText( 'Table 1' );
	} );
} );
