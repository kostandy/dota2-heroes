import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

import Status from '../components/status/index'

import Heroes from '../components/heroes/index'

export default class main extends Component {

	render () {

		return <Container>

			<Status />

			<Heroes />

		</Container>
	}

}
