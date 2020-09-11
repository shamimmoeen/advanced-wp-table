import { createSlice } from '@reduxjs/toolkit';

export const cell = {
	activeCell: {},
};

const slice = createSlice( {
	name: 'cell',
	initialState: cell,
} );

export default slice.reducer;
