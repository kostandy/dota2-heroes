import React, { Component } from 'react'

import { Statistic, Loader} from 'semantic-ui-react'

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

				{isLoaded && <Statistic.Group widths='3' inverted size='small'>

						<Statistic value={status.user_players} label="User players" />

						<Statistic value={status.matches_last_day} label="Matches for the last day" />

						<Statistic value={status.matches_last_hour} label="Matches in the last hour" />

					</Statistic.Group>

				}

				{ !isLoaded && <Loader active /> }

			</div>
		}
	}

}
