import React from 'react';
import { __ } from '@wordpress/i18n';
import { getTablePreviewUrl } from '../../../../utils/table';
import { useSelector } from 'react-redux';
import { Button } from '@wordpress/components';

const Preview = ( { btnBusy } ) => {
	const { table } = useSelector( state => state.table );
	const { previewPageUrl } = useSelector( state => state.globals );

	const tablePreviewUrl = getTablePreviewUrl( previewPageUrl, table.id );

	return (
		<>
			<Button
				className={ 'is-tertiary' }
				href={ tablePreviewUrl }
				target={ '_blank' }
				rel={ 'noreferrer' }
				disabled={ btnBusy }
			>
				{ __( 'Preview', 'advanced-wp-table' ) }
			</Button>
		</>
	);
};

export default Preview;
