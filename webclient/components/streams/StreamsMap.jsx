import React from 'react';
import ViewStream from './ViewStream.jsx';

export default class StreamsMap extends React.Component {
	static get propTypes() {
		return(
			{
				StreamsData: React.PropTypes.object.isRequired,
				refresh: React.PropTypes.string.isRequired
			}
			);
		}
		render() {
		let iterating = this.props.StreamsData.map(function(StreamsData) {
			return(
				<ViewStream StreamsData={StreamsData} key={StreamsData._id} refresh={this.props.refresh}/>
				);
			}.bind(this));
		return(
		<div>
			{iterating}
		</div>
		);
	}
}
