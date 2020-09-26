import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from '../store/reducer';
import initialState from '../store/initialState';

// TODO: Test more specifically, check loading state at first, then remove the loading state

describe( 'App', () => {
	const getWrapper = ( mockStore = createStore( reducer, initialState ) ) =>
		render(
			<Provider store={ mockStore }>
				<App />
			</Provider>
		);

	it( 'should render the app', function () {
		getWrapper();
	} );
} );
