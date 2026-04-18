import { Button } from '@wordpress/components';
import { StateContext } from '../App';

const { useContext } = wp.element;
const { __, _n, sprintf } = wp.i18n;

const getPageNumbers = ( currentPage, pageCount ) => {
	const delta = 2;
	const pages = [];

	for ( let i = 0; i < pageCount; i++ ) {
		if (
			i === 0 ||
			i === pageCount - 1 ||
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
	const { total, totalPages, perPage, currentPage } = state;
	const pageCount = totalPages;

	const onPageChange = ( page ) => {
		const offset = page * perPage;
		dispatch( { type: 'PAGINATE_TABLES', payload: { offset, currentPage: page } } );
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
			{ 1 < pageCount && (
				<nav className={ 'advanced-wp-table-pagination' } aria-label={ __( 'Pagination', 'advanced-wp-table' ) }>
					<Button
						variant={ 'secondary' }
						size={ 'compact' }
						disabled={ 0 === currentPage }
						onClick={ () => onPageChange( currentPage - 1 ) }
					>
						{ '‹' }
					</Button>
					{ getPageNumbers( currentPage, pageCount ).map( ( page, index ) =>
						page === '...' ? (
							<span key={ `ellipsis-${ index }` } className={ 'advanced-wp-table-pagination-ellipsis' }>
								{ '...' }
							</span>
						) : (
							<Button
								key={ page }
								variant={ page === currentPage ? 'primary' : 'secondary' }
								size={ 'compact' }
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
						disabled={ currentPage === pageCount - 1 }
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
