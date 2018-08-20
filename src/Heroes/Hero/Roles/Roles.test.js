import React from 'react';
import ReactDOM from 'react-dom';
import Roles from './Roles';

it('Renders with mock data without crashing', () => {
	const div = document.createElement('div');
	const data = [
		'Carry',
		'Support',
		'Nuker',
		'Disabler',
		'Jungler',
		'Durable',
		'Escape',
		'Pusher',
		'Initiator'
	];
	ReactDOM.render(<Roles data={data}/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
