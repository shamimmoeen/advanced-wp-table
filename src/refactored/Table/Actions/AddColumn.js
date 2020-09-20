import React from 'react';
import { __ } from '@wordpress/i18n';

const AddColumn = () => {
	const onHandleAddColumn = () => {
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleAddColumn }
			role="presentation"
		>
			{ __( 'Add Column', 'advanced-wp-table' ) }
		</div>
	);
};

export default AddColumn;
