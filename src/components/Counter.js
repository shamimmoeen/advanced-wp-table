import React, { Fragment, useState } from 'react';

const Counter = () => {
	const [ count, setCount ] = useState( 0 );

	const handleIncrement = () => {
		const _count = count + 1;
		setCount( _count );
	};

	const handleDecrement = () => {
		const _count = count - 1;
		setCount( _count < 0 ? 0 : _count );
	};

	return (
		<Fragment>
			<div id="counter">{ count }</div>
			<button
				className={ 'button' }
				id={ 'increment' }
				onClick={ handleIncrement }
			>
				Increment
			</button>
			<button
				className={ 'button' }
				id={ 'decrement' }
				onClick={ handleDecrement }
			>
				Decrement
			</button>
		</Fragment>
	);
};

export default Counter;
