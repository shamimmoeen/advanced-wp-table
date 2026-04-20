module.exports = function ( grunt ) {
	'use strict';

	grunt.initConfig( {
		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt',
				},
			},
		},
	} );

	grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );
	grunt.registerTask( 'readme', [ 'wp_readme_to_markdown' ] );
};
