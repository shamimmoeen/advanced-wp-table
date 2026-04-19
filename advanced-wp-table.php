<?php
/**
 * Plugin Name:     Advanced WP Table
 * Plugin URI:      https://wordpress.org/plugins/advanced-wp-table
 * Description:     An easy to use plugin to create tables in WordPress.
 * Author:          Mainul Hassan
 * Author URI:      https://mainulhassan.com
 * Text Domain:     advanced-wp-table
 * Domain Path:     /languages
 * Version:         1.3.2
 * License:         GPLv3
 *
 * @package         Advanced_WP_Table
 */

if ( ! defined( 'ADVANCED_WP_TABLE_VERSION' ) ) {
	define( 'ADVANCED_WP_TABLE_VERSION', '1.3.2' );
}

// Include the main WooCommerce class.
if ( ! class_exists( 'Advanced_WP_Table' ) ) {
	require_once dirname( __FILE__ ) . '/includes/class-advanced-wp-table.php';
}

/**
 * The code that runs during plugin activation.
 *
 * @since 1.3.1
 */
function advanced_wp_table_activate() {
	require_once dirname( __FILE__ ) . '/includes/class-advanced-wp-table-activator.php';
	Advanced_WP_Table_Table_Activator::activate();
}

register_activation_hook( __FILE__, 'advanced_wp_table_activate' );

/**
 * Try to run the migration using 'upgrader_process_complete' hook.
 *
 * @param WP_Upgrader $upgrader_object
 * @param array       $options
 *
 * @since 1.3.2
 *
 * @return void
 */
function advanced_wp_table_updated( $upgrader_object, $options ) {
	// Check if the updated plugin is your plugin
	if ( $options['action'] === 'update' && $options['type'] === 'plugin' && isset( $options['plugins'] ) ) {
		$updated_plugins = $options['plugins'];

		$db_version_option_key = 'advanced_wp_table_db_version';

		// Check if your plugin is in the list of updated plugins
		if ( in_array( 'advanced-wp-table/advanced-wp-table.php', $updated_plugins ) ) {
			if ( ! get_option( $db_version_option_key ) ) {
				$tables = get_posts(
					array(
						'post_type'   => 'advanced-wp-table',
						'post_status' => 'any',
						'fields'      => 'ids',
					)
				);

				foreach ( $tables as $table_id ) {
					$table_content = get_post_meta( $table_id, 'advanced_wp_table_data', true );
					update_post_meta( $table_id, 'advanced_wp_table_content', $table_content );
				}

				// Update the db version.
				update_option( $db_version_option_key, ADVANCED_WP_TABLE_VERSION );
			}
		}
	}
}

add_action( 'upgrader_process_complete', 'advanced_wp_table_updated', 10, 2 );

if ( ! function_exists( 'advanced_wp_table_run' ) ) {
	/**
	 * Run the class.
	 *
	 * @since 1.0.0
	 *
	 * @return \Advanced_WP_Table
	 */
	function advanced_wp_table_run() {
		return Advanced_WP_Table::instance();
	}

	advanced_wp_table_run();
}
