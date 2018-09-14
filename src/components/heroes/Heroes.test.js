import React from 'react';
import ReactDOM from 'react-dom';
import Heroes from './Heroes';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Heroes />, div);
	ReactDOM.unmountComponentAtNode(div);
});
