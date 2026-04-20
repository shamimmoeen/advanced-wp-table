import { registerBlockType } from '@wordpress/blocks';
import { blockTable } from '@wordpress/icons';
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import './editor.scss';
import './style.scss';

registerBlockType( metadata.name, {
	icon: blockTable as any,
	edit: Edit as any,
	save: save as any,
} );
