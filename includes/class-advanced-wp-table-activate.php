<?php
/**
 * Advanced WP Table Activate.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Activate
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Activate {

	/**
	 * The post type class instance.
	 *
	 * @since 1.3.0
	 *
	 * @var Advanced_WP_Table_Post_Type
	 */
	private $post_type;

	/**
	 * Advanced_WP_Table_Activate constructor.
	 *
	 * @since 1.3.0
	 */
	public function __construct() {
		$this->post_type = new Advanced_WP_Table_Post_Type();
	}

	/**
	 * Runs when activating the plugin.
	 *
	 * @since 1.3.0
	 */
	public function activate() {
		$this->post_type->register_post_type();

		$this->create_preview_page();

		flush_rewrite_rules();
	}

	/**
	 * Creates the preview page.
	 *
	 * @since 1.3.0
	 */
	private function create_preview_page() {
		$data = array(
			'post_type'    => 'page',
			'post_title'   => ADVANCED_WP_TABLE_PREVIEW_PAGE_TITLE,
			'post_content' => '[advanced_wp_table_preview]',
			'post_status'  => 'draft',
		);

		if ( ! get_page_by_title( ADVANCED_WP_TABLE_PREVIEW_PAGE_TITLE ) ) {
			$page_id = wp_insert_post( $data );

			if ( ! is_wp_error( $page_id ) ) {
				update_option( ADVANCED_WP_TABLE_PREVIEW_PAGE_ID, $page_id );
			}
		}
	}

}
