import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { render, screen, fireEvent, fakeTable } from '../../utils/test-utils';
import AddTable from './AddTable';
import initialState from '../../store/initialState';
import { ADD_TABLE } from '../../utils/views';
import App from '../App';

fetchMock.enableMocks();

const table1 = fakeTable( 1, 'Table 1' );
const table2 = fakeTable( 2, 'New Table' );
const tables = [ table1 ];
const newTables = [ table2, table1 ];

const appState = { ...initialState, ui: { ...initialState.ui, view: ADD_TABLE } };

describe( 'Views/AddTable', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should call the onHandleInputChange function', function () {
		render( <AddTable />, initialState );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: 'table 1' }
		} );

		expect( screen.getByDisplayValue( 'table 1' ) ).toBeInTheDocument();
	} );

	it( 'should create a new table', async function () {
		fetchMock.mockResponse( JSON.stringify( fakeTable( 1, 'table 1' ) ) );

		render( <App />, appState );
		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: 'table 1' }
		} );
		fireEvent.click( screen.getByText( 'Create' ) );
		await screen.findByText( 'table 1' );
	} );

	it( 'should be able to go back after create the table', async function () {
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
				JSON.stringify( fakeTable( 2, 'New Table' ) )
			],
			[
				JSON.stringify( newTables ),
				{
					headers: {
						'X-WP-Total': 2,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Add New' );
		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: 'New Table' }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( 'New Table' );
		await screen.findByText( 'Back to Tables' );
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		screen.getByText( 'All Tables' );
		screen.getByText( 'New Table' );
	} );

	it( 'should handle exception in creating new table', async function () {
		fetchMock.mockRejectOnce( new Error( 'Create table failed' ) );

		render( <App />, appState );
		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: 'table 1' }
		} );
		fireEvent.click( screen.getByText( 'Create' ) );
		await screen.findByText( /there was a problem/i );
	} );

	it( 'should back to list of tables', function () {
		render( <App />, appState );
		fireEvent.click( screen.getByText( 'Cancel' ) );
		expect( screen.getByText( 'All Tables' ) ).toBeInTheDocument();
	} );

	it( 'should throw title required message', function () {
		render( <App />, appState );
		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: '' }
		} );
		fireEvent.click( screen.getByText( 'Create' ) );
		screen.findByText( 'Title is required' );
	} );
} );
