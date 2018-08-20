import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import './Preview.css'

export default class Preview extends Component {

	constructor (props) {
		super(props)
		this.state = {
			src: `http://cdn.dota2.com${props.src}`,
			description: props.description
		}
	}

	render () {

		const { src, description } = this.state

		const heroPreview = 'Hero-preview'
		const heroName = 'Hero-name'

		return <div className={heroPreview}>

			<Image
				src={src}
				height={150}
				width='auto'
				title={description}
				alt={description}
			/>

			<p className={heroName}>{description}</p>

		</div>

	}

}
