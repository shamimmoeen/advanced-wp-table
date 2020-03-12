const Buttons = ( { onAddRow, onAddColumn, onSaveTable, isLoading } ) => {
	let buttonClasses = 'button button-primary advanced-wp-table-button-with-spinner';

	if ( isLoading ) {
		buttonClasses += ' advanced-wp-table-is-loading';
	}

	return (
		<div className={ 'advanced-wp-table-post-buttons' }>
			<button
				className={ buttonClasses }
				onClick={ onSaveTable }
				disabled={ !! isLoading }
			>
				<span className="advanced-wp-table-spinner" />
				Update
			</button>
			<div>
				<button className={ 'button' } onClick={ onAddRow }>Add Row</button>
				{ ` ` }
				<button className={ 'button' } onClick={ onAddColumn }>Add Column</button>
			</div>
		</div>
	);
};

export default Buttons;
