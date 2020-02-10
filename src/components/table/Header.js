import Row from './Row';

const Header = ( { columns } ) => {
	return (
		<div className={ 'wp-table-header' }>
			<Row columns={ columns } />
		</div>
	);
};

export default Header;
