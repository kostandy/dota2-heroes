import React, { Component } from 'react'

import { List } from 'semantic-ui-react'

import './Roles.css'

export default class Roles extends Component {

	constructor (props) {
		super(props)
		this.state = {
			roles: props.data
		}
	}

	render () {

		const { roles } = this.state

		const heroRoles = 'Hero-roles'

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
