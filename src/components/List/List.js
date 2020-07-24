import { StateContext } from '../App';
import Header from './Header';
import Pagination from './Pagination';
import Table from './Table';
import TableLoading from './TableLoading';

const { Fragment, useContext, React } = wp.element;

const List = () => {
	const stateContext = useContext( StateContext );
	const { tablesLoading } = stateContext.state;

	return (
		<Fragment>
			<Header />
			<Pagination />
			{ tablesLoading ? <TableLoading /> : <Table /> }
			<Pagination />
		</Fragment>
	);
};

export default List;
