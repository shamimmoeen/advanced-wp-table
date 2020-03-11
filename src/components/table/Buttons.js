const Buttons = ( { onAddRow, onAddColumn, onSaveTable, isLoading } ) => {
	let buttonClasses = 'button button-primary wp-table-advanced-button-with-spinner';

	if ( isLoading ) {
		buttonClasses += ' wp-table-advanced-is-loading';
	}

	return (
		<div className={ 'wp-table-advanced-post-buttons' }>
			<button
				className={ buttonClasses }
				onClick={ onSaveTable }
				disabled={ !! isLoading }
			>
				<span className="wp-table-advanced-spinner" />
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
