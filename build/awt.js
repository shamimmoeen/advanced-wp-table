/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateContext: () => (/* binding */ StateContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _EditCellModal_EditCellModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditCellModal/EditCellModal */ "./src/components/EditCellModal/EditCellModal.js");
/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./List/List */ "./src/components/List/List.js");
/* harmony import */ var _NewTable_NewTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewTable/NewTable */ "./src/components/NewTable/NewTable.js");
/* harmony import */ var _Table_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Table/Table */ "./src/components/Table/Table.js");
/* harmony import */ var _TableChangedDialog_TableChangedDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableChangedDialog/TableChangedDialog */ "./src/components/TableChangedDialog/TableChangedDialog.js");
/* harmony import */ var _TableDeleteDialog_TableDeleteDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableDeleteDialog/TableDeleteDialog */ "./src/components/TableDeleteDialog/TableDeleteDialog.js");



// import 'react-toastify/dist/ReactToastify.css';








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
  activeCell: {},
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
        total: action.payload
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
    case 'SET_ACTIVE_CELL':
      return {
        ...state,
        activeCell: action.payload
      };
    case 'UNSET_ACTIVE_CELL':
      return {
        ...state,
        activeCell: {}
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

  /**
   * Register the gutenberg core blocks.
   */
  useEffect(() => {
    (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__.registerCoreBlocks)();

    // Since wp 5.4 core/freeform, core/shortcode block issues are fixed.
    const disAllowedBlocks = [];
    wp.blocks.getBlockTypes().forEach(blockType => {
      if (disAllowedBlocks.includes(blockType.name)) {
        wp.blocks.unregisterBlockType(blockType.name);
      }
    });
  }, []);
  let content;
  if ('list' === view) {
    content = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_List_List__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  } else if ('form' === view) {
    content = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_NewTable_NewTable__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  } else if ('table' === view) {
    content = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Table_Table__WEBPACK_IMPORTED_MODULE_8__["default"], null);
  } else if ('editCellModal' === view) {
    content = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditCellModal_EditCellModal__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StateContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
    className: 'advanced-wp-table-toast'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TableDeleteDialog_TableDeleteDialog__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TableChangedDialog_TableChangedDialog__WEBPACK_IMPORTED_MODULE_9__["default"], null), content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/EditCellModal/EditCellModal.js":
/*!*******************************************************!*\
  !*** ./src/components/EditCellModal/EditCellModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor/Editor */ "./src/components/EditCellModal/Editor/Editor.js");


const EditCellModal = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-edit-cell-modal'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-edit-cell-modal-wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Editor_Editor__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditCellModal);

/***/ }),

/***/ "./src/components/EditCellModal/Editor/Buttons.js":
/*!********************************************************!*\
  !*** ./src/components/EditCellModal/Editor/Buttons.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App */ "./src/components/App.js");





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
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_4__.StateContext);
  const {
    tables,
    table,
    activeCell
  } = state;
  const {
    i,
    j,
    content
  } = activeCell;
  const onHandleSave = () => {
    const oldTables = [...tables];
    const updatedTable = (0,_utils_table__WEBPACK_IMPORTED_MODULE_2__.updateTableWithCellData)(table, activeCell);
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
    dispatch({
      type: 'UNSET_ACTIVE_CELL'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.toastSuccess)(__('Successfully updated', 'advanced-wp-table'));

    // eslint-disable-next-line camelcase
    const {
      id,
      advanced_wp_table_data
    } = updatedTable;
    const title = updatedTable.title.rendered;
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_2__.updateTable)(id, title, advanced_wp_table_data).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.dismissToasts)();
      dispatch({
        type: 'SET_TABLE',
        payload: table
      });
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.toastError)(__('Oops, there was a problem when updating the table', 'advanced-wp-table'));
    });
  };
  const navigateToTable = () => {
    dispatch({
      type: 'UNSET_ACTIVE_CELL'
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'table'
    });
  };
  const isActiveCellChanged = () => {
    const oldTable = lodash__WEBPACK_IMPORTED_MODULE_1___default().find(state.tables, item => item.id === table.id);
    const {
      advanced_wp_table_data: oldTableData
    } = (0,_utils_table__WEBPACK_IMPORTED_MODULE_2__.parseTableSize)(oldTable);
    const oldContent = oldTableData.rows[i][j];
    // @todo Serialize content only if gutenberg active.
    const newContent = wp.blocks.serialize(content);
    const isEqual = lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(oldContent, newContent);
    return !isEqual;
  };
  const onHandleCloseModal = () => {
    if (isActiveCellChanged()) {
      dispatch({
        type: 'SET_TABLE_CHANGED_DIALOG',
        payload: {
          status: true,
          callbackLeave: navigateToTable
        }
      });
    } else {
      navigateToTable();
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-editor-action-buttons'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onHandleSave,
    className: 'button button-primary button-large'
  }, __('Save Changes', 'advanced-wp-table')), ` `, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onHandleCloseModal,
    className: 'button button-large'
  }, __('Close', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

/***/ }),

/***/ "./src/components/EditCellModal/Editor/Editor.js":
/*!*******************************************************!*\
  !*** ./src/components/EditCellModal/Editor/Editor.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/format-library */ "@wordpress/format-library");
/* harmony import */ var _wordpress_format_library__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_format_library__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App */ "./src/components/App.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ "./src/components/EditCellModal/Editor/Buttons.js");






const {
  Fragment,
  useContext
} = wp.element;
const {
  __
} = wp.i18n;

/**
 * Fix media upload permission error.
 *
 * Change the key form __experimentalMediaUpload to mediaUpload since wp 5.4.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */
_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.SETTINGS_DEFAULTS.mediaUpload = wp.mediaUtils.uploadMedia;
_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.SETTINGS_DEFAULTS.imageSizes = [{
  slug: 'thumbnail',
  name: __('Thumbnail', 'advanced-wp-table')
}, {
  slug: 'medium',
  name: __('Medium', 'advanced-wp-table')
}, {
  slug: 'large',
  name: __('Large', 'advanced-wp-table')
}, {
  slug: 'full',
  name: __('Full Size', 'advanced-wp-table')
}];
const Editor = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_4__.StateContext);
  const {
    activeCell
  } = state;
  const {
    content: blocks
  } = activeCell;
  const onHandleChange = updatedBlocks => {
    dispatch({
      type: 'SET_ACTIVE_CELL',
      payload: {
        ...activeCell,
        content: updatedBlocks
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-editor'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SlotFillProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropZone, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockEditorProvider, {
    value: blocks,
    onInput: onHandleChange,
    onChange: onHandleChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'editor-styles-wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '20px'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover.Slot, {
    name: 'block-toolbar'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockEditorKeyboardShortcuts, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.WritingFlow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ObserveTyping, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockList, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-editor-sidebar'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockInspector, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover.Slot, null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./src/components/List/Actions.js":
/*!****************************************!*\
  !*** ./src/components/List/Actions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Actions = _ref => {
  let {
    table
  } = _ref;
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_3__.StateContext);
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
    const tempTable = (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.prepareTableToDuplicate)(oldTables, id);
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
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastSuccess)(__('Table duplicated successfully', 'advanced-wp-table'));

    // Insert the table into database.
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.postTable)(newTableData).then(newTable => {
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
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastError)(__('Oops, there was a problem when duplicating the table', 'advanced-wp-table'));
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'row-actions'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'edit'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button-link',
    onClick: onHandleNavigateToTable
  }, __('Edit', 'advanced-wp-table'))), ` | `, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'duplicate'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button-link',
    onClick: onHandleDuplicateTable
  }, __('Duplicate', 'advanced-wp-table'))), ` | `, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'trash'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: '#/',
    onClick: onHandleDeleteTable
  }, __('Delete', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);

/***/ }),

/***/ "./src/components/List/Header.js":
/*!***************************************!*\
  !*** ./src/components/List/Header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");


const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Header = () => {
  const {
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-header'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-header-inner'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, __('All Tables', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button',
    onClick: () => dispatch({
      type: 'SET_VIEW',
      payload: 'form'
    })
  }, __('Add New', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/List/List.js":
/*!*************************************!*\
  !*** ./src/components/List/List.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/List/Header.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ "./src/components/List/Pagination.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ "./src/components/List/Table.js");
/* harmony import */ var _TableLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TableLoading */ "./src/components/List/TableLoading.js");






const {
  Fragment,
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const List = () => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  const {
    tablesLoading
  } = stateContext.state;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], null), tablesLoading ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TableLoading__WEBPACK_IMPORTED_MODULE_5__["default"], null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Table__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/components/List/Pagination.js":
/*!*******************************************!*\
  !*** ./src/components/List/Pagination.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");



const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Pagination = () => {
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
  const {
    total,
    totalPages,
    perPage,
    currentPage
  } = state;
  const onHandlePageChange = data => {
    const selected = data.selected;
    const offset = Math.ceil(selected * perPage);
    dispatch({
      type: 'PAGINATE_TABLES',
      payload: {
        offset,
        currentPage: selected
      }
    });
  };
  let paginationElement;
  if (1 < totalPages) {
    paginationElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {
      previousLabel: '‹',
      nextLabel: '›',
      breakLabel: '...',
      breakClassName: 'break-me',
      pageCount: parseInt(totalPages),
      forcePage: currentPage,
      marginPagesDisplayed: 2,
      pageRangeDisplayed: 3,
      onPageChange: onHandlePageChange,
      containerClassName: 'advanced-wp-table-pagination',
      subContainerClassName: 'pages pagination',
      activeClassName: 'active'
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-pagination-wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'advanced-wp-table-total-info'
  }, 1 === total ? `${total} ${__('item', 'advanced-wp-table')}` : `${total} ${__('items', 'advanced-wp-table')}`), paginationElement);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./src/components/List/Table.js":
/*!**************************************!*\
  !*** ./src/components/List/Table.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions */ "./src/components/List/Actions.js");




const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Table = () => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: 'wp-list-table widefat fixed striped posts advanced-wp-table-list'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: 'title'
  }, __('Title', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: 'shortcode'
  }, __('Shortcode', 'advanced-wp-table')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, state.tables.length ? state.tables.map(table => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: table.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: '#/',
    className: 'row-title',
    onClick: e => onHandleNavigateToTable(e, table)
  }, table.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    table: table
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.getShortcode)(table.id)))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: 2
  }, __('No tables found.', 'advanced-wp-table')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, __('Title', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, __('Shortcode', 'advanced-wp-table')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./src/components/List/TableLoading.js":
/*!*********************************************!*\
  !*** ./src/components/List/TableLoading.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");


const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const TableLoading = () => {
  const stateContext = useContext(_App__WEBPACK_IMPORTED_MODULE_1__.StateContext);
  const {
    state
  } = stateContext;
  const rows = [];
  for (let i = 0; i < state.perPage; i++) {
    rows.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: i
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'advanced-wp-table-liner-loading title-loading'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'advanced-wp-table-liner-loading actions-loading'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'advanced-wp-table-liner-loading shortcode-loading'
    }))));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: 'wp-list-table widefat fixed striped posts advanced-wp-table-list-loading'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: 'title'
  }, __('Title', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: 'shortcode'
  }, __('Shortcode', 'advanced-wp-table')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, rows), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tfoot", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, __('Title', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, __('Shortcode', 'advanced-wp-table')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableLoading);

/***/ }),

/***/ "./src/components/NewTable/Form.js":
/*!*****************************************!*\
  !*** ./src/components/NewTable/Form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




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
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_3__.StateContext);
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
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.dismissToasts)();
  };
  const onHandleFormSubmission = e => {
    e.preventDefault();
    try {
      (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.validateTable)(newTableData);
    } catch (err) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastError)(err.message);
      return;
    }
    dispatch({
      type: 'SET_FORM_LOADING'
    });
    const oldTables = [...tables];
    const parsedTableData = (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.prepareTable)(newTableData);
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.postTable)(parsedTableData).then(newTable => {
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
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastSuccess)(__('Table created successfully', 'advanced-wp-table'));
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
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastError)(__('Oops, there was a problem when creating the table', 'advanced-wp-table'));
    });
  };
  let formClasses = 'advanced-wp-table-new-table-form';
  if (formLoading) {
    formClasses += ' loading';
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: formClasses,
    onSubmit: onHandleFormSubmission
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-form-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "title"
  }, __('Title', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-form-input-wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: 'title',
    name: 'title',
    placeholder: __('Give a title', 'advanced-wp-table'),
    onChange: onHandleInputChange,
    value: title
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-form-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "no-of-rows"
  }, __('How many rows?', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-form-input-wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: 'no-of-rows',
    name: 'sizeOfRows',
    onChange: onHandleInputChange,
    value: sizeOfRows
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-form-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "no-of-columns"
  }, __('How many columns?', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-form-input-wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: 'no-of-columns',
    name: 'sizeOfColumns',
    onChange: onHandleInputChange,
    value: sizeOfColumns
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-form-buttons'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-primary',
    type: 'submit'
  }, __('Create', 'advanced-wp-table')), ` `, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button',
    onClick: onHandleCancelSubmission
  }, __('Cancel', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/NewTable/Header.js":
/*!*******************************************!*\
  !*** ./src/components/NewTable/Header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const Header = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-header'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-header-inner'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, __('Add New Table', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/NewTable/NewTable.js":
/*!*********************************************!*\
  !*** ./src/components/NewTable/NewTable.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/components/NewTable/Form.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/components/NewTable/Header.js");



const {
  Fragment
} = wp.element;
const NewTable = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTable);

/***/ }),

/***/ "./src/components/Table/Actions.js":
/*!*****************************************!*\
  !*** ./src/components/Table/Actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");



const {
  useContext
} = wp.element;
const {
  __
} = wp.i18n;
const Actions = _ref => {
  let {
    i,
    j
  } = _ref;
  const {
    state,
    dispatch
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
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
  const onHandleOpenEditor = () => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.dismissToasts)();
    let content = rows[i][j];
    // @todo Parse content only if gutenberg active.
    content = wp.blocks.parse(content);
    const activeCell = {
      i,
      j,
      content
    };
    dispatch({
      type: 'SET_ACTIVE_CELL',
      payload: activeCell
    });
    dispatch({
      type: 'SET_VIEW',
      payload: 'editCellModal'
    });
  };
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-cell-actions'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'dashicons dashicons-admin-generic advanced-wp-table-edit-cell'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-actions-dropdown"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleOpenEditor,
    role: "presentation"
  }, __('Edit', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleDeleteColumn,
    role: "presentation"
  }, __('Delete Column', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleDeleteRow,
    role: "presentation"
  }, __('Delete Row', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-wp-table-action-item",
    onClick: onHandleDuplicateRow,
    role: "presentation"
  }, __('Duplicate Row', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actions);

/***/ }),

/***/ "./src/components/Table/Buttons.js":
/*!*****************************************!*\
  !*** ./src/components/Table/Buttons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




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
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_3__.StateContext);
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
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastSuccess)(__('Successfully updated', 'advanced-wp-table'));

    // eslint-disable-next-line camelcase
    const {
      id,
      advanced_wp_table_data
    } = table;
    const title = table.title.rendered;
    (0,_utils_table__WEBPACK_IMPORTED_MODULE_1__.updateTable)(id, title, advanced_wp_table_data).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message);
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.dismissToasts)();
      dispatch({
        type: 'UPDATE_TABLES',
        payload: oldTables
      });
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.toastError)(__('Oops, there was a problem when updating the table', 'advanced-wp-table'));
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-post-item-buttons'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-primary',
    onClick: onHandleSaveTable
  }, __('Save Changes', 'advanced-wp-table'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'button-group'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-small',
    onClick: onHandleAddRow
  }, __('Add Row', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-small',
    onClick: onHandleAddColumn
  }, __('Add Column', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

/***/ }),

/***/ "./src/components/Table/Header.js":
/*!****************************************!*\
  !*** ./src/components/Table/Header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");




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
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_3__.StateContext);
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
    const oldTable = lodash__WEBPACK_IMPORTED_MODULE_1___default().find(state.tables, item => item.id === table.id);
    const {
      advanced_wp_table_data: oldTableData
    } = (0,_utils_table__WEBPACK_IMPORTED_MODULE_2__.parseTableSize)(oldTable);
    const {
      advanced_wp_table_data: newTableData
    } = table;
    const isEqual = lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(oldTableData, newTableData);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-header'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-header-inner margin-bottom-large'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button',
    onClick: onHandleNavigateToList
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'dashicons dashicons-controls-back'
  }), __('Back to Tables', 'advanced-wp-table'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Table/Table.js":
/*!***************************************!*\
  !*** ./src/components/Table/Table.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions */ "./src/components/Table/Actions.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Buttons */ "./src/components/Table/Buttons.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./src/components/Table/Header.js");






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
  } = useContext(_App__WEBPACK_IMPORTED_MODULE_2__.StateContext);
  let {
    rows = []
  } = state.table.advanced_wp_table_data;
  const [dragState, setDragState] = useState({
    ...defaultDragState
  });
  const rowsEl = useRef(null),
    preview = useRef(null);
  if (dragState.direction === DRAG_DIRECTION_COLUMN) {
    rows = rows.map(x => (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.offsetIndex)(dragState.column, dragState.dropIndex, x));
  }
  if (dragState.direction === DRAG_DIRECTION_ROW) {
    rows = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.offsetIndex)(dragState.row, dragState.dropIndex, rows);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Buttons__WEBPACK_IMPORTED_MODULE_4__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: 'advanced-wp-table advanced-wp-table-post-item'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
    ref: rowsEl
  }, rows.map(function () {
    let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let i = arguments.length > 1 ? arguments[1] : undefined;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
      key: i
    }, x.map((y, j) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      key: j,
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
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'advanced-wp-table-cell-wrapper'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'advanced-wp-table-cell-content',
      dangerouslySetInnerHTML: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createMarkup)(y)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
      i: i,
      j: j
    })))));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: preview,
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Buttons__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./src/components/TableChangedDialog/TableChangedDialog.js":
/*!*****************************************************************!*\
  !*** ./src/components/TableChangedDialog/TableChangedDialog.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/reach-dialog.mjs");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.js");



const {
  Fragment,
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reach_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
    "aria-label": 'Leave Changes?'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'advanced-wp-table-alert-title'
  }, __('Leave changes?', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'advanced-wp-table-alert-desc'
  }, __('The changes you made will be lost if you leave this.', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-alert-buttons'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-cancel',
    onClick: onHandleCancel
  }, __('Cancel', 'advanced-wp-table')), ` `, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-primary button-leave',
    onClick: onHandleLeave
  }, __('Leave', 'advanced-wp-table')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableChangedDialog);

/***/ }),

/***/ "./src/components/TableDeleteDialog/TableDeleteDialog.js":
/*!***************************************************************!*\
  !*** ./src/components/TableDeleteDialog/TableDeleteDialog.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/dialog */ "./node_modules/@reach/dialog/dist/reach-dialog.mjs");
/* harmony import */ var _utils_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/table */ "./src/utils/table.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App */ "./src/components/App.js");





const {
  Fragment,
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
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: total - 1
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, status && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reach_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
    "aria-label": 'Delete Table?'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'advanced-wp-table-alert-title'
  }, __('Delete Table?', 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: 'advanced-wp-table-alert-desc'
  }, __("This action is permanent and can't be undone.", 'advanced-wp-table')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'advanced-wp-table-alert-buttons'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-cancel',
    onClick: onHandleCancel
  }, __('Cancel', 'advanced-wp-table')), ` `, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'button button-primary button-leave',
    onClick: onHandleDelete
  }, __('Delete', 'advanced-wp-table')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableDeleteDialog);

/***/ }),

/***/ "./src/utils/table.js":
/*!****************************!*\
  !*** ./src/utils/table.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony export */   updateTableWithCellData: () => (/* binding */ updateTableWithCellData),
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
    const total = response.headers && response.headers.get('X-WP-Total');
    const totalPages = response.headers && response.headers.get('X-WP-TotalPages');
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
async function postTable(_ref) {
  let {
    title,
    advanced_wp_table_data
  } = _ref;
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
function updateTableWithCellData(table, activeCell) {
  const {
    advanced_wp_table_data: tableData
  } = table;
  const tempRows = [...tableData.rows];
  const {
    i,
    j,
    content
  } = activeCell;
  // @todo Serialize content only if gutenberg active.
  const serializedContent = wp.blocks.serialize(content);
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
      return newRow.push(serializedContent);
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

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMarkup: () => (/* binding */ createMarkup),
/* harmony export */   dismissToasts: () => (/* binding */ dismissToasts),
/* harmony export */   getApiEndpoint: () => (/* binding */ getApiEndpoint),
/* harmony export */   offsetIndex: () => (/* binding */ offsetIndex),
/* harmony export */   toastError: () => (/* binding */ toastError),
/* harmony export */   toastSuccess: () => (/* binding */ toastSuccess)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");

function getApiEndpoint() {
  return '/wp/v2/advanced-wp-table';
}
function toastSuccess(message) {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(message);
}
function toastError(message) {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(message);
}
function dismissToasts() {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.dismiss();
}
function createMarkup(html) {
  return {
    __html: html
  };
}
function offsetIndex(from, to) {
  let arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
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

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/constants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOCUS_ALLOW: () => (/* binding */ FOCUS_ALLOW),
/* harmony export */   FOCUS_AUTO: () => (/* binding */ FOCUS_AUTO),
/* harmony export */   FOCUS_DISABLED: () => (/* binding */ FOCUS_DISABLED),
/* harmony export */   FOCUS_GROUP: () => (/* binding */ FOCUS_GROUP)
/* harmony export */ });
var FOCUS_GROUP = 'data-focus-lock';
var FOCUS_DISABLED = 'data-focus-lock-disabled';
var FOCUS_ALLOW = 'data-no-focus-lock';
var FOCUS_AUTO = 'data-autofocus-inside';


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusInside.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusInside.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusInside: () => (/* binding */ focusInside)
/* harmony export */ });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var focusInFrame = function (frame) { return frame === document.activeElement; };
var focusInsideIframe = function (topNode) {
    return Boolean((0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(topNode.querySelectorAll('iframe')).some(function (node) { return focusInFrame(node); }));
};
var focusInside = function (topNode) {
    var activeElement = document && document.activeElement;
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return (0,_utils_all_affected__WEBPACK_IMPORTED_MODULE_1__.getAllAffectedNodes)(topNode).reduce(function (result, node) { return result || node.contains(activeElement) || focusInsideIframe(node); }, false);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusIsHidden.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusIsHidden: () => (/* binding */ focusIsHidden)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var focusIsHidden = function () {
    return document &&
        (0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(document.querySelectorAll("[" + _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_ALLOW + "]")).some(function (node) { return node.contains(document.activeElement); });
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusMerge.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusMerge.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFocusMerge: () => (/* binding */ getFocusMerge)
/* harmony export */ });
/* harmony import */ var _solver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solver */ "./node_modules/focus-lock/dist/es2015/solver.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");
/* harmony import */ var _utils_parenting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parenting */ "./node_modules/focus-lock/dist/es2015/utils/parenting.js");






var findAutoFocused = function (autoFocusables) { return function (node) {
    return node.autofocus || (node.dataset && !!node.dataset.autofocus) || autoFocusables.indexOf(node) >= 0;
}; };
var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    return srcNodes.map(function (node) { return remap.get(node); }).filter(_utils_is__WEBPACK_IMPORTED_MODULE_0__.isDefined);
};
var getFocusMerge = function (topNode, lastNode) {
    var activeElement = (document && document.activeElement);
    var entries = (0,_utils_all_affected__WEBPACK_IMPORTED_MODULE_1__.getAllAffectedNodes)(topNode).filter(_utils_is__WEBPACK_IMPORTED_MODULE_0__.isNotAGuard);
    var commonParent = (0,_utils_parenting__WEBPACK_IMPORTED_MODULE_2__.getTopCommonParent)(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getAllTabbableNodes)(entries, visibilityCache);
    var innerElements = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getTabbableNodes)(entries, visibilityCache).filter(function (_a) {
        var node = _a.node;
        return (0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isNotAGuard)(node);
    });
    if (!innerElements[0]) {
        innerElements = anyFocusable;
        if (!innerElements[0]) {
            return undefined;
        }
    }
    var outerNodes = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getAllTabbableNodes)([commonParent], visibilityCache).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var orderedInnerElements = reorderNodes(outerNodes, innerElements);
    var innerNodes = orderedInnerElements.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var newId = (0,_solver__WEBPACK_IMPORTED_MODULE_4__.newFocus)(innerNodes, outerNodes, activeElement, lastNode);
    if (newId === _solver__WEBPACK_IMPORTED_MODULE_4__.NEW_FOCUS) {
        var autoFocusable = anyFocusable
            .map(function (_a) {
            var node = _a.node;
            return node;
        })
            .filter(findAutoFocused((0,_utils_parenting__WEBPACK_IMPORTED_MODULE_2__.allParentAutofocusables)(entries, visibilityCache)));
        return {
            node: autoFocusable && autoFocusable.length ? (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_5__.pickFirstFocus)(autoFocusable) : (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_5__.pickFirstFocus)(innerNodes),
        };
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/focusables.js":
/*!***********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/focusables.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFocusabledIn: () => (/* binding */ getFocusabledIn)
/* harmony export */ });
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");
/* harmony import */ var _utils_parenting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parenting */ "./node_modules/focus-lock/dist/es2015/utils/parenting.js");




var getFocusabledIn = function (topNode) {
    var entries = (0,_utils_all_affected__WEBPACK_IMPORTED_MODULE_0__.getAllAffectedNodes)(topNode).filter(_utils_is__WEBPACK_IMPORTED_MODULE_1__.isNotAGuard);
    var commonParent = (0,_utils_parenting__WEBPACK_IMPORTED_MODULE_2__.getTopCommonParent)(topNode, topNode, entries);
    var visibilityCache = new Map();
    var outerNodes = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getTabbableNodes)([commonParent], visibilityCache, true);
    var innerElements = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_3__.getTabbableNodes)(entries, visibilityCache)
        .filter(function (_a) {
        var node = _a.node;
        return (0,_utils_is__WEBPACK_IMPORTED_MODULE_1__.isNotAGuard)(node);
    })
        .map(function (_a) {
        var node = _a.node;
        return node;
    });
    return outerNodes.map(function (_a) {
        var node = _a.node, index = _a.index;
        return ({
            node: node,
            index: index,
            lockItem: innerElements.indexOf(node) >= 0,
            guard: (0,_utils_is__WEBPACK_IMPORTED_MODULE_1__.isGuard)(node),
        });
    });
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constants: () => (/* reexport module object */ _constants__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   focusInside: () => (/* reexport safe */ _focusInside__WEBPACK_IMPORTED_MODULE_1__.focusInside),
/* harmony export */   focusIsHidden: () => (/* reexport safe */ _focusIsHidden__WEBPACK_IMPORTED_MODULE_2__.focusIsHidden),
/* harmony export */   focusMerge: () => (/* reexport safe */ _focusMerge__WEBPACK_IMPORTED_MODULE_3__.getFocusMerge),
/* harmony export */   focusNextElement: () => (/* reexport safe */ _sibling__WEBPACK_IMPORTED_MODULE_7__.focusNextElement),
/* harmony export */   focusPrevElement: () => (/* reexport safe */ _sibling__WEBPACK_IMPORTED_MODULE_7__.focusPrevElement),
/* harmony export */   getAllAffectedNodes: () => (/* reexport safe */ _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__.getAllAffectedNodes),
/* harmony export */   getFocusabledIn: () => (/* reexport safe */ _focusables__WEBPACK_IMPORTED_MODULE_4__.getFocusabledIn),
/* harmony export */   tabHook: () => (/* reexport safe */ _tabHook__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _focusables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focusables */ "./node_modules/focus-lock/dist/es2015/focusables.js");
/* harmony import */ var _focusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusInside */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony import */ var _focusIsHidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusIsHidden */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");
/* harmony import */ var _setFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setFocus */ "./node_modules/focus-lock/dist/es2015/setFocus.js");
/* harmony import */ var _sibling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sibling */ "./node_modules/focus-lock/dist/es2015/sibling.js");
/* harmony import */ var _tabHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHook */ "./node_modules/focus-lock/dist/es2015/tabHook.js");
/* harmony import */ var _utils_all_affected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/all-affected */ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_setFocus__WEBPACK_IMPORTED_MODULE_8__.setFocus);


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/setFocus.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/setFocus.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusOn: () => (/* binding */ focusOn),
/* harmony export */   setFocus: () => (/* binding */ setFocus)
/* harmony export */ });
/* harmony import */ var _focusMerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusMerge */ "./node_modules/focus-lock/dist/es2015/focusMerge.js");

var focusOn = function (target) {
    target.focus();
    if ('contentWindow' in target && target.contentWindow) {
        target.contentWindow.focus();
    }
};
var guardCount = 0;
var lockDisabled = false;
var setFocus = function (topNode, lastNode) {
    var focusable = (0,_focusMerge__WEBPACK_IMPORTED_MODULE_0__.getFocusMerge)(topNode, lastNode);
    if (lockDisabled) {
        return;
    }
    if (focusable) {
        if (guardCount > 2) {
            console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' +
                'See https://github.com/theKashey/focus-lock/#focus-fighting');
            lockDisabled = true;
            setTimeout(function () {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        focusOn(focusable.node);
        guardCount--;
    }
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/sibling.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/sibling.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusNextElement: () => (/* binding */ focusNextElement),
/* harmony export */   focusPrevElement: () => (/* binding */ focusPrevElement)
/* harmony export */ });
/* harmony import */ var _utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");

var getRelativeFocusable = function (element, scope) {
    if (!element || !scope || !scope.contains(element)) {
        return {};
    }
    var focusables = (0,_utils_DOMutils__WEBPACK_IMPORTED_MODULE_0__.getTabbableNodes)([scope], new Map());
    var current = focusables.findIndex(function (_a) {
        var node = _a.node;
        return node === element;
    });
    if (current === -1) {
        return {};
    }
    return {
        prev: focusables[current - 1],
        next: focusables[current + 1],
        first: focusables[0],
        last: focusables[focusables.length - 1],
    };
};
var defaultOptions = function (options) {
    return Object.assign({
        scope: document.body,
        cycle: true,
    }, options);
};
var focusNextElement = function (baseElement, options) {
    if (options === void 0) { options = {}; }
    var _a = defaultOptions(options), scope = _a.scope, cycle = _a.cycle;
    var _b = getRelativeFocusable(baseElement, scope), next = _b.next, first = _b.first;
    var newTarget = next || (cycle && first);
    if (newTarget) {
        newTarget.node.focus(options.focusOptions);
    }
};
var focusPrevElement = function (baseElement, options) {
    if (options === void 0) { options = {}; }
    var _a = defaultOptions(options), scope = _a.scope, cycle = _a.cycle;
    var _b = getRelativeFocusable(baseElement, scope), prev = _b.prev, last = _b.last;
    var newTarget = prev || (cycle && last);
    if (newTarget) {
        newTarget.node.focus(options.focusOptions);
    }
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/solver.js":
/*!*******************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/solver.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEW_FOCUS: () => (/* binding */ NEW_FOCUS),
/* harmony export */   newFocus: () => (/* binding */ newFocus)
/* harmony export */ });
/* harmony import */ var _utils_correctFocus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/correctFocus */ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js");
/* harmony import */ var _utils_firstFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/firstFocus */ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js");
/* harmony import */ var _utils_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");



var NEW_FOCUS = 'NEW_FOCUS';
var newFocus = function (innerNodes, outerNodes, activeElement, lastNode) {
    var cnt = innerNodes.length;
    var firstFocus = innerNodes[0];
    var lastFocus = innerNodes[cnt - 1];
    var isOnGuard = (0,_utils_is__WEBPACK_IMPORTED_MODULE_0__.isGuard)(activeElement);
    if (innerNodes.indexOf(activeElement) >= 0) {
        return undefined;
    }
    var activeIndex = outerNodes.indexOf(activeElement);
    var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
    var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
    var indexDiff = activeIndex - lastIndex;
    var firstNodeIndex = outerNodes.indexOf(firstFocus);
    var lastNodeIndex = outerNodes.indexOf(lastFocus);
    var correctedNodes = (0,_utils_correctFocus__WEBPACK_IMPORTED_MODULE_1__.correctNodes)(outerNodes);
    var correctedIndexDiff = correctedNodes.indexOf(activeElement) - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
    var returnFirstNode = (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_2__.pickFocusable)(innerNodes, 0);
    var returnLastNode = (0,_utils_firstFocus__WEBPACK_IMPORTED_MODULE_2__.pickFocusable)(innerNodes, cnt - 1);
    if (activeIndex === -1 || lastNodeInside === -1) {
        return NEW_FOCUS;
    }
    if (!indexDiff && lastNodeInside >= 0) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnLastNode;
    }
    if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnFirstNode;
    }
    if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex) {
        return returnLastNode;
    }
    if (activeIndex > lastNodeIndex) {
        return returnFirstNode;
    }
    if (indexDiff) {
        if (Math.abs(indexDiff) > 1) {
            return lastNodeInside;
        }
        return (cnt + lastNodeInside + indexDiff) % cnt;
    }
    return undefined;
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/tabHook.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/tabHook.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    attach: function () { },
    detach: function () { },
});


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/DOMutils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterFocusable: () => (/* binding */ filterFocusable),
/* harmony export */   getAllTabbableNodes: () => (/* binding */ getAllTabbableNodes),
/* harmony export */   getTabbableNodes: () => (/* binding */ getTabbableNodes),
/* harmony export */   parentAutofocusables: () => (/* binding */ parentAutofocusables)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/focus-lock/dist/es2015/utils/is.js");
/* harmony import */ var _tabOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabOrder */ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js");
/* harmony import */ var _tabUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabUtils */ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js");




var filterFocusable = function (nodes, visibilityCache) {
    return (0,_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(nodes)
        .filter(function (node) { return (0,_is__WEBPACK_IMPORTED_MODULE_1__.isVisibleCached)(visibilityCache, node); })
        .filter(function (node) { return (0,_is__WEBPACK_IMPORTED_MODULE_1__.notHiddenInput)(node); });
};
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
    return (0,_tabOrder__WEBPACK_IMPORTED_MODULE_2__.orderByTabIndex)(filterFocusable((0,_tabUtils__WEBPACK_IMPORTED_MODULE_3__.getFocusables)(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getAllTabbableNodes = function (topNodes, visibilityCache) {
    return (0,_tabOrder__WEBPACK_IMPORTED_MODULE_2__.orderByTabIndex)(filterFocusable((0,_tabUtils__WEBPACK_IMPORTED_MODULE_3__.getFocusables)(topNodes), visibilityCache), false);
};
var parentAutofocusables = function (topNode, visibilityCache) {
    return filterFocusable((0,_tabUtils__WEBPACK_IMPORTED_MODULE_3__.getParentAutofocusables)(topNode), visibilityCache);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/all-affected.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/all-affected.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllAffectedNodes: () => (/* binding */ getAllAffectedNodes)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");


var filterNested = function (nodes) {
    var contained = new Set();
    var l = nodes.length;
    for (var i = 0; i < l; i += 1) {
        for (var j = i + 1; j < l; j += 1) {
            var position = nodes[i].compareDocumentPosition(nodes[j]);
            if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
                contained.add(j);
            }
            if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
                contained.add(i);
            }
        }
    }
    return nodes.filter(function (_, index) { return !contained.has(index); });
};
var getTopParent = function (node) {
    return node.parentNode ? getTopParent(node.parentNode) : node;
};
var getAllAffectedNodes = function (node) {
    var nodes = (0,_array__WEBPACK_IMPORTED_MODULE_0__.asArray)(node);
    return nodes.filter(Boolean).reduce(function (acc, currentNode) {
        var group = currentNode.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_GROUP);
        acc.push.apply(acc, (group
            ? filterNested((0,_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(getTopParent(currentNode).querySelectorAll("[" + _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_GROUP + "=\"" + group + "\"]:not([" + _constants__WEBPACK_IMPORTED_MODULE_1__.FOCUS_DISABLED + "=\"disabled\"])")))
            : [currentNode]));
        return acc;
    }, []);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/array.js":
/*!************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asArray: () => (/* binding */ asArray),
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
var toArray = function (a) {
    var ret = Array(a.length);
    for (var i = 0; i < a.length; ++i) {
        ret[i] = a[i];
    }
    return ret;
};
var asArray = function (a) { return (Array.isArray(a) ? a : [a]); };


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/correctFocus.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   correctNode: () => (/* binding */ correctNode),
/* harmony export */   correctNodes: () => (/* binding */ correctNodes)
/* harmony export */ });
var isRadio = function (node) { return node.tagName === 'INPUT' && node.type === 'radio'; };
var findSelectedRadio = function (node, nodes) {
    return nodes
        .filter(isRadio)
        .filter(function (el) { return el.name === node.name; })
        .filter(function (el) { return el.checked; })[0] || node;
};
var correctNode = function (node, nodes) {
    if (isRadio(node) && node.name) {
        return findSelectedRadio(node, nodes);
    }
    return node;
};
var correctNodes = function (nodes) {
    var resultSet = new Set();
    nodes.forEach(function (node) { return resultSet.add(correctNode(node, nodes)); });
    return nodes.filter(function (node) { return resultSet.has(node); });
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/firstFocus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/firstFocus.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pickFirstFocus: () => (/* binding */ pickFirstFocus),
/* harmony export */   pickFocusable: () => (/* binding */ pickFocusable)
/* harmony export */ });
/* harmony import */ var _correctFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./correctFocus */ "./node_modules/focus-lock/dist/es2015/utils/correctFocus.js");

var pickFirstFocus = function (nodes) {
    if (nodes[0] && nodes.length > 1) {
        return (0,_correctFocus__WEBPACK_IMPORTED_MODULE_0__.correctNode)(nodes[0], nodes);
    }
    return nodes[0];
};
var pickFocusable = function (nodes, index) {
    if (nodes.length > 1) {
        return nodes.indexOf((0,_correctFocus__WEBPACK_IMPORTED_MODULE_0__.correctNode)(nodes[index], nodes));
    }
    return index;
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/is.js":
/*!*********************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/is.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDefined: () => (/* binding */ isDefined),
/* harmony export */   isGuard: () => (/* binding */ isGuard),
/* harmony export */   isNotAGuard: () => (/* binding */ isNotAGuard),
/* harmony export */   isVisibleCached: () => (/* binding */ isVisibleCached),
/* harmony export */   notHiddenInput: () => (/* binding */ notHiddenInput)
/* harmony export */ });
var isElementHidden = function (node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    var computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
var isVisibleUncached = function (node, checkParent) {
    return !node ||
        node === document ||
        (node && node.nodeType === Node.DOCUMENT_NODE) ||
        (!isElementHidden(node) &&
            checkParent(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                ? node.parentNode.host
                : node.parentNode));
};
var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
var notHiddenInput = function (node) {
    return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};
var isGuard = function (node) { return Boolean(node && node.dataset && node.dataset.focusGuard); };
var isNotAGuard = function (node) { return !isGuard(node); };
var isDefined = function (x) { return Boolean(x); };


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/parenting.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/parenting.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allParentAutofocusables: () => (/* binding */ allParentAutofocusables),
/* harmony export */   getCommonParent: () => (/* binding */ getCommonParent),
/* harmony export */   getTopCommonParent: () => (/* binding */ getTopCommonParent)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _DOMutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMutils */ "./node_modules/focus-lock/dist/es2015/utils/DOMutils.js");


var getParents = function (node, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode, parents);
    }
    return parents;
};
var getCommonParent = function (nodeA, nodeB) {
    var parentsA = getParents(nodeA);
    var parentsB = getParents(nodeB);
    for (var i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
    var activeElements = (0,_array__WEBPACK_IMPORTED_MODULE_0__.asArray)(baseActiveElement);
    var leftEntries = (0,_array__WEBPACK_IMPORTED_MODULE_0__.asArray)(leftEntry);
    var activeElement = activeElements[0];
    var topCommon = false;
    leftEntries.filter(Boolean).forEach(function (entry) {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach(function (subEntry) {
            var common = getCommonParent(activeElement, subEntry);
            if (common) {
                if (!topCommon || common.contains(topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = getCommonParent(common, topCommon);
                }
            }
        });
    });
    return topCommon;
};
var allParentAutofocusables = function (entries, visibilityCache) {
    return entries.reduce(function (acc, node) { return acc.concat((0,_DOMutils__WEBPACK_IMPORTED_MODULE_1__.parentAutofocusables)(node, visibilityCache)); }, []);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabOrder.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabOrder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orderByTabIndex: () => (/* binding */ orderByTabIndex),
/* harmony export */   tabSort: () => (/* binding */ tabSort)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");

var tabSort = function (a, b) {
    var tabDiff = a.tabIndex - b.tabIndex;
    var indexDiff = a.index - b.index;
    if (tabDiff) {
        if (!a.tabIndex) {
            return 1;
        }
        if (!b.tabIndex) {
            return -1;
        }
    }
    return tabDiff || indexDiff;
};
var orderByTabIndex = function (nodes, filterNegative, keepGuards) {
    return (0,_array__WEBPACK_IMPORTED_MODULE_0__.toArray)(nodes)
        .map(function (node, index) { return ({
        node: node,
        index: index,
        tabIndex: keepGuards && node.tabIndex === -1 ? ((node.dataset || {}).focusGuard ? 0 : -1) : node.tabIndex,
    }); })
        .filter(function (data) { return !filterNegative || data.tabIndex >= 0; })
        .sort(tabSort);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFocusables: () => (/* binding */ getFocusables),
/* harmony export */   getParentAutofocusables: () => (/* binding */ getParentAutofocusables)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/focus-lock/dist/es2015/utils/array.js");
/* harmony import */ var _tabbables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabbables */ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js");



var queryTabbables = _tabbables__WEBPACK_IMPORTED_MODULE_0__.tabbables.join(',');
var queryGuardTabbables = queryTabbables + ", [data-focus-guard]";
var getFocusables = function (parents, withGuards) {
    return parents.reduce(function (acc, parent) {
        return acc.concat((0,_array__WEBPACK_IMPORTED_MODULE_1__.toArray)(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)), parent.parentNode
            ? (0,_array__WEBPACK_IMPORTED_MODULE_1__.toArray)(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) { return node === parent; })
            : []);
    }, []);
};
var getParentAutofocusables = function (parent) {
    var parentFocus = parent.querySelectorAll("[" + _constants__WEBPACK_IMPORTED_MODULE_2__.FOCUS_AUTO + "]");
    return (0,_array__WEBPACK_IMPORTED_MODULE_1__.toArray)(parentFocus)
        .map(function (node) { return getFocusables([node]); })
        .reduce(function (acc, nodes) { return acc.concat(nodes); }, []);
};


/***/ }),

/***/ "./node_modules/focus-lock/dist/es2015/utils/tabbables.js":
/*!****************************************************************!*\
  !*** ./node_modules/focus-lock/dist/es2015/utils/tabbables.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabbables: () => (/* binding */ tabbables)
/* harmony export */ });
var tabbables = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
];


/***/ }),

/***/ "./node_modules/get-nonce/dist/es2015/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/get-nonce/dist/es2015/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNonce: () => (/* binding */ getNonce),
/* harmony export */   setNonce: () => (/* binding */ setNonce)
/* harmony export */ });
var currentNonce;
var setNonce = function (nonce) {
    currentNonce = nonce;
};
var getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-clientside-effect/lib/index.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-clientside-effect/lib/index.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (true) {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSideEffect);


/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var AutoFocusInside = function AutoFocusInside(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_util__WEBPACK_IMPORTED_MODULE_3__.inlineProp)(focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_AUTO, !disabled), {
    className: className
  }), children);
};

AutoFocusInside.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} : 0;
AutoFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Combination.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Combination.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trap */ "./node_modules/react-focus-lock/dist/es2015/Trap.js");





/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FocusLockUICombination(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Lock__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    sideCar: _Trap__WEBPACK_IMPORTED_MODULE_4__["default"],
    ref: ref
  }, props));
});

var _ref = _Lock__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes || {},
    sideCar = _ref.sideCar,
    propTypes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["sideCar"]);

FocusLockCombination.propTypes =  true ? propTypes : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FocusLockCombination);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FocusGuard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hiddenGuard: () => (/* binding */ hiddenGuard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

var InFocusGuard = function InFocusGuard(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};

InFocusGuard.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
} : 0;
InFocusGuard.defaultProps = {
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InFocusGuard);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");






var FreeFocusInside = function FreeFocusInside(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_util__WEBPACK_IMPORTED_MODULE_3__.inlineProp)(focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_ALLOW, true), {
    className: className
  }), children);
};

FreeFocusInside.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} : 0;
FreeFocusInside.defaultProps = {
  className: undefined
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreeFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Lock.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Lock.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var emptyArray = [];
var FocusLock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  var isActive = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_1__.useState({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  var returnFocus = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (allowDefer) {
    var current = originalFocusedElement.current;

    if (Boolean(shouldReturnFocus) && current && current.focus) {
      var focusOptions = typeof shouldReturnFocus === 'object' ? shouldReturnFocus : undefined;
      originalFocusedElement.current = null;

      if (allowDefer) {
        // React might return focus after update
        // it's safer to defer the action
        Promise.resolve().then(function () {
          return current.focus(focusOptions);
        });
      } else {
        current.focus(focusOptions);
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (event) {
    if (isActive.current) {
      _medium__WEBPACK_IMPORTED_MODULE_3__.mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = _medium__WEBPACK_IMPORTED_MODULE_3__.mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (true) {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
      if (!observed.current) {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((_extends2 = {}, _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_DISABLED] = disabled && 'disabled', _extends2[focus_lock_constants__WEBPACK_IMPORTED_MODULE_4__.FOCUS_GROUP] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = (0,use_callback_ref__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)([parentRef, setObserveNode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hasLeadingGuards && [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_6__.hiddenGuard
  }),
  /*#__PURE__*/
  // nearest focus guard
  react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_6__.hiddenGuard
  }) // first tabbed element guard
  ], !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SideCar, {
    id: id,
    sideCar: _medium__WEBPACK_IMPORTED_MODULE_3__.mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Container, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: _FocusGuard__WEBPACK_IMPORTED_MODULE_6__.hiddenGuard
  }));
});
FocusLock.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  returnFocus: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_2__.bool, prop_types__WEBPACK_IMPORTED_MODULE_2__.object]),
  noFocusGuards: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  allowTextSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  persistentFocus: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  crossFrame: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  group: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  whiteList: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  shards: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_2__.any),
  as: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.func, prop_types__WEBPACK_IMPORTED_MODULE_2__.object]),
  lockProps: prop_types__WEBPACK_IMPORTED_MODULE_2__.object,
  onActivation: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  onDeactivation: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  sideCar: prop_types__WEBPACK_IMPORTED_MODULE_2__.any.isRequired
} : 0;
FocusLock.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FocusLock);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFocusInside: () => (/* binding */ useFocusInside)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var focus_lock_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-lock/constants */ "./node_modules/focus-lock/dist/es2015/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");






var useFocusInside = function useFocusInside(observedRef) {
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    var enabled = true;
    _medium__WEBPACK_IMPORTED_MODULE_3__.mediumEffect.useMedium(function (car) {
      var observed = observedRef && observedRef.current;

      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function () {
      enabled = false;
    };
  }, [observedRef]);
};

function MoveFocusInside(_ref) {
  var isDisabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children;
  var ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  useFocusInside(isDisabled ? undefined : ref);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_util__WEBPACK_IMPORTED_MODULE_4__.inlineProp)(focus_lock_constants__WEBPACK_IMPORTED_MODULE_5__.FOCUS_AUTO, !isDisabled), {
    ref: ref,
    className: className
  }), children);
}

MoveFocusInside.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
} : 0;
MoveFocusInside.defaultProps = {
  disabled: false,
  className: undefined
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoveFocusInside);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/Trap.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/Trap.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-clientside-effect */ "./node_modules/react-clientside-effect/lib/index.es.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/focusIsHidden.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/focusInside.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/index.js");
/* harmony import */ var focus_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! focus-lock */ "./node_modules/focus-lock/dist/es2015/focusables.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/react-focus-lock/dist/es2015/util.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./medium */ "./node_modules/react-focus-lock/dist/es2015/medium.js");







var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || (0,focus_lock__WEBPACK_IMPORTED_MODULE_3__.focusIsHidden)();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === 'meanwhile';
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !((0,focus_lock__WEBPACK_IMPORTED_MODULE_4__.focusInside)(workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }

              document.body.focus();
            } else {
              result = (0,focus_lock__WEBPACK_IMPORTED_MODULE_5__["default"])(workingArea, lastActiveFocus);
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = (0,focus_lock__WEBPACK_IMPORTED_MODULE_6__.getFocusabledIn)(workingArea);
        var focusedIndex = allNodes.map(function (_ref) {
          var node = _ref.node;
          return node;
        }).indexOf(newActiveElement);

        if (focusedIndex > -1) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return (0,_util__WEBPACK_IMPORTED_MODULE_7__.deferAction)(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

var FocusTrap = function FocusTrap(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onBlur: onBlur,
    onFocus: onFocus
  }, children);
};

FocusTrap.propTypes =  true ? {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
} : 0;

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap(true);
    (0,_util__WEBPACK_IMPORTED_MODULE_7__.deferAction)(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


_medium__WEBPACK_IMPORTED_MODULE_8__.mediumFocus.assignSyncMedium(onFocus);
_medium__WEBPACK_IMPORTED_MODULE_8__.mediumBlur.assignMedium(onBlur);
_medium__WEBPACK_IMPORTED_MODULE_8__.mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: focus_lock__WEBPACK_IMPORTED_MODULE_5__["default"],
    focusInside: focus_lock__WEBPACK_IMPORTED_MODULE_4__.focusInside
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_clientside_effect__WEBPACK_IMPORTED_MODULE_2__["default"])(reducePropsToState, handleStateChangeOnClient)(FocusWatcher));

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/UI.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/UI.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoFocusInside: () => (/* reexport safe */ _AutoFocusInside__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   FocusLockUI: () => (/* reexport safe */ _Lock__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   FreeFocusInside: () => (/* reexport safe */ _FreeFocusInside__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   InFocusGuard: () => (/* reexport safe */ _FocusGuard__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   MoveFocusInside: () => (/* reexport safe */ _MoveFocusInside__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFocusInside: () => (/* reexport safe */ _MoveFocusInside__WEBPACK_IMPORTED_MODULE_1__.useFocusInside)
/* harmony export */ });
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lock */ "./node_modules/react-focus-lock/dist/es2015/Lock.js");
/* harmony import */ var _AutoFocusInside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoFocusInside */ "./node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js");
/* harmony import */ var _MoveFocusInside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveFocusInside */ "./node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js");
/* harmony import */ var _FreeFocusInside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreeFocusInside */ "./node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js");
/* harmony import */ var _FocusGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FocusGuard */ "./node_modules/react-focus-lock/dist/es2015/FocusGuard.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Lock__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoFocusInside: () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_0__.AutoFocusInside),
/* harmony export */   FocusLockUI: () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_0__.FocusLockUI),
/* harmony export */   FreeFocusInside: () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_0__.FreeFocusInside),
/* harmony export */   InFocusGuard: () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_0__.InFocusGuard),
/* harmony export */   MoveFocusInside: () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_0__.MoveFocusInside),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFocusInside: () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_0__.useFocusInside)
/* harmony export */ });
/* harmony import */ var _Combination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Combination */ "./node_modules/react-focus-lock/dist/es2015/Combination.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./node_modules/react-focus-lock/dist/es2015/UI.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Combination__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/medium.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/medium.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mediumBlur: () => (/* binding */ mediumBlur),
/* harmony export */   mediumEffect: () => (/* binding */ mediumEffect),
/* harmony export */   mediumFocus: () => (/* binding */ mediumFocus),
/* harmony export */   mediumSidecar: () => (/* binding */ mediumSidecar)
/* harmony export */ });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/medium.js");

var mediumFocus = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createMedium)({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createMedium)();
var mediumEffect = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createMedium)();
var mediumSidecar = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createSidecarMedium)({
  async: true
});

/***/ }),

/***/ "./node_modules/react-focus-lock/dist/es2015/util.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-focus-lock/dist/es2015/util.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deferAction: () => (/* binding */ deferAction),
/* harmony export */   inlineProp: () => (/* binding */ inlineProp)
/* harmony export */ });
function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}
var inlineProp = function inlineProp(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, "__esModule", ({ value: true }));

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-paginate/dist/react-paginate.js":
/*!************************************************************!*\
  !*** ./node_modules/react-paginate/dist/react-paginate.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,a){ true?module.exports=a(__webpack_require__(/*! react */ "react")):0}(this,(e=>(()=>{var a={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,r),i.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>k});var e=r(98),a=r.n(e),t=r(697),i=r.n(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var o=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,b=e.ariaLabel||"Page "+n+(g?" "+g:""),v=null;return i&&(v="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),a().createElement("li",{className:t},a().createElement("a",s({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":b,"aria-current":v,onKeyPress:p},c(p)),d(n)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var p=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=n||"break";return a().createElement("li",{className:l},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:s},o(s)),t))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},v(e,a)}function h(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var P=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&v(e,a)}(o,e);var t,r,n,i,s=(n=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=y(n);if(i){var t=y(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return h(this,e)});function o(e){var t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),C(m(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),C(m(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),C(m(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),C(m(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),C(m(t),"getEventListener",(function(e){return C({},t.props.eventListener,e)})),C(m(t),"handleClick",(function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,s=void 0!==i&&i,o=n.isNext,l=void 0!==o&&o,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,g=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=t.state.selected,f=t.props.onClick,b=r;if(f){var v=f({index:a,selected:d,nextSelectedPage:r,event:e,isPrevious:s,isNext:l,isBreak:p,isActive:g});if(!1===v)return;Number.isInteger(v)&&(b=v)}void 0!==b&&t.handlePageChange(b)})),C(m(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),C(m(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),C(m(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),C(m(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,i=r.prevPageRel,s=r.selectedPageRel;return a-1===e?i:a===e?s:a+1===e?n:void 0})),C(m(t),"pagination",(function(){var e=[],r=t.props,n=r.pageRangeDisplayed,i=r.pageCount,s=r.marginPagesDisplayed,o=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=r.breakAriaLabels,g=t.state.selected;if(i<=n)for(var d=0;d<i;d++)e.push(t.getPageElement(d));else{var f=n/2,b=n-f;g>i-n/2?f=n-(b=i-g):g<n/2&&(b=n-(f=g));var v,h,m=function(e){return t.getPageElement(e)},y=[];for(v=0;v<i;v++){var C=v+1;if(C<=s)y.push({type:"page",index:v,display:m(v)});else if(C>i-s)y.push({type:"page",index:v,display:m(v)});else if(v>=g-f&&v<=g+(0===g&&n>1?b-1:b))y.push({type:"page",index:v,display:m(v)});else if(o&&y.length>0&&y[y.length-1].display!==h&&(n>0||s>0)){var P=v<g?p.backward:p.forward;h=a().createElement(u,{key:v,breakAriaLabel:P,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,v),getEventListener:t.getEventListener}),y.push({type:"break",index:v,display:h})}}y.forEach((function(a,t){var r=a;"break"===a.type&&y[t-1]&&"page"===y[t-1].type&&y[t+1]&&"page"===y[t+1].type&&y[t+1].index-y[t-1].index<=2&&(r={type:"page",index:a.index,display:m(a.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=o,(r=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,s=r.activeClassName,o=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,i=t.pageCount,s=t.className,o=t.containerClassName,l=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,u=t.previousAriaLabel,d=t.prevRel,b=t.nextLabel,v=t.nextClassName,h=t.nextLinkClassName,m=t.nextAriaLabel,y=t.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(g(c)).concat(P?" ".concat(g(r)):""),L="".concat(g(v)).concat(k?" ".concat(g(r)):""),N="".concat(g(p)).concat(P?" ".concat(g(n)):""),O="".concat(g(h)).concat(k?" ".concat(g(n)):""),R=P?"true":"false",E=k?"true":"false";return a().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:x},a().createElement("a",f({className:N,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":R,"aria-label":u,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:L},a().createElement("a",f({className:O,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":E,"aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),b)))}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const k=P})(),n})()));
//# sourceMappingURL=react-paginate.js.map

/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveScrollBar: () => (/* binding */ RemoveScrollBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");




var Style = (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_1__.styleSingleton)();
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, " .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, " .").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () { return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getGapWidth)(gapMode); }, [gapMode]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fullWidthClassName: () => (/* binding */ fullWidthClassName),
/* harmony export */   noScrollbarsClassName: () => (/* binding */ noScrollbarsClassName),
/* harmony export */   removedBarSizeVariable: () => (/* binding */ removedBarSizeVariable),
/* harmony export */   zeroRightClassName: () => (/* binding */ zeroRightClassName)
/* harmony export */ });
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';


/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveScrollBar: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.RemoveScrollBar),
/* harmony export */   fullWidthClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.fullWidthClassName),
/* harmony export */   getGapWidth: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getGapWidth),
/* harmony export */   noScrollbarsClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.noScrollbarsClassName),
/* harmony export */   removedBarSizeVariable: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.removedBarSizeVariable),
/* harmony export */   zeroRightClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.zeroRightClassName)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-remove-scroll-bar/dist/es2015/component.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js");






/***/ }),

/***/ "./node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGapWidth: () => (/* binding */ getGapWidth),
/* harmony export */   zeroGap: () => (/* binding */ zeroGap)
/* harmony export */ });
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/Combination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/Combination.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./node_modules/react-remove-scroll/dist/es2015/UI.js");
/* harmony import */ var _sidecar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidecar */ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js");




var ReactRemoveScroll = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UI__WEBPACK_IMPORTED_MODULE_2__.RemoveScroll, tslib__WEBPACK_IMPORTED_MODULE_3__.__assign({}, props, { ref: ref, sideCar: _sidecar__WEBPACK_IMPORTED_MODULE_1__["default"] }))); });
ReactRemoveScroll.classNames = _UI__WEBPACK_IMPORTED_MODULE_2__.RemoveScroll.classNames;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactRemoveScroll);


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/SideEffect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveScrollSideCar: () => (/* binding */ RemoveScrollSideCar),
/* harmony export */   getDeltaXY: () => (/* binding */ getDeltaXY),
/* harmony export */   getTouchXY: () => (/* binding */ getTouchXY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar */ "./node_modules/react-remove-scroll-bar/dist/es2015/index.js");
/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-style-singleton */ "./node_modules/react-style-singleton/dist/es2015/index.js");
/* harmony import */ var _handleScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleScroll */ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js");
/* harmony import */ var _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggresiveCapture */ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js");





var getTouchXY = function (event) {
    return 'changedTouches' in event
        ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function (id) { return "\n  .block-interactivity-" + id + " {pointer-events: none;}\n  .allow-interactivity-" + id + " {pointer-events: all;}\n"; };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    var touchStartRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([0, 0]);
    var activeAxis = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var id = react__WEBPACK_IMPORTED_MODULE_0__.useState(idCounter++)[0];
    var Style = react__WEBPACK_IMPORTED_MODULE_0__.useState(function () { return (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_2__.styleSingleton)(); })[0];
    var lastProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(props);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-" + id);
            var allow_1 = [
                props.lockRef.current
            ].concat((props.shards || []).map(extractRef)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-" + id); });
            return function () {
                document.body.classList.remove("block-interactivity-" + id);
                allow_1.forEach(function (el) {
                    return el.classList.remove("allow-interactivity-" + id);
                });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        var canBeScrolledInMainDirection = (0,_handleScroll__WEBPACK_IMPORTED_MODULE_3__.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0,_handleScroll__WEBPACK_IMPORTED_MODULE_3__.locationCouldBeScrolled)(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current &&
            'changedTouches' in event &&
            (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0,_handleScroll__WEBPACK_IMPORTED_MODULE_3__.handleScroll)(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) {
            return e.name === event.type &&
                e.target === event.target &&
                deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            event.preventDefault();
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0
                ? shouldCancelEvent(event, shardNodes[0])
                : !lastProps.current.noIsolation;
            if (shouldStop) {
                event.preventDefault();
            }
        }
    }, []);
    var shouldCancel = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        document.addEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, _aggresiveCapture__WEBPACK_IMPORTED_MODULE_4__.nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        inert ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_remove_scroll_bar__WEBPACK_IMPORTED_MODULE_1__.RemoveScrollBar, { gapMode: "margin" }) : null));
}


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/UI.js":
/*!************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/UI.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveScroll: () => (/* binding */ RemoveScroll)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-remove-scroll-bar/constants */ "./node_modules/react-remove-scroll-bar/dist/es2015/constants.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");
/* harmony import */ var use_callback_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-callback-ref */ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js");





var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, parentRef) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = tslib__WEBPACK_IMPORTED_MODULE_2__.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = (0,use_callback_ref__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([
        ref,
        parentRef
    ]);
    var containerProps = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, rest, callbacks);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        enabled && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideCar, { sideCar: _medium__WEBPACK_IMPORTED_MODULE_4__.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children), tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, containerProps, { ref: containerRef }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, tslib__WEBPACK_IMPORTED_MODULE_2__.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_1__.fullWidthClassName,
    zeroRight: react_remove_scroll_bar_constants__WEBPACK_IMPORTED_MODULE_1__.zeroRightClassName
};



/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nonPassive: () => (/* binding */ nonPassive)
/* harmony export */ });
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/handleScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/handleScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleScroll: () => (/* binding */ handleScroll),
/* harmony export */   locationCouldBeScrolled: () => (/* binding */ locationCouldBeScrolled)
/* harmony export */ });
var elementCouldBeVScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    return (styles.overflowY !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowY === 'visible') // scrollable
    );
};
var elementCouldBeHScrolled = function (node) {
    var styles = window.getComputedStyle(node);
    // we allow horizontal scroll on range elements
    if (node.type === "range") {
        return true;
    }
    return (styles.overflowX !== 'hidden' && // not-not-scrollable
        !(styles.overflowY === styles.overflowX && styles.overflowX === 'visible') // scrollable
    );
};
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [scrollTop, scrollHeight, clientHeight];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [scrollLeft, scrollWidth, clientWidth];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var delta = sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive &&
        ((noOverscroll && availableScroll === 0) ||
            (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) ||
            (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/medium.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/medium.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   effectCar: () => (/* binding */ effectCar)
/* harmony export */ });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/medium.js");

var effectCar = (0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.createSidecarMedium)();


/***/ }),

/***/ "./node_modules/react-remove-scroll/dist/es2015/sidecar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-remove-scroll/dist/es2015/sidecar.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var use_sidecar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sidecar */ "./node_modules/use-sidecar/dist/es2015/exports.js");
/* harmony import */ var _SideEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideEffect */ "./node_modules/react-remove-scroll/dist/es2015/SideEffect.js");
/* harmony import */ var _medium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medium */ "./node_modules/react-remove-scroll/dist/es2015/medium.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,use_sidecar__WEBPACK_IMPORTED_MODULE_0__.exportSidecar)(_medium__WEBPACK_IMPORTED_MODULE_1__.effectCar, _SideEffect__WEBPACK_IMPORTED_MODULE_2__.RemoveScrollSideCar));


/***/ }),

/***/ "./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleSingleton: () => (/* binding */ styleSingleton)
/* harmony export */ });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = (0,_hook__WEBPACK_IMPORTED_MODULE_0__.styleHookSingleton)();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleHookSingleton: () => (/* binding */ styleHookSingleton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");


/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = (0,_singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)();
    return function (styles, isDynamic) {
        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};


/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleHookSingleton: () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_2__.styleHookSingleton),
/* harmony export */   styleSingleton: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.styleSingleton),
/* harmony export */   stylesheetSingleton: () => (/* reexport safe */ _singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/react-style-singleton/dist/es2015/component.js");
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ "./node_modules/react-style-singleton/dist/es2015/singleton.js");
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ "./node_modules/react-style-singleton/dist/es2015/hook.js");





/***/ }),

/***/ "./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesheetSingleton: () => (/* binding */ stylesheetSingleton)
/* harmony export */ });
/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ "./node_modules/get-nonce/dist/es2015/index.js");

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0,get_nonce__WEBPACK_IMPORTED_MODULE_0__.getNonce)();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
});


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/assignRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/assignRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignRef: () => (/* binding */ assignRef)
/* harmony export */ });
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useMergeRef.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useMergeRef.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMergeRefs: () => (/* binding */ useMergeRefs)
/* harmony export */ });
/* harmony import */ var _assignRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignRef */ "./node_modules/use-callback-ref/dist/es2015/assignRef.js");
/* harmony import */ var _useRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRef */ "./node_modules/use-callback-ref/dist/es2015/useRef.js");


/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return (0,_useRef__WEBPACK_IMPORTED_MODULE_0__.useCallbackRef)(defaultValue || null, function (newValue) { return refs.forEach(function (ref) { return (0,_assignRef__WEBPACK_IMPORTED_MODULE_1__.assignRef)(ref, newValue); }); });
}


/***/ }),

/***/ "./node_modules/use-callback-ref/dist/es2015/useRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es2015/useRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/exports.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/exports.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportSidecar: () => (/* binding */ exportSidecar)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Target, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}


/***/ }),

/***/ "./node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************!*\
  !*** ./node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMedium: () => (/* binding */ createMedium),
/* harmony export */   createSidecarMedium: () => (/* binding */ createSidecarMedium)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ async: true, ssr: false }, options);
    return medium;
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockLibrary"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/format-library":
/*!***************************************!*\
  !*** external ["wp","formatLibrary"] ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["formatLibrary"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@reach/dialog/dist/reach-dialog.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@reach/dialog/dist/reach-dialog.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogContent: () => (/* binding */ DialogContent),
/* harmony export */   DialogInner: () => (/* binding */ DialogInner),
/* harmony export */   DialogOverlay: () => (/* binding */ DialogOverlay),
/* harmony export */   unstable_DialogWrapper: () => (/* binding */ DialogWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/portal */ "./node_modules/@reach/portal/dist/reach-portal.mjs");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/reach-utils.mjs");
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-focus-lock */ "./node_modules/react-focus-lock/dist/es2015/index.js");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-remove-scroll */ "./node_modules/react-remove-scroll/dist/es2015/Combination.js");

/**
  * @reach/dialog v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */


// src/reach-dialog.tsx





var [DialogContextProvider, useDialogContext] = (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.createContext)("DialogContext", {
  isOpen: false
});
function DialogWrapper({
  isOpen = true,
  children,
  ...props
}) {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (isOpen) {
      window.__REACH_DISABLE_TOOLTIPS = true;
    } else {
      window.requestAnimationFrame(() => {
        window.__REACH_DISABLE_TOOLTIPS = false;
      });
    }
  }, [isOpen]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reach_portal__WEBPACK_IMPORTED_MODULE_2__.Portal, {
    "data-reach-dialog-wrapper": "",
    "data-state": isOpen ? "open" /* Open */ : "closed" /* Closed */,
    ...props
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogContextProvider, {
    isOpen
  }, children));
}
DialogWrapper.displayName = "unstable_DialogWrapper";
var DialogInner = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogInner2({
  allowPinchZoom,
  as: Comp = "div",
  dangerouslyBypassFocusLock,
  dangerouslyBypassScrollLock,
  initialFocusRef,
  onClick,
  onDismiss = _reach_utils__WEBPACK_IMPORTED_MODULE_1__.noop,
  onKeyDown,
  onMouseDown,
  unstable_lockFocusAcrossFrames,
  ...props
}, forwardedRef) {
  let { isOpen } = useDialogContext("DialogInner");
  let lockFocusAcrossFramesIsDefined = unstable_lockFocusAcrossFrames !== void 0;
  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (lockFocusAcrossFramesIsDefined) {
        console.warn(`The unstable_lockFocusAcrossFrames in @reach/dialog is deprecated. It will be removed in the next minor release.`);
      }
    }, [lockFocusAcrossFramesIsDefined]);
  }
  const mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const overlayNode = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const ref = (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.useComposedRefs)(overlayNode, forwardedRef);
  const activateFocusLock = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);
  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }
  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    return overlayNode.current ? createAriaHider(overlayNode.current) : void 0;
  }, []);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_focus_lock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock,
    disabled: dangerouslyBypassFocusLock != null ? dangerouslyBypassFocusLock : !isOpen,
    crossFrame: unstable_lockFocusAcrossFrames ?? true
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_remove_scroll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    allowPinchZoom,
    enabled: dangerouslyBypassScrollLock != null ? !dangerouslyBypassScrollLock : isOpen
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, {
    ...props,
    ref,
    "data-reach-dialog-inner": "",
    "data-state": isOpen ? "open" /* Open */ : "closed" /* Closed */,
    onClick: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.composeEventHandlers)(onClick, handleClick),
    onKeyDown: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.composeEventHandlers)(onKeyDown, handleKeyDown),
    onMouseDown: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.composeEventHandlers)(onMouseDown, handleMouseDown)
  })));
});
DialogInner.displayName = "DialogInner";
var DialogOverlay = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogOverlay2({ as: Comp = "div", isOpen = true, ...props }, forwardedRef) {
  return isOpen ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogWrapper, {
    isOpen
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogInner, {
    "data-reach-dialog-overlay": "",
    ref: forwardedRef,
    as: Comp,
    ...props
  })) : null;
});
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogContent2({ as: Comp = "div", onClick, onKeyDown, ...props }, forwardedRef) {
  let { isOpen } = useDialogContext("DialogContent");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, {
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1,
    ...props,
    ref: forwardedRef,
    "data-reach-dialog-content": "",
    "data-state": isOpen ? "open" /* Open */ : "closed" /* Closed */,
    onClick: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.composeEventHandlers)(onClick, (event) => {
      event.stopPropagation();
    })
  });
});
DialogContent.displayName = "DialogContent";
var Dialog = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Dialog2({
  allowPinchZoom = false,
  initialFocusRef,
  isOpen,
  onDismiss = _reach_utils__WEBPACK_IMPORTED_MODULE_1__.noop,
  ...props
}, forwardedRef) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogOverlay, {
    allowPinchZoom,
    initialFocusRef,
    isOpen,
    onDismiss
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogContent, {
    ref: forwardedRef,
    ...props
  }));
});
Dialog.displayName = "Dialog";
function createAriaHider(dialogNode) {
  let originalValues = [];
  let rootNodes = [];
  let ownerDocument = (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(dialogNode);
  if (!dialogNode) {
    if (true) {
      console.warn("A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`.");
    }
    return _reach_utils__WEBPACK_IMPORTED_MODULE_1__.noop;
  }
  Array.prototype.forEach.call(ownerDocument.querySelectorAll("body > *"), (node) => {
    const portalNode = dialogNode.parentNode?.parentNode?.parentNode;
    if (node === portalNode) {
      return;
    }
    let attr = node.getAttribute("aria-hidden");
    let alreadyHidden = attr !== null && attr !== "false";
    if (alreadyHidden) {
      return;
    }
    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute("aria-hidden", "true");
  });
  return () => {
    rootNodes.forEach((node, index) => {
      let originalValue = originalValues[index];
      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}



/***/ }),

/***/ "./node_modules/@reach/portal/dist/reach-portal.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@reach/portal/dist/reach-portal.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/dist/reach-utils.mjs");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");

/**
  * @reach/portal v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */


// src/reach-portal.tsx



var PortalImpl = ({
  children,
  type = "reach-portal",
  containerRef
}) => {
  let mountNode = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  let portalNode = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  let forceUpdate = (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.useForceUpdate)();
  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
      if (containerRef != null) {
        if (typeof containerRef !== "object" || !("current" in containerRef)) {
          console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.");
        } else if (containerRef.current == null) {
          console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html.");
        }
      }
    }, [containerRef]);
  }
  (0,_reach_utils__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(() => {
    if (!mountNode.current)
      return;
    let ownerDocument = mountNode.current.ownerDocument;
    let body = containerRef?.current || ownerDocument.body;
    portalNode.current = ownerDocument?.createElement(type);
    body.appendChild(portalNode.current);
    forceUpdate();
    return () => {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);
  return portalNode.current ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(children, portalNode.current) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    ref: mountNode
  });
};
var Portal = ({
  unstable_skipInitialRender,
  ...props
}) => {
  let [hydrated, setHydrated] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (unstable_skipInitialRender) {
      setHydrated(true);
    }
  }, [unstable_skipInitialRender]);
  if (unstable_skipInitialRender && !hydrated) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PortalImpl, {
    ...props
  });
};
Portal.displayName = "Portal";



/***/ }),

/***/ "./node_modules/@reach/utils/dist/reach-utils.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@reach/utils/dist/reach-utils.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignRef: () => (/* binding */ assignRef),
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   cloneValidElement: () => (/* binding */ cloneValidElement),
/* harmony export */   composeEventHandlers: () => (/* binding */ composeEventHandlers),
/* harmony export */   createContext: () => (/* binding */ createContext2),
/* harmony export */   createNamedContext: () => (/* binding */ createNamedContext),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getComputedStyles: () => (/* binding */ getComputedStyles),
/* harmony export */   getDocumentDimensions: () => (/* binding */ getDocumentDimensions),
/* harmony export */   getOwnerDocument: () => (/* binding */ getOwnerDocument),
/* harmony export */   getOwnerWindow: () => (/* binding */ getOwnerWindow),
/* harmony export */   getScrollPosition: () => (/* binding */ getScrollPosition),
/* harmony export */   getScrollbarOffset: () => (/* binding */ getScrollbarOffset),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isRightClick: () => (/* binding */ isRightClick),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   makeId: () => (/* binding */ makeId),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs),
/* harmony export */   useConstant: () => (/* binding */ useConstant),
/* harmony export */   useControlledState: () => (/* binding */ useControlledState),
/* harmony export */   useControlledSwitchWarning: () => (/* binding */ useControlledSwitchWarning),
/* harmony export */   useEventListener: () => (/* binding */ useEventListener),
/* harmony export */   useFocusChange: () => (/* binding */ useFocusChange),
/* harmony export */   useForceUpdate: () => (/* binding */ useForceUpdate),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect),
/* harmony export */   useLazyRef: () => (/* binding */ useLazyRef),
/* harmony export */   usePrevious: () => (/* binding */ usePrevious),
/* harmony export */   useStableCallback: () => (/* binding */ useStableCallback),
/* harmony export */   useStableLayoutCallback: () => (/* binding */ useStableLayoutCallback),
/* harmony export */   useStatefulRefValue: () => (/* binding */ useStatefulRefValue),
/* harmony export */   useUpdateEffect: () => (/* binding */ useUpdateEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

/**
  * @reach/utils v0.18.0
  *
  * Copyright (c) 2018-2022, React Training LLC
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */


// src/can-use-dom.ts
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// src/clone-valid-element.ts

function cloneValidElement(element, props, ...children) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, props, ...children) : element;
}

// src/compose-event-handlers.ts
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

// src/compose-refs.ts


// src/type-check.ts
function isBoolean(value) {
  return typeof value === "boolean";
}
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
function isString(value) {
  return typeof value === "string";
}

// src/compose-refs.ts
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
}
function useComposedRefs(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node) => {
    for (let ref of refs) {
      assignRef(ref, node);
    }
  }, refs);
}

// src/owner-document.ts
function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}
function getOwnerWindow(element) {
  let ownerDocument = getOwnerDocument(element);
  return ownerDocument ? ownerDocument.defaultView || window : null;
}

// src/computed-styles.ts
function getComputedStyles(element) {
  let ownerWindow = getOwnerWindow(element);
  if (ownerWindow) {
    return ownerWindow.getComputedStyle(element, null);
  }
  return null;
}
function getComputedStyle(element, styleProp) {
  return getComputedStyles(element)?.getPropertyValue(styleProp) || null;
}

// src/context.tsx

function createNamedContext(name, defaultValue) {
  let Ctx = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}
function createContext2(rootComponentName, defaultContext) {
  let Ctx = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);
  function Provider(props) {
    let { children, ...context } = props;
    let value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ctx.Provider, {
      value
    }, children);
  }
  function useContext2(callerComponentName) {
    let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Ctx);
    if (context) {
      return context;
    }
    if (defaultContext) {
      return defaultContext;
    }
    throw Error(`${callerComponentName} must be rendered inside of a ${rootComponentName} component.`);
  }
  Ctx.displayName = `${rootComponentName}Context`;
  Provider.displayName = `${rootComponentName}Provider`;
  return [Provider, useContext2];
}

// src/dev-utils.ts

function useControlledSwitchWarning(controlledValue, controlledPropName, componentName) {
  if (true) {
    let controlledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(controlledValue != null);
    let nameCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({ componentName, controlledPropName });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      nameCache.current = { componentName, controlledPropName };
    }, [componentName, controlledPropName]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      let { current: wasControlled } = controlledRef;
      let { componentName: componentName2, controlledPropName: controlledPropName2 } = nameCache.current;
      let isControlled = controlledValue != null;
      if (wasControlled !== isControlled) {
        console.error(`A component is changing an ${wasControlled ? "" : "un"}controlled \`${controlledPropName2}\` state of ${componentName2} to be ${wasControlled ? "un" : ""}controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled ${componentName2} element for the lifetime of the component.
      More info: https://fb.me/react-controlled-components`);
      }
    }, [controlledValue]);
  }
}

// src/get-document-dimensions.ts
function getDocumentDimensions(element) {
  let ownerDocument = getOwnerDocument(element);
  let ownerWindow = ownerDocument.defaultView || window;
  if (!ownerDocument) {
    return {
      width: 0,
      height: 0
    };
  }
  return {
    width: ownerDocument.documentElement.clientWidth ?? ownerWindow.innerWidth,
    height: ownerDocument.documentElement.clientHeight ?? ownerWindow.innerHeight
  };
}

// src/get-scroll-position.ts
function getScrollPosition(element) {
  let ownerWindow = getOwnerWindow(element);
  if (!ownerWindow) {
    return {
      scrollX: 0,
      scrollY: 0
    };
  }
  return {
    scrollX: ownerWindow.scrollX,
    scrollY: ownerWindow.scrollY
  };
}

// src/get-scrollbar-offset.ts
function getScrollbarOffset() {
  try {
    if (window.innerWidth > document.documentElement.clientWidth) {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  } catch (err) {
  }
  return 0;
}

// src/is-right-click.ts
function isRightClick(nativeEvent) {
  return "which" in nativeEvent ? nativeEvent.which === 3 : "button" in nativeEvent ? nativeEvent.button === 2 : false;
}

// src/make-id.ts
function makeId(...args) {
  return args.filter((val) => val != null).join("--");
}

// src/noop.ts
function noop() {
}

// src/use-constant.ts

function useConstant(fn) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!ref.current) {
    ref.current = { v: fn() };
  }
  return ref.current.v;
}

// src/use-controlled-state.ts

function useControlledState({
  controlledValue,
  defaultValue,
  calledFrom = "A component"
}) {
  let wasControlled = controlledValue !== void 0;
  let isControlledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(wasControlled);
  if (true) {
    if (!isControlledRef.current && wasControlled) {
      console.warn(`${calledFrom} is changing from controlled to uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
    }
    if (isControlledRef.current && !wasControlled) {
      console.warn(`${calledFrom} is changing from uncontrolled to controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
    }
  }
  let [valueState, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isControlledRef.current ? controlledValue : defaultValue);
  let set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((n) => {
    if (!isControlledRef.current) {
      setValue(n);
    }
  }, []);
  return [isControlledRef.current ? controlledValue : valueState, set];
}

// src/use-event-listener.ts

function useEventListener(eventName, listener, element = window) {
  const savedHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(listener);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    savedHandler.current = listener;
  }, [listener]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      if (true) {
        console.warn("Event listener not supported on the element provided");
      }
      return;
    }
    function eventListener(event) {
      savedHandler.current(event);
    }
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

// src/use-focus-change.ts

function useFocusChange(handleChange = console.log, when = "focus", ownerDocument = document) {
  let lastActiveElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(ownerDocument.activeElement);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    lastActiveElement.current = ownerDocument.activeElement;
    function onChange(event) {
      if (lastActiveElement.current !== ownerDocument.activeElement) {
        handleChange(ownerDocument.activeElement, lastActiveElement.current, event);
        lastActiveElement.current = ownerDocument.activeElement;
      }
    }
    ownerDocument.addEventListener(when, onChange, true);
    return () => {
      ownerDocument.removeEventListener(when, onChange);
    };
  }, [when, handleChange, ownerDocument]);
}

// src/use-force-update.ts

function useForceUpdate() {
  let [, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(/* @__PURE__ */ Object.create(null));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(/* @__PURE__ */ Object.create(null));
  }, []);
}

// src/use-isomorphic-layout-effect.ts

var useIsomorphicLayoutEffect = canUseDOM() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

// src/use-lazy-ref.ts

function useLazyRef(fn) {
  let isSet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  let ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!isSet.current) {
    isSet.current = true;
    ref.current = fn();
  }
  return ref;
}

// src/use-previous.ts

function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// src/use-stable-callback.ts

function createStableCallbackHook(useEffectHook, callback) {
  let callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
  useEffectHook(() => {
    callbackRef.current = callback;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {
    callbackRef.current && callbackRef.current(...args);
  }, []);
}
function useStableCallback(callback) {
  return createStableCallbackHook(react__WEBPACK_IMPORTED_MODULE_0__.useEffect, callback);
}
function useStableLayoutCallback(callback) {
  return createStableCallbackHook(useIsomorphicLayoutEffect, callback);
}

// src/use-stateful-ref-value.ts

function useStatefulRefValue(ref, initialState) {
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  let callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((refValue) => {
    ref.current = refValue;
    setState(refValue);
  }, []);
  return [state, callbackRef];
}

// src/use-update-effect.ts

function useUpdateEffect(effect, deps) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    }
  }, deps);
}



/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounce: () => (/* binding */ R),
/* harmony export */   Flip: () => (/* binding */ $),
/* harmony export */   Icons: () => (/* binding */ E),
/* harmony export */   Slide: () => (/* binding */ w),
/* harmony export */   ToastContainer: () => (/* binding */ k),
/* harmony export */   Zoom: () => (/* binding */ x),
/* harmony export */   collapseToast: () => (/* binding */ g),
/* harmony export */   cssTransition: () => (/* binding */ h),
/* harmony export */   toast: () => (/* binding */ Q),
/* harmony export */   useToast: () => (/* binding */ _),
/* harmony export */   useToastContainer: () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
'use client';
const u=t=>"number"==typeof t&&!isNaN(t),d=t=>"string"==typeof t,p=t=>"function"==typeof t,m=t=>d(t)||p(t)?t:null,f=t=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)||d(t)||p(t)||u(t);function g(t,e,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,n)})})}function h(e){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=e;return function(e){let{children:u,position:d,preventExitTransition:p,done:m,nodeRef:f,isIn:h}=e;const y=i?`${a}--${d}`:a,v=i?`${r}--${d}`:r,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{const t=f.current,e=y.split(" "),n=o=>{o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===T.current&&"animationcancel"!==o.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const t=f.current,e=()=>{t.removeEventListener("animationend",e),l?g(t,m,c):m()};h||(p?e():(T.current=1,t.className+=` ${v}`,t.addEventListener("animationend",e)))},[h]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,u)}}function y(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const v={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(t=>t!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},T=e=>{let{theme:n,type:o,...s}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...s})},E={info:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(T,{...e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__spinner"})}};function C(t){const[,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(t=>t+1,0),[l,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map).current,T=t=>-1!==l.indexOf(t),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:T,getToast:t=>h.get(t)}).current;function b(t){let{containerId:e}=t;const{limit:n}=C.props;!n||e&&C.containerId!==e||(C.count-=C.queue.length,C.queue=[])}function I(t){c(e=>null==t?[]:e.filter(e=>e!==t))}function _(){const{toastContent:t,toastProps:e,staleId:n}=C.queue.shift();O(t,e,n)}function L(t,n){let{delay:s,staleId:r,...i}=n;if(!f(t)||function(t){return!g.current||C.props.enableMultiContainer&&t.containerId!==C.props.containerId||h.has(t.toastId)&&null==t.updateId}(i))return;const{toastId:l,updateId:c,data:T}=i,{props:b}=C,L=()=>I(l),N=null==c;N&&C.count++;const M={...b,style:b.toastStyle,key:C.toastKey++,...Object.fromEntries(Object.entries(i).filter(t=>{let[e,n]=t;return null!=n})),toastId:l,updateId:c,data:T,closeToast:L,isIn:!1,className:m(i.className||b.toastClassName),bodyClassName:m(i.bodyClassName||b.bodyClassName),progressClassName:m(i.progressClassName||b.progressClassName),autoClose:!i.isLoading&&(R=i.autoClose,w=b.autoClose,!1===R||u(R)&&R>0?R:w),deleteToast(){const t=y(h.get(l),"removed");h.delete(l),v.emit(4,t);const e=C.queue.length;if(C.count=null==l?C.count-C.displayedToast:C.count-1,C.count<0&&(C.count=0),e>0){const t=null==l?C.props.limit:1;if(1===e||1===t)C.displayedToast++,_();else{const n=t>e?e:t;C.displayedToast=n;for(let t=0;t<n;t++)_()}}else o()}};var R,w;M.iconOut=function(t){let{theme:n,type:o,isLoading:s,icon:r}=t,i=null;const l={theme:n,type:o};return!1===r||(p(r)?i=r(l):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)?i=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,l):d(r)||u(r)?i=r:s?i=E.spinner():(t=>t in E)(o)&&(i=E[o](l))),i}(M),p(i.onOpen)&&(M.onOpen=i.onOpen),p(i.onClose)&&(M.onClose=i.onClose),M.closeButton=b.closeButton,!1===i.closeButton||f(i.closeButton)?M.closeButton=i.closeButton:!0===i.closeButton&&(M.closeButton=!f(b.closeButton)||b.closeButton);let x=t;(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t)&&!d(t.type)?x=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(t,{closeToast:L,toastProps:M,data:T}):p(t)&&(x=t({closeToast:L,toastProps:M,data:T})),b.limit&&b.limit>0&&C.count>b.limit&&N?C.queue.push({toastContent:x,toastProps:M,staleId:r}):u(s)?setTimeout(()=>{O(x,M,r)},s):O(x,M,r)}function O(t,e,n){const{toastId:o}=e;n&&h.delete(n);const s={content:t,props:e};h.set(o,s),c(t=>[...t,o].filter(t=>t!==n)),v.emit(4,y(s,null==s.props.updateId?"added":"updated"))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(C.containerId=t.containerId,v.cancelEmit(3).on(0,L).on(1,t=>g.current&&I(t)).on(5,b).emit(2,C),()=>{h.clear(),v.emit(3,C)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{C.props=t,C.isToastActive=T,C.displayedToast=l.length}),{getToastToRender:function(e){const n=new Map,o=Array.from(h.values());return t.newestOnTop&&o.reverse(),o.forEach(t=>{const{position:e}=t.props;n.has(e)||n.set(e,[]),n.get(e).push(t)}),Array.from(n,t=>e(t[0],t[1]))},containerRef:g,isToastActive:T}}function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function _(t){const[o,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[r,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),{autoClose:m,pauseOnHover:f,closeToast:g,onClick:h,closeOnClick:y}=t;function v(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);const n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=b(e.nativeEvent),u.y=I(e.nativeEvent),"x"===t.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(e){if(u.boundingRect){const{top:n,bottom:o,left:s,right:a}=u.boundingRect;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&u.x>=s&&u.x<=a&&u.y>=n&&u.y<=o?C():E()}}function E(){a(!0)}function C(){a(!1)}function _(e){const n=c.current;u.canDrag&&n&&(u.didMove=!0,o&&C(),u.x=b(e),u.y=I(e),u.delta="x"===t.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform=`translate${t.draggableDirection}(${u.delta}px)`,n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);const e=c.current;if(u.canDrag&&u.didMove&&e){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform=`translate${t.draggableDirection}(0)`,e.style.opacity="1"}}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{d.current=t}),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(c.current&&c.current.addEventListener("d",E,{once:!0}),p(t.onOpen)&&t.onOpen((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t.children)&&t.children.props),()=>{const t=d.current;p(t.onClose)&&t.onClose((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(t.children)&&t.children.props)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);const O={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return m&&f&&(O.onMouseEnter=C,O.onMouseLeave=E),y&&(O.onClick=t=>{h&&h(t),u.canCloseOnClick&&g()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:r,toastRef:c,eventHandlers:O}}function L(e){let{closeToast:n,theme:o,ariaLabel:s="close"}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:t=>{t.stopPropagation(),n(t)},"aria-label":s},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(e){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:l,controlledProgress:u,progress:d,rtl:m,isIn:f,theme:g}=e;const h=r||u&&0===d,y={...l,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused",opacity:h?0:1};u&&(y.transform=`scaleX(${d})`);const v=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=p(i)?i({rtl:m,type:a,defaultClassName:v}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(v,i);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:T,style:y,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{f&&s()}})}const N=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i}=_(n),{closeButton:l,children:u,autoClose:d,onClick:m,type:f,hideProgressBar:g,closeToast:h,transition:y,position:v,className:T,style:E,bodyClassName:C,bodyStyle:b,progressClassName:I,progressStyle:N,updateId:M,role:R,progress:w,rtl:x,toastId:$,deleteToast:k,isIn:P,isLoading:B,iconOut:D,closeOnClick:A,theme:z}=n,F=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":A}),H=p(T)?T({rtl:x,position:v,type:f,defaultClassName:F}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(F,T),S=!!w||!d,q={closeToast:h,type:f,theme:z};let Q=null;return!1===l||(Q=p(l)?l(q):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(l)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(l,q):L(q)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(y,{isIn:P,done:k,position:v,preventExitTransition:s,nodeRef:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:$,onClick:m,className:H,...i,style:E,ref:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...P&&{role:R},className:p(C)?C({type:f}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-body",C),style:b},null!=D&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,u)),Q,react__WEBPACK_IMPORTED_MODULE_0__.createElement(O,{...M&&!S?{key:`pb-${M}`}:{},rtl:x,theme:z,delay:d,isRunning:o,isIn:P,closeToast:h,hide:g,type:f,style:N,className:I,controlledProgress:S,progress:w||0})))},M=function(t,e){return void 0===e&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},R=h(M("bounce",!0)),w=h(M("slide",!0)),x=h(M("zoom")),$=h(M("flip")),k=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((e,n)=>{const{getToastToRender:o,containerRef:a,isToastActive:r}=C(e),{className:i,style:l,rtl:u,containerId:d}=e;function f(t){const e=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-container",`Toastify__toast-container--${t}`,{"Toastify__toast-container--rtl":u});return p(i)?i({position:t,rtl:u,defaultClassName:e}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(e,m(i))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n&&(n.current=a.current)},[]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:a,className:"Toastify",id:d},o((e,n)=>{const o=n.length?{...l}:{...l,pointerEvents:"none"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:f(e),style:o,key:`container-${e}`},n.map((e,o)=>{let{content:s,props:a}=e;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(N,{...a,isIn:r(a.toastId),style:{...a.style,"--nth":o+1,"--len":n.length},key:`toast-${a.key}`},s)}))}))});k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:R,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let P,B=new Map,D=[],A=1;function z(){return""+A++}function F(t){return t&&(d(t.toastId)||u(t.toastId))?t.toastId:z()}function H(t,e){return B.size>0?v.emit(0,t,e):D.push({content:t,options:e}),e.toastId}function S(t,e){return{...e,type:e&&e.type||t,toastId:F(e)}}function q(t){return(e,n)=>H(e,S(t,n))}function Q(t,e){return H(t,S("default",e))}Q.loading=(t,e)=>H(t,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Q.promise=function(t,e,n){let o,{pending:s,error:a,success:r}=e;s&&(o=d(s)?Q.loading(s,n):Q.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(t,e,s)=>{if(null==e)return void Q.dismiss(o);const a={type:t,...i,...n,data:s},r=d(e)?{render:e}:e;return o?Q.update(o,{...a,...r}):Q(r.render,{...a,...r}),s},c=p(t)?t():t;return c.then(t=>l("success",r,t)).catch(t=>l("error",a,t)),c},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=(t,e)=>H(t,S("default",{theme:"dark",...e})),Q.dismiss=t=>{B.size>0?v.emit(1,t):D=D.filter(e=>null!=t&&e.options.toastId!==t)},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),v.emit(5,t)},Q.isActive=t=>{let e=!1;return B.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Q.update=function(t,e){void 0===e&&(e={}),setTimeout(()=>{const n=function(t,e){let{containerId:n}=e;const o=B.get(n||P);return o&&o.getToast(t)}(t,e);if(n){const{props:o,content:s}=n,a={delay:100,...o,...e,toastId:e.toastId||t,updateId:z()};a.toastId!==t&&(a.staleId=t);const r=a.render||s;delete a.render,H(r,a)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(v.on(4,t),()=>{v.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},v.on(2,t=>{P=t.containerId||t,B.set(P,t),D.forEach(t=>{v.emit(0,t.content,t.options)}),D=[]}).on(3,t=>{B.delete(t.containerId||t),0===B.size&&v.off(0).off(1).off(5)});
//# sourceMappingURL=react-toastify.esm.mjs.map


/***/ })

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/awt.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");




document.addEventListener('DOMContentLoaded', () => {
  const renderElementInstance = document.getElementById('advanced-wp-table-wrapper');
  if (renderElementInstance) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null)), renderElementInstance);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=awt.js.map