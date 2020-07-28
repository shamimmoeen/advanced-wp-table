<?php
/**
 * Advanced WP Table Rest Meta.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Rest_Meta
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Rest_Meta {

	/**
	 * Advanced_WP_Table_Rest_Meta constructor.
	 *
	 * @since 1.3.0
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_meta_api' ) );
	}

	/**
	 * Add the meta field to REST API responses for CPT advanced-wp-table read and write.
	 *
	 * @since 1.0.0
	 */
	public function register_meta_api() {
		register_rest_field(
			'advanced-wp-table',
			'advanced_wp_table_data',
			array(
				'get_callback'    => array( $this, 'get_meta' ),
				'update_callback' => array( $this, 'update_meta' ),
				'schema'          => null,
			)
		);
	}

	/**
	 * Handler for getting custom field data.
	 *
	 * @param array  $object     The object from the response.
	 * @param string $field_name Name of field.
	 *
	 * @since        1.0.0
	 * @noinspection PhpUnused
	 *
	 * @return mixed
	 */
	public function get_meta( $object, $field_name ) {
		return get_post_meta( $object['id'], $field_name, true );
	}

	/**
	 * Handler for updating custom field data.
	 *
	 * @param mixed  $value      The value of the field.
	 * @param object $object     The object from the response.
	 * @param string $field_name Name of field.
	 *
	 * @since        1.0.0
	 * @noinspection PhpUnused
	 *
	 * @return bool|int
	 */
	public function update_meta( $value, $object, $field_name ) {
		return update_post_meta( $object->ID, $field_name, $value );
	}

}
