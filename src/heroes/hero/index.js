import React, { Component } from 'react'

import Statistic from './statistic'
// import Roles from './roles'

import { Button, Item } from 'semantic-ui-react'

export default class hero extends Component {

	constructor (props) {
		super(props)
		this.state = {
			hero: props.data
		}
	}

	getStatisticData(hero) {
		return Object.keys(hero).filter(key => key.match(/\d_pick/)).map((key, i) => ({y: hero[key], x: i}))
	}

	render () {

		const { hero } = this.state

		return <Item>

				<Item.Image size='small' src={`http://cdn.dota2.com${hero.img}`} />

				<Item.Content verticalAlign='middle'>

					<Item.Header>{hero.localized_name}</Item.Header>

					<Item.Description>

						<Statistic data={this.getStatisticData(hero)} />

					</Item.Description>

					<Item.Extra>
						<Button floated='right'>More</Button>
					</Item.Extra>

				</Item.Content>

			</Item>
	}

}
