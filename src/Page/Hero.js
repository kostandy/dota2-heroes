import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

export default class hero extends Component {

	constructor(params) {
		super(params)
		this.state = {
			name: params.match.params.name
		}
	}

	render () {

		const { name } = this.state

		const classMainContainer = 'main-container'

		return <Container className={classMainContainer}>
			<h1>{ name }</h1>
		</Container>
	}

}
