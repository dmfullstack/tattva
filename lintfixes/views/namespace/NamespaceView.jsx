import React from 'react';

import {NamespaceDialog, AddNamespace} from '../../components/namespace';

// This is a view layout, hence avoid putting any business logic
export default class NamespaceView extends React.Component {
	render () {
		return (
			<div>
			<NamespaceDialog/>
			<AddNamespace/>
			</div>);
	}
}
