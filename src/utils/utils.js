import { toast } from 'react-toastify';

export function getApiEndpoint() {
	return '/wp/v2/advanced-wp-table';
}

export function toastSuccess( message ) {
	toast.success( message );
}

export function toastError( message ) {
	toast.error( message );
}

export function dismissToasts() {
	toast.dismiss();
}

export function createMarkup( html ) {
	return { __html: html };
}

export function offsetIndex( from, to, arr = [] ) {
	if ( from < to ) {
		const start = arr.slice( 0, from ),
			between = arr.slice( from + 1, to + 1 ),
			end = arr.slice( to + 1 );
		return [ ...start, ...between, arr[ from ], ...end ];
	}

	if ( from > to ) {
		const start = arr.slice( 0, to ),
			between = arr.slice( to, from ),
			end = arr.slice( from + 1 );
		return [ ...start, arr[ from ], ...between, ...end ];
	}

	return arr;
}
