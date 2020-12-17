import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import _ from 'lodash';

import { fakeTable, fireEvent, render, screen } from '../../utils/test-utils';
import App from '../App';
import initialState from '../../store/initialState';

const tableUtils = require( '../../utils/table' );

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

		await screen.findByText( 'Table 1' );
		expect( screen.getByText( 'Table 2' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 11' ) ).not.toBeInTheDocument();

		// Go to first page
		const page1Nodes = screen.getAllByRole( 'button', { name: 'Page 1' } );
		fireEvent.click( page1Nodes[ 0 ] );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBe( 0 );

		expect( screen.getByText( 'Table 12' ) ).toBeInTheDocument();
		expect( screen.getByText( 'Table 10' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();

		// Go to second page
		fireEvent.click( page2Nodes[ 0 ] );

		expect( container.querySelectorAll( '.title-loading' ).length ).toBe( 0 );

		expect( screen.getByText( 'Table 2' ) ).toBeInTheDocument();
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();
		expect( screen.queryByText( 'Table 12' ) ).not.toBeInTheDocument();
	} );

	it( 'should throw error when paginating the tables', async function () {
		const responseInit = {
			status: 200,
			headers: { 'X-WP-Total': 12, 'X-WP-TotalPages': 2 }
		};

		fetchMock
			.mockResponseOnce(
				JSON.stringify( tables.slice( 0, 10 ) ),
				responseInit
			)
			.mockRejectOnce( new Error( 'Table fetch failed' ) );

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

		await screen.findByText( 'Table 11' );
		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
		expect( screen.queryByText( 'Table 2' ) ).not.toBeInTheDocument();
	} );

	it( 'should persist the row changes', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		const newTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 0,
					columns: 0,
				},
				type: 'layout',
				rows: []
			}
		};

		const updatedNewTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 1,
					columns: 0,
				},
				type: 'layout',
				rows: [
					[]
				]
			}
		};

		const secondPageTables = [ newTable, ...testTables ];

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
				JSON.stringify( newTable )
			],
			[
				JSON.stringify( _.slice( secondPageTables, 10 ) ),
				{
					headers: {
						'X-WP-Total': 16,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( updatedNewTable )
			],
		);

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Add New' );

		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByPlaceholderText( /size of rows/i );

		fireEvent.change( screen.getByPlaceholderText( /size of rows/i ), {
			target: { value: 0 }
		} );

		screen.getByPlaceholderText( /size of columns/i );

		fireEvent.change( screen.getByPlaceholderText( /size of columns/i ), {
			target: { value: 0 }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 0 );

		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
		await screen.findByText( 'Table 1' );

		for ( let i = 1; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		// Go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );

		for ( let i = 15; i < 6; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// Add row
		fireEvent.click( screen.getByText( newTableTitle ) );
		fireEvent.click( screen.getByLabelText( 'Add row' ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		fireEvent.click( screen.getByText( 'Save' ) );
		await screen.findByText( /successfully updated/i );

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( newTableTitle ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();

		// go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( newTableTitle ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
	} );

	it( 'should persist the column changes', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		const newTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 1,
					columns: 1,
				},
				type: 'layout',
				rows: [
					[
						''
					]
				]
			}
		};

		const updatedNewTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 1,
					columns: 2,
				},
				type: 'layout',
				rows: [
					[
						'',
						'',
					]
				]
			}
		};

		const secondPageTables = [ newTable, ...testTables ];

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
				JSON.stringify( newTable )
			],
			[
				JSON.stringify( _.slice( secondPageTables, 10 ) ),
				{
					headers: {
						'X-WP-Total': 16,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( updatedNewTable )
			],
		);

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Add New' );

		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByPlaceholderText( /size of rows/i );

		fireEvent.change( screen.getByPlaceholderText( /size of rows/i ), {
			target: { value: 1 }
		} );

		screen.getByPlaceholderText( /size of columns/i );

		fireEvent.change( screen.getByPlaceholderText( /size of columns/i ), {
			target: { value: 1 }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 1 );

		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
		await screen.findByText( 'Table 1' );

		for ( let i = 1; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		// Go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );

		for ( let i = 15; i < 6; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// Add Column
		fireEvent.click( screen.getByText( newTableTitle ) );
		fireEvent.click( screen.getByLabelText( 'Add column' ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 2 );
		fireEvent.click( screen.getByText( 'Save' ) );
		await screen.findByText( /successfully updated/i );

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( newTableTitle ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 2 );

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();

		// go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( newTableTitle ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 2 );
	} );

	it( 'should persist the title changes', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';

		const newTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 1,
					columns: 1,
				},
				type: 'layout',
				rows: [
					[
						''
					]
				]
			}
		};

		const updatedNewTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 1,
					columns: 2,
				},
				type: 'layout',
				rows: [
					[
						'',
						'',
					]
				]
			}
		};

		const secondPageTables = [ newTable, ...testTables ];

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
				JSON.stringify( newTable )
			],
			[
				JSON.stringify( _.slice( secondPageTables, 10 ) ),
				{
					headers: {
						'X-WP-Total': 16,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( updatedNewTable )
			],
		);

		const wrapper = document.createElement( 'div' );
		wrapper.setAttribute( 'id', 'wpwrap' );

		const { container } = render( <App />, initialState, {
			container: document.body.appendChild( wrapper ),
		} );
		await screen.findByText( 'Add New' );

		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByPlaceholderText( /size of rows/i );

		fireEvent.change( screen.getByPlaceholderText( /size of rows/i ), {
			target: { value: 1 }
		} );

		screen.getByPlaceholderText( /size of columns/i );

		fireEvent.change( screen.getByPlaceholderText( /size of columns/i ), {
			target: { value: 1 }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 1 );

		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
		await screen.findByText( 'Table 1' );

		for ( let i = 1; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		// Go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );

		for ( let i = 15; i < 6; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// Change title
		fireEvent.click( screen.getByText( newTableTitle ) );
		const tableTitleUpdated = 'Table title updated';
		fireEvent.click( screen.getByTestId( 'toggle-edit-mode' ) );
		fireEvent.change(
			screen.getByLabelText( 'table-title' ),
			{ target: { value: tableTitleUpdated } }
		);
		fireEvent.click( document.getElementById( 'wpwrap' ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 1 );
		fireEvent.click( screen.getByText( 'Save' ) );
		await screen.findByText( /successfully updated/i );

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( tableTitleUpdated ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 1 );

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();

		// go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );
		expect( screen.getByText( tableTitleUpdated ) ).toBeInTheDocument();

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( tableTitleUpdated ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 1 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 1 );
	} );

	it( 'should persist the block changes', async function () {
		const _testTables = [];

		for ( let i = 1; i <= 15; i++ ) {
			_testTables.push( fakeTable( i, `Table ${ i }` ) );
		}

		// ORDER BY id, DESC
		const testTables = _.reverse( _testTables );

		const newTableTitle = 'New Table';
		const content = '';
		const updatedContent = '<!-- wp:paragraph --><p>Hello World</p><!-- /wp:paragraph -->';

		const newTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 2,
					columns: 2,
				},
				type: 'layout',
				rows: [
					[
						content,
						'',
					],
					[
						'',
						'',
					],
				]
			}
		};

		const updatedNewTable = {
			id: 16,
			title: { rendered: newTableTitle },
			advanced_wp_table_data: {
				size: {
					rows: 2,
					columns: 2,
				},
				type: 'layout',
				rows: [
					[
						updatedContent,
						'',
					],
					[
						'',
						'',
					],
				]
			}
		};

		const secondPageTables = [ newTable, ...testTables ];

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
				JSON.stringify( newTable )
			],
			[
				JSON.stringify( _.slice( secondPageTables, 10 ) ),
				{
					headers: {
						'X-WP-Total': 16,
						'X-WP-TotalPages': 2,
					}
				}
			],
			[
				JSON.stringify( updatedNewTable )
			],
		);

		global.console.info = jest.fn();

		const { container } = render( <App />, initialState );
		await screen.findByText( 'Add New' );

		fireEvent.click( screen.getByText( 'Add New' ) );

		screen.getByPlaceholderText( /give a title/i );

		fireEvent.change( screen.getByPlaceholderText( /give a title/i ), {
			target: { value: newTableTitle }
		} );

		screen.getByText( 'Create' );
		fireEvent.click( screen.getByText( 'Create' ) );

		await screen.findByText( newTableTitle );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 2 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 4 );

		expect( screen.getByText( 'Back to Tables' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Back to Tables' ) );

		// Go to second page
		const nodes = screen.getAllByRole( 'button', { name: 'Page 2' } );
		fireEvent.click( nodes[ 0 ] );

		expect( screen.queryByText( 'Table 1' ) ).not.toBeInTheDocument();
		await screen.findByText( 'Table 1' );

		for ( let i = 1; i < 6; i++ ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}

		// Go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );

		for ( let i = 15; i < 6; i-- ) {
			expect( screen.getByText( `Table ${ i }` ) ).toBeInTheDocument();
		}
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// Change block content
		fireEvent.click( screen.getByText( newTableTitle ) );
		const editNodes = screen.getAllByText( 'Edit' );
		fireEvent.click( editNodes[ 0 ] );

		tableUtils.updateTableWithCellData = jest.fn( () => updatedNewTable );

		expect( screen.queryByText( 'Save Changes' ) ).toBeInTheDocument();
		fireEvent.click( screen.getByText( 'Save Changes' ) );

		await screen.findByText( 'Successfully updated' );
		expect( await screen.queryByText( 'Oops, there was a problem when updating the table' ) )
			.toBeNull();

		expect( container.querySelectorAll( 'tr' ).length ).toBe( 2 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 4 );
		expect( screen.getByText( 'Hello World' ) ).toBeInTheDocument();

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( newTableTitle ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 2 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 4 );
		expect( screen.getByText( 'Hello World' ) ).toBeInTheDocument();

		// back to list
		fireEvent.click( screen.getByText( /back to tables/i ) );

		// go to second page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 2' } )[ 0 ] );
		expect( screen.getByText( 'Table 1' ) ).toBeInTheDocument();

		// go to first page
		fireEvent.click( screen.getAllByRole( 'button', { name: 'Page 1' } )[ 0 ] );
		expect( screen.getByText( newTableTitle ) ).toBeInTheDocument();

		// go to the table and check if the update persists
		fireEvent.click( screen.getByText( newTableTitle ) );
		expect( container.querySelectorAll( 'tr' ).length ).toBe( 2 );
		expect( container.querySelectorAll( '.advanced-wp-table-cell-wrapper' ).length ).toBe( 4 );
		expect( screen.getByText( 'Hello World' ) ).toBeInTheDocument();
	} );
} );
