import React from 'react';

import {AddStream,CreateStream,StreamDrawer} from '../../components/streams';

//This is a view layout, hence avoid putting any business logic
export default class Streams extends React.Component {
	render () {
		return (
			<div>
			<AddStream ></AddStream>
			<CreateStreams></CreateStreams>
			<StreamDrawer></StreamDrawer>
			</div>);
	}
}