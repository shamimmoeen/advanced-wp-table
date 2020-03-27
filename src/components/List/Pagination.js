import ReactPaginate from 'react-paginate';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __ } = wp.i18n;

const Pagination = () => {
	const { state, dispatch } = useContext( StateContext );
	const { total, totalPages, perPage, currentPage } = state;

	const onHandlePageChange = ( data ) => {
		const selected = data.selected;
		const offset = Math.ceil( selected * perPage );
		dispatch( { type: 'PAGINATE_TABLES', payload: { offset, currentPage: selected } } );
	};

	let paginationElement;

	if ( 1 < totalPages ) {
		paginationElement = (
			<ReactPaginate
				previousLabel={ '‹' }
				nextLabel={ '›' }
				breakLabel={ '...' }
				breakClassName={ 'break-me' }
				pageCount={ parseInt( totalPages ) }
				forcePage={ currentPage }
				marginPagesDisplayed={ 2 }
				pageRangeDisplayed={ 3 }
				onPageChange={ onHandlePageChange }
				containerClassName={ 'advanced-wp-table-pagination' }
				subContainerClassName={ 'pages pagination' }
				activeClassName={ 'active' }
			/>
		);
	}

	return (
		<div className={ 'advanced-wp-table-pagination-wrapper' }>
			<span className={ 'advanced-wp-table-total-info' }>
				{ 1 === total ?
					`${ total } ${ __( 'item', 'advanced-wp-table' ) }` :
					`${ total } ${ __( 'items', 'advanced-wp-table' ) }`
				}
			</span>
			{ paginationElement }
		</div>
	);
};

export default Pagination;
