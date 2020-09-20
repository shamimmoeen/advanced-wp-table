import { createSlice } from '@reduxjs/toolkit';

const tableChangedDialog = {
	show: false,
	callbackCancel: null,
	callbackLeave: null,
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
		setTableChangedDialog: ( state, action ) => {
			state.tableChangedDialog.show = true;
			state.tableChangedDialog.callbackCancel = action.payload.callbackCancel;
			state.tableChangedDialog.callbackLeave = action.payload.callbackLeave;
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
