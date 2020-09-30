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

	it( 'should have the table type option', function () {
		render( <AddTable />, initialState );

		expect( screen.getByLabelText( /layout table/i ) ).toBeInTheDocument();
		expect( screen.getByLabelText( /data table/i ) ).toBeInTheDocument();

		fireEvent.click( screen.getByLabelText( /data table/i ) );
		expect( screen.getByRole( 'radio', { name: 'Data Table', checked: true } ) ).toBeInTheDocument();
	} );

	it( 'should create a new table', async function () {
		const fakeTable1 = fakeTable( 1, 'Table 1' );
		const fakeTable2 = fakeTable( 2, 'New Table', 'data' );

		const initialTables = [ fakeTable1 ];
		const afterTables = [ fakeTable1, fakeTable2 ];

		fetchMock.mockResponses(
			[
				JSON.stringify( initialTables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			],
			[
				JSON.stringify( fakeTable2 )
			],
			[
				JSON.stringify( afterTables ),
				{
					headers: {
						'X-WP-Total': 2,
						'X-WP-TotalPages': 1,
					}
				}
			]
		);

		render( <App />, initialState );
		fireEvent.click( await screen.findByText( /add new/i ) );
		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: 'New Table' }
		} );
		fireEvent.click( screen.getByLabelText( /data table/i ) );
		fireEvent.click( screen.getByText( 'Create' ) );
		await screen.findByText( 'New Table' );

		fireEvent.click( screen.getByText( /back to tables/i ) );
		await screen.findByText( 'New Table' );

		expect( screen.getByText( /data table/i ) ).toBeInTheDocument();
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

		for ( let i = 1; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}
	} );

	it( 'should be able to go back after create the table when total tables is 10', async function () {
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
			[
				JSON.stringify( [ _.last( testTables ) ] ),
				{
					headers: {
						'X-WP-Total': 11,
						'X-WP-TotalPages': 2,
					}
				}
			],
		);

		render( <App />, initialState );
		await screen.findByText( 'Add New' );

		for ( let i = 1; i < 11; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

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

		for ( let i = 10; i > 1; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		expect( nodes.length ).toBe( 2 );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
		await screen.findByText( 'Table 1' );
		for ( let i = 2; i < 11; i++ ) {
			expect( screen.queryByText( `Table ${ i }` ) ).not.toBeInTheDocument();
		}
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
	} );

	it( 'should be able to go back after create the table when total tables is 15', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		fetchMock.mockResponses(
			[
				JSON.stringify( _.slice( testTables, 0, 10 ) ),
				{
					headers: {
						'X-WP-Total': 15,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( _.slice( testTables, 10 ) ),
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

		for ( let i = 15; i > 5; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		await screen.findByText( 'Table 5' );

		for ( let i = 1; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		for ( let i = 15; i > 5; i-- ) {
			expect( screen.queryByText( `Table ${ i }` ) ).not.toBeInTheDocument();
		}

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

		// Check if are in first page
		const page1Nodes = screen.getAllByRole( 'button', { name: 'Page 1 is your current page' } );
		expect( page1Nodes.length ).toBe( 2 );

		expect( screen.getAllByText( /16 items/i ).length ).toBe( 2 );
		expect( screen.getByText( 'All Tables' ) ).toBeInTheDocument();

		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();
		for ( let i = 15; i > 6; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		for ( let i = 1; i < 7; i++ ) {
			expect( screen.queryByText( `Table ${ i }` ) ).not.toBeInTheDocument();
		}
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
