import { StateContext } from '../App';
import BulkActions from './BulkActions';
import EmptyState from './EmptyState';
import Header from './Header';
import Pagination from './Pagination';
import Table from './Table';
import TableLoading from './TableLoading';

const { Fragment, useContext } = wp.element;

const List = () => {
	const { state } = useContext( StateContext );
	const { tablesLoading, tables } = state;

	if ( ! tablesLoading && tables.length === 0 ) {
		return (
			<Fragment>
				<Header />
				<div style={ { marginTop: '1em' } }>
					<EmptyState />
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Header />
			{ tablesLoading ? (
				<TableLoading />
			) : (
				<Fragment>
					<div className={ 'advanced-wp-table-tablenav' }>
						<BulkActions />
						<Pagination />
					</div>
					<Table />
					<div className={ 'advanced-wp-table-tablenav' }>
						<Pagination />
					</div>
				</Fragment>
			) }
		</Fragment>
	);
};

export default List;
