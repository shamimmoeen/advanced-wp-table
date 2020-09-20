import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable camelcase, no-undef */
// noinspection JSUnresolvedVariable
const awt_params = window.awt_params || {
	preview_page_url: '',
};

const previewPageUrl = awt_params.preview_page_url;

export const globals = {
	previewPageUrl,
	cellContent: window.localStorage.getItem( 'cellContent' ),
};

const slice = createSlice( {
	name: 'globals',
	initialState: globals,
	reducers: {
		setCellContent: ( state, action ) => {
			state.cellContent = action.payload;
		},
	},
} );

export const { setCellContent } = slice.actions;

export default slice.reducer;
