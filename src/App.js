// React
import React, { Component } from 'react'

// Components
import Navbar from './navbar/navbar'
import Heroes from './heroes/index'

// Styles
import './App.css'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		}
	}

	async componentDidMount() {

		try {

			const res = await fetch('https://api.opendota.com/api/heroStats')

			const data = await res.json()

			this.setState({
				isLoaded: true,
				items: data.sort((a, b) => {
					var keyA = a.localized_name,
							keyB = b.localized_name
					if (keyA < keyB) return -1
					if (keyA > keyB) return 1
					return 0
				})
			})
		} catch (error) {
			this.setState({
				isLoaded: true,
				error
			})
		}
	}

	render() {
		const { error, isLoaded, items } = this.state

		if (error) {

			return <pre>Error: {error.message}</pre>

		} else if (!isLoaded) {

			return <div>Loading...</div>

		} else {

			return (
				<div>
					<Navbar />
					<main>
						<Heroes data={items} />
					</main>
				</div>
			)

		}
	}
}

export default App
