<?php
/**
 * Advanced WP Table Preview Shortcode.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Preview_Shortcode
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Preview_Shortcode {

	/**
	 * Advanced_WP_Table_Preview_Shortcode constructor.
	 *
	 * @since 1.3.0
	 */
	public function __construct() {
		add_shortcode( 'advanced_wp_table_preview', array( $this, 'register_shortcode' ) );
	}

	/**
	 * Register the shortcode.
	 *
	 * @since 1.3.0
	 *
	 * @return mixed|void
	 */
	public function register_shortcode() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$id = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : 0;

		$table   = get_post( $id );
		$message = __( 'No table found!', 'advanced-wp-table' );

		if ( ! $table ) {
			return $message;
		}

		if ( 'advanced-wp-table' !== $table->post_type ) {
			return $message;
		}

		$table_shortcode = '[advanced_wp_table id="' . $id . '"]';

		return do_shortcode( $table_shortcode );
	}

}

new Advanced_WP_Table_Preview_Shortcode();
