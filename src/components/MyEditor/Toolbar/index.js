/* eslint-disable no-console */
import React from 'react';
import Icon from '@mdi/react';
import {
	mdiCodeTags,
	mdiFormatAlignLeft,
	mdiFormatBold,
	mdiFormatColorFill,
	mdiFormatColorText,
	mdiFormatIndentDecrease,
	mdiFormatIndentIncrease,
	mdiFormatItalic,
	mdiFormatListBulleted,
	mdiFormatListNumbered,
	mdiFormatQuoteOpen,
	mdiFormatStrikethroughVariant,
	mdiFormatSubscript,
	mdiFormatSuperscript,
	mdiFormatTextWrappingClip,
	mdiFormatUnderline,
	mdiImage,
	mdiLink,
	mdiLinkOff
} from '@mdi/js';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichUtils } from 'draft-js';

const ToolBar = ( { editorState, handleChange } ) => {
	const handleBold = ( e ) => {
		e.preventDefault();
		handleChange( RichUtils.toggleInlineStyle( editorState, 'BOLD' ) );
	};

	const handleItalic = ( e ) => {
		e.preventDefault();
		handleChange( RichUtils.toggleInlineStyle( editorState, 'ITALIC' ) );
	};

	const handleUnderline = ( e ) => {
		e.preventDefault();
		handleChange( RichUtils.toggleInlineStyle( editorState, 'UNDERLINE' ) );
	};

	const handleStrikethrough = ( e ) => {
		e.preventDefault();
		handleChange( RichUtils.toggleInlineStyle( editorState, 'UNDERLINE' ) );
	};

	const handleSubscript = ( e ) => {
		e.preventDefault();
		console.log( 'handle subscript' );
	};

	const handleSuperscript = ( e ) => {
		e.preventDefault();
		console.log( 'handle superscript' );
	};

	const handleBulletedList = ( e ) => {
		e.preventDefault();
		console.log( 'handle bulleted list' );
	};

	const handleNumberedList = ( e ) => {
		e.preventDefault();
		console.log( 'handle numbered list' );
	};

	const handleBlockQuote = ( e ) => {
		e.preventDefault();
		console.log( 'handle blockquote' );
	};

	const handleInlineCode = ( e ) => {
		e.preventDefault();
		console.log( 'handle inline code' );
	};

	const handleInsertLink = ( e ) => {
		e.preventDefault();
		console.log( 'handle insert link' );
	};

	const handleRemoveLink = ( e ) => {
		e.preventDefault();
		console.log( 'handle remove link' );
	};

	const handleAddImage = ( e ) => {
		e.preventDefault();
		console.log( 'handle add image' );
	};

	const handleTextColor = ( e ) => {
		e.preventDefault();
		console.log( 'handle text color' );
	};

	const handleBackgroundColor = ( e ) => {
		e.preventDefault();
		console.log( 'handle background color' );
	};

	const buttons = [
		{
			'label': __( 'Bold', 'advanced-wp-table' ),
			'onMouseDown': handleBold,
			'icon': mdiFormatBold,
		},
		{
			'label': __( 'Italic', 'advanced-wp-table' ),
			'onMouseDown': handleItalic,
			'icon': mdiFormatItalic,
		},
		{
			'label': __( 'Underline', 'advanced-wp-table' ),
			'onMouseDown': handleUnderline,
			'icon': mdiFormatUnderline,
		},
		{
			'label': __( 'Change heading level', 'advanced-wp-table' ),
			'onMouseDown': null,
			'icon': mdiFormatTextWrappingClip,
		},
		{
			'label': __( 'Strikethrough', 'advanced-wp-table' ),
			'onMouseDown': handleStrikethrough,
			'icon': mdiFormatStrikethroughVariant,
		},
		{
			'label': __( 'Subscript', 'advanced-wp-table' ),
			'onMouseDown': handleSubscript,
			'icon': mdiFormatSubscript,
		},
		{
			'label': __( 'Superscript', 'advanced-wp-table' ),
			'onMouseDown': handleSuperscript,
			'icon': mdiFormatSuperscript,
		},
		{
			'label': __( 'Text color', 'advanced-wp-table' ),
			'onMouseDown': handleTextColor,
			'icon': mdiFormatColorText,
		},
		{
			'label': __( 'Background color', 'advanced-wp-table' ),
			'onMouseDown': handleBackgroundColor,
			'icon': mdiFormatColorFill,
		},
		{
			'label': __( 'Change text alignment', 'advanced-wp-table' ),
			'onMouseDown': null,
			'icon': mdiFormatAlignLeft,
		},
		{
			'label': __( 'Bulleted list', 'advanced-wp-table' ),
			'onMouseDown': handleBulletedList,
			'icon': mdiFormatListBulleted,
		},
		{
			'label': __( 'Numbered list', 'advanced-wp-table' ),
			'onMouseDown': handleNumberedList,
			'icon': mdiFormatListNumbered,
		},
		{
			'label': __( 'Blockquote', 'advanced-wp-table' ),
			'onMouseDown': handleBlockQuote,
			'icon': mdiFormatQuoteOpen,
		},
		{
			'label': __( 'Inline code', 'advanced-wp-table' ),
			'onMouseDown': handleInlineCode,
			'icon': mdiCodeTags,
		},
		{
			'label': __( 'Decrease indent', 'advanced-wp-table' ),
			'onMouseDown': handleInlineCode,
			'icon': mdiFormatIndentDecrease,
		},
		{
			'label': __( 'Increase indent', 'advanced-wp-table' ),
			'onMouseDown': handleInlineCode,
			'icon': mdiFormatIndentIncrease,
		},
		{
			'label': __( 'Insert link', 'advanced-wp-table' ),
			'onMouseDown': handleInsertLink,
			'icon': mdiLink,
		},
		{
			'label': __( 'Remove link', 'advanced-wp-table' ),
			'onMouseDown': handleRemoveLink,
			'icon': mdiLinkOff,
		},
		{
			'label': __( 'Add image', 'advanced-wp-table' ),
			'onMouseDown': handleAddImage,
			'icon': mdiImage,
		},
	];

	return (
		<div className={ 'advanced-wp-table-cell-toolbar-bound' }>
			<div className={ 'advanced-wp-table-button-group advanced-wp-table-format-button-group' }>
				{ buttons.map( button => (
					<Tooltip
						key={ button.label }
						text={ button.label }
						position={ 'bottom center' }
					>
						<button
							className={ 'advanced-wp-table-format-button' }
							onMouseDown={ button.onMouseDown }
						>
							<Icon path={ button.icon } size={ '20px' } />
						</button>
					</Tooltip>
				) ) }
			</div>
		</div>
	);
};

export default ToolBar;
