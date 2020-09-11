import React from 'react';

import { render, fireEvent } from '../../utils/test-utils';
import initialState from '../../store/initialState';
import Header from './Header';
import App from '../App';

describe( 'Tables/Header', () => {
	it( 'should render the header', function () {
		const { getByText } = render( <Header />, initialState );
		getByText( 'Add New' );
	} );

	it( 'should render the add new table form', function () {
		const { getByText } = render( <App />, initialState );
		fireEvent.click( getByText( 'Add New' ) );
		getByText( 'Create' );
	} );
} );
