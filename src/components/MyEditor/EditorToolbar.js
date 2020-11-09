import React, { forwardRef } from 'react';
import { Quill } from 'react-quill';

// Add sizes to whitelist and register them
const Size = Quill.import( 'formats/size' );
Size.whitelist = [ 'extra-small', 'small', 'medium', 'large' ];
Quill.register( Size, true );

// Add fonts to whitelist and register them
const Font = Quill.import( 'formats/font' );
Font.whitelist = [
	'arial',
	'comic-sans',
	'courier-new',
	'georgia',
	'helvetica',
	'lucida'
];
Quill.register( Font, true );

function imageHandler() {
	const range = this.quill.getSelection();
	console.log( range );
	// eslint-disable-next-line
	const value = prompt( 'What is the image URL' );
	if ( value ) {
		this.quill.insertEmbed( range.index, 'image', value, Quill.sources.USER );
	}
}

// Modules object for setting up the Quill editor
export const modules = {
	toolbar: {
		container: '#toolbar',
		handlers: {
			image: imageHandler
		}
	},
	history: {
		delay: 500,
		maxStack: 100,
		userOnly: true
	}
};

// Formats objects for setting up the Quill editor
export const formats = [
	'bold',
	'italic',
	'underline',
	'align',
	'strike',
	'script',
	'blockquote',
	'background',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'color',
	'code-block'
];

// Quill Toolbar component
export const MyEditorToolbar = ( props, ref ) => (
	<div id="toolbar" ref={ ref }>
		<span className="ql-formats">
			<button className="ql-bold" />
			<button className="ql-italic" />
			<button className="ql-underline" />
			<button className="ql-strike" />
		</span>
		<span className="ql-formats">
			<button className="ql-list" value="ordered" />
			<button className="ql-list" value="bullet" />
			<button className="ql-indent" value="-1" />
			<button className="ql-indent" value="+1" />
		</span>
		<span className="ql-formats">
			<button className="ql-script" value="super" />
			<button className="ql-script" value="sub" />
			<button className="ql-blockquote" />
			<button className="ql-direction" />
		</span>
		<span className="ql-formats">
			<select className="ql-align" />
			<select className="ql-color" />
			<select className="ql-background" />
		</span>
		<span className="ql-formats">
			<button className="ql-link" />
			<button className="ql-image" />
			<button className="ql-video" />
		</span>
		<span className="ql-formats">
			<button className="ql-formula" />
			<button className="ql-code-block" />
			<button className="ql-clean" />
		</span>
	</div>
);

export default forwardRef( MyEditorToolbar );
