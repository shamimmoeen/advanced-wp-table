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
		add_action( 'admin_enqueue_scripts', array( $this, 'load_wp_table_backend_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_wp_table_backend_scripts' ) );
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
	 * Load wp table backend scripts.
	 *
	 * @param string $hook The hook identifier.
	 *
	 * @since 1.0.0
	 */
	public function load_wp_table_backend_scripts( $hook ) {
		if ( 'toplevel_page_wporg' !== $hook ) {
			return;
		}

		wp_enqueue_media();
		wp_enqueue_script( 'media-upload' );
		wp_enqueue_script( 'wp-edit-post' );
		wp_enqueue_style( 'wp-edit-post' );

		enqueue_block_styles_assets();
		wp_common_block_scripts_and_styles();

		// Automatically load dependencies and version.
		$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

		if ( defined( 'WP_ENVIRONMENT' ) && 'development' === WP_ENVIRONMENT ) {
			// Load scripts when in development.
			wp_enqueue_script(
				'wp-table-backend-js',
				'http://localhost:8083/index.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		} else {
			// Load scripts when in production.
			wp_enqueue_script(
				'wp-table-backend-js',
				plugin_dir_url( __FILE__ ) . 'build/index.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		}
	}

}

require_once plugin_dir_path( __FILE__ ) . 'settings.php';

/**
 * Run the class.
 *
 * @return \WP_Table
 * @since 1.0.0
 */
function wp_table_run() {
	return new WP_Table();
}

add_action( 'plugins_loaded', 'wp_table_run' );
