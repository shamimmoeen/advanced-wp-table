import React from 'react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import { fakeTable, fireEvent, render, screen } from '../../../utils/test-utils';
import App from '../../App';
import Header from '../Header';
import initialState from '../../../store/initialState';

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
		view: 'table',
	}
};

describe( 'Table/HeaderMiddle/Title', function () {
	const editTableTitle = () => {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		const wrapper = document.createElement( 'div' );
		wrapper.setAttribute( 'id', 'wpwrap' );

		render( <App />, updatedState, {
			container: document.body.appendChild( wrapper ),
		} );

		fireEvent.click( screen.getByTestId( 'toggle-edit-mode' ) );

		fireEvent.change(
			screen.getByLabelText( 'table-title' ),
			{ target: { value: 'Table title updated' } }
		);

		fireEvent.click( document.getElementById( 'wpwrap' ) );
	};

	beforeEach( () => {
		fetchMock.resetMocks();
	} );

	it( 'should toggle the title edit mode', function () {
		const wrapper = document.createElement( 'div' );
		wrapper.setAttribute( 'id', 'wpwrap' );

		render( <Header />, updatedState, {
			container: document.body.appendChild( wrapper ),
		} );

		fireEvent.click( screen.getByTestId( 'toggle-edit-mode' ) );
		screen.getByDisplayValue( 'Table 1' );

		fireEvent.click( screen.getByDisplayValue( 'Table 1' ) );
		expect( screen.queryByTestId( 'toggle-edit-mode' ) ).toBeNull();

		fireEvent.click( document.getElementById( 'wpwrap' ) );
		screen.getByTestId( 'toggle-edit-mode' );
	} );

	it( 'should close the title edit mode', function () {
		const wrapper = document.createElement( 'div' );
		wrapper.setAttribute( 'id', 'wpwrap' );

		const { container } = render( <Header />, updatedState, {
			container: document.body.appendChild( wrapper ),
		} );

		// Check keyUp event for the shift button
		fireEvent.click( screen.getByTestId( 'toggle-edit-mode' ) );
		screen.getByDisplayValue( 'Table 1' );

		fireEvent.keyUp( container, {
			key: 'Shift',
			code: 'Shift',
			keyCode: 16,
			charCode: 16
		} );

		expect( screen.queryByTestId( 'toggle-edit-mode' ) ).toBeNull();

		// Check keyUp event for the escape button
		fireEvent.keyUp( container, {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27
		} );

		expect( screen.getByTestId( 'toggle-edit-mode' ) ).toBeInTheDocument();

		// Check keyUp event for the enter button
		fireEvent.click( screen.getByTestId( 'toggle-edit-mode' ) );
		screen.getByDisplayValue( 'Table 1' );

		fireEvent.keyUp( container, {
			key: 'Enter',
			code: 'Enter',
			keyCode: 13,
			charCode: 13
		} );

		expect( screen.getByTestId( 'toggle-edit-mode' ) ).toBeInTheDocument();
	} );

	it( 'should change the title', async function () {
		editTableTitle();

		expect( screen.getByText( 'Table title updated' ) ).toBeInTheDocument();
	} );

	it( 'should discard the changes if leaving', async function () {
		editTableTitle();

		screen.getByText( /Back to Tables/ );
		fireEvent.click( screen.getByText( /Back to Tables/ ) );

		screen.getByText( /The changes you made will be lost if you leave this./ );
		fireEvent.click( screen.getByText( 'Leave' ) );

		expect( screen.queryByText( /Back to Tables/ ) ).toBeNull();
	} );

	it( 'should hide the dialog if pressed the cancel button', function () {
		editTableTitle();

		screen.getByText( /Back to Tables/ );
		fireEvent.click( screen.getByText( /Back to Tables/ ) );

		screen.getByText( /The changes you made will be lost if you leave this./ );
		fireEvent.click( screen.getByText( 'Cancel' ) );

		expect( screen.queryByText( /The changes you made will be lost if you leave this./ ) )
			.toBeNull();
	} );

	it( 'should throw error if title is empty', function () {
		fetchMock.mockResponse( JSON.stringify( tables ) );

		const wrapper = document.createElement( 'div' );
		wrapper.setAttribute( 'id', 'wpwrap' );

		render( <App />, updatedState, {
			container: document.body.appendChild( wrapper ),
		} );

		fireEvent.click( screen.getByTestId( 'toggle-edit-mode' ) );

		fireEvent.change(
			screen.getByLabelText( 'table-title' ),
			{ target: { value: '' } }
		);

		fireEvent.click( document.getElementById( 'wpwrap' ) );
		expect( screen.queryByTestId( 'toggle-edit-mode' ) ).toBeNull();

		fireEvent.click( screen.getByText( 'Back to Tables' ) );
		expect( screen.queryByTestId( 'toggle-edit-mode' ) ).toBeNull();
	} );
} );
