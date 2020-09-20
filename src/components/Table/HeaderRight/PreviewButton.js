import React from 'react';
import { __ } from '@wordpress/i18n';
import { getTablePreviewUrl } from '../../../utils/table';
import { useSelector } from 'react-redux';

const PreviewButton = () => {
	const { table } = useSelector( state => state.table );
	const { previewPageUrl } = useSelector( state => state.globals );

	const tablePreviewUrl = getTablePreviewUrl( previewPageUrl, table.id );

	return (
		<a
			type={ 'button' }
			className={ 'button' }
			href={ tablePreviewUrl }
			target={ '_blank' }
			rel={ 'noreferrer' }
		>
			{ __( 'Preview', 'advanced-wp-table' ) }
		</a>
	);
};

export default PreviewButton;
