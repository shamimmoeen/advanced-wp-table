import React, { useState } from 'react';

import CopyShortcode from './Button/CopyShortcode';
import Preview from './Button/Preview';
import Save from './Button/Save';
import Settings from './Button/Settings';

const HeaderRight = () => {
	const [ btnBusy, setBtnBusy ] = useState( false );

	return (
		<div className={ 'advanced-wp-table-header-right' }>
			<CopyShortcode />
			<Preview btnBusy={ btnBusy } />
			<Save btnBusy={ btnBusy } onSetBtnBusy={ setBtnBusy } />
			<Settings />
		</div>
	);
};

export default HeaderRight;
