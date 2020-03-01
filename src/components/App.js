import { hot } from 'react-hot-loader/root';
import MyEditorComponent from './editor/Editor';

import Table from './table/Table';

const App = () => {
	return (
		<div>
			<Table />
			{/*<MyEditorComponent />*/}
		</div>
	);
};

export default hot( App );
