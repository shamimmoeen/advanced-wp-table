<?php
/**
 * Plugin Name:     Advanced WP Table
 * Plugin URI:      https://mainulhassan.info/advanced-wp-table
 * Description:     Create responsive tables using Gutenberg.
 * Author:          Mainul Hassan Main
 * Author URI:      https://mainulhassan.info
 * Text Domain:     advanced-wp-table
 * Domain Path:     /languages
 * Version:         1.0.0
 * License:         GPLv3
 *
 * @package         Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table
 *
 * @since 1.0.0
 */
class Advanced_WP_Table {

	/**
	 * Advanced_WP_Table constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'load_backend_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_frontend_scripts' ) );
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'rest_api_init', array( $this, 'register_meta_api' ) );
		add_shortcode( 'advanced_wp_table', array( $this, 'register_shortcode' ) );
		add_action( 'admin_notices', array( $this, 'show_notices' ) );
		$this->includes();
	}

	/**
	 * Add the meta field to REST API responses for CPT advanced-wp-table read and write.
	 *
	 * @since 1.0.0
	 */
	public function register_meta_api() {
		register_rest_field(
			'advanced-wp-table',
			'advanced_wp_table_data',
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
	 * @since 1.0.0
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
	 * @since 1.0.0
	 *
	 * @return bool|int
	 */
	public function update_meta( $value, $object, $field_name ) {
		return update_post_meta( $object->ID, $field_name, $value );
	}

	/**
	 * Include the dependencies.
	 *
	 * @since 1.0.0
	 */
	public function includes() {
		if ( ! $this->should_we_run() ) {
			return;
		}

		require_once plugin_dir_path( __FILE__ ) . 'includes/settings.php';
	}

	/**
	 * Register Post Type.
	 *
	 * @since 1.0.0
	 */
	public function register_post_type() {
		$args = array(
			'public'            => true,
			'show_in_menu'      => false,
			'show_in_nav_menus' => false,
			'show_in_rest'      => true,
			'label'             => __( 'Advanced WP Table', 'advanced-wp-table' ),
		);

		register_post_type( 'advanced-wp-table', $args );
	}

	/**
	 * Load frontend scripts.
	 *
	 * @since 1.0.0
	 */
	public function load_frontend_scripts() {
		wp_register_style(
			'advanced-wp-table-style',
			plugin_dir_url( __FILE__ ) . 'assets/advanced-wp-table.css',
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . 'assets/advanced-wp-table.css' )
		);

		if ( 'advanced-wp-table' === get_post_type() ) {
			wp_enqueue_style( 'advanced-wp-table-style' );
		}
	}

	/**
	 * Load backend scripts.
	 *
	 * @param string $hook The hook identifier.
	 *
	 * @since 1.0.0
	 */
	public function load_backend_scripts( $hook ) {
		if ( 'toplevel_page_advanced-wp-table' !== $hook ) {
			return;
		}

		wp_enqueue_media();
		wp_enqueue_script( 'media-upload' );
		wp_enqueue_script( 'wp-edit-post' );
		wp_enqueue_style( 'wp-edit-post' );

		// Automatically load dependencies and version.
		$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

		wp_enqueue_script(
			'advanced-wp-table-backend-js',
			plugin_dir_url( __FILE__ ) . 'build/index.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}

	/**
	 * Register the shortcode.
	 *
	 * @param array $atts The array of options.
	 *
	 * @since 1.0.0
	 *
	 * @return mixed|void
	 */
	public function register_shortcode( $atts ) {
		$id = isset( $atts['id'] ) ? $atts['id'] : 0;

		if ( ! $id ) {
			return;
		}

		wp_enqueue_style( 'advanced-wp-table-style' );

		$post = get_post( $id );
		setup_postdata( $post );

		ob_start();
		the_content();
		$content = ob_get_clean();

		wp_reset_postdata();

		return $content;
	}

	/**
	 * Should we run or not.
	 *
	 * @since 1.0.0
	 *
	 * @return bool
	 */
	private function should_we_run() {
		if ( version_compare( get_bloginfo( 'version' ), '5.0', '<' ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Show admin notices.
	 *
	 * @since 1.0.0
	 */
	public function show_notices() {
		if ( $this->should_we_run() ) {
			return;
		}

		$class   = 'notice notice-info';
		$message = __( 'Advanced WP Table plugin requires WordPress version 5.0 or greater.', 'advanced-wp-table' );

		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
	}

}

/**
 * Run the class.
 *
 * @since 1.0.0
 *
 * @return \Advanced_WP_Table
 */
function advanced_wp_table_run() {
	return new Advanced_WP_Table();
}

add_action( 'plugins_loaded', 'advanced_wp_table_run' );
