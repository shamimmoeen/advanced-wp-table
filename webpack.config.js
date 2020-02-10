const defaults = require( '@wordpress/scripts/config/webpack.config' );

const devPort = 8083; // This should be an available port to listen hmr, socket connections.

module.exports = {
	...defaults,

	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},

	devServer: {
		open: true,
		hotOnly: true,
		liveReload: false,
		publicPath: '/',
		port: devPort,
		disableHostCheck: true,
		proxy: {
			'/': {
				target: 'http://wptable.test/', // This is the url of your wordpress website.
				changeOrigin: true,
			},
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},

	module: {
		...defaults.module,
		rules: [
			...defaults.module.rules,
			{
				test: /\.(s*)css$/, // match any .scss or .css file,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
};
