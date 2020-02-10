<?php
/**
 * Plugin Name:     WP Table
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     Easily create responsive tables to use anywhere using shortcode.
 * Author:          Mainul Hassan Main
 * Author URI:      https://mainulhassan.info
 * Text Domain:     wp-table
 * Domain Path:     /languages
 * Version:         0.1.0
 * License:         GPLv2 or later
 *
 * @package         WP_Table
 */

/**
 * Class WP_Table
 *
 * @since 1.0.0
 */
class WP_Table {

	/**
	 * WP_Table constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_frontend_scripts' ) );
	}

	/**
	 * Load admin scripts.
	 *
	 * @since 1.0.0
	 */
	public function load_admin_scripts() {
		// Admin scripts go here...
	}

	/**
	 * Load frontend scripts.
	 *
	 * @since 1.0.0
	 */
	public function load_frontend_scripts() {
		if ( defined( 'WP_ENVIRONMENT' ) && 'development' === WP_ENVIRONMENT ) {
			// Load scripts when in development.
			wp_enqueue_script(
				'wp-table-backend-js',
				'http://localhost:8083/index.js',
				array( 'wp-element' ),
				time(),
				true
			);
		} else {
			// Load scripts when in production.
			wp_enqueue_script(
				'wp-table-backend-js',
				plugin_dir_url( __FILE__ ) . 'build/index.js',
				array( 'wp-element' ),
				filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
				true
			);
		}
	}

}

/**
 * Run the class.
 *
 * @since 1.0.0
 *
 * @return \WP_Table
 */
function wp_table_run() {
	return new WP_Table();
}

add_action( 'plugins_loaded', wp_table_run() );
