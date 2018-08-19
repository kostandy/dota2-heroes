import React, { Component } from 'react'

import logo from './logo-full.png'

import './navbar.css'

class Navbar extends Component {

	render() {

		const classLogo = 'logo'

		return <nav>
			<img src={logo} alt="Dota 2" width="auto" height="65px" className={classLogo} />
		</nav>
	}

}

export default Navbar
