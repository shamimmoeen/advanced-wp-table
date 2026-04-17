import { createRoot, StrictMode } from '@wordpress/element';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('advanced-wp-table-wrapper');

	if (container) {
		const root = createRoot(container);
		root.render(
			<StrictMode>
				<App />
			</StrictMode>
		);
	}
});
