import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import _ from 'lodash';

import { fakeTable, fireEvent, render, screen } from '../../utils/test-utils';
import AddTable from './AddTable';
import initialState from '../../store/initialState';
import { ADD_TABLE } from '../../utils/views';
import App from '../App';

fetchMock.enableMocks();

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

	it( 'should be able to go back after create the table when total tables is 5', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 5; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		fetchMock.mockResponses(
			[
				JSON.stringify( testTables ),
				{
					headers: {
						'X-WP-Total': 5,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( fakeTable( 6, newTableTitle ) )
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Add New' );
		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		expect( screen.getByText( 'All Tables' ) ).toBeInTheDocument();
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		expect( screen.queryByText( 'Table 1' ) ).toBeInTheDocument();
	} );

	it( 'should be able to go back after create the table  when total tables is 10', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 10; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		fetchMock.mockResponses(
			[
				JSON.stringify( testTables ),
				{
					headers: {
						'X-WP-Total': 10,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( fakeTable( 11, newTableTitle ) )
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Add New' );
		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		expect( screen.getByText( 'All Tables' ) ).toBeInTheDocument();
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		expect( nodes.length ).toBe( 2 );
	} );

	it( 'should be able to go back after create the table  when total tables is 15', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		fetchMock.mockResponses(
			[
				JSON.stringify( testTables ),
				{
					headers: {
						'X-WP-Total': 15,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( fakeTable( 16, newTableTitle ) )
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Add New' );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		expect( screen.getByText( 'All Tables' ) ).toBeInTheDocument();
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
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

	it( 'should back to list of tables if the cancel button clicked', function () {
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

	it( 'should set the sizeOfRows to 0', function () {
		render( <App />, appState );

		fireEvent.change( screen.getByPlaceholderText( /Size of rows/i ), {
			target: { value: -1 }
		} );

		expect( screen.getByPlaceholderText( /Size of rows/i ).value ).toBe( '0' );
	} );

	it( 'should set the sizeOfColumns to 0', function () {
		render( <App />, appState );

		fireEvent.change( screen.getByPlaceholderText( /Size of columns/i ), {
			target: { value: -1 }
		} );

		expect( screen.getByPlaceholderText( /Size of columns/i ).value ).toBe( '0' );
	} );
} );
