import React, { Component } from 'react';
import Navbar from './navbar';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	async componentDidMount() {

		try {

			const res = await fetch('https://api.opendota.com/api/heroes')

			const data = await res.json();

			this.setState({
				isLoaded: true,
				items: data
			});

		} catch (error) {
			this.setState({
				isLoaded: true,
				error
			});
		}
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (

				<div>

					<Navbar />

					<main>
						Result:
						<ul>
							{items && items.length && items.map(item => (
								<li key={item.id}>
									{item.localized_name}
								</li>
							))}
						</ul>
					</main>

				</div>
			);
		}
	}
}

export default App;
