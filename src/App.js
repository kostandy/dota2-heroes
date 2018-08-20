import React, { Component } from 'react'

import Navbar from './Navbar'
import Status from './Status'
import Heroes from './Heroes'

import './App.css'

class App extends Component {

	render () {

		return <div>

			<Navbar />

			<main>

				<Status />

				<Heroes />

			</main>

		</div>

	}
}

export default App
