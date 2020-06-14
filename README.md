# Advanced WP Table #

![alt text](https://github.com/shamimmoeen/advanced-wp-table-pro/blob/develop/github/screenshot-1.png)

An easy to use plugin to create tables in WordPress.

## Description ##

**Advanced WP Table**, an easy to use plugin to create tables in WordPress. You can show the tables in posts, pages, widgets by using the shortcode.

It is fully developer friendly. Developers can alter the table markup easily using hooks to suit the design they want.

**NOTE: Advanced WP Table plugin requires WordPress version 5.0 or greater.**

## Usage ##

After installing the plugin you should see a new menu in wordpress dashboard called **Tables**. You can manage your tables from there.

## Features ##

* Easily add rows and columns
* Draggable rows and columns
* Gutenberg editor
* Shortcode to show the tables anywhere
* Made using react

## Installation ##

1. Upload `advanced-wp-table` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

## Frequently Asked Questions ##

### Can I modify the output of table markup? ###

Yes, you can. There is a hook `advanced_wp_table_output`.

### How can I show the table? ###

You need to use shortcode. As an example, `[advanced_wp_table id="1"]`. You should replace the id value to the table id.

## Screenshots ##

## Changelog ##

### 1.2.0 ###

* Fix media upload issue in gutenberg editor following the new way comes in WordPress v5.4.
* Re-register shortcode, freeform blocks as in WordPress v5.4 the issues are gone.
* Put double quotes in shortcode used in FAQ.

### 1.1.0 ###

* Add compatibility to WordPress 5.4.
* Fix shortcode issue, put double quotes between the table id.
* Add filter `advanced_wp_table_output` to alter the table markup dynamically.
* Add filter `advanced_wp_table_enqueue_scripts` to load scripts dynamically.
* Make post type private.
* Integrate Freemius.
* Blocks registered form other plugins can be used.
* Add option to duplicate a table.
* Add pagination in table list, update the design, show success, error messages.
* Fix duplicate row issue.

### 1.0.1 ###

* Flush and unflash rewrite rules in plugin activation and deactivation.
* Fix cell vertical align design issue.
* Add option to clone row.
* Wrap table inside unique id.

### 1.0.0 ###

* Initial release.

## Upgrade Notice ##
