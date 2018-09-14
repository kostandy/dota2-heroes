import React, { Component } from 'react'

import Statistic from './Statistic'
import Stats from './Stats'
// import Roles from './roles'

import './Hero.css'

import { Responsive, Button, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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

				<Item.Image className={classHeroImage} size='small' src={`https://cdn.steamstatic.com${hero.img}`} />

				<div className={classHeroName}>{hero.localized_name}</div>

				<Stats data={hero} />

			</Item.Image>

			<Item.Content>

				<Item.Description>

					<Responsive minWidth={768} style={{display: 'inline'}}>

						<Statistic data={statisticData} />

					</Responsive>

					<Link to={`/hero/${hero.id}`}>
						<Button inverted basic floated='right' size='mini'>
							More
						</Button>
					</Link>

				</Item.Description>

			</Item.Content>

		</Item>
	}

}
