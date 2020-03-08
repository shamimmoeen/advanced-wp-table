const { Fragment, useState, useEffect } = wp.element;
import apiFetch from '@wordpress/api-fetch';
import { registerCoreBlocks } from '@wordpress/block-library';
import { hot } from 'react-hot-loader/root';
import Modal from './modal/Modal';
import Buttons from './table/Buttons';
import Table from './table/Table';

const defaultTable = {
	size: {
		rows: 2,
		columns: 2,
	},
	rows: [
		[
			'',
			'',
		],
		[
			'',
			'',
		],
	],
};

const App = () => {
	const [ data, setData ] = useState( [] );
	const [ modalState, setModalState ] = useState( 0 );
	const [ cellData, setCellData ] = useState( '' );
	const { size, rows } = data;
	const cacheKey = 'wp_table_blocks';

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
		// eslint-disable-next-line no-undef
		let oldData = JSON.parse( localStorage.getItem( cacheKey ) );

		if ( ! oldData ) {
			oldData = defaultTable;
		}

		setData( oldData );
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

	const handleResetTable = () => {
		const newTable = { ...defaultTable };

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
	};

	const handleCloseModal = () => {
		setModalState( ( prevState ) => ! prevState );
	};

	const prepareData = () => {
		let content = '';

		content += '<table>';

		rows.forEach( ( row ) => {
			content += '<tr>';

			row.forEach( ( column ) => {
				content += '<td>';
				content += column;
				content += '</td>';
			} );

			content += '</tr>';
		} );

		content += '</table>';

		return content;
	};

	const handleSaveTable = () => {
		const content = prepareData();

		// GET
		apiFetch( { path: '/wp/v2/wp-table' } ).then( ( posts ) => {
			console.log( posts );
		} );

		// POST
		apiFetch( {
			path: '/wp/v2/wp-table',
			method: 'POST',
			data: { title: 'New Post Title', status: 'publish', content: content },
		} ).then( res => {
			console.log( res );
		} );

		// eslint-disable-next-line no-undef
		localStorage.setItem( cacheKey, JSON.stringify( data ) );
	};

	return (
		<Fragment>
			<Table
				rows={ rows }
				onDragEnd={ handleDragEnd }
				onHandleOpenModal={ handleOpenModal }
				onHandleDeleteColumn={ handleDeleteColumn }
				onHandleDeleteRow={ handleDeleteRow }
			/>
			<Buttons
				onAddRow={ handleAddRow }
				onAddColumn={ handleAddColumn }
				onResetTable={ handleResetTable }
				onSaveTable={ handleSaveTable }
			/>
			<Modal
				modalState={ modalState }
				cellData={ cellData }
				onHandleSetCellData={ handleSetCellData }
				onHandleCloseModal={ handleCloseModal }
			/>
		</Fragment>
	);
};

export default hot( App );
