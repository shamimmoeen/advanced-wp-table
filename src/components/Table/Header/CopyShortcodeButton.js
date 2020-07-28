import { getShortcode, textToClipboard } from '../../../utils/table';
import { toastSuccess } from '../../../utils/utils';
import { StateContext } from '../../App';

const { useContext, React } = wp.element;
const { __ } = wp.i18n;
const { Tooltip } = wp.components;

const CopyShortcodeButton = () => {
	const { state } = useContext( StateContext );
	const { table } = state;

	const handleShortcodeCopy = () => {
		const shortcode = getShortcode( table.id );
		textToClipboard( shortcode );
		toastSuccess( __( 'Shortcode copied', 'advanced-wp-table' ), { position: 'bottom-right' } );
	};

	return (
		<Tooltip
			text={ __( 'Click to copy the shortcode', 'advanced-wp-table' ) }
			position={ 'bottom center' }
		>
			<div
				className={ 'advanced-wp-table-shortcode' }
				role={ 'presentation' }
				onClick={ handleShortcodeCopy }
			>
				<span className={ 'dashicons dashicons-clipboard' } />
			</div>
		</Tooltip>
	);
};

export default CopyShortcodeButton;
