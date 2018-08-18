import React, { Component } from 'react'

import Statistic from './statistic'
import Stats from './stats'
// import Roles from './roles'

import './index.css'

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

		const statisticData = this.getStatisticData(hero)

		const classHero = 'hero'

		return <Item className={classHero}>

				<Item.Image size='small' src={`http://cdn.dota2.com${hero.img}`} />

				<Item.Content verticalAlign='middle'>

					<Item.Header>{hero.localized_name}</Item.Header>

					<Item.Description>

						<Stats primary={hero.primary_attr} />

						<Statistic data={statisticData} />

					</Item.Description>

					<Item.Extra>
						<Button floated='right'>More</Button>
					</Item.Extra>

				</Item.Content>

			</Item>
	}

}
