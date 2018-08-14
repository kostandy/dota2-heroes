import React, { Component } from 'react';
import Navbar from './navbar';
import './App.css';

const importAllHeroImages = r => r.keys().map(r);

const images = importAllHeroImages(require.context('./icon/heroes', false, /\.png$/));

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
				items: data.sort((a, b) => {
					var keyA = a.localized_name,
							keyB = b.localized_name;
					if (keyA < keyB) return -1;
					if (keyA > keyB) return 1;
					return 0;
				})
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

		const heroes = 'heroes';
		const heroPreview = 'hero-preview';
		const heroName = 'hero-name'
		const heroRoles = 'hero-roles';

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (

				<div>

					<Navbar />

					<main>
						<ul className={heroes}>
							{items.map((item, i) => (
								<li key={item.id}>
									<div className={heroPreview}>
										<img src={images[i]} alt={item.localized_name} width={240} height={136} />
										<p className={heroName}>{item.localized_name}</p>
									</div>
									<div className={heroRoles}>
										<ul>
											{item.roles.map((role, i) => ( <li key={i}>{role}</li> )) }
										</ul>
									</div>
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
