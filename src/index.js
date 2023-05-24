import { render, StrictMode } from '@wordpress/element';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import '@reach/dialog/styles.css';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
	const renderElementInstance = document.getElementById(
		'advanced-wp-table-wrapper'
	);

	if (renderElementInstance) {
		render(
			<StrictMode>
				<App />
			</StrictMode>,
			renderElementInstance
		);
	}
});
