import apiFetch from '@wordpress/api-fetch';

const API_ENDPOINT = '/wp/v2/advanced-wp-table';

export async function getTables() {
	const options = {
		path: wp.url.addQueryArgs( API_ENDPOINT, { per_page: -1 } ),
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

export function prepareTable( tableData ) {
	const { title, sizeOfRows, sizeOfColumns } = tableData;

	const tableSize = {
		rows: sizeOfRows,
		columns: sizeOfColumns,
	};

	const tableRows = [];

	for ( let i = 0; i < sizeOfRows; i++ ) {
		const emptyRow = [];

		for ( let j = 0; j < sizeOfColumns; j++ ) {
			emptyRow.push( '' );
		}

		tableRows.push( emptyRow );
	}

	return { title, advanced_wp_table_data: { size: tableSize, rows: tableRows } };
}

// eslint-disable-next-line camelcase
export async function postTable( { title, advanced_wp_table_data } ) {
	const options = {
		path: API_ENDPOINT,
		method: 'POST',
		data: { title, status: 'publish', advanced_wp_table_data },
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

export async function getTable( id ) {
	const options = {
		path: API_ENDPOINT + '/' + id,
		method: 'GET',
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

export async function deleteTable( id ) {
	const options = {
		path: API_ENDPOINT + '/' + id,
		method: 'DELETE',
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

// eslint-disable-next-line camelcase
export async function updateTable( id, title, advanced_wp_table_data ) {
	const options = {
		path: API_ENDPOINT + '/' + id,
		method: 'PUT',
		data: { title, advanced_wp_table_data },
	};

	try {
		return await apiFetch( options );
	} catch ( err ) {
		throw new Error( err.message );
	}
}

export function parseTableSize( table ) {
	const { advanced_wp_table_data: tableData } = table;
	const { rows, columns } = tableData.size;
	const size = {
		rows: parseInt( rows ),
		columns: parseInt( columns ),
	};

	return { ...table, advanced_wp_table_data: { ...tableData, size } };
}
