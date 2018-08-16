import React, { Component } from 'react';
import logo from './logo.png';
import './navbar.css';

class Navbar extends Component {

	render() {
		return <nav>
			<img src={logo} alt="Dota 2" width="75px" height="auto" />
		</nav>
	}

}

export default Navbar;
