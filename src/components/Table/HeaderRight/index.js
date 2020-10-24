import React from 'react';

import CopyShortcode from './Button/CopyShortcode';
import Preview from './Button/Preview';
import Save from './Button/Save';
import Settings from './Button/Settings';

const HeaderRight = () => {
	return (
		<div className={ 'advanced-wp-table-header-right' }>
			<CopyShortcode />
			<Preview />
			<Save />
			<Settings />
		</div>
	);
};

export default HeaderRight;
