import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const ALLOWED_MEDIA_TYPES = [ 'audio' ];

function MediaUploader() {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ ( media ) => console.log( 'selected ' + media.length ) }
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				value={ '' }
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
			/>
		</MediaUploadCheck>
	);
}

export default MediaUploader;
