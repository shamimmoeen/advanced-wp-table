import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockInspector,
	BlockList,
	ObserveTyping,
	SETTINGS_DEFAULTS,
	WritingFlow,
} from '@wordpress/block-editor';
import { registerCoreBlocks } from '@wordpress/block-library';
import { DropZoneProvider, Popover, SlotFillProvider } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import '@wordpress/format-library';

import './style.scss';

/**
 * Fix media upload permission error.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */
SETTINGS_DEFAULTS.__experimentalMediaUpload = wp.mediaUtils.uploadMedia;

const MyEditorComponent = () => {
	const [ blocks, updateBlocks ] = useState( [] );
	const cacheKey = 'wp_table_blocks';

	useEffect( () => {
		registerCoreBlocks();
	}, [] );

	useEffect( () => {
		// eslint-disable-next-line no-undef
		const oldBlocks = localStorage.getItem( cacheKey );

		if ( ! oldBlocks ) {
			return;
		}

		const wpParsed = wp.blocks.parse( oldBlocks );

		updateBlocks( wpParsed );
	}, [] );

	const handleChange = ( e ) => {
		updateBlocks( e );
	};

	const handleResetBlocks = () => {
		// eslint-disable-next-line no-undef
		localStorage.removeItem( cacheKey );
		updateBlocks( [] );
	};

	const handleSave = () => {
		const string = wp.blocks.serialize( blocks );

		// eslint-disable-next-line no-undef
		localStorage.setItem( cacheKey, string );
	};

	return (
		<div>
			<div>
				<button onClick={ handleSave } className={ 'button button-primary' }>Save</button>
				{ ` ` }
				<button onClick={ handleResetBlocks } className={ 'button button-primary' }>Reset Blocks</button>
			</div>
			<div className="block-editor">
				<div className="block-editor__container">
					<SlotFillProvider>
						<DropZoneProvider>
							<div className="components-navigate-regions">
								<div className="edit-post-layout is-sidebar-opened">
									<div className="edit-post-layout__content">
										<div className="edit-post-visual-editor editor-styles-wrapper">
											<BlockEditorProvider
												value={ blocks }
												onInput={ handleChange }
												onChange={ handleChange }
												settings={ SETTINGS_DEFAULTS }
											>
												<div className="editor-styles-wrapper">
													<BlockEditorKeyboardShortcuts />
													<WritingFlow>
														<ObserveTyping>
															<BlockList />
														</ObserveTyping>
													</WritingFlow>
												</div>
												<Popover.Slot />
												<div className="edit-post-sidebar">
													<BlockInspector />
												</div>
											</BlockEditorProvider>
										</div>
									</div>
								</div>
							</div>
						</DropZoneProvider>
					</SlotFillProvider>
				</div>
			</div>
		</div>
	);
};

export default MyEditorComponent;
