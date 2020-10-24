import React, { useEffect, useRef, useState } from 'react';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

import { updateTableWithCellData } from '../../utils/table';
import { setActiveCell, setTable } from '../../store/reducers/table';
import Toolbar from './Toolbar';

const MyEditor = ( { handleDraftJsEditorBlur, handleDraftJsEditorFocus } ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const toolbarRef = useRef( null );

	const { activeCell } = useSelector( state => state.table );
	const { content } = activeCell;

	const contentSate = stateFromHTML( content );
	const [ editorState, setEditorState ] = useState( EditorState.createWithContent( contentSate ) );
	const editorRef = useRef( null );

	const handleChange = ( newEditorState ) => {
		setEditorState( newEditorState );
	};

	useEffect( () => {
		const newContentState = editorState.getCurrentContent();
		const newContent = stateToHTML( newContentState );
		const updatedCell = { ...activeCell, content: newContent };
		const updatedTable = updateTableWithCellData( table, updatedCell );

		dispatch( setActiveCell( updatedCell ) );
		dispatch( setTable( updatedTable ) );
	}, [ editorState ] );

	useEffect( () => {
		if ( editorRef ) {
			editorRef.current.editor.focus();
		}

		const wrapper = document.getElementById( 'advanced-wp-table-cell-toolbar' );
		const wrapperRef = wrapper.getBoundingClientRect();

		toolbarRef.current.style.top = `${ wrapperRef.top }px`;
		toolbarRef.current.style.left = `${ wrapperRef.left }px`;
		toolbarRef.current.style.width = `${ wrapperRef.width }px`;
		toolbarRef.current.classList = 'advanced-wp-table-draft-js-toolbar focused';

		// https://stackoverflow.com/a/54946868/2647905
		setEditorState( EditorState.moveFocusToEnd( editorState ) );
	}, [] );

	return (
		<div className={ 'advanced-wp-table-draft-js-editor-portal' }>
			<div
				className={ 'advanced-wp-table-draft-js-toolbar' }
				ref={ toolbarRef }
			>
				<Toolbar />
			</div>
			<div className={ 'advanced-wp-table-draft-js-editor' }>
				<Editor
					onBlur={ handleDraftJsEditorBlur }
					onFocus={ handleDraftJsEditorFocus }
					editorState={ editorState }
					onChange={ handleChange }
					ref={ editorRef }
				/>
			</div>
		</div>
	);
};

export default MyEditor;
