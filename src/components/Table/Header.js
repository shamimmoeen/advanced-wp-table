import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';

const Header = ( props, ref ) => {
	const [ elmClass, setElmClass ] = useState( '' );
	const headerRef = useRef( null );

	const { visibleEditorToolbar } = useSelector( state => state.table );
	const [ classNames, setClassNames ] = useState( [ 'advanced-wp-table-fixed-header-wrapper' ] );

	useEffect( () => {
		let newClassNames;

		if ( visibleEditorToolbar ) {
			newClassNames = [ ...classNames, 'editor-toolbar-active' ];
		} else {
			newClassNames = classNames.filter( item => item !== 'editor-toolbar-active' );
		}

		setClassNames( newClassNames );
	}, [ visibleEditorToolbar ] );

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

	const wrapperClasses = classNames.join( ' ' );

	let elmClasses = 'advanced-wp-table-fixed-header';

	/* istanbul ignore next */
	if ( elmClass ) {
		elmClasses = `advanced-wp-table-fixed-header ${ elmClass }`;
	}

	return (
		<div className={ wrapperClasses }>
			<div className={ elmClasses } ref={ headerRef }>
				<HeaderLeft ref={ ref } />
				<HeaderMiddle />
				<HeaderRight />
			</div>
		</div>
	);
};

export default forwardRef( Header );
