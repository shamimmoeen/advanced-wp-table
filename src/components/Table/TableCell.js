import React from 'react';
import { getBlocks } from '../../utils/blocks';
import RenderBlock from '../Blocks/RenderBlock';

const TableCell = ( { content } ) => {
	return (
		<div className={ 'entry' }>
			<div className={ 'entry-content' }>
				<div className={ 'editor-styles-wrapper' }>
					{ getBlocks( content ).map( ( block, index ) => {
						return <RenderBlock key={ index } block={ block } />
					} ) }
				</div>
			</div>
		</div>
	);
};

export default TableCell;
