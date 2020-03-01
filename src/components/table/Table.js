const { useState, Fragment } = wp.element;
import './table.scss';
import ReactTableDragColumnRow from './TableContent';

const defaultTable = {
	size: {
		rows: 2,
		columns: 3,
	},
	rows: [
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

const Table = () => {
	const [ data, setData ] = useState( defaultTable );
	const { size, rows } = data;

	const addRow = () => {
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

	const addColumn = () => {
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

	const resetTable = () => {
		const newTable = { ...defaultTable };

		setData( newTable );
	};

	return (
		<Fragment>
			<ReactTableDragColumnRow
				rows={ data.rows }
				onDragEnd={ ( type, from, to, newData ) => {
					console.log( {
						type,
						from,
						to,
						newData,
					} );
					setData( newData );
				} }
			/>
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
