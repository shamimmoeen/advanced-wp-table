import React from 'react';

import { render, fakeTable, screen } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import Header from './Header';

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

describe( 'Table/Header', () => {
	it( 'should render the header', () => {
		render( <Header />, updatedState );
		screen.getByText( 'Back to Tables' );
	} );
} );
