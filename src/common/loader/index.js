import React, { Component } from 'react'

import { Dimmer, Loader } from 'semantic-ui-react'

export default class loader extends Component {

	render() {
		return <Dimmer active>
			<Loader/>
		</Dimmer>
	}

}
