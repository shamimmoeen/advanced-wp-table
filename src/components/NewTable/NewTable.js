import Form from './Form';
import Header from './Header';

const { Fragment } = wp.element;

const NewTable = () => {
	return (
		<Fragment>
			<Header />
			<Form />
		</Fragment>
	);
};

export default NewTable;
