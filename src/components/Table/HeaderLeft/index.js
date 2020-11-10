import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

import BackToList from './BackToList';
import GoToPrevTable from './GoToPrevTable';
import GoToNextTable from './GoToNextTable';
import AddRow from './AddRow';
import AddColumn from './AddColumn';
import MyEditorToolbar from '../../MyEditor/EditorToolbar';

const HeaderLeft = ( props, ref ) => {
	const { visibleEditorToolbar } = useSelector( state => state.table );

	let editorToolbar = '';

	if ( visibleEditorToolbar ) {
		editorToolbar = <MyEditorToolbar ref={ ref } />;
	}

	return (
		<div className={ 'advanced-wp-table-header-left' }>
			<div className={ 'advanced-wp-table-header-with-separator' }>
				<BackToList />
			</div>

			<div className={ 'advanced-wp-table-header-with-separator' }>
				<div className={ 'advanced-wp-table-button-group' }>
					<GoToPrevTable />
					<GoToNextTable />
				</div>
			</div>

			<div className={ 'advanced-wp-table-header-with-separator' }>
				<div className={ 'advanced-wp-table-button-group' }>
					<AddRow />
					<AddColumn />
				</div>
			</div>

			{ editorToolbar }
		</div>
	);
};

export default forwardRef( HeaderLeft );
