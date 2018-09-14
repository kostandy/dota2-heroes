import React, { Component } from 'react'

import { Container, Grid, Label, Image } from 'semantic-ui-react'

import './Footer.css'

export default class Footer extends Component {

	render () {

		const classMainFooter = 'footer'

		return <footer className={classMainFooter}>

			<Container>

				<Grid verticalAlign='middle' columns={2}>

					<Grid.Column>

						<Label as='a' href='https://github.com/Kostandy' target="_blank" rel="noopener noreferrer"
						       title="Kostandy" color="grey">
							<Image avatar spaced='right' src='https://avatars2.githubusercontent.com/u/12787555?v=4' />
							Kostandy
						</Label>

					</Grid.Column>

					<Grid.Column align="right" width={8}>

						<Label as='a' href='https://netlify.com' target="_blank" rel="noopener noreferrer"
						       title="Netlify" color="grey">
							<Image avatar spaced='right' src='https://www.netlify.com/img/press/logos/logomark.png' />
							Powered by <b>Netlify</b>
						</Label>

					</Grid.Column>

				</Grid>

			</Container>

		</footer>

	}

};
