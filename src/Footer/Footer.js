import React, { Component } from 'react'

import { Container, Grid, Comment} from 'semantic-ui-react'

import './Footer.css'

export default class Footer extends Component {

	render () {

		const classMainFooter = 'footer'

		return <footer className={classMainFooter}>

			<Container>

				<Grid verticalAlign='middle' columns={2}>

					<Grid.Column>

						<Comment.Group>

							<Comment>

								<Comment.Avatar src="https://avatars2.githubusercontent.com/u/12787555?v=4" size='small'/>

								<Comment.Content>

									Created by &nbsp;

									<Comment.Author as='a' href='https://github.com/Kostandy' target="_blank" rel="noopener noreferrer"
									                title="Kostandy">Kostandy</Comment.Author>

									<Comment.Text>
										Thank you for visit ;)
									</Comment.Text>

								</Comment.Content>

							</Comment>

						</Comment.Group>

					</Grid.Column>

					<Grid.Column align="right" width={8}>
						Powered by <a href="https://netlify.com" target="_blank" rel="noopener noreferrer"
						              title="Netlify">Netlify</a>
					</Grid.Column>

				</Grid>

			</Container>

		</footer>

	}

};
