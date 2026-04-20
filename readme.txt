=== Advanced WP Table ===
Contributors: shamimmoeen
Tags: table, data table, gutenberg table, responsive table, block table
Requires at least: 6.3
Tested up to: 6.9
Requires PHP: 7.4
Stable tag: 2.0.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Advanced table block for WordPress with rich text, styling, and reusable table support.

== Description ==

**Advanced WP Table** lets you create and manage data tables using the WordPress block editor. Use the dedicated Tables admin section to manage reusable tables, or insert the Advanced Table block directly into any post or page.

= Features =

* **Rich text cells** — bold, italic, links, inline images, strikethrough, and code formatting
* **Header and footer sections** — designate header and footer rows for your table
* **Column alignment** — align columns left, center, or right
* **Table caption** — add a description below the table
* **Row and column management** — insert, delete, duplicate, and move rows and columns
* **Striped rows** — alternating row background colors for readability
* **Fixed layout** — distribute column widths evenly
* **Reusable tables** — manage tables in a dedicated section and embed anywhere via shortcode
* **Responsive tables** — horizontal scroll for wide tables on small screens

= Usage =

1. Go to **Tables > Add New** in your WordPress dashboard.
2. Set the number of rows and columns, then click **Create Table**.
3. Edit cells, configure settings in the sidebar, and publish.
4. Embed the table using the shortcode shown in the Tables list, or insert the **Advanced Table** block directly into any post or page.

== Installation ==

1. Upload the `advanced-wp-table` directory to `/wp-content/plugins/`
2. Activate the plugin through the Plugins menu in WordPress

== Frequently Asked Questions ==

= How do I embed a table in a post or page? =

Two ways:
1. Use the shortcode `[advanced_wp_table id="123"]` (replace 123 with your table ID).
2. Insert the **Advanced Table** block directly in the block editor.

= Can I reuse the same table across multiple pages? =

Yes. Create the table in **Tables > Add New**, then use the shortcode to embed it anywhere. Editing the table updates it everywhere.

= Can I modify the table output? =

Yes. Use the WordPress `render_block_advanced-wp-table/table` filter to customize the rendered HTML.

= Does it work with classic themes? =

Yes. The shortcode works in any theme. The block editor is used for editing tables regardless of theme type.

= Does it work with the Classic Editor plugin? =

Yes. Advanced WP Table ensures the block editor stays enabled for tables even when the Classic Editor plugin is active.

== Screenshots ==

1. Table setup form — set the number of rows and columns to create a table.
2. Table editor — edit cells with rich text formatting in the block editor.
3. Edit table dropdown — insert, delete, duplicate, and move rows and columns.
4. Column alignment — align column content to start, center, or end.
5. Table settings — configure fixed layout, header, footer, and striped rows.
6. Tables list — manage all tables with shortcode column for easy embedding.
7. Frontend output — a styled table rendered on the frontend.

== Changelog ==

= 2.0.0 (21 April 2026) =

* Complete rebuild using the Gutenberg block editor
* Rich text cell editing with bold, italic, links, images, strikethrough, and code
* Header and footer section support
* Per-column text alignment (left, center, right)
* Table caption support
* Row and column management: insert, delete, duplicate, and move
* Striped rows toggle
* Fixed table layout toggle
* Color, typography, and border customization
* Initial table setup form with row and column count
* Horizontal scroll for wide tables
* RTL language support
* Classic Editor compatibility
* Native WordPress list table for managing tables
* Shortcode column in the tables list

= 1.3.2 =

* Migrate the table data

= 1.3.1 =

* Upgrade freemius to v2.5.8

= 1.3.0 (24 May 2023) =

* Upgrade the npm packages, use basic textarea for the cell content

= 1.2.1 (13 April 2022) =

* Upgrade freemius to v2.4.3

= 1.2.0 (03 April 2020) =

* Fix media upload issue in gutenberg editor following the new way comes in WordPress v5.4
* Re-register shortcode, freeform blocks as in WordPress v5.4 the issues are gone
* Put double quotes in shortcode used in FAQ

= 1.1.0 (01 April 2020) =

* Add compatibility to WordPress 5.4
* Fix shortcode issue, put double quotes between the table id
* Add filter `advanced_wp_table_output` to alter the table markup dynamically
* Add filter `advanced_wp_table_enqueue_scripts` to load scripts dynamically
* Make post type private
* Integrate Freemius
* Blocks registered from other plugins can be used
* Add option to duplicate a table
* Add pagination in table list, update the design, show success, error messages
* Fix duplicate row issue

= 1.0.1 =

* Flush and unflush rewrite rules in plugin activation and deactivation
* Fix cell vertical align design issue
* Add option to clone row
* Wrap table inside unique id

= 1.0.0 (14 March 2020) =

* Initial release.

== Upgrade Notice ==

= 2.0.0 =

Major update: Complete rebuild using the Gutenberg block editor. Tables created in v1.x are not migrated. Please recreate your tables after updating.
