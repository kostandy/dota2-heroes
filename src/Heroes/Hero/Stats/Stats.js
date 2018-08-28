import React, { Component } from 'react'

import { Image, List } from 'semantic-ui-react'

import agi from './assets/agility.png'
import str from './assets/strength.png'
import int from './assets/intelligence.png'

import './Stats.css'

export default class Stats extends Component {

	constructor (props) {
		super(props)
		this.state = {
			hero: props.data
		}
	}

	getPrimaryClassName = (heroAttr, expectedAttr) => heroAttr === expectedAttr ? 'primary' : null

	render () {

		const { hero } = this.state

		const classAttrIcon = 'attr-icon'
		const classAttrs = 'attributes'
		const getPrimaryClassName = this.getPrimaryClassName

		return <div>

			<List className={classAttrs} verticalAlign='middle'>

				<List.Item>
					<Image className={`${classAttrIcon} ${getPrimaryClassName(hero.primary_attr, 'str')}`} src={str} alt="Base strength"/>
					<List.Content>
						{hero.base_str} <small>+ {hero.str_gain} per level</small>
					</List.Content>
				</List.Item>

				<List.Item>
					<Image className={`${classAttrIcon} ${getPrimaryClassName(hero.primary_attr, 'agi')}`} src={agi} alt="Base agility"/>
					<List.Content>
						{hero.base_agi} <small>+ {hero.agi_gain} per level</small>
					</List.Content>
				</List.Item>

				<List.Item>
					<Image className={`${classAttrIcon} ${getPrimaryClassName(hero.primary_attr, 'int')}`} src={int} alt="Base intelligence"/>
					<List.Content>
						{hero.base_int} <small>+ {hero.int_gain} per level</small>
					</List.Content>
				</List.Item>

			</List>

			<header>
				<small>Base</small>
			</header>

			<hr />

			<List horizontal celled>

				<List.Item>
					<List.Content>
						<List.Header>
							<small>Attack</small>
						</List.Header>
						<small>{`${hero.base_attack_min} - ${hero.base_attack_max}`}</small>
					</List.Content>
				</List.Item>

				<List.Item>
					<List.Content>
						<List.Header>
							<small>Armor</small>
						</List.Header>
						<small>{Math.round((hero.base_armor + hero.base_agi / 6.25) * 100) / 100}</small>
					</List.Content>
				</List.Item>

				<List.Item>
					<List.Content>
						<List.Header>
							<small>Move speed</small>
						</List.Header>
						<small>{hero.move_speed}</small>
					</List.Content>
				</List.Item>

			</List>

		</div>
	}

};
