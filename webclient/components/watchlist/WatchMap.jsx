import React from 'react';
import ViewWatchList from './ViewWatchList.jsx';

export default class WatchMap extends React.Component {
	static get propTypes() {
		return(
			{
				WatchData: React.PropTypes.object.isRequired			}
		);
	}
		render() {
		let iterating = this.props.WatchData.map(function(WatchData) {
			return(
				<ViewWatchList WatchData={WatchData} key={WatchData._id} />
				);
			}.bind(this));
		return(
		<div>
			{iterating}
		</div>
		);
	}
}
