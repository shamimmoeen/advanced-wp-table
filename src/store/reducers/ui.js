import { createSlice } from '@reduxjs/toolkit';

import { TABLES } from '../../utils/views';

export const ui = {
	view: TABLES,
	tablesLoading: true,
	formLoading: false,
};

const slice = createSlice( {
	name: 'ui',
	initialState: ui,
	reducers: {
		setView: ( state, action ) => {
			state.view = action.payload;
		},
		setTablesLoading: ( state ) => {
			state.tablesLoading = true;
		},
		unsetTablesLoading: ( state ) => {
			state.tablesLoading = false;
		},
		setFormLoading: ( state ) => {
			state.formLoading = true;
		},
		unsetFormLoading: ( state ) => {
			state.formLoading = false;
		},
	},
} );

export const {
	setView,
	setTablesLoading,
	unsetTablesLoading,
	setFormLoading,
	unsetFormLoading
} = slice.actions;

export default slice.reducer;
