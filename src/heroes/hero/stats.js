import React, { Component } from 'react'

import { Image } from 'semantic-ui-react'

import agi from './attributes/agility.png'
import str from './attributes/strenght.png'
import int from './attributes/intelligence.png'

import './stats.css'

export default class stats extends Component {

	constructor (props) {
		super(props)
		this.state = {
			primaryAttr: props.primary
		}
	}

	getAttrIcon = name => name === 'agi' ? agi : name === 'str' ? str : int

	render () {

		const { primaryAttr } = this.state

		const url = this.getAttrIcon(primaryAttr)

		const classAttrIcon = 'attr-icon'

		// TODO: Add more stats

		return <div>

			<Image className={classAttrIcon} src={url} alt={primaryAttr}/>

		</div>
	}

};
