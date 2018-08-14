import React, { Component } from 'react';
import Navbar from './navbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
		const hero = 'hero';
		const heroPreview = 'hero-preview';
		const heroName = 'hero-name'
		const heroRoles = 'hero-roles';

		if (error) {
			return <pre>Error: {error.message}</pre>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (

				<div>

					<Navbar />

					<main>

						<Grid className={heroes}>

							{items.map((item, itemIndex) => (

								<Row className={hero} key={itemIndex}>

									<Col xs={2}>
										<div className={heroPreview}>
											<img src={images[itemIndex]} alt={item.localized_name} width="100%" height="auto" />
											<p className={heroName}>{item.localized_name}</p>
										</div>
									</Col>

									<Col xs={4}>
										<b>Roles:</b>
										<br />
										<Row middle="xs">
											{
												item.roles.map((role, roleIndex) => (
													<Col xs key={roleIndex}>
														{role}
													</Col>
												))
											}
										</Row>
									</Col>

								</Row>

							))}

						</Grid>

					</main>

				</div>
			);
		}
	}
}

export default App;
