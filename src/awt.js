import { render, StrictMode } from '@wordpress/element';
import App from './components/App';
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
