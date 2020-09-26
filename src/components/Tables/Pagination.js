import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import { setCache, setCurrentPage, setOffset, setTables } from '../../store/reducers/tables';
import { getTables } from '../../utils/table';
import { setTablesLoading, unsetTablesLoading } from '../../store/reducers/ui';
import { toastError } from '../../utils/utils';

const Pagination = () => {
	const tablesState = useSelector( state => state.tables );
	const dispatch = useDispatch();
	const { total, totalPages, perPage, currentPage, cache } = tablesState;

	const onHandlePageChange = ( data ) => {
		const selected = data.selected;
		const offset = Math.ceil( selected * perPage );

		dispatch( setOffset( offset ) );
		dispatch( setCurrentPage( selected ) );

		const chunked = _.chunk( cache, perPage );
		const cachedTables = chunked[ selected ];

		if ( undefined !== cachedTables ) {
			dispatch( setTables( cachedTables ) );
			return;
		}

		dispatch( setTablesLoading() );

		getTables( perPage, offset )
			.then( res => {
				const { tables } = res;
				const newCache = _.unionBy( cache, tables, 'id' );

				dispatch( setTables( tables ) );
				dispatch( setCache( newCache ) );
				dispatch( unsetTablesLoading() );
			} )
			.catch( err => {
				dispatch( unsetTablesLoading() );

				toastError( err.message );
			} );
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
