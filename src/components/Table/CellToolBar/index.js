import React from 'react';

import Bold from './Bold';
import Italic from './Italic';
import Link from './Link';
import Strikethrough from './Strikethrough';
import Code from './Code';
import Color from './Color';

const ToolBar = () => {
	return (
		<div className={ 'advanced-wp-table-cell-toolbar' }>
			<div className={ 'advanced-wp-table-button-group' }>
				<Bold />
				<Italic />
				<Link />
				<Strikethrough />
				<Code />
				<Color />
			</div>
		</div>
	);
}

export default ToolBar;
