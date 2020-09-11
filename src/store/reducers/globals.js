import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable camelcase, no-undef */
// noinspection JSUnresolvedVariable
const awt_params = window.awt_params || {
	preview_page_url: '',
};

const previewPageUrl = awt_params.preview_page_url;

export const globals = {
	previewPageUrl,
};

const slice = createSlice( {
	name: 'globals',
	initialState: globals,
	reducers: {},
} );

export default slice.reducer;
