import { getEmbedPreview } from './blocks';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const url = 'https://www.youtube.com/watch?v=r5MFfvh67u8';
const mockedRes = 'response';

describe( 'utils/blocks', function () {
	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should get success response from getEmbedPreview', async function () {
		fetchMock.mockResponse( JSON.stringify( mockedRes ) );

		return getEmbedPreview( url )
			.then( res => {
				expect( res ).toEqual( mockedRes );
			} );
	} );

	it( 'should get error response from getEmbedPreview', async function () {
		fetchMock.mockReject();

		return getEmbedPreview( url )
			.catch( err => {
				expect( err.code ).toEqual( 'fetch_error' );
			} );
	} );
} );
