<?php
/**
 * Advanced WP Table list.
 *
 * @since   1.0.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Table_List
 *
 * @since 1.0.0
 */
class Advanced_WP_Table_Table_List {

	/**
	 * The constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_plugin_page' ) );
		add_filter( 'admin_body_class', array( $this, 'add_admin_class' ) );
	}

	/**
	 * Add options page.
	 *
	 * @since 1.0.0
	 */
	public function add_plugin_page() {
		add_menu_page(
			esc_html__( 'Tables', 'advanced-wp-table' ),
			esc_html__( 'Tables', 'advanced-wp-table' ),
			'manage_options',
			'advanced-wp-table',
			array( $this, 'create_admin_page' ),
			'dashicons-editor-table',
			25
		);
	}

	/**
	 * Options page callback.
	 *
	 * @since 1.0.0
	 */
	public function create_admin_page() {
		?>
		<div class="wrap">
			<h1></h1> <!-- Empty element to show admin notices properly if has. -->
			<div id="advanced-wp-table-wrapper" class="advanced-wp-table-wrapper"></div>
		</div>
		<?php
	}

	/**
	 * Adds class in admin body.
	 *
	 * @param string $classes The classes.
	 *
	 * @return mixed
	 */
	public function add_admin_class( $classes ) {
		$current_screen = get_current_screen();
		$page           = ADVANCED_WP_TABLE_LIST_PAGE_HOOK;

		if ( isset( $current_screen->base ) && $page === $current_screen->base ) {
			$classes .= ' wp-embed-responsive';
			$classes .= ' advanced-wp-table-admin';
		}

		return $classes;
	}

}

new Advanced_WP_Table_Table_List();
