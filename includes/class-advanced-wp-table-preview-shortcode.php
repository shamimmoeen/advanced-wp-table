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
		add_filter( 'the_title', array( $this, 'preview_page_title' ), 10, 2 );
	}

	/**
	 * Change the title for the preview page.
	 *
	 * @param string $title The page title.
	 * @param int    $id    The page id.
	 *
	 * @return string
	 */
	public function preview_page_title( $title, $id ) {
		if ( $id === absint( get_option( ADVANCED_WP_TABLE_PREVIEW_PAGE_ID ) ) ) {
			$table_id     = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : 0;
			$preview_post = get_post( $table_id );

			return $preview_post->post_title;
		}

		return $title;
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
