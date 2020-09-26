import { createSlice } from '@reduxjs/toolkit';

export const tables = {
	total: 0,
	totalPages: 1,
	perPage: 10,
	offset: 0,
	currentPage: 0,
	tables: [],
	cache: [],
};

const slice = createSlice( {
	name: 'tables',
	initialState: tables,
	reducers: {
		setTotal: ( state, action ) => {
			state.total = action.payload;
		},
		setTotalPages: ( state, action ) => {
			state.totalPages = action.payload;
		},
		setOffset: ( state, action ) => {
			state.offset = action.payload;
		},
		setCurrentPage: ( state, action ) => {
			state.currentPage = action.payload;
		},
		setTables: ( state, action ) => {
			state.tables = action.payload;
		},
		setCache: ( state, action ) => {
			state.cache = action.payload;
		},
	},
} );

export const {
	setTotal,
	setTotalPages,
	setOffset,
	setCurrentPage,
	setTables,
	setCache
} = slice.actions;

export default slice.reducer;
