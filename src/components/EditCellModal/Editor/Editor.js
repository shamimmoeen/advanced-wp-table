import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockInspector,
	BlockList,
	ObserveTyping,
	SETTINGS_DEFAULTS,
	WritingFlow,
} from '@wordpress/block-editor';
import { DropZoneProvider, Popover, SlotFillProvider } from '@wordpress/components';
import '@wordpress/format-library';
import { StateContext } from '../../App';
import Buttons from './Buttons';

import './editor.scss';
import './style.scss';

const { Fragment, useContext } = wp.element;
const { __ } = wp.i18n;

/**
 * Fix media upload permission error.
 *
 * Change the key form __experimentalMediaUpload to mediaUpload since wp 5.4.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */
SETTINGS_DEFAULTS.mediaUpload = wp.mediaUtils.uploadMedia;

SETTINGS_DEFAULTS.imageSizes = [
	{ slug: 'thumbnail', name: __( 'Thumbnail', 'advanced-wp-table' ) },
	{ slug: 'medium', name: __( 'Medium', 'advanced-wp-table' ) },
	{ slug: 'large', name: __( 'Large', 'advanced-wp-table' ) },
	{ slug: 'full', name: __( 'Full Size', 'advanced-wp-table' ) },
];

const Editor = () => {
	const { state, dispatch } = useContext( StateContext );
	const { activeCell } = state;
	const { content: blocks } = activeCell;

	const onHandleChange = ( updatedBlocks ) => {
		dispatch( { type: 'SET_ACTIVE_CELL', payload: { ...activeCell, content: updatedBlocks } } );
	};

	return (
		<Fragment>
			<Buttons />
			<div className={ 'advanced-wp-table-editor' }>
				<SlotFillProvider>
					<DropZoneProvider>
						<BlockEditorProvider
							value={ blocks }
							onInput={ onHandleChange }
							onChange={ onHandleChange }>
							<div className={ 'editor-styles-wrapper' }>
								<div style={ { padding: '20px' } } />
								<Popover.Slot name={ 'block-toolbar' } />
								<BlockEditorKeyboardShortcuts />
								<WritingFlow>
									<ObserveTyping>
										<BlockList />
									</ObserveTyping>
								</WritingFlow>
							</div>
							<div className={ 'advanced-wp-table-editor-sidebar' }>
								<BlockInspector />
							</div>
							<Popover.Slot />
						</BlockEditorProvider>
					</DropZoneProvider>
				</SlotFillProvider>
			</div>
		</Fragment>
	);
};

export default Editor;
