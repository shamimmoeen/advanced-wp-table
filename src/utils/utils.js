import { dispatch, select } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';

export function getApiEndpoint() {
	return '/wp/v2/advanced-wp-table';
}

export function toastSuccess( message ) {
	dispatch( noticesStore ).createSuccessNotice( message, {
		type: 'snackbar',
		isDismissible: true,
	} );
}

export function toastError( message ) {
	dispatch( noticesStore ).createErrorNotice( message, {
		type: 'snackbar',
		isDismissible: true,
	} );
}

export function dismissToasts() {
	const notices = select( noticesStore ).getNotices();
	notices.forEach( ( notice ) => {
		dispatch( noticesStore ).removeNotice( notice.id );
	} );
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
