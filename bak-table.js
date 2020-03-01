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

const Input = ( { value, onChange } ) => (
	<input
		type={ 'text' }
		value={ value }
		onChange={ onChange }
		style={ { width: '100%' } }
	/>
);

const EditCell = () => {
	return <span className={ 'dashicons dashicons-edit wp-edit-cell' } />;
};

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
				<td key={ columnIndex } draggable>
					{
						<div className={ 'wp-table-cell-wrapper' }>
							{ value }
							<EditCell />
						</div>
						// <Input
						// 	value={ value }
						// 	onChange={ ( e ) => handleChange( e, rowIndex, columnIndex ) }
						// />
					}
				</td>
			) ) }
		</tr>;
	} );

	return (
		<Fragment>
			<table className={ 'wp-table' }>
				<tbody>{ markup }</tbody>
			</table>
			<button className={ 'button' } onClick={ addRow }>Add Row</button>
			{ ` ` }
			<button className={ 'button' } onClick={ addColumn }>Add Column</button>
			{ ` ` }
			<button className={ 'button' } onClick={ resetTable }>Reset</button>
			{ ` ` }
			<button className={ 'button button-primary' }>Save</button>
		</Fragment>
	);
};

export default Table;
