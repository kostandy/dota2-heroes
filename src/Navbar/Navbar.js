import React, { Component } from 'react'

import logo from './assets/logo-full.png'

import './Navbar.css'

export default class Navbar extends Component {

	render() {

		const classLogo = 'logo'

		return <nav>
			<img src={logo} alt="Dota 2" width="auto" height="65px" className={classLogo} />
		</nav>
	}

}
