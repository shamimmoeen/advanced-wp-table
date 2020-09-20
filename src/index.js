import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';

/**
 * This is important, the port should be same as the devPort in webpack.config.js file.
 */

/* eslint-disable camelcase, no-undef */
// noinspection JSUnresolvedVariable
__webpack_public_path__ = 'http://localhost:8083/';

const rootElement = document.getElementById( 'advanced-wp-table-wrapper' );

const store = configureStore();

if ( rootElement ) {
	render(
		<Provider store={ store }>
			<App />
		</Provider>,
		rootElement
	);
}
