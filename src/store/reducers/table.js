import { createSlice } from '@reduxjs/toolkit';
import { parseTableSize } from '../../utils/table';

export const table = {
	table: {},
	activeCell: {},
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
		setActiveCell: ( state, action ) => {
			state.activeCell = action.payload;
		},
		unsetActiveCell: ( state ) => {
			state.activeCell = {};
		},
	},
} );

export const { setTable, unsetTable, setActiveCell, unsetActiveCell } = slice.actions;

export default slice.reducer;
