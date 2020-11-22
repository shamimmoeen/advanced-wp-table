import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import {
	render,
	fakeTable,
	fireEvent,
	screen,
} from '../../../../utils/test-utils';
import initialState from '../../../../store/initialState';
import { TABLE } from '../../../../utils/views';
import App from '../../../App';

fetchMock.enableMocks();

const fakeTable1 = fakeTable( 1, 'Table 1' );
const fakeTable2 = fakeTable( 2, 'Table 2' );

const tables = [
	fakeTable1,
	fakeTable2,
];

const updatedState = {
	...initialState,
	tables: {
		...initialState.tables,
		tables
	},
	table: {
		table: fakeTable1
	},
	ui: {
		...initialState.ui,
		view: TABLE,
	}
};

document.execCommand = jest.fn();

describe( 'Table/HeaderRight/CopyShortCodeButton', function () {
	it( 'should copy the shortcode', function () {
		const { container } = render( <App />, updatedState );
		expect( container.querySelector( '.copy-shortcode' ) ).toBeInTheDocument();
		fireEvent.click( container.querySelector( '.copy-shortcode' ) );
		expect( document.execCommand ).toHaveBeenCalledWith( 'copy' );
		screen.findByText( 'Shortcode copied' );
	} );
} );
