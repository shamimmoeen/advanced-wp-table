import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { getBlocks } from '../../utils/blocks';
import RenderBlock from '../Blocks/RenderBlock';
import { createMarkup } from '../../utils/utils';
import MyEditor from '../../components/MyEditor/index';
import Actions from './Actions';
import { unsetActiveCell } from '../../store/reducers/table';

const TableCell = ( { i: currentRow, j: currentColumn, content, rowsRef } ) => {
	const dispatch = useDispatch();
	const { table, activeCell } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { type } = tableData;

	const [ cellHeight, setCellHeight ] = useState( 0 );
	const [ classNames, setClassNames ] = useState( [ 'advanced-wp-table-cell-wrapper' ] );

	const handleDraftJsEditorBlur = () => {
		dispatch( unsetActiveCell() );
		const newClassNames = classNames.filter( item => item !== 'focused' );
		setClassNames( newClassNames );
		setCellHeight( 0 );
	};

	const handleDraftJsEditorFocus = () => {
		if ( ! _.includes( classNames, 'focused' ) ) {
			const newCellHeight = rowsRef.current[ currentRow ].offsetHeight - 1;
			setCellHeight( newCellHeight );

			const newClassNames = [ ...classNames, 'focused' ];
			setClassNames( newClassNames );
		}
	};

	let cellContent;

	const getDraftJsContent = () => {
		return (
			<div
				className={ 'advanced-wp-table-cell-content' }
				dangerouslySetInnerHTML={ createMarkup( content ) }
			/>
		);
	};

	if ( 'data' === type ) {
		if ( _.isEmpty( activeCell ) ) {
			cellContent = getDraftJsContent();
		} else {
			const { i, j } = activeCell;

			if ( i === currentRow && j === currentColumn ) {
				cellContent = <MyEditor
					handleDraftJsEditorBlur={ handleDraftJsEditorBlur }
					handleDraftJsEditorFocus={ handleDraftJsEditorFocus }
				/>;
			} else {
				cellContent = getDraftJsContent();
			}
		}
	} else {
		cellContent = (
			<div className={ 'entry' }>
				<div className={ 'entry-content' }>
					<div className={ 'editor-styles-wrapper' }>
						{ getBlocks( content ).map( ( block, index ) => {
							return <RenderBlock key={ index } block={ block } />;
						} ) }
					</div>
				</div>
			</div>
		);
	}

	const wrapperClasses = classNames.join( ' ' );
	const wrapperStyle = cellHeight > 0 ? { minHeight: `${ cellHeight }px` } : {};

	return (
		<div className={ wrapperClasses } style={ wrapperStyle }>
			{ cellContent }
			<Actions i={ currentRow } j={ currentColumn } y={ content } />
		</div>
	);
};

export default TableCell;
