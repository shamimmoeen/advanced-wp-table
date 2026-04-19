import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import './editor.scss';
import './style.scss';

registerBlockType( metadata.name, {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	edit: Edit as any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	save: save as any,
} );
