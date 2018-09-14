import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

export default class hero extends Component {

	constructor(params) {
		super(params)
		this.state = {
			id: params.match.params.id
		}
	}

	render () {

		const { id } = this.state

		const classMainContainer = 'main-container'

		return <Container className={classMainContainer}>
			<h1>{ id }</h1>
		</Container>
	}

}
