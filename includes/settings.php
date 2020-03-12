<?php
/**
 * Class Advanced_WP_Table_Settings_Page
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Settings_Page
 */
class Advanced_WP_Table_Settings_Page {

	/**
	 * Start up
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_plugin_page' ) );
	}

	/**
	 * Add options page
	 */
	public function add_plugin_page() {
		add_menu_page(
			esc_html__( 'Tables', 'advanced-wp-table' ),
			esc_html__( 'Tables', 'advanced-wp-table' ),
			'manage_options',
			'advanced-wp-table',
			array( $this, 'create_admin_page' ),
			'dashicons-editor-table',
			9
		);
	}

	/**
	 * Options page callback
	 */
	public function create_admin_page() {
		?>
		<div class="wrap">
			<h1></h1> <!-- Empty element to show admin notices properly if has. -->
			<div id="advanced-wp-table-wrapper" class="advanced-wp-table-wrapper"></div>
		</div>
		<?php
	}
}

new Advanced_WP_Table_Settings_Page();
