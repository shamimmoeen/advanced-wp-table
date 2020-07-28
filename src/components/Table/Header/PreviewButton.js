import { StateContext } from '../../App';
import { getTablePreviewUrl } from '../../../utils/table';

const { useContext, React } = wp.element;
const { __ } = wp.i18n;

const PreviewButton = () => {
	const { state } = useContext( StateContext );
	const { table } = state;

	const tablePreviewUrl = getTablePreviewUrl( state.previewPageUrl, table.id );

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
