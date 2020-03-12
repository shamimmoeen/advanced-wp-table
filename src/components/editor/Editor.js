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
import { Fragment, useEffect, useState } from '@wordpress/element';
import '@wordpress/format-library';

/**
 * Fix media upload permission error.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */
SETTINGS_DEFAULTS.__experimentalMediaUpload = wp.mediaUtils.uploadMedia;

const WPTableEditor = ( { cellData, onHandleSetCellData, onHandleCloseModal } ) => {
	const [ blocks, updateBlocks ] = useState( [] );

	useEffect( () => {
		const { content } = cellData;
		const wpParsed = wp.blocks.parse( content );

		updateBlocks( wpParsed );
	}, [] );

	const handleChange = ( e ) => {
		updateBlocks( e );
	};

	const handleSave = () => {
		const string = wp.blocks.serialize( blocks );

		onHandleSetCellData( string );
	};

	return (
		<Fragment>
			{ /*{ console.log( cellData ) }*/ }
			<div className={ 'advanced-wp-table-cell-editor-button-groups' }>
				<button onClick={ handleSave } className={ 'button button-primary' }>Update Cell</button>
				{ ` ` }
				<button onClick={ onHandleCloseModal } className={ 'button button-default' }>Close</button>
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
		</Fragment>
	);
};

export default WPTableEditor;
