import React from 'react';
import { __ } from '@wordpress/i18n';

const AddRow = () => {
	const onHandleAddRow = () => {
	};

	return (
		<div
			className="advanced-wp-table-action-item"
			onClick={ onHandleAddRow }
			role="presentation"
		>
			{ __( 'Add Row', 'advanced-wp-table' ) }
		</div>
	);
};

export default AddRow;
