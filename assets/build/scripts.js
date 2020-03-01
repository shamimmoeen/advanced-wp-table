( function ( wp ) {
	window._wpLoadBlockEditor = new Promise( function ( resolve ) {
		wp.domReady( function () {
			resolve( wp.editPost.initializeEditor( 'react-root' ) );
		} );
	} );
} )( window.wp );
