import React from 'react';

import CopyShortcodeButton from './CopyShortcodeButton';
import PreviewButton from './PreviewButton';
import SaveButton from './SaveButton';

const HeaderRight = () => {
	return (
		<div className={ 'advanced-wp-table-header-right' }>
			<CopyShortcodeButton />
			<PreviewButton />
			<SaveButton />
		</div>
	);
};

export default HeaderRight;
