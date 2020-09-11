import { createSlice } from '@reduxjs/toolkit';

export const addTable = {
	title: '',
	sizeOfRows: 2,
	sizeOfColumns: 2,
};

const slice = createSlice( {
	name: 'table',
	initialState: addTable,
	reducers: {
		setInput: ( state, action ) => {
			state[action.payload.name] = action.payload.value;
		},
		clearInput: ( state ) => {
			state.title = addTable.title;
			state.sizeOfRows = addTable.sizeOfRows;
			state.sizeOfColumns = addTable.sizeOfColumns;
		}
	},
} );

export const { setInput, clearInput } = slice.actions;

export default slice.reducer;
