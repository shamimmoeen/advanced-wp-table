import { createSlice } from '@reduxjs/toolkit';
import { parseTableSize } from '../../utils/table';

// todo: isChanged, isBlocksChanged can be moved to component state

export const table = {
	table: {},
	activeCell: {},
	visibleEditorToolbar: false,
	isChanged: false,
	isBlocksChanged: false,
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
		setIsBlocksChanged: ( state ) => {
			state.isBlocksChanged = true;
		},
		unsetIsBlocksChanged: ( state ) => {
			state.isBlocksChanged = false;
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
	unsetIsChanged,
	setIsBlocksChanged,
	unsetIsBlocksChanged
} = slice.actions;

export default slice.reducer;
