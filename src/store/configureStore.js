import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';

const customizedMiddleware = getDefaultMiddleware( {
	serializableCheck: false
} );

export default function () {
	return configureStore( {
		reducer,
		middleware: customizedMiddleware,
	} );
};
