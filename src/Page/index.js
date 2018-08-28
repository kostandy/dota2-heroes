import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

import Status from '../Status'

import Heroes from '../Heroes'

export default class main extends Component {

	render () {

		return <Container>

			<Status />

			<Heroes />

		</Container>
	}

}
