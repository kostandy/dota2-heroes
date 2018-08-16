import React, { Component } from 'react'

import { Statistic } from 'semantic-ui-react'
import { Hint, LineMarkSeries, XYPlot } from 'react-vis/es/index'

import 'react-vis/dist/style.css'

export default class statistic extends Component {

	constructor (props) {
		super(props)
		this.state = {
			data: props.data,
			value: null
		}
		this._rememberValue = this._rememberValue.bind(this)
		this._forgetValue = this._forgetValue.bind(this)
	}

	_rememberValue(value) {
		this.setState({value})
	}

	_forgetValue() {
		this.setState({
			value: null
		})
	}

	render () {

		const { data, value } = this.state

		return <Statistic inverted>

			<Statistic.Value>

				<XYPlot
					width={250}
					height={100}>
					<LineMarkSeries
						onValueMouseOver={this._rememberValue}
						onValueMouseOut={this._forgetValue}
						data={data}/>
					{value ? <Hint value={value}/> : null}
				</XYPlot>

			</Statistic.Value>

			<Statistic.Label>
				Pick's
			</Statistic.Label>

		</Statistic>
	}

}
