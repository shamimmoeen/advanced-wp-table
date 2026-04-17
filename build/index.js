/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js"
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateContext: () => (/* binding */ StateContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List/List */ "./src/components/List/List.js");
/* harmony import */ var _NewTable_NewTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewTable/NewTable */ "./src/components/NewTable/NewTable.js");
/* harmony import */ var _Table_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Table/Table */ "./src/components/Table/Table.js");
/* harmony import */ var _TableChangedDialog_TableChangedDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableChangedDialog/TableChangedDialog */ "./src/components/TableChangedDialog/TableChangedDialog.js");
/* harmony import */ var _TableDeleteDialog_TableDeleteDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableDeleteDialog/TableDeleteDialog */ "./src/components/TableDeleteDialog/TableDeleteDialog.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const React = wp.element;
const {
  useReducer,
  useEffect
} = wp.element;
const StateContext = React.createContext();
const newTableData = {
  title: '',
  sizeOfRows: 2,
  sizeOfColumns: 2
};
const tableChangedDialog = {
  status: false,
  callbackCancel: null,
  callbackLeave: null
};
const tableDeleteDialog = {
  status: false,
  id: null
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
  tableChangedDialog,
  tableDeleteDialog,
  view: 'list',
  newTableData
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return {
        ...state,
        view: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'UNSET_LOADING':
      return {
        ...state,
        loading: false
      };
    case 'SET_TABLES_LOADING':
      return {
        ...state,
        tablesLoading: true
      };
    case 'UNSET_TABLES_LOADING':
      return {
        ...state,
        tablesLoading: false
      };
    case 'SET_FORM_LOADING':
      return {
        ...state,
        formLoading: true
      };
    case 'UNSET_FORM_LOADING':
      return {
        ...state,
        formLoading: false
      };
    case 'FETCH_TABLES':
      const {
        total,
        totalPages,
        tables
      } = action.payload;
      return {
        ...state,
        total,
        totalPages,
        tables
      };
    case 'UPDATE_TOTAL':
      return {
        ...state,
        total: action.payload,
        totalPages: Math.ceil(action.payload / state.perPage)
      };
    case 'UPDATE_TABLES':
      return {
        ...state,
        tables: action.payload
      };
    case 'PAGINATE_TABLES':
      return {
        ...state,
        offset: action.payload.offset,
        currentPage: action.payload.currentPage
      };
    case 'SET_INPUT':
      const data = {
        ...state.newTableData
      };
      data[action.payload.name] = action.payload.value;
      return {
        ...state,
        newTableData: data
      };
    case 'CLEAR_NEW_TABLE_DATA':
      return {
        ...state,
        newTableData
      };
    case 'SET_TABLE':
      return {
        ...state,
        table: (0,_utils_table__WEBPACK_IMPORTED_MODULE_3__.parseTableSize)(action.payload)
      };
    case 'UNSET_TABLE':
      return {
        ...state,
        table: {}
      };
    case 'ON_DRAG_END_TABLE':
      const {
        advanced_wp_table_data: tableData
      } = state.table;
      const updatedTableData = {
        ...tableData,
        rows: action.payload
      };
      return {
        ...state,
        table: {
          ...state.table,
          advanced_wp_table_data: updatedTableData
        }
      };
    case 'SET_TABLE_CHANGED_DIALOG':
      return {
        ...state,
        tableChangedDialog: action.payload
      };
    case 'UNSET_TABLE_CHANGED_DIALOG':
      return {
        ...state,
        tableChangedDialog
      };
    case 'SET_TABLE_DELETE_DIALOG':
      return {
        ...state,
        tableDeleteDialog: action.payload
      };
    case 'UNSET_TABLE_DELETE_DIALOG':
      return {
        ...state,
        tableDeleteDialog
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    perPage,
    offset,
    view
  } = state;
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store);
  const snackbarNotices = notices.filter(notice => notice.type === 'snackbar');
  const fetchTables = () => {
    dispatch({
      type: 'SET_TABLES_LOADING'
    });
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_3__.getTables)(perPage, offset).then(response => {
      dispatch({
        type: 'FETCH_TABLES',
        payload: response
      });
      dispatch({
        type: 'UNSET_TABLES_LOADING'
      });
    }).catch(err => {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.toastError)(err.message);
      dispatch({
        type: 'UNSET_TABLES_LOADING'
      });
    });
  };

  /**
   * Initially fetch the tables from the database.
   */
  useEffect(() => {
    fetchTables();
    dispatch({
      type: 'UNSET_LOADING'
    });
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
  let content;
  if ('list' === view) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_List_List__WEBPACK_IMPORTED_MODULE_5__["default"], {});
  } else if ('form' === view) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_NewTable_NewTable__WEBPACK_IMPORTED_MODULE_6__["default"], {});
  } else if ('table' === view) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Table_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(StateContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SnackbarList, {
      notices: snackbarNotices,
      onRemove: removeNotice,
      className: 'advanced-wp-table-notices'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_TableDeleteDialog_TableDeleteDialog__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_TableChangedDialog_TableChangedDialog__WEBPACK_IMPORTED_MODULE_8__["default"], {}), content]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ },

/***/ "./src/components/List/Actions.js"
/*!****************************************!*\
  !*** ./src/components/List/Actions.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Actions = ({
  table
}) => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
  const {
    state,
    dispatch
  } = stateContext;
  const {
    tables
  } = state;
  const {
    id
  } = table;
  const total = parseInt(state.total);
  const onHandleNavigateToTable = () => {
    dispatch({
      type: 'UNSET_TABLE_CHANGED'
    });
    dispatch({
      type: 'SET_TABLE',
      payload: table
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
  };
  const onHandleDuplicateTable = () => {
    const oldTables = [...tables];
    const tempTable = (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.prepareTableToDuplicate)(oldTables, id);
    const tempTables = [tempTable, ...oldTables];
    const newTableData = {
      title: tempTable.title.rendered,
      advanced_wp_table_data: tempTable.advanced_wp_table_data
    };

    // Insert the temp table at the top of the tables list.
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: total + 1
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: tempTables
    });
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastSuccess)(__('Table duplicated successfully', 'advanced-wp-table'));

    // Insert the table into database.
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.postTable)(newTableData).then(newTable => {
      // Replace the duplicated table with the temp table.
      const newTables = tempTables.map(item => {
        if (tempTable.id === item.id) {
          return newTable;
        }
        return item;
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: newTables
      });

      // If we are not in the first page then paginate the tables to the first page.
      dispatch({
        type: 'PAGINATE_TABLES',
        payload: {
          offset: 0,
          currentPage: 0
        }
      });
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastError)(__('Oops, there was a problem when duplicating the table', 'advanced-wp-table'));
    });
  };
  const onHandleDeleteTable = e => {
    e.preventDefault();
    dispatch({
      type: 'SET_TABLE_DELETE_DIALOG',
      payload: {
        status: true,
        id
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: 'row-actions',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: 'edit',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button-link',
        onClick: onHandleNavigateToTable,
        children: __('Edit', 'advanced-wp-table')
      })
    }), ` | `, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: 'duplicate',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button-link',
        onClick: onHandleDuplicateTable,
        children: __('Duplicate', 'advanced-wp-table')
      })
    }), ` | `, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: 'trash',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: '#/',
        onClick: onHandleDeleteTable,
        children: __('Delete', 'advanced-wp-table')
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);

/***/ },

/***/ "./src/components/List/Header.js"
/*!***************************************!*\
  !*** ./src/components/List/Header.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Header = () => {
  const {
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_0__.StateContext);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: 'advanced-wp-table-header',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: 'advanced-wp-table-header-inner',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        children: __('All Tables', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        className: 'button',
        onClick: () => dispatch({
          type: 'SET_VIEW',
          payload: 'form'
        }),
        children: __('Add New', 'advanced-wp-table')
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ },

/***/ "./src/components/List/List.js"
/*!*************************************!*\
  !*** ./src/components/List/List.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/List/Header.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination */ "./src/components/List/Pagination.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table */ "./src/components/List/Table.js");
/* harmony import */ var _TableLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableLoading */ "./src/components/List/TableLoading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  Fragment,
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const List = () => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_0__.StateContext);
  const {
    tablesLoading
  } = stateContext.state;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {}), tablesLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TableLoading__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ },

/***/ "./src/components/List/Pagination.js"
/*!*******************************************!*\
  !*** ./src/components/List/Pagination.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  useContext
} = wp.element;
const {
  _n,
  sprintf
} = wp.i18n;
const getPageNumbers = (currentPage, pageCount) => {
  const delta = 2;
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    if (i === 0 || i === pageCount - 1 || i >= currentPage - delta && i <= currentPage + delta) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }
  return pages;
};
const Pagination = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  const {
    total,
    totalPages,
    perPage,
    currentPage
  } = state;
  const pageCount = totalPages;
  const onPageChange = page => {
    const offset = page * perPage;
    dispatch({
      type: 'PAGINATE_TABLES',
      payload: {
        offset,
        currentPage: page
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: 'advanced-wp-table-pagination-wrapper',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: 'advanced-wp-table-total-info',
      children: sprintf(/* translators: %d: number of items. */
      _n('%d item', '%d items', total, 'advanced-wp-table'), total)
    }), 1 < pageCount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: 'advanced-wp-table-pagination',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: 'secondary',
        size: 'compact',
        disabled: 0 === currentPage,
        onClick: () => onPageChange(currentPage - 1),
        children: '‹'
      }), getPageNumbers(currentPage, pageCount).map((page, index) => page === '...' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: 'advanced-wp-table-pagination-ellipsis',
        children: '...'
      }, `ellipsis-${index}`) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: page === currentPage ? 'primary' : 'secondary',
        size: 'compact',
        onClick: () => onPageChange(page),
        children: page + 1
      }, page)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: 'secondary',
        size: 'compact',
        disabled: currentPage === pageCount - 1,
        onClick: () => onPageChange(currentPage + 1),
        children: '›'
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ },

/***/ "./src/components/List/Table.js"
/*!**************************************!*\
  !*** ./src/components/List/Table.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actions */ "./src/components/List/Actions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Table = () => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  const {
    state,
    dispatch
  } = stateContext;
  const onHandleNavigateToTable = (e, table) => {
    e.preventDefault();
    dispatch({
      type: 'UNSET_TABLE_CHANGED'
    });
    dispatch({
      type: 'SET_TABLE',
      payload: table
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
    className: 'wp-list-table widefat fixed striped posts advanced-wp-table-list',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: 'title',
          children: __('Title', 'advanced-wp-table')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: 'shortcode',
          children: __('Shortcode', 'advanced-wp-table')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
      children: state.tables.length ? state.tables.map(table => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: '#/',
              className: 'row-title',
              onClick: e => onHandleNavigateToTable(e, table),
              children: table.title.rendered
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Actions__WEBPACK_IMPORTED_MODULE_2__["default"], {
            table: table
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          children: (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.getShortcode)(table.id)
        })]
      }, table.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          colSpan: 2,
          children: __('No tables found.', 'advanced-wp-table')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tfoot", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          children: __('Title', 'advanced-wp-table')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          children: __('Shortcode', 'advanced-wp-table')
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ },

/***/ "./src/components/List/TableLoading.js"
/*!*********************************************!*\
  !*** ./src/components/List/TableLoading.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const TableLoading = () => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_0__.StateContext);
  const {
    state
  } = stateContext;
  const rows = [];
  for (let i = 0; i < state.perPage; i++) {
    rows.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("td", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: 'advanced-wp-table-liner-loading title-loading'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: 'advanced-wp-table-liner-loading actions-loading'
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: 'advanced-wp-table-liner-loading shortcode-loading'
        })
      })]
    }, i));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
    className: 'wp-list-table widefat fixed striped posts advanced-wp-table-list-loading',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          className: 'title',
          children: __('Title', 'advanced-wp-table')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          className: 'shortcode',
          children: __('Shortcode', 'advanced-wp-table')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
      children: rows
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tfoot", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          children: __('Title', 'advanced-wp-table')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          children: __('Shortcode', 'advanced-wp-table')
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableLoading);

/***/ },

/***/ "./src/components/NewTable/Form.js"
/*!*****************************************!*\
  !*** ./src/components/NewTable/Form.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Form = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
  const {
    tables,
    formLoading,
    newTableData
  } = state;
  const {
    title,
    sizeOfRows,
    sizeOfColumns
  } = newTableData;
  const onHandleInputChange = e => {
    dispatch({
      type: 'SET_INPUT',
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    });
  };
  const onHandleCancelSubmission = () => {
    dispatch({
      type: 'CLEAR_NEW_TABLE_DATA'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'list'
    });
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dismissToasts)();
  };
  const onHandleFormSubmission = e => {
    e.preventDefault();
    try {
      (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.validateTable)(newTableData);
    } catch (err) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastError)(err.message);
      return;
    }
    dispatch({
      type: 'SET_FORM_LOADING'
    });
    const oldTables = [...tables];
    const parsedTableData = (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.prepareTable)(newTableData);
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.postTable)(parsedTableData).then(newTable => {
      const newTables = [newTable, ...oldTables];
      dispatch({
        type: 'UNSET_FORM_LOADING'
      });
      dispatch({
        type: 'SET_TABLE',
        payload: newTable
      });
      dispatch({
        type: 'SET_VIEW',
        payload: 'table'
      });
      dispatch({
        type: 'CLEAR_NEW_TABLE_DATA'
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastSuccess)(__('Table created successfully', 'advanced-wp-table'));
      dispatch({
        type: 'UPDATE_TABLES',
        payload: newTables
      });

      // If we are not in the first page then paginate the tables to the first page.
      dispatch({
        type: 'PAGINATE_TABLES',
        payload: {
          offset: 0,
          currentPage: 0
        }
      });
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      dispatch({
        type: 'UNSET_FORM_LOADING'
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastError)(__('Oops, there was a problem when creating the table', 'advanced-wp-table'));
    });
  };
  let formClasses = 'advanced-wp-table-new-table-form';
  if (formLoading) {
    formClasses += ' loading';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
    className: formClasses,
    onSubmit: onHandleFormSubmission,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "advanced-wp-table-form-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
        htmlFor: "title",
        children: __('Title', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: 'advanced-wp-table-form-input-wrapper',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "text",
          id: 'title',
          name: 'title',
          placeholder: __('Give a title', 'advanced-wp-table'),
          onChange: onHandleInputChange,
          value: title
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "advanced-wp-table-form-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
        htmlFor: "no-of-rows",
        children: __('How many rows?', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: 'advanced-wp-table-form-input-wrapper',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "number",
          id: 'no-of-rows',
          name: 'sizeOfRows',
          onChange: onHandleInputChange,
          value: sizeOfRows
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "advanced-wp-table-form-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
        htmlFor: "no-of-columns",
        children: __('How many columns?', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: 'advanced-wp-table-form-input-wrapper',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "number",
          id: 'no-of-columns',
          name: 'sizeOfColumns',
          onChange: onHandleInputChange,
          value: sizeOfColumns
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: 'advanced-wp-table-form-buttons',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button button-primary',
        type: 'submit',
        children: __('Create', 'advanced-wp-table')
      }), ` `, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button',
        onClick: onHandleCancelSubmission,
        children: __('Cancel', 'advanced-wp-table')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ },

/***/ "./src/components/NewTable/Header.js"
/*!*******************************************!*\
  !*** ./src/components/NewTable/Header.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Header = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: 'advanced-wp-table-header',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: 'advanced-wp-table-header-inner',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        children: __('Add New Table', 'advanced-wp-table')
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ },

/***/ "./src/components/NewTable/NewTable.js"
/*!*********************************************!*\
  !*** ./src/components/NewTable/NewTable.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/components/NewTable/Form.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/NewTable/Header.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  Fragment
} = wp.element;
const NewTable = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Form__WEBPACK_IMPORTED_MODULE_0__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTable);

/***/ },

/***/ "./src/components/Table/Actions.js"
/*!*****************************************!*\
  !*** ./src/components/Table/Actions.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Actions = ({
  i,
  j
}) => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_0__.StateContext);
  const {
    table
  } = state;
  const {
    advanced_wp_table_data: tableData
  } = table;
  const {
    size,
    rows
  } = tableData;
  const onHandleDeleteColumn = () => {
    const tempSize = {
      ...size
    };
    const newRows = rows.map(row => row.filter((column, index) => index !== j));
    const newSize = {
      ...tempSize,
      columns: tempSize.columns - 1
    };
    const updatedTable = {
      ...table,
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    };
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };
  const onHandleDeleteRow = () => {
    const tempSize = {
      ...size
    };
    const newRows = rows.filter((row, index) => index !== i);
    const newSize = {
      ...tempSize,
      rows: tempSize.rows - 1
    };
    const updatedTable = {
      ...table,
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    };
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };
  const onHandleDuplicateRow = () => {
    const tempSize = {
      ...size
    };
    const newRows = [...rows];
    const newRowContent = newRows[i];
    newRows.splice(i + 0, 0, newRowContent);
    const newSize = {
      ...tempSize,
      rows: tempSize.rows + 1
    };
    const updatedTable = {
      ...table,
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    };
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: 'advanced-wp-table-cell-actions',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: 'dashicons dashicons-admin-generic advanced-wp-table-edit-cell'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "advanced-wp-table-actions-dropdown",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "advanced-wp-table-action-item",
        onClick: onHandleDeleteColumn,
        role: "presentation",
        children: __('Delete Column', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "advanced-wp-table-action-item",
        onClick: onHandleDeleteRow,
        role: "presentation",
        children: __('Delete Row', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "advanced-wp-table-action-item",
        onClick: onHandleDuplicateRow,
        role: "presentation",
        children: __('Duplicate Row', 'advanced-wp-table')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);

/***/ },

/***/ "./src/components/Table/Buttons.js"
/*!*****************************************!*\
  !*** ./src/components/Table/Buttons.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Buttons = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
  const {
    tables,
    table
  } = state;
  const {
    advanced_wp_table_data: tableData
  } = table;
  const {
    size,
    rows
  } = tableData;
  const onHandleSaveTable = () => {
    const oldTables = [...tables];
    const newTables = oldTables.map(item => {
      if (item.id === table.id) {
        return table;
      }
      return item;
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: newTables
    });
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastSuccess)(__('Successfully updated', 'advanced-wp-table'));

    // eslint-disable-next-line camelcase
    const {
      id,
      advanced_wp_table_data
    } = table;
    const title = table.title.rendered;
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_0__.updateTable)(id, title, advanced_wp_table_data).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dismissToasts)();
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.toastError)(__('Oops, there was a problem when updating the table', 'advanced-wp-table'));
    });
  };
  const onHandleAddRow = () => {
    const tempSize = {
      ...size
    };
    const tempRows = [...rows];
    const newRow = [];
    for (let i = 0; i < tempSize.columns; i++) {
      newRow.push('');
    }
    const newRows = [...tempRows, newRow];
    const newSize = {
      ...tempSize,
      rows: tempSize.rows + 1
    };
    const updatedTable = {
      ...table,
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    };
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };
  const onHandleAddColumn = () => {
    const tempSize = {
      ...size
    };
    const tempRows = [...rows];
    const newRows = [];
    tempRows.map(row => {
      const newRow = [...row, ''];
      return newRows.push(newRow);
    });
    const newSize = {
      ...tempSize,
      columns: tempSize.columns + 1
    };
    const updatedTable = {
      ...table,
      advanced_wp_table_data: {
        size: newSize,
        rows: newRows
      }
    };
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: 'advanced-wp-table-post-item-buttons',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button button-primary',
        onClick: onHandleSaveTable,
        children: __('Save Changes', 'advanced-wp-table')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: 'button-group',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button button-small',
        onClick: onHandleAddRow,
        children: __('Add Row', 'advanced-wp-table')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: 'button button-small',
        onClick: onHandleAddColumn,
        children: __('Add Column', 'advanced-wp-table')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

/***/ },

/***/ "./src/components/Table/Header.js"
/*!****************************************!*\
  !*** ./src/components/Table/Header.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Header = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
  const {
    table
  } = state;
  const {
    rendered: title
  } = table.title;
  const navigateToList = () => {
    dispatch({
      type: 'UNSET_TABLE'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'list'
    });
  };
  const isTableChanged = () => {
    const oldTable = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(state.tables, item => item.id === table.id);
    const {
      advanced_wp_table_data: oldTableData
    } = (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.parseTableSize)(oldTable);
    const {
      advanced_wp_table_data: newTableData
    } = table;
    const isEqual = lodash__WEBPACK_IMPORTED_MODULE_0___default().isEqual(oldTableData, newTableData);
    return !isEqual;
  };
  const onHandleNavigateToList = () => {
    if (isTableChanged()) {
      dispatch({
        type: 'SET_TABLE_CHANGED_DIALOG',
        payload: {
          status: true,
          callbackLeave: navigateToList
        }
      });
    } else {
      navigateToList();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'advanced-wp-table-header',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: 'advanced-wp-table-header-inner margin-bottom-large',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
        className: 'button',
        onClick: onHandleNavigateToList,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: 'dashicons dashicons-controls-back'
        }), __('Back to Tables', 'advanced-wp-table')]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ },

/***/ "./src/components/Table/Table.js"
/*!***************************************!*\
  !*** ./src/components/Table/Table.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actions */ "./src/components/Table/Actions.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons */ "./src/components/Table/Buttons.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/components/Table/Header.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  Fragment,
  useState,
  useRef,
  useContext
} = wp.element;

// tell direction after drag start, the first direction that reach 5px offset
const DRAG_DIRECTION_NONE = '';
const DRAG_DIRECTION_ROW = 'row';
const DRAG_DIRECTION_COLUMN = 'column';
const defaultDragState = {
  column: -1,
  row: -1,
  startPoint: null,
  direction: DRAG_DIRECTION_NONE,
  // row=move up down/column=move left right,
  dropIndex: -1 // drag target
};
const Table = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  const {
    tables,
    table
  } = state;
  let {
    rows = []
  } = state.table.advanced_wp_table_data;
  const [dragState, setDragState] = useState({
    ...defaultDragState
  });
  const rowsEl = useRef(null),
    preview = useRef(null);
  if (dragState.direction === DRAG_DIRECTION_COLUMN) {
    rows = rows.map(x => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.offsetIndex)(dragState.column, dragState.dropIndex, x));
  }
  if (dragState.direction === DRAG_DIRECTION_ROW) {
    rows = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.offsetIndex)(dragState.row, dragState.dropIndex, rows);
  }
  const setOpacity = (i, j) => {
    let opacity = null;
    const {
      direction,
      dropIndex
    } = dragState;
    if (DRAG_DIRECTION_COLUMN === direction) {
      if (j === dropIndex) {
        opacity = 0.5;
      } else {
        opacity = 1;
      }
    }
    if (DRAG_DIRECTION_ROW === direction) {
      if (i === dropIndex) {
        opacity = 0.5;
      } else {
        opacity = 1;
      }
    }
    return opacity;
  };
  const updateTableWithCellData = (table, activeCell) => {
    const {
      advanced_wp_table_data: tableData
    } = table;
    const tempRows = [...tableData.rows];
    const {
      i,
      j,
      content
    } = activeCell;
    const newRows = [];
    tempRows.map((row, rowIndex) => {
      if (i !== rowIndex) {
        return newRows.push(row);
      }
      const newRow = [];
      row.map((data, columnIndex) => {
        if (j !== columnIndex) {
          return newRow.push(data);
        }
        return newRow.push(content);
      });
      return newRows.push(newRow);
    });
    return {
      ...table,
      advanced_wp_table_data: {
        ...tableData,
        rows: newRows
      }
    };
  };
  const handleContentChange = (value, i, j) => {
    const activeCell = {
      i,
      j,
      content: value
    };
    const oldTables = [...tables];
    const updatedTable = updateTableWithCellData(table, activeCell);
    const newTables = oldTables.map(item => {
      if (item.id === updatedTable.id) {
        return updatedTable;
      }
      return item;
    });
    dispatch({
      type: 'SET_TABLE',
      payload: updatedTable
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: newTables
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table", {
      className: 'advanced-wp-table advanced-wp-table-post-item',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
        ref: rowsEl,
        children: rows.map((x = [], i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tr", {
          children: x.map((y, j) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            style: {
              cursor: dragState.direction ? 'move' : 'grab',
              opacity: setOpacity(i, j)
            },
            draggable: "true",
            onDragStart: e => {
              e.dataTransfer.setDragImage(preview.current, 0, 0);
              setDragState({
                ...dragState,
                row: i,
                column: j,
                startPoint: {
                  x: e.pageX,
                  y: e.pageY
                }
              });
            },
            onDragEnter: () => {
              if (!dragState.direction) {
                if (dragState.column !== j) {
                  setDragState({
                    ...dragState,
                    direction: DRAG_DIRECTION_COLUMN,
                    dropIndex: j
                  });
                  return;
                }
                if (dragState.row !== i) {
                  setDragState({
                    ...dragState,
                    direction: DRAG_DIRECTION_ROW,
                    dropIndex: i
                  });
                  return;
                }
                return;
              }
              if (dragState.direction === DRAG_DIRECTION_COLUMN) {
                if (j !== dragState.dropIndex) {
                  setDragState({
                    ...dragState,
                    dropIndex: j
                  });
                }
                return;
              }
              if (dragState.direction === DRAG_DIRECTION_ROW) {
                if (i !== dragState.dropIndex) {
                  setDragState({
                    ...dragState,
                    dropIndex: i
                  });
                }
              }
            },
            onDragEnd: () => {
              dispatch({
                type: 'ON_DRAG_END_TABLE',
                payload: rows
              });
              setDragState({
                ...defaultDragState
              });
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: 'advanced-wp-table-cell-wrapper',
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                value: y,
                onChange: e => handleContentChange(e.target.value, i, j)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Actions__WEBPACK_IMPORTED_MODULE_2__["default"], {
                i: i,
                j: j
              })]
            })
          }, j))
        }, i))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ref: preview,
      style: {
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ },

/***/ "./src/components/TableChangedDialog/TableChangedDialog.js"
/*!*****************************************************************!*\
  !*** ./src/components/TableChangedDialog/TableChangedDialog.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const TableChangedDialog = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  const {
    tableChangedDialog
  } = state;
  const {
    status,
    callbackCancel,
    callbackLeave
  } = tableChangedDialog;
  const onHandleCancel = () => {
    if (callbackCancel) {
      callbackCancel();
    }
    dispatch({
      type: 'UNSET_TABLE_CHANGED_DIALOG'
    });
  };
  const onHandleLeave = () => {
    if (callbackLeave) {
      callbackLeave();
    }
    dispatch({
      type: 'UNSET_TABLE_CHANGED_DIALOG'
    });
  };
  if (!status) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: __('Unsaved changes', 'advanced-wp-table'),
    onRequestClose: onHandleCancel,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: __('The changes you made will be lost if you leave this.', 'advanced-wp-table')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      justify: 'flex-end',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: 'secondary',
          onClick: onHandleCancel,
          children: __('Keep editing', 'advanced-wp-table')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: 'primary',
          isDestructive: true,
          onClick: onHandleLeave,
          children: __('Discard', 'advanced-wp-table')
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableChangedDialog);

/***/ },

/***/ "./src/components/TableDeleteDialog/TableDeleteDialog.js"
/*!***************************************************************!*\
  !*** ./src/components/TableDeleteDialog/TableDeleteDialog.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const TableDeleteDialog = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_3__.StateContext);
  const {
    tables,
    tableDeleteDialog
  } = state;
  const {
    status,
    id
  } = tableDeleteDialog;
  const total = parseInt(state.total);
  const onHandleCancel = () => {
    dispatch({
      type: 'UNSET_TABLE_DELETE_DIALOG'
    });
  };
  const onHandleDelete = () => {
    const oldTables = [...tables];
    const newTables = oldTables.filter(item => id !== item.id);
    const {
      currentPage,
      perPage
    } = state;
    const newTotal = total - 1;
    const newTotalPages = Math.ceil(newTotal / perPage);
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: newTotal
    });
    dispatch({
      type: 'UPDATE_TABLES',
      payload: newTables
    });
    dispatch({
      type: 'UNSET_TABLE_DELETE_DIALOG'
    });
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastSuccess)(__('Table deleted successfully', 'advanced-wp-table'));
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.deleteTable)(id).then(() => {
      // Go back one page if current page is now empty, otherwise stay.
      if (currentPage >= newTotalPages && newTotalPages > 0) {
        dispatch({
          type: 'PAGINATE_TABLES',
          payload: {
            offset: (newTotalPages - 1) * perPage,
            currentPage: newTotalPages - 1
          }
        });
      }
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      dispatch({
        type: 'UPDATE_TOTAL',
        payload: total
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastError)(__('Oops, there was a problem when deleting the table', 'advanced-wp-table'));
    });
  };
  if (!status) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: __('Delete table', 'advanced-wp-table'),
    onRequestClose: onHandleCancel,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: __("This action is permanent and can't be undone.", 'advanced-wp-table')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      justify: 'flex-end',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: 'secondary',
          onClick: onHandleCancel,
          children: __('Cancel', 'advanced-wp-table')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: 'primary',
          isDestructive: true,
          onClick: onHandleDelete,
          children: __('Delete', 'advanced-wp-table')
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableDeleteDialog);

/***/ },

/***/ "./src/utils/table.js"
/*!****************************!*\
  !*** ./src/utils/table.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTable: () => (/* binding */ deleteTable),
/* harmony export */   getShortcode: () => (/* binding */ getShortcode),
/* harmony export */   getTable: () => (/* binding */ getTable),
/* harmony export */   getTables: () => (/* binding */ getTables),
/* harmony export */   parseTableSize: () => (/* binding */ parseTableSize),
/* harmony export */   postTable: () => (/* binding */ postTable),
/* harmony export */   prepareTable: () => (/* binding */ prepareTable),
/* harmony export */   prepareTableToDuplicate: () => (/* binding */ prepareTableToDuplicate),
/* harmony export */   updateTable: () => (/* binding */ updateTable),
/* harmony export */   validateTable: () => (/* binding */ validateTable)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");



const {
  __
} = wp.i18n;
async function getTables(perPage, offset) {
  const options = {
    path: wp.url.addQueryArgs((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getApiEndpoint)(), {
      per_page: perPage,
      offset
    }),
    parse: false
  };
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
    const total = parseInt(response.headers && response.headers.get('X-WP-Total'));
    const totalPages = parseInt(response.headers && response.headers.get('X-WP-TotalPages'));
    const tables = await response.json();
    return {
      total,
      totalPages,
      tables
    };
  } catch (response) {
    const err = await response.json();
    throw new Error(err.message);
  }
}
function validateTable(tableData) {
  const {
    title,
    sizeOfRows,
    sizeOfColumns
  } = tableData;
  if (!title) {
    throw new Error(__('Title shouldn\'t be empty', 'advanced-wp-table'));
  }
  if (parseInt(sizeOfRows) < 1) {
    throw new Error(__('Size of rows should be greater than 0', 'advanced-wp-table'));
  }
  if (parseInt(sizeOfColumns) < 1) {
    throw new Error(__('Size of columns should be greater than 0', 'advanced-wp-table'));
  }
}
function prepareTable(tableData) {
  const {
    title,
    sizeOfRows,
    sizeOfColumns
  } = tableData;
  const tableSize = {
    rows: sizeOfRows,
    columns: sizeOfColumns
  };
  const tableRows = [];
  for (let i = 0; i < sizeOfRows; i++) {
    const emptyRow = [];
    for (let j = 0; j < sizeOfColumns; j++) {
      emptyRow.push('');
    }
    tableRows.push(emptyRow);
  }
  return {
    title,
    advanced_wp_table_data: {
      size: tableSize,
      rows: tableRows
    }
  };
}

// eslint-disable-next-line camelcase
async function postTable({
  title,
  advanced_wp_table_data
}) {
  const options = {
    path: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getApiEndpoint)(),
    method: 'POST',
    data: {
      title,
      status: 'publish',
      advanced_wp_table_data
    }
  };
  try {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  } catch (err) {
    throw new Error(err.message);
  }
}
async function getTable(id) {
  const options = {
    path: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getApiEndpoint)() + '/' + id,
    method: 'GET'
  };
  try {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  } catch (err) {
    throw new Error(err.message);
  }
}
async function deleteTable(id) {
  const options = {
    path: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getApiEndpoint)() + '/' + id,
    method: 'DELETE'
  };
  try {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  } catch (err) {
    throw new Error(err.message);
  }
}

// eslint-disable-next-line camelcase
async function updateTable(id, title, advanced_wp_table_data) {
  const options = {
    path: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getApiEndpoint)() + '/' + id,
    method: 'PUT',
    data: {
      title,
      advanced_wp_table_data
    }
  };
  try {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()(options);
  } catch (err) {
    throw new Error(err.message);
  }
}
function parseTableSize(table) {
  const {
    advanced_wp_table_data: tableData
  } = table;
  const {
    rows,
    columns
  } = tableData.size;
  const size = {
    rows: parseInt(rows),
    columns: parseInt(columns)
  };
  return {
    ...table,
    advanced_wp_table_data: {
      ...tableData,
      size
    }
  };
}
function prepareTableToDuplicate(tables, targetTableId) {
  const targetTable = lodash__WEBPACK_IMPORTED_MODULE_1___default().find(tables, item => targetTableId === item.id);
  const tempId = `new${targetTable.id}`;
  const newTableTitle = `${targetTable.title.rendered} (${__('Duplicated', 'advanced-wp-table')})`;
  return {
    ...targetTable,
    id: tempId,
    title: {
      ...targetTable.title,
      rendered: newTableTitle
    }
  };
}
function getShortcode(id) {
  return `[advanced_wp_table id="${id}"]`;
}

/***/ },

/***/ "./src/utils/utils.js"
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dismissToasts: () => (/* binding */ dismissToasts),
/* harmony export */   getApiEndpoint: () => (/* binding */ getApiEndpoint),
/* harmony export */   offsetIndex: () => (/* binding */ offsetIndex),
/* harmony export */   toastError: () => (/* binding */ toastError),
/* harmony export */   toastSuccess: () => (/* binding */ toastSuccess)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__);


function getApiEndpoint() {
  return '/wp/v2/advanced-wp-table';
}
function toastSuccess(message) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).createSuccessNotice(message, {
    type: 'snackbar',
    isDismissible: true
  });
}
function toastError(message) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).createErrorNotice(message, {
    type: 'snackbar',
    isDismissible: true
  });
}
function dismissToasts() {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).getNotices();
  notices.forEach(notice => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).removeNotice(notice.id);
  });
}
function offsetIndex(from, to, arr = []) {
  if (from < to) {
    const start = arr.slice(0, from),
      between = arr.slice(from + 1, to + 1),
      end = arr.slice(to + 1);
    return [...start, ...between, arr[from], ...end];
  }
  if (from > to) {
    const start = arr.slice(0, to),
      between = arr.slice(to, from),
      end = arr.slice(from + 1);
    return [...start, arr[from], ...between, ...end];
  }
  return arr;
}

/***/ },

/***/ "./src/index.scss"
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "lodash"
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
(module) {

module.exports = window["lodash"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/notices"
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["notices"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('advanced-wp-table-wrapper');
  if (container) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container);
    root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    }));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map