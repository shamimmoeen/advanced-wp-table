import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import _ from 'lodash';

import { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';
import { hideEditorToolbar, showEditorToolbar, unsetActiveCell } from '../../store/reducers/table';

const MyEditor = ( { currentRow, rowsRef }, ref ) => {
	const dispatch = useDispatch();
	const { activeCell, visibleEditorToolbar } = useSelector( state => state.table );
	const { content } = activeCell;

	const [ editorContent, setEditorContent ] = useState( content );
	const editorWrapperRef = useRef( null );
	const editorRef = useRef( null );

	const [ cellHeight, setCellHeight ] = useState( 0 );
	const [ classNames, setClassNames ] = useState( [ 'advanced-wp-table-draft-js-editor' ] );

	const handleChange = ( newContent ) => {
		setEditorContent( newContent );
	};

	const handleDraftJsEditorFocus = () => {
		if ( ! _.includes( classNames, 'focused' ) ) {
			const newCellHeight = rowsRef.current[ currentRow ].offsetHeight - 1;
			setCellHeight( newCellHeight );

			const newClassNames = [ ...classNames, 'focused' ];
			setClassNames( newClassNames );
		}
	};

	useEffect( () => {
		if ( editorRef ) {
			// noinspection JSUnresolvedVariable
			editorRef.current.editor.focus();
		}

		dispatch( showEditorToolbar() );

		// TODO: move cursor to the end.
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
			<ReactQuill
				value={ editorContent }
				onChange={ handleChange }
				ref={ editorRef }
				modules={ modules }
				formats={ formats }
			/>
		</div>
	);
};

export default forwardRef( MyEditor );
