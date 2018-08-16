import React, { Component } from 'react'

import Hero from './hero'

import { Grid } from 'react-flexbox-grid'

import './index.css'

export default class Heroes extends Component {

	constructor(props) {
		super(props)
		this.state = {
			heroes: props.data
		}
	}

	render() {

		const { heroes } = this.state

		const heroesClass = 'heroes'

		return <Grid className={heroesClass}>

			{heroes.map((hero, i) => <Hero data={hero} key={i} />)}

		</Grid>
	}

}
