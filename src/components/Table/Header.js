import React, { useEffect, useRef, useState } from 'react';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import TableToolbar from './Toolbar';

const Header = () => {
	const [ elmClass, setElmClass ] = useState( '' );
	const headerRef = useRef( null );

	let lastScroll = 0;

	/* istanbul ignore next */
	const handleScroll = () => {
		// @todo I am not sure why removeEventLister not working in the useEffect hook
		if ( null === headerRef.current ) {
			window.removeEventListener( 'scroll', () => handleScroll, false );
			return;
		}

		const currentScroll = window.pageYOffset;

		if ( 0 === currentScroll ) {
			setElmClass( '' );
			return;
		}

		if ( currentScroll > lastScroll && elmClass !== 'no-sticky' ) {
			setElmClass( 'no-sticky' );
		} else if ( currentScroll < lastScroll && elmClass !== 'sticky' ) {
			setElmClass( 'sticky' );
		}

		lastScroll = currentScroll;
	};

	/* istanbul ignore next */
	useEffect( () => {
		window.addEventListener( 'scroll', handleScroll );

		return () => {
			window.removeEventListener( 'scroll', () => handleScroll );
		};
	}, [] );

	let elmClasses = 'advanced-wp-table-fixed-header';

	/* istanbul ignore next */
	if ( elmClass ) {
		elmClasses = `advanced-wp-table-fixed-header ${ elmClass }`;
	}

	const cellToolbar = 'advanced-wp-table-cell-toolbar';

	return (
		<div className={ 'advanced-wp-table-fixed-header-wrapper' }>
			<div className={ `${ elmClasses }` } ref={ headerRef }>
				<HeaderLeft />
				<HeaderMiddle />
				<TableToolbar />
				<div id={ cellToolbar } className={ cellToolbar } />
				<HeaderRight />
			</div>
		</div>
	);
};

export default Header;
