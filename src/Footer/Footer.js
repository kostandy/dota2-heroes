import React, { Component } from 'react'

import { Container, Grid, Loader, Dimmer, Comment} from 'semantic-ui-react'

import './Footer.css'

export default class Footer extends Component {

	constructor (props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			author: null
		}
	}

	async componentDidMount () {

		const author = 'Kostandy'

		try {

			const res = await fetch(`https://api.github.com/users/${author}`)

			let data = await res.json()

			this.setState({
				isLoaded: true,
				author: data
			})
		} catch (error) {
			this.setState({
				isLoaded: true,
				error
			})
		}
	}

	render () {

		const {error, isLoaded, author} = this.state

		const classMainFooter = 'main-footer'

		if (error) {

			console.error(error)

		} else {

			return <footer className={classMainFooter}>

				<Container>

					{isLoaded && <Grid>
							<Grid.Column floated='left' width={5}>

								<Comment.Group>
									<Comment>
										<Comment.Avatar src={author.avatar_url} size='small'/>
										<Comment.Content>
											Created by &nbsp;
											<Comment.Author as='a' href={`https://github.com/${author.login}`} target="_blank"
											                title={author.login}>
												{author.login}
											</Comment.Author>
											<Comment.Text>
												Thank you for visit ;)
											</Comment.Text>
										</Comment.Content>
									</Comment>
								</Comment.Group>

							</Grid.Column>

							<Grid.Column floated='right' align="right" width={5}>
								Powered by <a href="https://netlify.com" target="_blank" title="Netlify">Netlify</a>
							</Grid.Column>

						</Grid>
					}

					{!isLoaded && <Dimmer active>
							<Loader />
						</Dimmer>
					}

				</Container>

			</footer>

		}
	}

};
