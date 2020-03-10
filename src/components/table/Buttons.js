const Buttons = ( { onAddRow, onAddColumn, onSaveTable } ) => {
	return (
		<div className={ 'wp-table-post-buttons' }>
			<button className={ 'button button-primary' } onClick={ onSaveTable }>Update</button>
			<div>
				<button className={ 'button' } onClick={ onAddRow }>Add Row</button>
				{ ` ` }
				<button className={ 'button' } onClick={ onAddColumn }>Add Column</button>
			</div>
		</div>
	);
};

export default Buttons;
