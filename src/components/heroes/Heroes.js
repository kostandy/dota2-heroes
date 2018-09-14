import React, { Component } from 'react'

import Hero from '../hero/index'

import { Item, Loader, Dimmer } from 'semantic-ui-react'

import './Heroes.css'

export default class Heroes extends Component {

	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			heroes: []
		}
	}

	async componentDidMount () {

		try {

			const res = await fetch('https://api.opendota.com/api/heroStats')

			let data = await res.json()

			this.setState({
				isLoaded: true,
				heroes: data.sort((a, b) => {
					var keyA = String(a.localized_name),
						keyB = String(b.localized_name)
					if (keyA < keyB) return -1
					if (keyA > keyB) return 1
					return 0
				})
			})
		} catch (error) {
			this.setState({
				isLoaded: true,
				error
			})
		}
	}

	render() {

		const {error, isLoaded, heroes} = this.state

		const classItemLoader = 'item-loader'

		if (error) {

			console.error(error)

		} else {

			return <Item.Group relaxed style={{'position': 'relative'}}>

				{isLoaded && heroes.map((hero, i) => <Hero data={hero} key={i}/>)}

				{!isLoaded && <Item className={classItemLoader}>
					<Dimmer active>
						<Loader />
					</Dimmer>
				</Item>
				}

			</Item.Group>

		}
	}

}
