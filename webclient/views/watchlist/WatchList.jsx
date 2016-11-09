import React from 'react';
import {CreateWatchList, AddWatchList} from '../../components/watchList';
export default class WatchList extends React.Component {
	render () {
		return (
			<div>
			<CreateWatchList/>
			<AddWatchList/>
			</div>);
	}
}