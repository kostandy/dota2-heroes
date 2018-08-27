import React, { Component } from 'react'

import { Container, Grid } from 'semantic-ui-react'

import './Footer.css'

export default class Footer extends Component {

	constructor (props) {
		super(props)

	}

	render () {

		const classMainFooter = 'main-footer'

		return <footer className={classMainFooter}>
			<Container>
				<Grid>
					<Grid.Column floated='left' width={5}>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Grid.Column>
					<Grid.Column floated='right' width={5}>
						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
					</Grid.Column>
				</Grid>
			</Container>
		</footer>
	}

};
