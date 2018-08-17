// React
import React, { Component } from 'react'

// Components
import Navbar from './navbar/navbar'
import Heroes from './heroes/index'
import Loader from './common/loader/index'

// Styles
import './App.css'

class App extends Component {

	constructor (props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		}
	}

	async componentDidMount () {

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

	render () {
		const {error, isLoaded, items} = this.state

		return error ? console.error(error) : <div>

			<Navbar/>

			<main>

				{isLoaded && <Heroes data={items} /> }

				{!isLoaded && <Loader/>}

			</main>

		</div>

	}
}

export default App
