import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __ } from '@wordpress/i18n';
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
import { uploadMedia } from '@wordpress/media-utils';
import '@wordpress/format-library';

import './editor.scss';
import './style.scss';

import Header from './Header';
import { setActiveCell } from '../../store/reducers/table';

/**
 * Fix media upload permission error.
 *
 * Change the key form __experimentalMediaUpload to mediaUpload since wp 5.4.
 *
 * @see https://github.com/WordPress/gutenberg/issues/18628
 */
SETTINGS_DEFAULTS.mediaUpload = uploadMedia;

SETTINGS_DEFAULTS.imageSizes = [
	{ slug: 'thumbnail', name: __( 'Thumbnail', 'advanced-wp-table' ) },
	{ slug: 'medium', name: __( 'Medium', 'advanced-wp-table' ) },
	{ slug: 'large', name: __( 'Large', 'advanced-wp-table' ) },
	{ slug: 'full', name: __( 'Full Size', 'advanced-wp-table' ) },
];

const GutenbergEditor = () => {
	const dispatch = useDispatch();
	const tableState = useSelector( state => state.table );
	const { activeCell } = tableState;
	const { content: blocks } = activeCell;

	/* istanbul ignore next */
	const onHandleChange = ( updatedBlocks ) => {
		const updatedCell = { ...activeCell, content: updatedBlocks };

		dispatch( setActiveCell( updatedCell ) );
	};

	return (
		<div className={ 'advanced-wp-table-editor' }>
			<SlotFillProvider>
				<DropZoneProvider>
					<BlockEditorProvider
						value={ blocks }
						onInput={ onHandleChange }
						onChange={ onHandleChange }
					>
						<Header />
						<div className={ 'advanced-wp-table-editor-area' }>
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
						</div>
					</BlockEditorProvider>
				</DropZoneProvider>
			</SlotFillProvider>
		</div>
	);
};

export default GutenbergEditor;
