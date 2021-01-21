<?php
/**
 * Advanced WP Table Backend Scripts.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Backend_Scripts
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Backend_Scripts {

	/**
	 * Advanced_WP_Table_Backend_Scripts constructor.
	 *
	 * @since 1.3.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'load_scripts' ) );
	}

	/**
	 * Load scripts.
	 *
	 * @param string $hook The current admin page.
	 *
	 * @since 1.0.0
	 */
	public function load_scripts( $hook ) {
		if ( ADVANCED_WP_TABLE_LIST_PAGE_HOOK !== $hook ) {
			return;
		}

		global $post;

		wp_add_inline_script(
			'wp-blocks',
			sprintf(
				'wp.blocks.unstable__bootstrapServerSideBlockDefinitions( %s );',
				wp_json_encode( get_block_editor_server_block_settings() )
			),
			'after'
		);

		wp_add_inline_script(
			'wp-blocks',
			sprintf(
				'wp.blocks.setCategories( %s );',
				wp_json_encode( get_block_categories( $post ) )
			),
			'after'
		);

		wp_tinymce_inline_scripts();
		wp_enqueue_editor();

		wp_enqueue_media();
		wp_enqueue_script( 'media-upload' );
		wp_enqueue_script( 'wp-edit-post' );

		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		do_action( 'enqueue_block_editor_assets' );

		wp_enqueue_script( 'wp-edit-post' );
		wp_enqueue_script( 'wp-format-library' );
		wp_enqueue_style( 'wp-edit-post' );
		wp_enqueue_style( 'wp-format-library' );

		// Automatically load dependencies and version.
		$asset_file = require_once dirname( __DIR__ ) . '/build/index.asset.php';

		// @todo Remove localhost info.
		if ( defined( 'WP_ENVIRONMENT' ) && 'development' === WP_ENVIRONMENT ) {
			// Load scripts when in development.
			wp_enqueue_script(
				'wp-table-backend-js',
				'http://localhost:8083/index.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		} else {
			// Load scripts when in production.
			wp_enqueue_script(
				'wp-table-backend-js',
				ADVANCED_WP_TABLE_URL . 'build/index.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		}

		$preview_page = get_post( get_option( ADVANCED_WP_TABLE_PREVIEW_PAGE_ID ) );

		wp_localize_script(
			'wp-table-backend-js',
			'awt_params',
			array(
				'preview_page_url' => get_the_permalink( $preview_page ),
			)
		);
	}

}
