import { createSlice } from '@reduxjs/toolkit';
import { parseTableSize } from '../../utils/table';

export const table = {
	table: {},
	activeCell: {},
	visibleEditorToolbar: false,
	isChanged: false,
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
		setIsChanged: ( state ) => {
			state.isChanged = true;
		},
		unsetIsChanged: ( state ) => {
			state.isChanged = false;
		},
	},
} );

export const {
	setTable,
	unsetTable,
	setActiveCell,
	unsetActiveCell,
	showEditorToolbar,
	hideEditorToolbar,
	setIsChanged,
	unsetIsChanged
} = slice.actions;

export default slice.reducer;
