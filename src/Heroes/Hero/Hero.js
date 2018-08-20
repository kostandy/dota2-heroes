import React, { Component } from 'react'

import Statistic from './Statistic'
import Stats from './Stats'
// import Roles from './roles'

import './Hero.css'

import { Button, Item } from 'semantic-ui-react'

export default class Hero extends Component {

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
		const classHeroImage = 'hero-image'
		const classHeroName = 'hero-name'

		return <Item className={classHero}>

			<Item.Image>

				<Item.Image className={classHeroImage} size='small' src={`http://cdn.dota2.com${hero.img}`} />

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
