import React, { Component } from 'react'

import { Dimmer, Loader as UILoader } from 'semantic-ui-react'

export default class Loader extends Component {

	render() {
		return <Dimmer active>
			<UILoader />
		</Dimmer>
	}

}
