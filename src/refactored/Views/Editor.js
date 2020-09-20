import React from 'react';
import GutenbergEditor from '../GutenbergEditor';

const Editor = () => {
	return (
		<div className={ 'advanced-wp-table-edit-cell-modal' }>
			<div className={ 'advanced-wp-table-edit-cell-modal-wrapper' }>
				<GutenbergEditor />
			</div>
		</div>
	);
};

export default Editor;
