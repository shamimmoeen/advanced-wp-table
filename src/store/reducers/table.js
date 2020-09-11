import { createSlice } from '@reduxjs/toolkit';
import { parseTableSize } from '../../utils/table';

export const table = {
	table: {},
};

const slice = createSlice( {
	name: 'table',
	initialState: table,
	reducers: {
		setTable: ( state, action ) => {
			state.table = parseTableSize( action.payload );
		},
		unsetTable: ( state ) => {
			state.table = {};
		},
	},
} );

export const { setTable, unsetTable } = slice.actions;

export default slice.reducer;
