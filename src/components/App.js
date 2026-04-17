import { registerCoreBlocks } from '@wordpress/block-library';
import { SnackbarList } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import { getTables, parseTableSize } from '../utils/table';
import { toastError } from '../utils/utils';
import EditCellModal from './EditCellModal/EditCellModal';
import List from './List/List';
import NewTable from './NewTable/NewTable';
import Table from './Table/Table';
import TableChangedDialog from './TableChangedDialog/TableChangedDialog';
import TableDeleteDialog from './TableDeleteDialog/TableDeleteDialog';

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

const initialState = {
	loading: true,
	tablesLoading: true,
	formLoading: false,
	total: 0,
	totalPages: 1,
	perPage: 10,
	offset: 0,
	currentPage: 0,
	tables: [],
	table: {},
	tableData: [],
	activeCell: {},
	tableChangedDialog,
	tableDeleteDialog,
	view: 'list',
	newTableData,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_VIEW':
			return { ...state, view: action.payload };

		case 'SET_LOADING':
			return { ...state, loading: true };

		case 'UNSET_LOADING':
			return { ...state, loading: false };

		case 'SET_TABLES_LOADING':
			return { ...state, tablesLoading: true };

		case 'UNSET_TABLES_LOADING':
			return { ...state, tablesLoading: false };

		case 'SET_FORM_LOADING':
			return { ...state, formLoading: true };

		case 'UNSET_FORM_LOADING':
			return { ...state, formLoading: false };

		case 'FETCH_TABLES':
			const { total, totalPages, tables } = action.payload;

			return { ...state, total, totalPages, tables };

		case 'UPDATE_TOTAL':
			return {
				...state,
				total: action.payload,
				totalPages: Math.ceil( action.payload / state.perPage ),
			};

		case 'UPDATE_TABLES':
			return { ...state, tables: action.payload };

		case 'PAGINATE_TABLES':
			return {
				...state,
				offset: action.payload.offset,
				currentPage: action.payload.currentPage,
			};

		case 'SET_INPUT':
			const data = { ...state.newTableData };
			data[action.payload.name] = action.payload.value;

			return { ...state, newTableData: data };

		case 'CLEAR_NEW_TABLE_DATA':
			return { ...state, newTableData };

		case 'SET_TABLE':
			return { ...state, table: parseTableSize(action.payload) };

		case 'UNSET_TABLE':
			return { ...state, table: {} };

		case 'ON_DRAG_END_TABLE':
			const { advanced_wp_table_data: tableData } = state.table;
			const updatedTableData = { ...tableData, rows: action.payload };

			return {
				...state,
				table: {
					...state.table,
					advanced_wp_table_data: updatedTableData,
				},
			};

		case 'SET_ACTIVE_CELL':
			return { ...state, activeCell: action.payload };

		case 'UNSET_ACTIVE_CELL':
			return { ...state, activeCell: {} };

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
	const [state, dispatch] = useReducer(reducer, initialState);
	const { perPage, offset, view } = state;

	const notices = useSelect( ( select ) => select( noticesStore ).getNotices(), [] );
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter( ( notice ) => notice.type === 'snackbar' );

	const fetchTables = () => {
		dispatch({ type: 'SET_TABLES_LOADING' });

		getTables(perPage, offset)
			.then((response) => {
				dispatch({ type: 'FETCH_TABLES', payload: response });
				dispatch({ type: 'UNSET_TABLES_LOADING' });
			})
			.catch((err) => {
				toastError(err.message);
				dispatch({ type: 'UNSET_TABLES_LOADING' });
			});
	};

	/**
	 * Initially fetch the tables from the database.
	 */
	useEffect(() => {
		fetchTables();
		dispatch({ type: 'UNSET_LOADING' });
	}, []);

	/**
	 * Fetch the tables when offset gets changed.
	 */
	useEffect(() => {
		if (state.loading) {
			return;
		}

		fetchTables();
	}, [offset]);

	/**
	 * Register the gutenberg core blocks.
	 */
	useEffect(() => {
		registerCoreBlocks();

		// Since wp 5.4 core/freeform, core/shortcode block issues are fixed.
		const disAllowedBlocks = [];

		wp.blocks.getBlockTypes().forEach((blockType) => {
			if (disAllowedBlocks.includes(blockType.name)) {
				wp.blocks.unregisterBlockType(blockType.name);
			}
		});
	}, []);

	let content;

	if ('list' === view) {
		content = <List />;
	} else if ('form' === view) {
		content = <NewTable />;
	} else if ('table' === view) {
		content = <Table />;
	} else if ('editCellModal' === view) {
		content = <EditCellModal />;
	}

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			<SnackbarList
				notices={ snackbarNotices }
				onRemove={ removeNotice }
				className={ 'advanced-wp-table-notices' }
			/>
			<TableDeleteDialog />
			<TableChangedDialog />
			{content}
		</StateContext.Provider>
	);
};

export default App;
