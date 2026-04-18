import { StateContext } from '../App';
import BulkActions from './BulkActions';
import Header from './Header';
import Pagination from './Pagination';
import Table from './Table';
import TableLoading from './TableLoading';

const { Fragment, useContext } = wp.element;
const { __ } = wp.i18n;

const List = () => {
	const { state } = useContext( StateContext );
	const { tablesLoading, tables, total } = state;
	const isEmpty = ! tablesLoading && tables.length === 0 && total === 0;

	return (
		<Fragment>
			<Header />
			{ isEmpty ? (
				<p>{ __( 'No tables found. Click "Add New" to create your first table.', 'advanced-wp-table' ) }</p>
			) : (
				<Fragment>
					<div className={ 'advanced-wp-table-tablenav' }>
						<BulkActions />
						<Pagination />
					</div>
					{ tablesLoading ? <TableLoading /> : <Table /> }
					<div className={ 'advanced-wp-table-tablenav' }>
						<Pagination />
					</div>
				</Fragment>
			) }
		</Fragment>
	);
};

export default List;
