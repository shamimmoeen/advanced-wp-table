const { Fragment } = wp.element;

const Buttons = ( { onAddRow, onAddColumn, onResetTable, onSaveTable } ) => {
	return (
		<Fragment>
			<button className={ 'button' } onClick={ onAddRow }>Add Row</button>
			{ ` ` }
			<button className={ 'button' } onClick={ onAddColumn }>Add Column</button>
			{ ` ` }
			<button className={ 'button' } onClick={ onResetTable }>Reset</button>
			{ ` ` }
			<button className={ 'button button-primary' } onClick={ onSaveTable }>Save</button>
		</Fragment>
	);
};

export default Buttons;
