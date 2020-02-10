import Row from './Row';

const Body = ( { rows: length, columns } ) => {
	const rows = [];

	for ( let i = 0; i < length; i++ ) {
		rows.push( <Row columns={ columns } key={ i } /> );
	}

	return (
		<div className={ 'wp-table-body' }>{ rows }</div>
	);
};

export default Body;
