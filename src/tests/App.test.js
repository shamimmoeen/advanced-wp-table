import React from 'react';
import Counter from '../components/Counter';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

describe( 'App Test', () => {
	let wrapper;

	beforeEach( () => {
		wrapper = shallow( <Counter /> );
	} );

	test( 'initial counter value', () => {
		expect( wrapper.find( '#counter' ).text() ).toBe( '0' );
	} );

	test( 'increment button', () => {
		expect( wrapper.find( '#increment' ).text() ).toContain( 'Increment' );
	} );

	test( 'decrement button', () => {
		expect( wrapper.find( '#decrement' ).text() ).toContain( 'Decrement' );
	} );

	test( 'increment counter', () => {
		wrapper.find( '#increment' ).simulate( 'click' );
		expect( wrapper.find( '#counter' ).text() ).toBe( '1' );
	} );

	test( 'decrement counter', () => {
		wrapper.find( '#increment' ).simulate( 'click' );
		wrapper.find( '#decrement' ).simulate( 'click' );
		expect( wrapper.find( '#counter' ).text() ).toBe( '0' );
	} );

	test( 'counter min value', () => {
		wrapper.find( '#increment' ).simulate( 'click' );
		wrapper.find( '#decrement' ).simulate( 'click' );
		wrapper.find( '#decrement' ).simulate( 'click' );
		expect( wrapper.find( '#counter' ).text() ).toBe( '0' );
	} );
} );
