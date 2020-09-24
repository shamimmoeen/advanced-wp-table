import React from 'react';

import CopyShortcodeButton from './CopyShortcodeButton';
import PreviewButton from './PreviewButton';
import SaveButton from './SaveButton';

const HeaderRight = () => {
	return (
		<div className={ 'advanced-wp-table-header-right' }>
			<div className={ 'advanced-wp-table-button-group' }>
				<CopyShortcodeButton />
			</div>
			<PreviewButton />
			<SaveButton />
		</div>
	);
};

export default HeaderRight;
