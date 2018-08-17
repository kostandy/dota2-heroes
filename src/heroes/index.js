import React, { Component } from 'react'

import Hero from './hero'

import { Item } from 'semantic-ui-react'

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

		return <Item.Group relaxed>

			{heroes.map((hero, i) => <Hero data={hero} key={i} />)}

		</Item.Group>
	}

}
