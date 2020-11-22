import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import _ from 'lodash';

import { modules, formats } from './EditorToolbar';
import { hideEditorToolbar, setActiveCell, setTable, unsetActiveCell } from '../../store/reducers/table';
import { updateTableWithCellData } from '../../utils/table';
import './style.scss';
import './quill.css';
import './snow.css';

const MyEditor = ( { currentRow, rowsRef }, ref ) => {
	const [ editorContent, setEditorContent ] = useState( 'hello world' );

	const handleChange = ( newEditorContent ) => {
		setEditorContent( newEditorContent );
	}

	return (
		<ReactQuill
			value={ editorContent }
			onChange={ handleChange }
			modules={ modules }
			formats={ formats }
		/>
	);
};

export default forwardRef( MyEditor );
