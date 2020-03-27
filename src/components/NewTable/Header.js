const { __ } = wp.i18n;

const Header = () => {
	return (
		<div className={ 'advanced-wp-table-header' }>
			<div className={ 'advanced-wp-table-header-inner' }>
				<h1>{ __( 'Add New Table', 'advanced-wp-table' ) }</h1>
			</div>
		</div>
	);
};

export default Header;
