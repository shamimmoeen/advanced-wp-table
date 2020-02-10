import Cell from './Cell';

const Row = ( { columns } ) => {
	const cells = [];

	for ( let i = 0; i < columns; i++ ) {
		cells.push( <Cell title={ `Cell ${ i }` } key={ i } /> );
	}
	return <div className="wp-tr">{ cells }</div>;
};

export default Row;
