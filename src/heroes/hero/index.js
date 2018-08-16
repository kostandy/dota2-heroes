import React, { Component } from 'react'

import Preview from './preview'
import Statistic from './statistic'
import Roles from './roles'

import { Col, Row } from 'react-flexbox-grid'
import { Button } from 'semantic-ui-react'

export default class hero extends Component {

	constructor (props) {
		super(props)
		this.state = {
			hero: props.data
		}
	}

	getStatisticData(hero) {
		Object.keys(hero).map(key =>
			key.indexOf('_pick') && hero[key])
	}

	render () {

		const { hero } = this.state

		const heroClass = 'hero'

		return (

			<Row className={heroClass} key={hero.id} middle="xs">

				<Col xs={2}>

					<Preview src={hero.img} description={hero.localized_name} />

				</Col>

				<Col xs>

					<Statistic data={this.getStatisticData(hero)} />

				</Col>

				<Col xs>

					<Roles data={hero.roles}/>

				</Col>

				<Col>
					<Button>Details</Button>
				</Col>

			</Row>
		)
	}

}
