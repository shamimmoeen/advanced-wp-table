import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { parse } from '@wordpress/blocks';

import { dismissToasts } from '../../../utils/utils';
import { EDITOR } from '../../../utils/views';
import { setView } from '../../../store/reducers/ui';
import { setActiveCell } from '../../../store/reducers/table';

const Edit = ( { i, j } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { rows } = tableData;

	const onHandleOpenEditor = () => {
		dismissToasts();
		let content = rows[ i ][ j ];
		// @todo Parse content only if gutenberg active.
		content = parse( content );
		const activeCell = { i, j, content };
		dispatch( setView( EDITOR ) );
		dispatch( setActiveCell( activeCell ) );
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleOpenEditor }
			role="presentation"
		>
			{ __( 'Edit', 'advanced-wp-table' ) }
		</div>
	);
};

export default Edit;
