import { getTable } from './table';
import fetchMock from 'jest-fetch-mock';
import { fakeTable } from './test-utils';

fetchMock.enableMocks();

const tableId = 45;
const mockedRes = fakeTable( tableId, 'Table 1' );

describe( 'utils/table', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should get the table by id', function () {
		fetchMock.mockResponse( JSON.stringify( mockedRes ) );

		return getTable( tableId )
			.then( res => {
				expect( res ).toEqual( mockedRes );
			} );
	} );

	it( 'should not get the table by id if table not exists', function () {
		fetchMock.mockReject();

		return getTable( tableId )
			.catch( err => {
				expect( err.code ).toEqual( 'fetch_error' );
			} );
	} );
} );
