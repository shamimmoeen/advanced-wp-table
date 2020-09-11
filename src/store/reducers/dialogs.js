import { createSlice } from '@reduxjs/toolkit';

const tableChangedDialog = {
	show: false,
};

const tableDeleteDialog = {
	show: false,
	id: null,
};

export const dialogs = {
	tableChangedDialog,
	tableDeleteDialog,
};

const slice = createSlice( {
	name: 'dialogs',
	initialState: dialogs,
	reducers: {
		setTableChangedDialog: ( state ) => {
			state.tableChangedDialog.show = true;
		},
		unsetTableChangedDialog: ( state ) => {
			state.tableChangedDialog = tableChangedDialog;
		},
		setTableDeleteDialog: ( state, action ) => {
			state.tableDeleteDialog.show = true;
			state.tableDeleteDialog.id = action.payload;
		},
		unsetTableDeleteDialog: ( state ) => {
			state.tableDeleteDialog = tableDeleteDialog;
		},
	},
} );

export const {
	setTableChangedDialog,
	unsetTableChangedDialog,
	setTableDeleteDialog,
	unsetTableDeleteDialog
} = slice.actions;

export default slice.reducer;
