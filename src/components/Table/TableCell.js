import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import { getBlocks } from '../../utils/blocks';
import RenderBlock from '../Blocks/RenderBlock';
import { createMarkup } from '../../utils/utils';
import MyEditor from '../../components/MyEditor/index';
import Actions from './Actions';

const TableCell = ( { i: currentRow, j: currentColumn, content, rowsRef }, ref ) => {
	const { table, activeCell } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { type } = tableData;

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
					currentRow={ currentRow }
					rowsRef={ rowsRef }
					ref={ ref }
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

	return (
		<div className={ 'advanced-wp-table-cell-wrapper' }>
			{ cellContent }
			<Actions i={ currentRow } j={ currentColumn } y={ content } />
		</div>
	);
};

export default forwardRef( TableCell );
