! ( function( e ) {
	const t = {}; function n( r ) {
		if ( t[ r ] ) {
			return t[ r ].exports;
		} const o = t[ r ] = { i: r, l: ! 1, exports: {} }; return e[ r ].call( o.exports, o, o.exports, n ), o.l = ! 0, o.exports;
	}n.m = e, n.c = t, n.d = function( e, t, r ) {
		n.o( e, t ) || Object.defineProperty( e, t, { enumerable: ! 0, get: r } );
	}, n.r = function( e ) {
		'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, { value: 'Module' } ), Object.defineProperty( e, '__esModule', { value: ! 0 } );
	}, n.t = function( e, t ) {
		if ( 1 & t && ( e = n( e ) ), 8 & t ) {
			return e;
		} if ( 4 & t && 'object' === typeof e && e && e.__esModule ) {
			return e;
		} const r = Object.create( null ); if ( n.r( r ), Object.defineProperty( r, 'default', { enumerable: ! 0, value: e } ), 2 & t && 'string' !== typeof e ) {
			for ( const o in e ) {
				n.d( r, o, function( t ) {
					return e[ t ];
				}.bind( null, o ) );
			}
		} return r;
	}, n.n = function( e ) {
		const t = e && e.__esModule ? function() {
			return e.default;
		} : function() {
			return e;
		}; return n.d( t, 'a', t ), t;
	}, n.o = function( e, t ) {
		return Object.prototype.hasOwnProperty.call( e, t );
	}, n.p = '', n( n.s = 3 );
}( [ function( e, t ) {
	! ( function() {
		e.exports = this.wp.element;
	}() );
}, function( e, t, n ) {
	'use strict'; const r = n( 2 ),
		o = n.n( r ),
		c = n( 0 ),
		u = wp.element.useState; t.a = function() {
		const e = u( 0 ),
			t = o()( e, 2 ),
			n = t[ 0 ],
			r = t[ 1 ]; return Object( c.createElement )( 'div', null, Object( c.createElement )( 'h1', null, 'Finally I could sort it out!!' ), Object( c.createElement )( 'h2', null, n, ' Votes' ), Object( c.createElement )( 'p', null, Object( c.createElement )( 'button', { onClick() {
			r( n + 1 );
		} }, 'Vote' ) ) );
	};
}, function( e, t, n ) {
	const r = n( 5 ),
		o = n( 6 ),
		c = n( 7 ); e.exports = function( e, t ) {
		return r( e ) || o( e, t ) || c();
	};
}, function( e, t, n ) {
	'use strict'; n.r( t ), function( e ) {
		const t = n( 0 ),
			r = n( 1 ),
			o = wp.element.render; n.p = 'http://localhost:8083/'; document.getElementById( 'react-root' ) && o( Object( t.createElement )( ( function() {
			return Object( t.createElement )( 'div', { id: 'react-practise' }, Object( t.createElement )( r.a, null ) );
		} ), null ), document.getElementById( 'react-root' ) ), e && e.hot && e.hot.accept();
	}.call( this, n( 4 )( e ) );
}, function( e, t ) {
	e.exports = function( e ) {
		if ( ! e.webpackPolyfill ) {
			var t = Object.create( e ); t.children || ( t.children = [] ), Object.defineProperty( t, 'loaded', { enumerable: ! 0, get() {
				return t.l;
			} } ), Object.defineProperty( t, 'id', { enumerable: ! 0, get() {
				return t.i;
			} } ), Object.defineProperty( t, 'exports', { enumerable: ! 0 } ), t.webpackPolyfill = 1;
		} return t;
	};
}, function( e, t ) {
	e.exports = function( e ) {
		if ( Array.isArray( e ) ) {
			return e;
		}
	};
}, function( e, t ) {
	e.exports = function( e, t ) {
		if ( Symbol.iterator in Object( e ) || '[object Arguments]' === Object.prototype.toString.call( e ) ) {
			let n = [],
				r = ! 0,
				o = ! 1,
				c = void 0; try {
				for ( var u, l = e[ Symbol.iterator ](); ! ( r = ( u = l.next() ).done ) && ( n.push( u.value ), ! t || n.length !== t ); r = ! 0 ) {

				}
			} catch ( e ) {
				o = ! 0, c = e;
			} finally {
				try {
					r || null == l.return || l.return();
				} finally {
					if ( o ) {
						throw c;
					}
				}
			} return n;
		}
	};
}, function( e, t ) {
	e.exports = function() {
		throw new TypeError( 'Invalid attempt to destructure non-iterable instance' );
	};
} ] ) );
