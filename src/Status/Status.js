import React, { Component } from 'react'

import { Statistic, Grid, Loader} from 'semantic-ui-react'

import './Status.css'

export default class Status extends Component {

	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			status: {}
		}
	}

	async componentDidMount () {

		try {

			const res = await fetch('https://api.opendota.com/api/status')

			const data = await res.json()

			this.setState({
				isLoaded: true,
				status: data
			})
		} catch (error) {
			this.setState({
				isLoaded: true,
				error
			})
		}
	}

	render() {

		const {error, isLoaded, status} = this.state

		const classStatus = 'status'

		if (error) {

			console.error(error)

		} else {

			return <div className={classStatus}>

				{isLoaded && <Grid textAlign='center' columns={3}>

					<Grid.Column>

						<Statistic>
							<Statistic.Value>{status.user_players}</Statistic.Value>
							<Statistic.Label>User players</Statistic.Label>
						</Statistic>

					</Grid.Column>

					<Grid.Column>

						<Statistic>
							<Statistic.Value>{status.matches_last_day}</Statistic.Value>
							<Statistic.Label>Matches for the last day</Statistic.Label>
						</Statistic>

					</Grid.Column>

					<Grid.Column>

						<Statistic>
							<Statistic.Value>{status.matches_last_hour}</Statistic.Value>
							<Statistic.Label>Matches in the last hour</Statistic.Label>
						</Statistic>

					</Grid.Column>

				</Grid> }

				{ !isLoaded && <Loader active /> }

			</div>
		}
	}

}
