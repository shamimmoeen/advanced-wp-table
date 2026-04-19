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

		add_action( 'admin_notices', array( $this, 'show_notices' ) );
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_shortcode( 'advanced_wp_table', array( $this, 'register_shortcode' ) );

		add_filter( 'manage_advanced-wp-table_posts_columns', array( $this, 'add_shortcode_column' ) );
		add_action( 'manage_advanced-wp-table_posts_custom_column', array( $this, 'render_shortcode_column' ), 10, 2 );
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
		$args = array(
			'public'        => false,
			'has_archive'   => false,
			'query_var'     => false,
			'show_in_rest'  => true,
			'show_ui'       => true,
			'show_in_menu'  => true,
			'menu_icon'     => 'dashicons-editor-table',
			'menu_position' => 25,
			'supports'      => array( 'title', 'editor' ),
			'label'         => __( 'Tables', 'advanced-wp-table' ),
			'labels'        => array(
				'name'               => __( 'Tables', 'advanced-wp-table' ),
				'singular_name'      => __( 'Table', 'advanced-wp-table' ),
				'add_new'            => __( 'Add New', 'advanced-wp-table' ),
				'add_new_item'       => __( 'Add New Table', 'advanced-wp-table' ),
				'edit_item'          => __( 'Edit Table', 'advanced-wp-table' ),
				'new_item'           => __( 'New Table', 'advanced-wp-table' ),
				'view_item'          => __( 'View Table', 'advanced-wp-table' ),
				'search_items'       => __( 'Search Tables', 'advanced-wp-table' ),
				'not_found'          => __( 'No tables found.', 'advanced-wp-table' ),
				'not_found_in_trash' => __( 'No tables found in Trash.', 'advanced-wp-table' ),
				'all_items'          => __( 'All Tables', 'advanced-wp-table' ),
			),
			'template'      => array(
				array( 'advanced-wp-table/table' ),
			),
			'template_lock' => 'all',
		);

		register_post_type( 'advanced-wp-table', $args );
	}

	/**
	 * Register the blocks.
	 *
	 * @since 2.0.0
	 */
	public function register_blocks() {
		register_block_type( ADVANCED_WP_TABLE_PATH . 'build/blocks/table' );
	}

	/**
	 * Add shortcode column to the list table.
	 *
	 * @param array $columns The existing columns.
	 *
	 * @since 2.0.0
	 *
	 * @return array
	 */
	public function add_shortcode_column( $columns ) {
		$date = $columns['date'];
		unset( $columns['date'] );

		$columns['shortcode'] = __( 'Shortcode', 'advanced-wp-table' );
		$columns['date']      = $date;

		return $columns;
	}

	/**
	 * Render the shortcode column content.
	 *
	 * @param string $column  The column name.
	 * @param int    $post_id The post ID.
	 *
	 * @since 2.0.0
	 */
	public function render_shortcode_column( $column, $post_id ) {
		if ( 'shortcode' !== $column ) {
			return;
		}

		printf( '<code>[advanced_wp_table id="%d"]</code>', $post_id );
	}

	/**
	 * Register the shortcode.
	 *
	 * @param array $atts The array of options.
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public function register_shortcode( $atts ) {
		$id = isset( $atts['id'] ) ? absint( $atts['id'] ) : 0;

		if ( ! $id ) {
			return '';
		}

		$post = get_post( $id );

		if ( ! $post || 'advanced-wp-table' !== $post->post_type ) {
			return '';
		}

		$content = apply_filters( 'the_content', $post->post_content );

		/**
		 * Add filter to alter the shortcode output for developers.
		 *
		 * @param string $content The rendered table content.
		 * @param int    $id      The table post ID.
		 */
		return apply_filters( 'advanced_wp_table_output', $content, $id );
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
