const Buttons = ( { onAddRow, onAddColumn, onSaveTable, isLoading } ) => {
	let buttonClasses = 'button button-primary wp-table-button-with-spinner';

	if ( isLoading ) {
		buttonClasses += ' wp-table-is-loading';
	}

	return (
		<div className={ 'wp-table-post-buttons' }>
			<button
				className={ buttonClasses }
				onClick={ onSaveTable }
				disabled={ !! isLoading }
			>
				<span className="wp-table-spinner" />
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
