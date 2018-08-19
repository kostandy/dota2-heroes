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
		return Object.keys(hero)
		.filter(key => key.match(new RegExp(`\\d_pick`)))
		.map((key, i) => ({
			y: hero[key],
			x: i,
			winrate: hero[key.replace('_pick', '_win')]
		}))
	}

	render () {

		const { hero } = this.state

		const statisticData = this.getStatisticData(hero)

		const classHero = 'hero'
		const classHeroName = 'hero-name'

		return <Item className={classHero}>

				<Item.Image>

					<Item.Image size='small' src={`http://cdn.dota2.com${hero.img}`} />

					<div className={classHeroName}>{hero.localized_name}</div>

					<Stats data={hero} />

				</Item.Image>

				<Item.Content>

					<Item.Description>

						<Statistic data={statisticData} />

						<Button disabled floated='right'>More</Button>

					</Item.Description>

				</Item.Content>

			</Item>
	}

}
