const Cell = ( { title } ) => {
	return <div className="wp-td"><input type={ 'text' } style={ { width: '100%' } } value={ title } /></div>;
};

export default Cell;
