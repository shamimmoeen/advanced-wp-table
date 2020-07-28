<?php
/**
 * Advanced WP Table Shortcode.
 *
 * @since   1.3.0
 *
 * @package Advanced_WP_Table
 */

/**
 * Class Advanced_WP_Table_Shortcode
 *
 * @since 1.3.0
 */
class Advanced_WP_Table_Shortcode {

	/**
	 * Advanced_WP_Table_Shortcode constructor.
	 *
	 * @since 1.3.0
	 */
	public function __construct() {
		add_shortcode( 'advanced_wp_table', array( $this, 'register_shortcode' ) );
	}

	/**
	 * Register the shortcode.
	 *
	 * @param array $atts The array of options.
	 *
	 * @since 1.0.0
	 *
	 * @return mixed|void
	 */
	public function register_shortcode( $atts ) {
		$id = isset( $atts['id'] ) ? absint( $atts['id'] ) : 0;

		if ( ! $id ) {
			return;
		}

		wp_enqueue_style( 'advanced-wp-table-style' );

		/**
		 * Add filter to enqueue scripts dynamically for developers.
		 *
		 * @param int $id The table id.
		 */
		do_action( 'advanced_wp_table_enqueue_scripts', $id );

		$table = get_post_meta( $id, 'advanced_wp_table_data', true );
		$rows  = isset( $table['rows'] ) ? $table['rows'] : '';

		ob_start();
		?>

		<?php if ( $rows ) : ?>

			<div class="advanced-wp-table-wrapper" id="advanced-wp-table-<?php echo get_the_ID(); ?>">
				<table>
					<?php foreach ( $rows as $row ) : ?>
						<tr>
							<?php foreach ( $row as $cell ) : ?>
								<td>
									<?php $this->render_cell( $cell ); ?>
								</td>
							<?php endforeach; ?>
						</tr>
					<?php endforeach; ?>
				</table>
			</div>

		<?php endif; ?>
		<?php

		$output = ob_get_clean();

		/**
		 * Add filter to alter the shortcode output for developers.
		 */
		$output = apply_filters( 'advanced_wp_table_output', $output, $id );

		return $output;
	}

	/**
	 * Renders the table cell.
	 *
	 * @param string $cell The cell string.
	 */
	private function render_cell( $cell ) {
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound
		$content = $cell ? apply_filters( 'the_content', do_blocks( $cell ) ) : '';

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $content;
	}

}

new Advanced_WP_Table_Shortcode();
