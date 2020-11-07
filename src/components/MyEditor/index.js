import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Editor from 'draft-js-plugins-editor';
import { convertFromHTML, EditorState, RichUtils, ContentState } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { stateFromHTML } from 'draft-js-import-html';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromElement } from 'draft-js-import-element';
import _ from 'lodash';

import { updateTableWithCellData } from '../../utils/table';
import {
	hideEditorToolbar,
	setActiveCell,
	setTable,
	showEditorToolbar,
	unsetActiveCell
} from '../../store/reducers/table';

const options = {
	inlineStyles: {
		// Override default element (`strong`).
		BOLD: { element: 'b' },
		ITALIC: {
			// Add custom attributes. You can also use React-style `className`.
			attributes: { class: 'foo' },
			// Use camel-case. Units (`px`) will be added where necessary.
			style: { fontSize: 12 }
		},
		// Use a custom inline style. Default element is `span`.
		RED: { style: { color: '#900' } },
		SUBSCRIPT: { element: 'sub' },
		SUPERSCRIPT: { element: 'sup' },
		STRIKETHROUGH: { element: 'del' },
	},
};

const MyEditor = ( { currentRow, rowsRef, staticToolbar }, ref ) => {
	const dispatch = useDispatch();
	const { table } = useSelector( state => state.table );
	const plugins = [ staticToolbar ];

	const { activeCell, visibleEditorToolbar } = useSelector( state => state.table );
	const { content } = activeCell;

	const contentState = stateFromHTML( content, {
		elementStyles: {
			// Support `<sup>` (superscript) inline element:
			'sub': 'SUBSCRIPT',
			'sup': 'SUPERSCRIPT',
			'del': 'STRIKETHROUGH',
		},
	} );

	const [ editorState, setEditorState ] = useState( EditorState.createWithContent( contentState ) );
	const editorWrapperRef = useRef( null );
	const editorRef = useRef( null );

	const [ cellHeight, setCellHeight ] = useState( 0 );
	const [ classNames, setClassNames ] = useState( [ 'advanced-wp-table-draft-js-editor' ] );

	const handleDraftJsEditorFocus = () => {
		if ( ! _.includes( classNames, 'focused' ) ) {
			const newCellHeight = rowsRef.current[ currentRow ].offsetHeight - 1;
			setCellHeight( newCellHeight );

			const newClassNames = [ ...classNames, 'focused' ];
			setClassNames( newClassNames );
		}
	};

	const handleChange = ( newEditorState ) => {
		setEditorState( newEditorState );
	};

	const handleKeyCommand = command => {
		const newEditorState = RichUtils.handleKeyCommand( editorState, command );

		if ( newEditorState ) {
			setEditorState( newEditorState );
			return 'handled';
		}

		return 'not-handled';
	};

	useEffect( () => {
		const newContentState = editorState.getCurrentContent();
		const newContent = stateToHTML( newContentState, options );
		const updatedCell = { ...activeCell, content: newContent };
		const updatedTable = updateTableWithCellData( table, updatedCell );

		dispatch( setActiveCell( updatedCell ) );
		dispatch( setTable( updatedTable ) );
	}, [ editorState ] );

	useEffect( () => {
		if ( editorRef ) {
			// noinspection JSUnresolvedVariable
			editorRef.current.editor.focus();
		}

		dispatch( showEditorToolbar() );

		// https://stackoverflow.com/a/54946868/2647905
		setEditorState( EditorState.moveFocusToEnd( editorState ) );
	}, [] );

	const blurEditor = () => {
		document.getElementById( 'wpwrap' )
			.removeEventListener( 'click', keepEditorFocused );
		dispatch( hideEditorToolbar() );
		dispatch( unsetActiveCell() );
	};

	const keepEditorFocused = ( e ) => {
		// noinspection JSUnresolvedFunction
		if ( editorWrapperRef.current.contains( e.target ) ) {
			return;
		}

		if ( ref.current.contains( e.target ) ) {
			return;
		}

		blurEditor();
	};

	useEffect( () => {
		if ( visibleEditorToolbar ) {
			document.getElementById( 'wpwrap' )
				.addEventListener( 'click', keepEditorFocused );
		}
	}, [ visibleEditorToolbar ] );

	const wrapperClasses = classNames.join( ' ' );
	const wrapperStyle = cellHeight > 0 ? { minHeight: `${ cellHeight }px` } : {};

	return (
		<div className={ wrapperClasses } style={ wrapperStyle } ref={ editorWrapperRef }>
			<Editor
				customStyleMap={ {
					SUBSCRIPT: { fontSize: 'smaller', verticalAlign: 'sub' },
					SUPERSCRIPT: { fontSize: 'smaller', verticalAlign: 'super' },
					STRIKETHROUGH: { textDecoration: 'line-through' },
				} }
				onFocus={ handleDraftJsEditorFocus }
				editorState={ editorState }
				onChange={ handleChange }
				handleKeyCommand={ handleKeyCommand }
				plugins={ plugins }
				ref={ editorRef }
			/>
		</div>
	);
};

export default forwardRef( MyEditor );
