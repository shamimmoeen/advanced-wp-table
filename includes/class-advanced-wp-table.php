<?php
/**
 * Advanced WP Table setup.
 *
 * @since   1.1.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table
 *
 * @since 1.0.0
 */
class Advanced_WP_Table {

	/**
	 * The single instance of the class.
	 *
	 * @since 1.1.0
	 *
	 * @var Advanced_WP_Table
	 */
	protected static $instance = null;

	/**
	 * Advanced_WP_Table constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->defines();
		$this->includes();

		add_action( 'admin_notices', array( $this, 'show_notices' ) );
		add_action( 'init', array( $this, 'register_post_type' ) );

		new Advanced_WP_Table_Backend_Scripts();
		new Advanced_WP_Table_Frontend_Scripts();
		new Advanced_WP_Table_Rest_Meta();
	}

	/**
	 * Define the constants.
	 *
	 * @since 1.1.0
	 */
	public function defines() {
		if ( ! defined( 'ADVANCED_WP_TABLE_PATH' ) ) {
			define( 'ADVANCED_WP_TABLE_PATH', plugin_dir_path( dirname( __FILE__ ) ) );
		}

		if ( ! defined( 'ADVANCED_WP_TABLE_URL' ) ) {
			define( 'ADVANCED_WP_TABLE_URL', plugin_dir_url( dirname( __FILE__ ) ) );
		}

		if ( ! defined( 'ADVANCED_WP_TABLE_LIST_PAGE_HOOK' ) ) {
			define( 'ADVANCED_WP_TABLE_LIST_PAGE_HOOK', 'toplevel_page_advanced-wp-table' );
		}

		if ( ! defined( 'ADVANCED_WP_TABLE_PREVIEW_PAGE_SLUG' ) ) {
			define( 'ADVANCED_WP_TABLE_PREVIEW_PAGE_SLUG', 'advanced-wp-table' );
		}
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

		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-backend-scripts.php';
		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-frontend-scripts.php';
		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-list.php';
		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-post-type.php';
		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-preview-shortcode.php';
		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-rest-meta.php';
		require_once plugin_dir_path( __FILE__ ) . 'class-advanced-wp-table-shortcode.php';
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
	 * Main Advanced_WP_Table instance.
	 *
	 * Ensures only one instance of Advanced_WP_Table is loaded or can be loaded.
	 *
	 * @since 1.1.0
	 *
	 * @return Advanced_WP_Table
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Register Post Type.
	 *
	 * @since 1.0.0
	 */
	public function register_post_type() {
		$advanced_WP_table_post_type = new Advanced_WP_Table_Post_Type();
		$advanced_WP_table_post_type->register_post_type();
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
		$message = __(
			'Advanced WP Table plugin requires WordPress version 5.0 or greater.',
			'advanced-wp-table'
		);

		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
	}

}
