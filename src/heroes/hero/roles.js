import React, { Component } from 'react'

import { List } from 'semantic-ui-react'

import './preview.css'

export default class roles extends Component {

	constructor (props) {
		super(props)
		this.state = {
			roles: props.data
		}
	}

	render () {

		const { roles } = this.state

		const heroRoles = 'hero-roles'

		return (
			<div className={heroRoles}>

				<b>Roles:</b>

				<List horizontal>
					{
						roles.map((role, i) => (
							<List.Item key={i}>
								{role}
							</List.Item>
						))
					}
				</List>

			</div>
		)
	}

};
