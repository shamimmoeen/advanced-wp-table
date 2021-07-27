import React, { useRef } from 'react';
import './resize-table.scss';

const useResizableTable = () => {
	let thRef = useRef( '' );
	let resizerRef = useRef('');

	let thElm;
	let startOffset;

	const handleOnMouseDown = ( e ) => {
		thRef = e.target.parentNode;
		resizerRef = e.target;

		console.log( 'handleOnMouseDown' );

		// thElm = th;
		// startOffset = th.offsetWidth - e.pageX;

		resizerRef.addEventListener( 'mousemove', handleMouseMove );
		resizerRef.addEventListener( 'mouseup', handleMouseUp );

		return false;
	}

	const handleMouseMove = () => {
		console.log( 'handleMouseMove' );
	}

	const handleMouseUp = () => {
		console.log( 'remove all event' );
		resizerRef.removeEventListener( 'mousemove', handleMouseMove );
		resizerRef.removeEventListener( 'mouseup', handleMouseUp );
	}

	const resizer = ( i, j ) => {
		if ( i === 0 ) {
			return <div
				role={ 'none' }
				className={ 'resize-handle' }
				onMouseDown={ ( e ) => handleOnMouseDown( e ) }
			/>;
		}
	};

	return [ resizer ];
}

export default useResizableTable;
