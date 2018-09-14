import React, { Component } from 'react'

import logo from '../../assets/images/logo/logo-full.png'

import styles from './Navbar.css'

export default class Navbar extends Component {

	render() {
		return <nav className={styles.nav}>
			<img src={logo} alt="Dota 2" width="auto" height="65px" className={styles.logo} />
		</nav>
	}

}
