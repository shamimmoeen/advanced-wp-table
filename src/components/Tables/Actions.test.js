import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import _ from 'lodash';

import { fakeTable, fireEvent, render, screen } from '../../utils/test-utils';
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
		const testTables = [];

		for ( let i = 1; i < 6; i++ ) {
			testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

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
				JSON.stringify( 'Table deleted' )
			],
			[
				JSON.stringify( testTables.filter( _table => 1 !== _table.id ) ),
				{
					headers: {
						'X-WP-Total': 4,
						'X-WP-TotalPages': 1,
					}
				}
			],
		);

		const { container } = render( <App />, initialState );
		const deleteButtons = await screen.findAllByText( 'Delete' );
		fireEvent.click( deleteButtons[ 0 ] );
		screen.getByText( /Delete Table?/ );
		fireEvent.click( screen.getByTestId( 'delete' ) );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		expect( await screen.findByText( /deleted successfully/i ) ).toBeInTheDocument();

		for ( let i = 2; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		expect( screen.getAllByText( /4 items/i ).length ).toBe( 2 );
	} );

	it( 'should delete the table from the second page', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const testTablesAfterDelete = testTables.filter( _table => 1 !== _table.id );

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
				JSON.stringify( 'Table deleted' )
			],
			[
				JSON.stringify( _.slice( testTables, 0, 10 ) ),
				{
					headers: {
						'X-WP-Total': 14,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( _.slice( testTablesAfterDelete, 10 ) ),
				{
					headers: {
						'X-WP-Total': 14,
						'X-WP-TotalPages': 2,
					}
				}
			],
		);

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Table 15' );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		await screen.findByText( 'Table 1' );
		const deleteButtons = screen.getAllByText( 'Delete' );
		fireEvent.click( deleteButtons[ 4 ] );
		screen.getByText( /Delete Table?/ );
		fireEvent.click( screen.getByTestId( 'delete' ) );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		expect( await screen.findByText( /deleted successfully/i ) ).toBeInTheDocument();

		for ( let i = 6; i <= 15; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( 'Table 5' );

		for ( let i = 2; i <= 5; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		expect( screen.getAllByText( /14 items/i ).length ).toBe( 2 );
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

	it( 'should throw error if fetching tables failed after deleting a table', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

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
				JSON.stringify( 'Table deleted' )
			],
		);

		fetchMock.mockReject( new Error( 'Fetch table failed' ) );

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Table 15' );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		await screen.findByText( 'Table 1' );
		const deleteButtons = screen.getAllByText( 'Delete' );
		fireEvent.click( deleteButtons[ 4 ] );
		screen.getByText( /Delete Table?/ );
		fireEvent.click( screen.getByTestId( 'delete' ) );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		expect( await screen.findByText( /deleted successfully/i ) ).toBeInTheDocument();

		expect( await screen.findByText( /err.json is not a function/i ) ).toBeInTheDocument();

		for ( let i = 1; i <= 5; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		expect( screen.getAllByText( /15 items/i ).length ).toBe( 2 );
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
				JSON.stringify( fakeTable( 2, 'Table 1 (Duplicated)' ) )
			],
		);

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Duplicate' );
		fireEvent.click( screen.getByText( 'Duplicate' ) );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( /Table duplicated successfully/ );

		expect( screen.getByText( 'Table 1 (Duplicated)' ) ).toBeInTheDocument();
		expect( screen.getAllByText( /2 items/i ).length ).toBe( 2 );

		expect( await screen.queryByText( /Oops, there was a problem when duplicating the table/ ) )
			.toBeNull();
	} );

	it( 'should duplicate the table when total table is 5', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 5; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

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
				JSON.stringify( fakeTable( 6, 'Table 5 (Duplicated)' ) )
			],
		);

		const { container } = render( <App />, initialState );
		await screen.findAllByText( 'Duplicate' );
		fireEvent.click( screen.getAllByText( 'Duplicate' )[ 4 ] );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( /Table duplicated successfully/ );

		expect( screen.getByText( 'Table 5 (Duplicated)' ) ).toBeInTheDocument();
		expect( screen.getAllByText( /6 items/i ).length ).toBe( 2 );

		expect( await screen.queryByText( /Oops, there was a problem when duplicating the table/ ) )
			.toBeNull();
	} );

	it( 'should duplicate the table when total table is 15', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

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
				JSON.stringify( fakeTable( 16, 'Table 1 (Duplicated)' ) )
			],
		);

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Table 15' );

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( 'Table 1' );

		fireEvent.click( screen.getAllByText( 'Duplicate' )[ 4 ] );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( /Table duplicated successfully/ );

		expect( screen.getByText( 'Table 1 (Duplicated)' ) ).toBeInTheDocument();

		for ( let i = 7; i <= 15; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		expect( screen.getAllByText( /16 items/i ).length ).toBe( 2 );

		expect( await screen.queryByText( /Oops, there was a problem when duplicating the table/ ) )
			.toBeNull();
	} );

	it( 'should throw error if table duplication failed', async function () {
		fetchMock
			.mockResponseOnce(
				JSON.stringify( tables ),
				{
					headers: {
						'X-WP-Total': 1,
						'X-WP-TotalPages': 1,
					}
				}
			)
			.mockRejectOnce( new Error( 'Table duplication failed' ) );

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Duplicate' );
		fireEvent.click( screen.getByText( 'Duplicate' ) );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( /Table duplicated successfully/ );

		await screen.findByText( /Oops, there was a problem when duplicating the table/ );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
		expect( screen.getAllByText( /1 item/i ).length ).toBe( 2 );
	} );

	it( 'should throw error if table duplication failed when total table is 15', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		fetchMock
			.mockResponseOnce(
				JSON.stringify( _.slice( testTables, 0, 10 ) ),
				{
					headers: {
						'X-WP-Total': 15,
						'X-WP-TotalPages': 2,
					}
				}
			)
			.mockResponseOnce(
				JSON.stringify( _.slice( testTables, 10 ) ),
				{
					headers: {
						'X-WP-Total': 15,
						'X-WP-TotalPages': 2,
					}
				}
			)
			.mockRejectOnce( new Error( 'Table duplication failed' ) );

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Table 15' );

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( 'Table 1' );

		fireEvent.click( screen.getAllByText( 'Duplicate' )[ 4 ] );
		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		await screen.findByText( /Table duplicated successfully/ );

		await screen.findByText( /Oops, there was a problem when duplicating the table/ );

		for ( let i = 1; i <= 5; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		expect( screen.getAllByText( /15 items/i ).length ).toBe( 2 );
	} );
} );
