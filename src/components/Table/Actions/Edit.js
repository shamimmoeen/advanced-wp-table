import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
import { parse } from '@wordpress/blocks';

import { dismissToasts } from '../../../utils/utils';
import { EDITOR } from '../../../utils/views';
import { setView } from '../../../store/reducers/ui';
import { setActiveCell, showEditorToolbar } from '../../../store/reducers/table';

const Edit = ( { i, j } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { rows, type } = tableData;

	const openGutenbergEditor = () => {
		dismissToasts();
		let content = rows[ i ][ j ];
		content = parse( content );
		const activeCell = { i, j, content };
		dispatch( setView( EDITOR ) );
		dispatch( setActiveCell( activeCell ) );
	};

	const openQuillEditor = () => {
		const content = rows[ i ][ j ];
		const activeCell = { i, j, content };
		dispatch( setActiveCell( activeCell ) );
		dispatch( showEditorToolbar() );
	};

	const onHandleOpenEditor = () => {
		if ( 'layout' === type ) {
			openGutenbergEditor();
		} else {
			openQuillEditor();
		}
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
