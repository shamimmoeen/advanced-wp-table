import { createSlice } from '@reduxjs/toolkit';

export const tables = {
	total: 0,
	totalPages: 1,
	perPage: 10,
	offset: 0,
	currentPage: 0,
	tables: [],
};

const slice = createSlice( {
	name: 'list',
	initialState: tables,
	reducers: {
		setTotal: ( state, action ) => {
			state.total = action.payload;
		},
		setTotalPages: ( state, action ) => {
			state.totalPages = action.payload;
		},
		setTables: ( state, action ) => {
			state.tables = action.payload;
		},
		paginateTables: ( state, action ) => {
			state.offset = action.payload.offset;
			state.currentPage = action.payload.currentPage;
		},
	},
} );

export const { setTotal, setTotalPages, setTables, paginateTables } = slice.actions;

export default slice.reducer;
