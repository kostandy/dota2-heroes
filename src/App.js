import React, { Component } from 'react';
import Navbar from './navbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button, List, Image, Statistic} from 'semantic-ui-react'
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	LineMarkSeries,
	Hint
} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
			value: null
		};
		this._rememberValue = this._rememberValue.bind(this);
		this._forgetValue = this._forgetValue.bind(this);
	}

	async componentDidMount() {

		try {

			const res = await fetch('https://api.opendota.com/api/heroStats')

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

	_rememberValue(value) {
		this.setState({value});
	}

	_forgetValue() {
		this.setState({
			value: null
		});
	}

	render() {
		const { error, isLoaded, items, value } = this.state;

		const heroes = 'heroes';
		const hero = 'hero';
		const heroPreview = 'hero-preview';
		const heroName = 'hero-name'
		const heroRoles = 'hero-roles';

		const data = [
			{x: 0, y: 8},
			{x: 1, y: 5},
			{x: 2, y: 4},
			{x: 3, y: 9},
			{x: 4, y: 1},
			{x: 5, y: 7},
			{x: 6, y: 6},
			{x: 7, y: 3},
			{x: 8, y: 2},
			{x: 9, y: 0}
		];

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

								<Row className={hero} key={itemIndex} middle="xs">

									<Col xs={2}>

										<div className={heroPreview}>

											<Image
												src={`http://cdn.dota2.com${item.img}`}
												size='medium'
												title={item.localized_name}
												alt={item.localized_name}
											/>

											<p className={heroName}>{item.localized_name}</p>

										</div>

									</Col>

									<Col xs>

										<Statistic inverted>

											<Statistic.Value>

												<XYPlot
													width={250}
													height={100}>
													<LineMarkSeries
														onValueMouseOver={this._rememberValue}
														onValueMouseOut={this._forgetValue}
														data={data}/>
													{ value ? <Hint value={value} /> : null }
												</XYPlot>

											</Statistic.Value>

											<Statistic.Label>
												Pick's
											</Statistic.Label>

										</Statistic>

									</Col>

									<Col xs>
										<div className={heroRoles}>

											<b>Roles:</b>

											<List horizontal>
												{
													item.roles.map((role, roleIndex) => (
														<List.Item key={roleIndex}>
															{role}
														</List.Item>
													))
												}
											</List>

										</div>
									</Col>

									<Col>
										<Button>Details</Button>
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
