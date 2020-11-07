import { createSlice } from '@reduxjs/toolkit';
import { parseTableSize } from '../../utils/table';

export const table = {
	table: {},
	activeCell: {},
	visibleEditorToolbar: false,
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
		showEditorToolbar: ( state ) => {
			state.visibleEditorToolbar = true;
		},
		hideEditorToolbar: ( state ) => {
			state.visibleEditorToolbar = false;
		},
	},
} );

export const { setTable, unsetTable, setActiveCell, unsetActiveCell, showEditorToolbar, hideEditorToolbar } = slice.actions;

export default slice.reducer;
