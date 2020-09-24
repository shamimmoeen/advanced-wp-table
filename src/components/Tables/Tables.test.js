import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { render, fakeTable, screen, fireEvent } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import App from '../App';

fetchMock.enableMocks();

const fakeTable1 = fakeTable( 1, 'Table 1' );

const tables = [ fakeTable1 ];

document.execCommand = jest.fn();

describe( 'Tables/Tables', function () {
	it( 'should navigate to single table page', async function () {
		const responseInit = {
			status: 200,
			headers: { 'X-WP-Total': 1, 'X-WP-TotalPages': 1 }
		};

		fetch.mockResponseOnce( JSON.stringify( tables ), responseInit );

		render( <App />, initialState );
		await screen.findByText( 'Table 1' );

		fireEvent.click( screen.getByText( 'Table 1' ) );
		screen.getByText( 'Table 1' );
	} );

	it( 'should copy the shortcode', async function () {
		const responseInit = {
			status: 200,
			headers: { 'X-WP-Total': 1, 'X-WP-TotalPages': 1 }
		};

		fetch.mockResponseOnce( JSON.stringify( tables ), responseInit );

		render( <App />, initialState );
		await screen.findByText( 'Table 1' );

		screen.getByDisplayValue( '[advanced_wp_table id="1"]' );
		fireEvent.click( screen.getByDisplayValue( '[advanced_wp_table id="1"]' ) );

		expect( document.execCommand ).toHaveBeenCalledWith( 'copy' );
	} );
} );
