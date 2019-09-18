import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../js/Components/Search';

test(`checking the option's colors`, () => {
	const container = document.createElement('div');
	ReactDOM.render(<Search />, container);
	const options = container.querySelectorAll('option');
	const optionsArr = Array.from(options).map((option) => option.value);
	//console.log(optionsArr);
	expect(optionsArr).toContain('');
	expect(optionsArr).toContain('White');
	expect(optionsArr).toContain('Red');
	expect(optionsArr).toContain('Black');
	expect(optionsArr).toContain('Green');
	expect(optionsArr).toContain('Purple');
});
