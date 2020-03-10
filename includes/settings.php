<?php
/**
 * Class WP_Table_Settings_Page
 *
 * @package Gutenberg_Editor
 */

/**
 * Class WP_Table_Settings_Page
 */
class WP_Table_Settings_Page {

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
			'WP Table',
			'WP Table',
			'manage_options',
			'wp-table',
			array( $this, 'create_admin_page' )
		);
	}

	/**
	 * Options page callback
	 */
	public function create_admin_page() {
		?>
		<div class="wrap">
			<div id="wp-table-wrapper" class="wp-table-wrapper"></div>
		</div>
		<?php
	}
}

new WP_Table_Settings_Page();
