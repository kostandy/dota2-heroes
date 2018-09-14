import React, { Component } from 'react'

import Navbar from './components/navbar'
import Footer from './components/footer'

import main from './layouts/Main'
import Hero from './layouts/Hero'

import './App.css'

import { Route } from 'react-router-dom'

export default class App extends Component {

	render () {

		return <div style={{paddingTop: '90px'}}>

			<Navbar />

			<Route path='/' exact component={main} />

			<Route path='/hero/:name' component={Hero} />

			{/*<Redirect to='/' />*/}

			<Footer />

		</div>

	}
}
