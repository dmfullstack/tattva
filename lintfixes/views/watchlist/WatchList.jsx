import React from 'react';

import {WatchListDialog, AddWatchList} from '../../components/watchList';

// This is a view layout, hence avoid putting any business logic
export default class WatchList extends React.Component {
	render () {
		return (
			<div>
			<WatchListDialog/>
			<AddWatchList/>
			</div>);
	}
}
