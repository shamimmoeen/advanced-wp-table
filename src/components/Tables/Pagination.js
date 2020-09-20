import React from 'react';
import { __ } from '@wordpress/i18n';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { paginateTables } from '../../store/reducers/tables';

const Pagination = () => {
	const tablesState = useSelector( state => state.tables );
	const dispatch = useDispatch();
	const { total, totalPages, perPage, currentPage } = tablesState;

	const onHandlePageChange = ( data ) => {
		const selected = data.selected;
		const offset = Math.ceil( selected * perPage );
		dispatch( paginateTables( { offset, currentPage: selected } ) );
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
