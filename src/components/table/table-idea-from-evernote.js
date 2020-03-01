const { useState, Fragment } = wp.element;

import './table.scss';

const defaultTable = {
	size: {
		rows: 2,
		columns: 3,
	},
	data: [
		[
			'Mainul Hassan Main',
			'Male',
			28,
		],
		[
			'Sakhawat Tahsan',
			'Male',
			16,
		],
	],
};

const Input = ( { value, onChange, onFocus } ) => (
	<input
		type={ 'text' }
		value={ value }
		onChange={ onChange }
		onFocus={ onFocus }
		style={ { width: '100%' } }
	/>
);

const Table = () => {
	const [ table, setTable ] = useState( defaultTable );
	const { size, data } = table;

	const handleChange = ( e, rowIndex, columnIndex ) => {
		const newData = data.map( ( row, _rowIndex ) => {
			if ( rowIndex === _rowIndex ) {
				return row.map( ( column, _columnIndex ) => {
					if ( columnIndex === _columnIndex ) {
						return e.target.value;
					}

					return column;
				} );
			}

			return row;
		} );

		const newTable = { ...table, data: newData };

		setTable( newTable );
	};

	const handleFocus = ( e ) => {
		console.log( e.target.value );
	};

	const addRow = () => {
		const tempSize = { ...size };
		const tempData = [ ...data ];
		const newRow = [];

		for ( let i = 0; i < tempSize.columns; i++ ) {
			newRow.push( '' );
		}

		const newData = [ ...tempData, newRow ];
		const newSize = { ...tempSize, rows: tempSize.rows + 1 };
		const newTable = { size: newSize, data: newData };

		setTable( newTable );
	};

	const addColumn = () => {
		const tempSize = { ...size };
		const tempData = [ ...data ];
		const newData = [];

		tempData.map( ( row ) => {
			const newRow = [ ...row, '' ];
			return newData.push( newRow );
		} );

		const newSize = { ...tempSize, columns: tempSize.columns + 1 };
		const newTable = { size: newSize, data: newData };

		setTable( newTable );
	};

	const resetTable = () => {
		const newTable = { ...defaultTable };

		setTable( newTable );
	};

	const markup = data.map( ( row, rowIndex ) => {
		return <tr key={ rowIndex }>
			{ row.map( ( value, columnIndex ) => (
				<td key={ columnIndex }>{
					<Input
						value={ value }
						onChange={ ( e ) => handleChange( e, rowIndex, columnIndex ) }
						onFocus={ handleFocus }
					/>
				}</td>
			) ) }
		</tr>;
	} );

	const rowOutlineMarkup = data.map( ( row, rowIndex ) => {
		return <div key={ rowIndex } className={ 'wp-row' } />;
	} );

	const ColumnOutlineMarkup = () => {
		const columns = [];

		for ( let i = 0; i < size.columns; i++ ) {
			columns.push( <div key={ i } className="wp-column" /> );
		}

		return columns;
	};

	return (
		<Fragment>
			<div className="wp-table-wrapper">
				<table>
					<tbody>{ markup }</tbody>
				</table>
				<div className="wp-table-outline">
					<div className="wp-table-row-outline">{ rowOutlineMarkup }</div>
					<div className="wp-table-column-outline">
						<ColumnOutlineMarkup />
					</div>
				</div>
			</div>
			<button onClick={ addRow }>Add Row</button>
			{ ` ` }
			<button onClick={ addColumn }>Add Column</button>
			{ ` ` }
			<button onClick={ resetTable }>Reset</button>
			{ ` ` }
			<button>Save</button>
		</Fragment>
	);
};

export default Table;
