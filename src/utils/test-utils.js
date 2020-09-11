// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../store/reducer';

const render = ( child, state, options = {} ) => {
	const mockStore = createStore( reducer, state );

	return rtlRender(
		<Provider store={ mockStore }>
			{ child }
		</Provider>,
		options
	);
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };

export function fakeTable( id, title ) {
	return {
		id,
		title: { rendered: title },
		advanced_wp_table_data: {
			size: {
				rows: 2,
				columns: 2,
			},
			rows: [
				[
					'',
					'',
				],
				[
					'',
					'',
				],
			]
		}
	};
}
