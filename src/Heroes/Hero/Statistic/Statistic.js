import React, { Component } from 'react'

import { Statistic } from 'semantic-ui-react'
import { Hint, LineMarkSeries, XYPlot } from 'react-vis/es/index'

import 'react-vis/dist/style.css'
import './Statistic.css'

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

		const classHint = 'hint'

		return <Statistic inverted>

			<Statistic.Value>

				<XYPlot
					width={175}
					height={80}>
					<LineMarkSeries
						onValueMouseOver={this._rememberValue}
						onValueMouseOut={this._forgetValue}
						data={data}/>
					{value ? <Hint value={value} className={classHint} align={{horizontal: 'auto', vertical: 'bottom'}}>
						<b>{value.x + 1} Pick</b>
						<p>{value.y} times</p>
						<b>Winrate by position</b>
						<p>{Number(value.winrate / value.y * 100).toFixed(2)} %</p>
					</Hint> : null}
				</XYPlot>

			</Statistic.Value>

			<Statistic.Label>
				Recent queue of pick
			</Statistic.Label>

		</Statistic>
	}

}
