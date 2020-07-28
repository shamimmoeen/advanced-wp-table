<?php

class ActivateTest extends Advanced_WP_Table_TestCase {

	public function testPostTypeExists() {
		$this->assertTrue( post_type_exists( 'advanced-wp-table' ) );
	}

}
