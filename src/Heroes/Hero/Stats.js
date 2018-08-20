import React, { Component } from 'react'

import { Image, List } from 'semantic-ui-react'

import agi from './Icons/agility.png'
import str from './Icons/strength.png'
import int from './Icons/intelligence.png'

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
		const getPrimaryClassName = this.getPrimaryClassName

		// TODO: Add more stats

		return <List verticalAlign='middle'>

			<List.Item>
				<Image
					className={`${classAttrIcon} ${getPrimaryClassName(hero.primary_attr, 'str')}`}
					src={str} alt="Base strength"/>
				<List.Content>{hero.base_str}</List.Content>
			</List.Item>

			<List.Item>
				<Image className={`${classAttrIcon} ${getPrimaryClassName(hero.primary_attr, 'agi')}`} src={agi} alt="Base agility"/>
				<List.Content>{hero.base_agi}</List.Content>
			</List.Item>

			<List.Item>
				<Image className={`${classAttrIcon} ${getPrimaryClassName(hero.primary_attr, 'int')}`} src={int} alt="Base intelligence"/>
				<List.Content>{hero.base_int}</List.Content>
			</List.Item>

		</List>
	}

};
