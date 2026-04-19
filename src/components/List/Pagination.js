import { Button } from '@wordpress/components';
import { StateContext } from '../App';

const { useContext, useEffect } = wp.element;
const { __, _n, sprintf } = wp.i18n;

const getPageNumbers = ( currentPage, totalPages ) => {
	const delta = 2;
	const pages = [];

	for ( let i = 0; i < totalPages; i++ ) {
		if (
			i === 0 ||
			i === totalPages - 1 ||
			( i >= currentPage - delta && i <= currentPage + delta )
		) {
			pages.push( i );
		} else if ( pages[ pages.length - 1 ] !== '...' ) {
			pages.push( '...' );
		}
	}

	return pages;
};

const Pagination = () => {
	const { state, dispatch } = useContext( StateContext );
	const { tables, perPage, currentPage } = state;
	const total = tables.length;
	const totalPages = Math.ceil( total / perPage );

	// Auto-adjust if current page is out of bounds after deletions.
	useEffect( () => {
		if ( totalPages > 0 && currentPage >= totalPages ) {
			dispatch( { type: 'SET_CURRENT_PAGE', payload: totalPages - 1 } );
		}
	}, [ totalPages, currentPage ] );

	const onPageChange = ( page ) => {
		dispatch( { type: 'SET_CURRENT_PAGE', payload: page } );
	};

	return (
		<div className={ 'advanced-wp-table-pagination-wrapper' }>
			<span className={ 'advanced-wp-table-total-info' }>
				{ sprintf(
					/* translators: %d: number of items. */
					_n(
						'%d item',
						'%d items',
						total,
						'advanced-wp-table'
					),
					total
				) }
			</span>
			{ 1 < totalPages && (
				<nav className={ 'advanced-wp-table-pagination' } aria-label={ __( 'Pagination', 'advanced-wp-table' ) }>
					<Button
						variant={ 'secondary' }
						size={ 'compact' }
						disabled={ 0 === currentPage }
						aria-label={ __( 'Previous page', 'advanced-wp-table' ) }
						onClick={ () => onPageChange( currentPage - 1 ) }
					>
						{ '‹' }
					</Button>
					{ getPageNumbers( currentPage, totalPages ).map( ( page, index ) =>
						page === '...' ? (
							<span key={ `ellipsis-${ index }` } className={ 'advanced-wp-table-pagination-ellipsis' }>
								{ '...' }
							</span>
						) : (
							<Button
								key={ page }
								variant={ page === currentPage ? 'primary' : 'secondary' }
								size={ 'compact' }
								aria-label={ sprintf(
									/* translators: %d: page number. */
									__( 'Page %d', 'advanced-wp-table' ),
									page + 1
								) }
								aria-current={ page === currentPage ? 'page' : undefined }
								onClick={ () => onPageChange( page ) }
							>
								{ page + 1 }
							</Button>
						)
					) }
					<Button
						variant={ 'secondary' }
						size={ 'compact' }
						disabled={ currentPage === totalPages - 1 }
						aria-label={ __( 'Next page', 'advanced-wp-table' ) }
						onClick={ () => onPageChange( currentPage + 1 ) }
					>
						{ '›' }
					</Button>
				</nav>
			) }
		</div>
	);
};

export default Pagination;
