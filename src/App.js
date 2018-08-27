import React, { Component } from 'react'

import { Container } from 'semantic-ui-react'

import Navbar from './Navbar'
import Status from './Status'
import Heroes from './Heroes'
import Footer from './Footer'

import './App.css'

class App extends Component {

	render () {

		const classMainContainer = 'main-container'

		return <div>

			<Navbar />

			<Container className={classMainContainer}>

				<Status />

				<Heroes />

			</Container>

			<Footer />

		</div>

	}
}

export default App
