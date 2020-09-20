import React from 'react';
import fetchMock from 'jest-fetch-mock';

import { render, fakeTable, screen, fireEvent } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import App from '../App';

fetchMock.enableMocks();

const table = fakeTable( 1, 'Table 1' );
const tables = [ table ];

describe( 'Tables/Actions', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should go to the single table', async function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		render( <App />, initialState );
		await screen.findByText( 'Edit' );
		fireEvent.click( screen.getByText( 'Edit' ) );
		screen.getByText( 'Table 1' );
	} );

	it( 'should not delete the table if cancelled', async function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		render( <App />, initialState );
		await screen.findByText( 'Delete' );
		fireEvent.click( screen.getByText( 'Delete' ) );
		screen.getByText( /Delete Table?/ );
		fireEvent.click( screen.getByText( 'Cancel' ) );
		expect( screen.queryByText( /Delete Table?/ ) ).toBeNull();
	} );

	it( 'should delete the table', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( 'Table deleted' )
			],
			[
				JSON.stringify( tables.filter( _table => 1 !== _table.id ) ),
				{
					headers: {
						'X-WP-Total': 0,
						'X-WP-TotalPages': 0,
					}
				}
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Delete' );
		fireEvent.click( screen.getByText( 'Delete' ) );
		screen.getByText( /Delete Table?/ );
		fireEvent.click( screen.getByTestId( 'delete' ) );

		await screen.findByText( /Table deleted successfully/ );

		expect( await screen.queryByText( /Oops, there was a problem when deleting the table/ ) )
			.toBeNull();
	} );

	it( 'should throw error if delete failed', async function () {
		fetchMock
			.mockResponseOnce( JSON.stringify( tables ) )
			.mockRejectOnce( new Error( 'Delete failed' ) );

		render( <App />, initialState );
		await screen.findByText( 'Delete' );
		fireEvent.click( screen.getByText( 'Delete' ) );
		screen.getByText( /Delete Table?/ );

		fireEvent.click( screen.getByTestId( 'delete' ) );
		await screen.findByText( /Table deleted successfully/ );

		await screen.findByText( /Oops, there was a problem when deleting the table/ );
	} );

	it( 'should duplicate the table', async function () {
		fetchMock.mockResponses(
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( 'Table deleted' )
			],
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Duplicate' );
		fireEvent.click( screen.getByText( 'Duplicate' ) );
		await screen.findByText( /Table duplicated successfully/ );

		expect( await screen.queryByText( /Oops, there was a problem when duplicating the table/ ) )
			.toBeNull();
	} );

	it( 'should throw error if table duplication failed', async function () {
		fetchMock
			.mockResponseOnce( JSON.stringify( tables ) )
			.mockRejectOnce( new Error( 'Table duplication failed' ) );

		render( <App />, initialState );
		await screen.findByText( 'Duplicate' );
		fireEvent.click( screen.getByText( 'Duplicate' ) );
		await screen.findByText( /Table duplicated successfully/ );

		await screen.findByText( /Oops, there was a problem when duplicating the table/ );
	} );
} );
