const { useState } = wp.element;

import './table.scss';

import Header from './Header';
import Body from './Body';

const Table = () => {
	const [ table, setTable ] = useState( {
		rows: 4,
		columns: 5,
	} );

	return (
		<div className={ 'wp-table' }>
			<Header columns={ table.columns } />
			<Body rows={ table.rows } columns={ table.columns } />
		</div>
	);
};

export default Table;
