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
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'rest_api_init', array( $this, 'register_meta_api' ) );
		$this->includes();
	}

	/**
	 * Add the meta field to REST API responses for CPT wp-table read and write.
	 */
	public function register_meta_api() {
		register_rest_field(
			'wp-table',
			'wp_table_data',
			array(
				'get_callback'    => array( $this, 'get_meta' ),
				'update_callback' => array( $this, 'update_meta' ),
				'schema'          => null,
			)
		);
	}

	/**
	 * Handler for getting custom field data.
	 *
	 * @param array  $object     The object from the response.
	 * @param string $field_name Name of field.
	 *
	 * @return mixed
	 */
	public function get_meta( $object, $field_name ) {
		return get_post_meta( $object['id'], $field_name, true );
	}

	/**
	 * Handler for updating custom field data.
	 *
	 * @param mixed  $value      The value of the field.
	 * @param object $object     The object from the response.
	 * @param string $field_name Name of field.
	 *
	 * @return bool|int
	 */
	public function update_meta( $value, $object, $field_name ) {
		return update_post_meta( $object->ID, $field_name, $value );
	}

	/**
	 * Include the dependencies.
	 */
	public function includes() {
		require_once plugin_dir_path( __FILE__ ) . 'includes/settings.php';
	}

	/**
	 * Register Post Type.
	 */
	public function register_post_type() {
		$args = array(
			'public'            => true,
			'show_in_menu'      => false,
			'show_in_nav_menus' => false,
			'show_in_rest'      => true,
			'label'             => __( 'WP Table', 'wp-table' ),
		);

		register_post_type( 'wp-table', $args );
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
		if ( 'toplevel_page_wp-table' !== $hook ) {
			return;
		}

		wp_enqueue_media();
		wp_enqueue_script( 'media-upload' );
		wp_enqueue_script( 'wp-edit-post' );
		wp_enqueue_style( 'wp-edit-post' );

		enqueue_block_styles_assets();
		enqueue_editor_block_styles_assets();

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
