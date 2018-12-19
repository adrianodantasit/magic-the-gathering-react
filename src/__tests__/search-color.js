import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../js/Components/Search'

test('checking test', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Search />, container);
    expect(container.textContent).toMatch("Pick a color: White Blue Black Red Green");
})