<?php
/**
 * Class WP_Table_Advanced_Settings_Page
 *
 * @package WP_Table_Advanced
 */

/**
 * Class WP_Table_Advanced_Settings_Page
 */
class WP_Table_Advanced_Settings_Page {

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
			esc_html__( 'Tables', 'wp-table-advanced' ),
			esc_html__( 'Tables', 'wp-table-advanced' ),
			'manage_options',
			'wp-table-advanced',
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
			<div id="wp-table-advanced-wrapper" class="wp-table-advanced-wrapper"></div>
		</div>
		<?php
	}
}

new WP_Table_Advanced_Settings_Page();
