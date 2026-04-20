<?php
/**
 * Plugin Name:       Advanced WP Table
 * Plugin URI:        https://wordpress.org/plugins/advanced-wp-table
 * Description:       A powerful table plugin for WordPress, built on the Gutenberg block editor.
 * Version:           2.0.0
 * Requires at least: 6.3
 * Tested up to:      6.9
 * Requires PHP:      7.4
 * Author:            Mainul Hassan
 * Author URI:        https://mainulhassan.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       advanced-wp-table
 * Domain Path:       /languages
 *
 * @package Advanced_WP_Table
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'ADVANCED_WP_TABLE_VERSION' ) ) {
	define( 'ADVANCED_WP_TABLE_VERSION', '2.0.0' );
}

// Include the main Advanced_WP_Table class.
if ( ! class_exists( 'Advanced_WP_Table' ) ) {
	require_once __DIR__ . '/includes/class-advanced-wp-table.php';
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
