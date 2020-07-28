<?php
/**
 * Advanced WP Table Frontend Scripts.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Frontend_Scripts
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Frontend_Scripts {

	/**
	 * Advanced_WP_Table_Frontend_Scripts constructor.
	 *
	 * @since 1.3.0
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ) );
	}

	/**
	 * Load scripts.
	 *
	 * @since 1.0.0
	 */
	public function load_scripts() {
		wp_register_style(
			'advanced-wp-table-style',
			ADVANCED_WP_TABLE_URL . 'assets/advanced-wp-table.css',
			array(),
			filemtime( ADVANCED_WP_TABLE_PATH . 'assets/advanced-wp-table.css' )
		);

		if ( 'advanced-wp-table' === get_post_type() ) {
			wp_enqueue_style( 'advanced-wp-table-style' );
		}
	}

}
