import React, { Component } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import main from './Page'
import Hero from './Page/Hero'

import './App.css'

import { Route } from 'react-router-dom'

export default class App extends Component {

	render () {

		return <div style={{paddingTop: '90px'}}>

			<Navbar />

			<Route path='/' exact component={main} />

			<Route path='/hero/:id' component={Hero} />

			{/*<Redirect to='/' />*/}

			<Footer />

		</div>

	}
}
