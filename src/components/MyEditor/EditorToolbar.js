import React, { forwardRef } from 'react';

// Modules object for setting up the Quill editor
export const modules = {
	toolbar: {
		container: '#toolbar',
	},
};

// Formats objects for setting up the Quill editor
export const formats = [
	'header',
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
	'video',
	'color',
	'code-block'
];

// Quill Toolbar component
export const EditorToolbar = ( props, ref ) => {
	return (
		<div id="toolbar" ref={ ref }>
			<span className="ql-formats">
				<span className={ 'ql-item' }>
					<select className="ql-header" defaultValue="3">
						<option value="1">Heading</option>
						<option value="2">Subheading</option>
						<option value="3">Normal</option>
					</select>
				</span>
			</span>
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
			</span>
			<span className="ql-formats">
				<span className={ 'ql-item' }>
					<select className="ql-align" />
				</span>
				<span className={ 'ql-item' }>
					<select className="ql-color" />
				</span>
				<span className={ 'ql-item' }>
					<select className="ql-background" />
				</span>
			</span>
			<span className="ql-formats">
				<button className="ql-link" />
				<button className="ql-image" />
				<button className="ql-video" />
			</span>
			<span className="ql-formats">
				<button className="ql-code-block" />
				<button className="ql-clean" />
			</span>
		</div>
	);
};

export default forwardRef( EditorToolbar );
