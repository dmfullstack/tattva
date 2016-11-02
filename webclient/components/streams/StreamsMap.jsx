import React from 'react';
import ViewStream from './ViewStream.jsx'

export default class StreamsMap extends React.Component {

		render() {

		var iterating = this.props.StreamsData.map(function(StreamsData) {
			return(
				<ViewStream StreamsData={StreamsData} key={StreamsData._id} refresh={this.props.refresh}/>
				);
			console.log(StreamsData);
		}.bind(this));
	return(
		<div>

			{iterating}
		</div>
		);
	}
}
