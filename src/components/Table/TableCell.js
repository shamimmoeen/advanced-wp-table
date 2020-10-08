import React from 'react';
import { getBlocks } from '../../utils/blocks';
import RenderBlock from '../Blocks/RenderBlock';
import { useSelector } from 'react-redux';
import { createMarkup } from '../../utils/utils';

const TableCell = ( { content } ) => {
	const { table } = useSelector( state => state.table );
	const { advanced_wp_table_data: tableData } = table;
	const { type } = tableData;

	let cellContent = '';

	if ( 'data' === type ) {
		cellContent = <div dangerouslySetInnerHTML={ createMarkup( content ) } />;
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

	return cellContent;
};

export default TableCell;
