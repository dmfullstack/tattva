import React from 'react';

import {StreamsDialog,AddStreams} from '../../components/streams';

//This is a view layout, hence avoid putting any business logic
export default class StreamsView extends React.Component {
	render () {
		return (
			<div>
			<StreamsDialog ></StreamsDialog>
			<AddStreams></AddStreams>
			</div>);
	}
}