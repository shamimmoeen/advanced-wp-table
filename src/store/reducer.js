import { combineReducers } from 'redux';

import addTable from './reducers/add-table';
import cell from './reducers/cell';
import dialogs from './reducers/dialogs';
import globals from './reducers/globals';
import table from './reducers/table';
import tables from './reducers/tables';
import ui from './reducers/ui';

export default combineReducers( {
	addTable,
	cell,
	dialogs,
	globals,
	table,
	tables,
	ui,
} );
