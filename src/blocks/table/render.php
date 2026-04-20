<?php
/**
 * Server-side rendering of the advanced-wp-table/table block.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Block default content.
 * @var WP_Block $block      Block instance.
 *
 * @package Advanced_WP_Table
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound

$rows          = $attributes['rows'] ?? array();
$has_header    = ! empty( $attributes['hasHeader'] );
$has_footer    = ! empty( $attributes['hasFooter'] );
$has_fixed     = ! empty( $attributes['hasFixedLayout'] );
$has_striped   = ! empty( $attributes['hasStripedRows'] );
$caption       = $attributes['caption'] ?? '';
$column_aligns = $attributes['columnAligns'] ?? array();

if ( empty( $rows ) ) {
	return;
}

// Split rows into sections.
$header_rows = array();
$body_rows   = $rows;
$footer_rows = array();

if ( $has_header && count( $body_rows ) > 0 ) {
	$header_rows = array( array_shift( $body_rows ) );
}

if ( $has_footer && count( $body_rows ) > 0 ) {
	$footer_rows = array( array_pop( $body_rows ) );
}

// Build table classes and styles.
// Color and border supports use __experimentalSkipSerialization,
// so we apply them to the <table> element instead of the wrapper.
$table_classes = array( 'awt__table' );
$table_styles  = array();

if ( $has_fixed ) {
	$table_classes[] = 'awt__table--fixed';
}

if ( $has_striped ) {
	$table_classes[] = 'awt__table--striped';
}

// Apply color and border styles from block attributes.
$style_attrs = $attributes['style'] ?? array();
$supports    = array( 'color', 'border' );

foreach ( $supports as $support ) {
	if ( ! empty( $style_attrs[ $support ] ) ) {
		$parsed = wp_style_engine_get_styles( array( $support => $style_attrs[ $support ] ) );

		if ( ! empty( $parsed['css'] ) ) {
			$table_styles[] = $parsed['css'];
		}

		if ( ! empty( $parsed['classnames'] ) ) {
			$table_classes[] = $parsed['classnames'];
		}
	}
}

// Apply preset color/border classes.
$preset_map = array(
	'textColor'       => 'has-%s-color',
	'backgroundColor' => 'has-%s-background-color',
	'gradient'        => 'has-%s-gradient-background',
	'borderColor'     => 'has-%s-border-color',
);

foreach ( $preset_map as $attr_key => $class_format ) {
	if ( ! empty( $attributes[ $attr_key ] ) ) {
		$table_classes[] = sprintf( $class_format, $attributes[ $attr_key ] );
	}
}

$table_class_attr = ' class="' . esc_attr( implode( ' ', $table_classes ) ) . '"';
$table_style_attr = ! empty( $table_styles ) ? ' style="' . esc_attr( implode( '', $table_styles ) ) . '"' : '';
?>

<figure <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<table<?php echo $table_class_attr . $table_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<?php if ( ! empty( $header_rows ) ) : ?>
			<thead>
				<?php foreach ( $header_rows as $row ) : ?>
					<tr>
						<?php foreach ( $row as $col_index => $cell ) : ?>
							<?php
							$align = $column_aligns[ $col_index ] ?? '';
							$style = $align ? ' style="text-align:' . esc_attr( $align ) . '"' : '';
							?>
							<th scope="col"<?php echo $style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo wp_kses_post( $cell ); ?></th>
						<?php endforeach; ?>
					</tr>
				<?php endforeach; ?>
			</thead>
		<?php endif; ?>

		<tbody>
			<?php foreach ( $body_rows as $row ) : ?>
				<tr>
					<?php foreach ( $row as $col_index => $cell ) : ?>
						<?php
						$align = $column_aligns[ $col_index ] ?? '';
						$style = $align ? ' style="text-align:' . esc_attr( $align ) . '"' : '';
						?>
						<td<?php echo $style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo wp_kses_post( $cell ); ?></td>
					<?php endforeach; ?>
				</tr>
			<?php endforeach; ?>
		</tbody>

		<?php if ( ! empty( $footer_rows ) ) : ?>
			<tfoot>
				<?php foreach ( $footer_rows as $row ) : ?>
					<tr>
						<?php foreach ( $row as $col_index => $cell ) : ?>
							<?php
							$align = $column_aligns[ $col_index ] ?? '';
							$style = $align ? ' style="text-align:' . esc_attr( $align ) . '"' : '';
							?>
							<td<?php echo $style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php echo wp_kses_post( $cell ); ?></td>
						<?php endforeach; ?>
					</tr>
				<?php endforeach; ?>
			</tfoot>
		<?php endif; ?>
	</table>

	<?php if ( $caption ) : ?>
		<figcaption><?php echo wp_kses_post( $caption ); ?></figcaption>
	<?php endif; ?>
</figure>
<?php
// phpcs:enable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
