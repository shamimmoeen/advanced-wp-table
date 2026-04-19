import { SnackbarList } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import { getTables, parseTableSize } from '../api';
import { showErrorNotice } from '../utils';
import BulkDeleteDialog from './List/BulkDeleteDialog';
import List from './List/List';
import NewTableDialog from './List/NewTableDialog';
import TableDeleteDialog from './List/TableDeleteDialog';
import Table from './Table/Table';
import TableChangedDialog from './Table/TableChangedDialog';

const React = wp.element;
const { useReducer, useEffect } = wp.element;

export const StateContext = React.createContext();

const newTableData = {
	title: '',
	sizeOfRows: 2,
	sizeOfColumns: 2,
};

const tableChangedDialog = {
	status: false,
	callbackCancel: null,
	callbackLeave: null,
};

const tableDeleteDialog = {
	status: false,
	id: null,
};

const bulkDeleteDialog = {
	status: false,
	ids: [],
};

const hasTables = window.advancedWpTable && window.advancedWpTable.totalTables > 0;

const initialState = {
	tablesLoading: hasTables,
	creatingTable: false,
	perPage: 10,
	currentPage: 0,
	tables: [],
	table: {},
	selectedTableIds: [],
	tableChangedDialog,
	tableDeleteDialog,
	bulkDeleteDialog,
	newTableDialog: false,
	view: 'list',
	newTableData,
};

const reducer = ( state, action ) => {
	switch ( action.type ) {
		case 'SET_VIEW':
			return { ...state, view: action.payload };

		case 'SET_TABLES_LOADING':
			return { ...state, tablesLoading: true };

		case 'UNSET_TABLES_LOADING':
			return { ...state, tablesLoading: false };

		case 'SET_CREATING_TABLE':
			return { ...state, creatingTable: true };

		case 'UNSET_CREATING_TABLE':
			return { ...state, creatingTable: false };

		case 'FETCH_TABLES':
			return { ...state, tables: action.payload, selectedTableIds: [] };

		case 'UPDATE_TABLES':
			return { ...state, tables: action.payload, selectedTableIds: [] };

		case 'SET_CURRENT_PAGE':
			return { ...state, currentPage: action.payload, selectedTableIds: [] };

		case 'SET_INPUT': {
			const data = { ...state.newTableData };
			data[ action.payload.name ] = action.payload.value;

			return { ...state, newTableData: data };
		}

		case 'CLEAR_NEW_TABLE_DATA':
			return { ...state, newTableData };

		case 'SET_TABLE':
			return { ...state, table: parseTableSize( action.payload ) };

		case 'UNSET_TABLE':
			return { ...state, table: {} };

		case 'ON_DRAG_END_TABLE': {
			const { advanced_wp_table_data: tableData } = state.table;
			const updatedTableData = { ...tableData, rows: action.payload };

			return {
				...state,
				table: {
					...state.table,
					advanced_wp_table_data: updatedTableData,
				},
			};
		}

		case 'SELECT_TABLE':
			return {
				...state,
				selectedTableIds: [ ...state.selectedTableIds, action.payload ],
			};

		case 'DESELECT_TABLE':
			return {
				...state,
				selectedTableIds: state.selectedTableIds.filter( ( id ) => id !== action.payload ),
			};

		case 'SELECT_ALL_TABLES':
			return {
				...state,
				selectedTableIds: action.payload,
			};

		case 'DESELECT_ALL_TABLES':
			return { ...state, selectedTableIds: [] };

		case 'SET_BULK_DELETE_DIALOG':
			return { ...state, bulkDeleteDialog: action.payload };

		case 'UNSET_BULK_DELETE_DIALOG':
			return { ...state, bulkDeleteDialog };

		case 'SET_NEW_TABLE_DIALOG':
			return { ...state, newTableDialog: true };

		case 'UNSET_NEW_TABLE_DIALOG':
			return { ...state, newTableDialog: false };

		case 'SET_TABLE_CHANGED_DIALOG':
			return { ...state, tableChangedDialog: action.payload };

		case 'UNSET_TABLE_CHANGED_DIALOG':
			return { ...state, tableChangedDialog };

		case 'SET_TABLE_DELETE_DIALOG':
			return { ...state, tableDeleteDialog: action.payload };

		case 'UNSET_TABLE_DELETE_DIALOG':
			return { ...state, tableDeleteDialog };

		default:
			return state;
	}
};

const App = () => {
	const [ state, dispatch ] = useReducer( reducer, initialState );
	const { view } = state;

	const notices = useSelect( ( select ) => select( noticesStore ).getNotices(), [] );
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter( ( notice ) => notice.type === 'snackbar' );

	useEffect( () => {
		if ( ! hasTables ) {
			return;
		}

		getTables()
			.then( ( tables ) => {
				dispatch( { type: 'FETCH_TABLES', payload: tables } );
				dispatch( { type: 'UNSET_TABLES_LOADING' } );
			} )
			.catch( ( err ) => {
				showErrorNotice( err.message );
				dispatch( { type: 'UNSET_TABLES_LOADING' } );
			} );
	}, [] );

	let content;

	if ( 'list' === view ) {
		content = <List />;
	} else if ( 'table' === view ) {
		content = <Table />;
	}

	return (
		<StateContext.Provider value={ { state, dispatch } }>
			<SnackbarList
				notices={ snackbarNotices }
				onRemove={ removeNotice }
				className={ 'advanced-wp-table-notices' }
			/>
			<NewTableDialog />
			<TableDeleteDialog />
			<BulkDeleteDialog />
			<TableChangedDialog />
			{ content }
		</StateContext.Provider>
	);
};

export default App;
