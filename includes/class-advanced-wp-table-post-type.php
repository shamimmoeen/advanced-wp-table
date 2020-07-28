<?php
/**
 * Advanced WP Table post type.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Post_Type
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Post_Type {

	/**
	 * Register Post Type.
	 *
	 * @since 1.0.0
	 */
	public function register_post_type() {
		$args = array(
			'public'       => false,
			'has_archive'  => false,
			'query_var'    => false,
			'show_in_rest' => true,
			'label'        => __( 'Advanced WP Table', 'advanced-wp-table' ),
		);

		register_post_type( 'advanced-wp-table', $args );
	}

}
