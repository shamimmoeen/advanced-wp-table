const { render } = wp.element;
import App from './components/App';

// eslint-disable-next-line camelcase,no-undef
__webpack_public_path__ = 'http://localhost:8083/'; // This is important, the port should be same as the devPort in webpack.config.js file.

if ( document.getElementById( 'wp-table' ) ) {
	render( <App />, document.getElementById( `wp-table` ) );
}
