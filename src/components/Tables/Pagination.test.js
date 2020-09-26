import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { fakeTable, fireEvent, render, screen } from '../../utils/test-utils';
import App from '../App';
import initialState from '../../store/initialState';
import _ from 'lodash';

fetchMock.enableMocks();

const _tables = [];

for ( let i = 1; i <= 12; i++ ) {
	_tables.push( fakeTable( i, `Table ${ i }` ) );
}

// ORDER BY id, DESC
const tables = _.reverse( _tables );

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
				JSON.stringify( tables.slice( 10 ) ),
				responseInit
			],
		);

		const { container } = render( <App />, initialState );

		await screen.findByText( 'Table 12' );
		expect( screen.getByText( 'Table 10' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();

		// Go to second page
		const page2Nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( page2Nodes[ 0 ] );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBeGreaterThan( 0 );
		expect( container.querySelectorAll( '.actions-loading' ).length ).toBeGreaterThan( 0 );
		expect( container.querySelectorAll( '.shortcode-loading' ).length ).toBeGreaterThan( 0 );

		await screen.findByText( 'Table 1' );
		expect( screen.getByText( 'Table 2' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 11' ) ).not.toBeInTheDocument();

		// Go to first page
		const page1Nodes = screen.getAllByRole( 'button', { name: 'Page 1' } );
		fireEvent.click( page1Nodes[ 0 ] );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBe( 0 );
		expect( container.querySelectorAll( '.actions-loading' ).length ).toBe( 0 );
		expect( container.querySelectorAll( '.shortcode-loading' ).length ).toBe( 0 );

		expect( screen.getByText( 'Table 12' ) ).toBeInTheDocument();
		expect( screen.getByText( 'Table 10' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();

		// Go to second page
		fireEvent.click( page2Nodes[ 0 ] );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBe( 0 );
		expect( container.querySelectorAll( '.actions-loading' ).length ).toBe( 0 );
		expect( container.querySelectorAll( '.shortcode-loading' ).length ).toBe( 0 );

		expect( screen.getByText( 'Table 2' ) ).toBeInTheDocument();
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 12' ) ).not.toBeInTheDocument();
	} );
} );
