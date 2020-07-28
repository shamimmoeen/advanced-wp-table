<?php
/**
 * Plugin Name:     Advanced WP Table
 * Plugin URI:      https://wordpress.org/plugins/advanced-wp-table
 * Description:     An easy to use plugin to create tables in WordPress.
 * Author:          Mainul Hassan Main
 * Author URI:      https://mainulhassan.info
 * Text Domain:     advanced-wp-table
 * Domain Path:     /languages
 * Version:         1.3.0
 * License:         GPLv3
 *
 * @package         Advanced_WP_Table
 */

if ( ! function_exists( 'awt_fs' ) ) {
	/**
	 * Create a helper function for easy SDK access.
	 *
	 * @since 1.1.0
	 *
	 * @return mixed
	 *
	 * @throws Freemius_Exception Throw error.
	 */
	function awt_fs() {
		global $awt_fs;

		if ( ! isset( $awt_fs ) ) {
			// Include Freemius SDK.
			require_once plugin_dir_path( __FILE__ ) . 'includes/freemius/start.php';

			$awt_fs = fs_dynamic_init(
				array(
					'id'             => '5735',
					'slug'           => 'advanced-wp-table',
					'type'           => 'plugin',
					'public_key'     => 'pk_00b5e191384bb0759829eb9772649',
					'is_premium'     => false,
					'has_addons'     => false,
					'has_paid_plans' => false,
					'menu'           => array(
						'slug' => 'advanced-wp-table',
					),
				)
			);
		}

		return $awt_fs;
	}

	// Init Freemius.
	try {
		// TODO: include freemius in production.
		if ( 1 === 2 ) {
			awt_fs();
		}
	} catch ( Freemius_Exception $e ) {
		// Display the error message and stop executing.
		wp_die( esc_html( $e->getMessage() ) );
	}

	// Signal that SDK was initiated.
	do_action( 'awt_fs_loaded' );
}

/**
 * The current version of advanced wp table plugin.
 */
define( 'ADVANCED_WP_TABLE_VERSION', '1.3.0' );

/**
 * The code that runs during plugin activation.
 *
 * @since 1.3.0
 */
function advanced_wp_table_activate() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-advanced-wp-table-activate.php';
	$advanced_WP_table_activate = new Advanced_WP_Table_Activate();
	$advanced_WP_table_activate->activate();
}

register_activation_hook( __FILE__, 'advanced_wp_table_activate' );

/**
 * The code that runs during plugin deactivation.
 *
 * @since 1.3.0
 */
function advanced_wp_table_deactivate() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-advanced-wp-table-deactivate.php';
	$advanced_WP_table_deactivate = new Advanced_WP_Table_Deactivate();
	$advanced_WP_table_deactivate->deactivate();
}

register_deactivation_hook( __FILE__, 'advanced_wp_table_deactivate' );

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
