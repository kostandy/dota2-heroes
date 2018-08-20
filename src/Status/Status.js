import React, { Component } from 'react'

import Loader from '../common/Loader'

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

		} else if (isLoaded) {

			return <div className={classStatus}>

				<p>User players: {status.user_players}</p>

				<p>Matches for the last day: {status.matches_last_day}</p>

				<p>Matches in the last hour: {status.matches_last_hour}</p>

			</div>

		} else if (!isLoaded) {

			return <Loader />

		}
	}

}
