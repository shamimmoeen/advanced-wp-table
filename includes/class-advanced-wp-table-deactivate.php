<?php
/**
 * Advanced WP Table Deactivate.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Deactivate
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Deactivate {

	/**
	 * Runs when deactivating the plugin.
	 *
	 * @since 1.3.0
	 */
	public function deactivate() {
		// Unregister the post type, so the rules are no longer in memory.
		unregister_post_type( 'advanced-wp-table' );

		// Clear the permalinks to remove our post type's rules from the database.
		flush_rewrite_rules();
	}

}
