const { Fragment, useState, useEffect } = wp.element;
import apiFetch from '@wordpress/api-fetch';
import { registerCoreBlocks } from '@wordpress/block-library';
import { hot } from 'react-hot-loader/root';
import List from './list/List';
import Modal from './modal/Modal';
import Buttons from './table/Buttons';
import Table from './table/Table';

const defaultTable = {
	new: false,
	id: null,
	post: null,
	newTableData: {
		title: '',
		rows: '2',
		columns: '2',
	},
	newTableError: null,
	isLoading: false,
};

const App = () => {
	const [ data, setData ] = useState( [] );
	const [ modalState, setModalState ] = useState( 0 );
	const [ cellData, setCellData ] = useState( '' );
	const [ list, setList ] = useState( { loading: true, list: [] } );
	const [ table, setTable ] = useState( defaultTable );
	const { size, rows } = data;

	useEffect( () => {
		registerCoreBlocks();

		const disAllowedBlocks = [
			'core/freeform', // causes js not found issue when rendering
			'core/shortcode', // causes block validation failed
		];

		wp.blocks.getBlockTypes().forEach( ( blockType ) => {
			if ( disAllowedBlocks.includes( blockType.name ) ) {
				wp.blocks.unregisterBlockType( blockType.name );
			}
		} );
	}, [] );

	useEffect( () => {
		if ( ! table.post ) {
			return;
		}

		const _size = {
			rows: parseInt( table.post.advanced_wp_table_data.size.rows ),
			columns: parseInt( table.post.advanced_wp_table_data.size.columns ),
		};

		setData( { ...table.post.advanced_wp_table_data, size: _size } );
	}, [ table.post ] );

	useEffect( () => {
		apiFetch( { path: '/wp/v2/advanced-wp-table?per_page=99' } ).then( ( posts ) => {
			setList( { loading: false, list: posts } );
		} );
	}, [] );

	const handleAddRow = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newRow = [];

		for ( let i = 0; i < tempSize.columns; i++ ) {
			newRow.push( '' );
		}

		const newData = [ ...tempRows, newRow ];
		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const newTable = { size: newSize, rows: newData };

		setData( newTable );
	};

	const handleAddColumn = () => {
		const tempSize = { ...size };
		const tempRows = [ ...rows ];
		const newData = [];

		tempRows.map( ( row ) => {
			const newRow = [ ...row, '' ];
			return newData.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const newTable = { size: newSize, rows: newData };

		setData( newTable );
	};

	const handleDeleteColumn = ( j ) => {
		const tempSize = { ...size };
		const newRows = rows.map( ( row ) => row.filter( ( column, index ) => index !== j ) );

		const newSize = { ...tempSize, columns: tempSize.columns - 1 };
		const newTable = { size: newSize, rows: newRows };

		setData( newTable );
	};

	const handleDeleteRow = ( i ) => {
		const tempSize = { ...size };
		const newRows = rows.filter( ( row, index ) => index !== i );

		const newSize = { ...tempSize, rows: tempSize.rows - 1 };
		const newTable = { size: newSize, rows: newRows };

		setData( newTable );
	};

	const handleDuplicateRow = ( i ) => {
		const tempSize = { ...size };
		const newRows = [ ...rows ];
		const newRowContent = newRows[ i ];
		newRows.splice( i + 0, 0, newRowContent );

		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const newTable = { size: newSize, rows: newRows };

		setData( newTable );
	};

	const handleDragEnd = ( type, from, to, newData ) => {
		const newTable = { ...data, rows: newData };

		setData( newTable );
	};

	const handleOpenModal = ( i, j ) => {
		const content = rows[ i ][ j ];
		const _data = { i, j, content };
		setModalState( ( prevState ) => ! prevState );
		setCellData( _data );
	};

	const handleSetCellData = ( _data ) => {
		const { i, j } = cellData;

		const newRows = rows.map( ( row, rowIndex ) => {
			if ( i === rowIndex ) {
				row.map( ( column, columnIndex ) => {
					if ( j === columnIndex ) {
						return row[ j ] = _data;
					}

					return column;
				} );
			}

			return row;
		} );

		setData( { ...data, rows: newRows } );
		setModalState( ( prevState ) => ! prevState );
	};

	const handleCloseModal = () => {
		setModalState( ( prevState ) => ! prevState );
	};

	const prepareData = () => {
		let content = '';

		content += '<div class="advanced-wp-table">';
		content += '<div class="advanced-wp-table-body">';

		rows.forEach( ( row ) => {
			content += '<div class="advanced-wp-table-row">';

			row.forEach( ( column ) => {
				content += '<div class="advanced-wp-table-cell">';
				content += column;
				content += '</div>';
			} );

			content += '</div>';
		} );

		content += '</div>';
		content += '</div>';

		return content;
	};

	const handleSaveTable = () => {
		const content = prepareData();
		const advancedWPTableData = { size, rows };

		setTable( { ...table, isLoading: true } );

		// PUT
		apiFetch( {
			path: `/wp/v2/advanced-wp-table/${ table.id }`,
			method: 'PUT',
			data: { content, advanced_wp_table_data: advancedWPTableData },
		} ).then( ( res ) => {
			const newList = list.list.map( ( item ) => {
				if ( item.id === res.id ) {
					return res;
				}

				return item;
			} );

			setList( { ...list, list: newList } );
			setTable( { ...table, isLoading: false } );
		} ).catch( ( err ) => {
			// eslint-disable-next-line no-console
			console.log( err );
		} );
	};

	const handleSetTable = ( item ) => {
		setTable( { ...table, id: item.id, post: item } );
	};

	const handleNewTable = () => {
		setTable( { ...defaultTable, new: true } );
	};

	const handleNewTableInput = ( e ) => {
		const { newTableData } = table;
		newTableData[ e.target.name ] = e.target.value;
		setTable( { ...table, newTableData, newTableError: null } );
	};

	const validateNewTable = () => {
		const { title, rows: noOfRows, columns: noOfColumns } = table.newTableData;
		let error;

		if ( ! title ) {
			error = 'Title shouldn\'t be empty';
		} else if ( parseInt( noOfRows ) < 1 ) {
			error = 'No of rows should be greater than 0';
		} else if ( parseInt( noOfColumns ) < 1 ) {
			error = 'No of columns should be greater than 0';
		}

		if ( ! error ) {
			return true;
		}

		return error;
	};

	const createNewTable = () => {
		const { title, rows: noOfRows, columns: noOfColumns } = table.newTableData;
		setTable( { ...table, isLoading: true } );

		const tableSize = {
			rows: noOfRows,
			columns: noOfColumns,
		};

		const tableData = [];

		for ( let i = 0; i < noOfRows; i++ ) {
			const emptyRow = [];

			for ( let j = 0; j < noOfColumns; j++ ) {
				emptyRow.push( '' );
			}

			tableData.push( emptyRow );
		}

		// POST
		apiFetch( {
			path: '/wp/v2/advanced-wp-table',
			method: 'POST',
			data: { title, status: 'publish', advanced_wp_table_data: { size: tableSize, rows: tableData } },
		} ).then( ( res ) => {
			const newList = [ res, ...list.list ];
			setList( { ...list, list: newList } );
			setTable( { ...table, new: false, id: res.id, post: res, isLoading: false } );
		} ).catch( ( err ) => {
			// eslint-disable-next-line no-console
			console.log( err );
		} );
	};

	const handleNewTableSubmission = () => {
		const validate = validateNewTable();

		if ( true !== validate ) {
			setTable( { ...table, newTableError: validate } );
			return;
		}

		createNewTable();
	};

	const handleDeleteTable = ( id ) => {
		// DELETE
		apiFetch( {
			path: `/wp/v2/advanced-wp-table/${ id }`,
			method: 'DELETE',
		} ).then( () => {
			const newList = list.list.filter( ( item ) => id !== item.id );
			setList( { ...list, list: newList } );
		} ).catch( ( err ) => {
			// eslint-disable-next-line no-console
			console.log( err );
		} );
	};

	const handleBackToTables = () => {
		setTable( {
			new: false,
			id: null,
			post: null,
		} );
	};

	let content;

	if ( table.new ) {
		const { newTableError, isLoading } = table;
		const { title, rows: noOfRows, columns: noOfColumns } = table.newTableData;

		let buttonClasses = 'button button-primary advanced-wp-table-button-with-spinner';

		if ( isLoading ) {
			buttonClasses += ' advanced-wp-table-is-loading';
		}

		content = (
			<Fragment>
				<div className="advanced-wp-table-header">
					<div className="advanced-wp-table-inner-header">
						<h1>Add New Table</h1>
					</div>
				</div>
				<div className={ 'advanced-wp-table-new-table-form' }>
					<div className="advanced-wp-table-form-item">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id={ 'title' }
							name={ 'title' }
							placeholder={ 'Give a title' }
							onChange={ handleNewTableInput }
							value={ title }
						/>
					</div>
					<div className="advanced-wp-table-form-item">
						<label htmlFor="no-of-rows">How many rows?</label>
						<input
							type="number"
							id={ 'no-of-rows' }
							name={ 'rows' }
							onChange={ handleNewTableInput }
							value={ noOfRows }
						/>
					</div>
					<div className="advanced-wp-table-form-item">
						<label htmlFor="no-of-columns">How many columns?</label>
						<input
							type="number"
							id={ 'no-of-columns' }
							name={ 'columns' }
							onChange={ handleNewTableInput }
							value={ noOfColumns }
						/>
					</div>
				</div>
				<div className={ 'advanced-wp-table-new-table-form-buttons' }>
					<button
						className={ buttonClasses }
						onClick={ handleNewTableSubmission }
						disabled={ !! isLoading }
					>
						<span className="advanced-wp-table-spinner" />
						Create
					</button>
					{ ` ` }
					<button className={ 'button' } onClick={ handleBackToTables }>Cancel</button>
				</div>
				{ newTableError ? (
					<div className={ 'notice notice-error' }><p>{ newTableError }</p></div>
				) : '' }
			</Fragment>
		);
	} else if ( ! table.id ) {
		content = (
			<Fragment>
				<div className="advanced-wp-table-header">
					<div className="advanced-wp-table-inner-header">
						<h1>All Tables</h1>
						<button
							className={ 'button button-primary' }
							onClick={ handleNewTable }
						>
							Add New
						</button>
					</div>
				</div>
				<List list={ list } onHandleSetTable={ handleSetTable } onHandleDeleteTable={ handleDeleteTable } />
			</Fragment>
		);
	} else {
		content = (
			<Fragment>
				<div className="advanced-wp-table-header">
					<div className="advanced-wp-table-inner-header">
						<h1>{ table.post.title.rendered }</h1>
						<button
							className={ 'button button-primary' }
							onClick={ handleBackToTables }
						>
							<span className={ 'dashicons dashicons-controls-back' } /> Back to Tables
						</button>
					</div>
				</div>
				<Table
					rows={ rows }
					post={ table.post }
					onDragEnd={ handleDragEnd }
					onHandleOpenModal={ handleOpenModal }
					onHandleDeleteColumn={ handleDeleteColumn }
					onHandleDeleteRow={ handleDeleteRow }
					onHandleDuplicateRow={ handleDuplicateRow }
				/>
				<Buttons
					onAddRow={ handleAddRow }
					onAddColumn={ handleAddColumn }
					onSaveTable={ handleSaveTable }
					isLoading={ table.isLoading }
				/>
				<Modal
					modalState={ modalState }
					cellData={ cellData }
					onHandleSetCellData={ handleSetCellData }
					onHandleCloseModal={ handleCloseModal }
				/>
			</Fragment>
		);
	}

	return content;
};

export default hot( App );
