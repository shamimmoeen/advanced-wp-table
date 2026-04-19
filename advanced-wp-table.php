<?php
/**
 * Plugin Name:     Advanced WP Table
 * Plugin URI:      https://wordpress.org/plugins/advanced-wp-table
 * Description:     An easy to use plugin to create tables in WordPress.
 * Author:          Mainul Hassan
 * Author URI:      https://mainulhassan.com
 * Text Domain:     advanced-wp-table
 * Domain Path:     /languages
 * Version:         2.0.0
 * License:         GPLv3
 *
 * @package         Advanced_WP_Table
 */

if ( ! defined( 'ADVANCED_WP_TABLE_VERSION' ) ) {
	define( 'ADVANCED_WP_TABLE_VERSION', '2.0.0' );
}

// Include the main Advanced_WP_Table class.
if ( ! class_exists( 'Advanced_WP_Table' ) ) {
	require_once dirname( __FILE__ ) . '/includes/class-advanced-wp-table.php';
}

if ( ! function_exists( 'advanced_wp_table_run' ) ) {
	/**
	 * Run the class.
	 *
	 * @since 1.0.0
	 *
	 * @return Advanced_WP_Table
	 */
	function advanced_wp_table_run() {
		return Advanced_WP_Table::instance();
	}

	advanced_wp_table_run();
}
