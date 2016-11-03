import React from 'react';
import EditStream from './EditStream.jsx'

export default class FetchingMap extends React.Component {
		render() {
		var iterating = this.props.fetchedStream.map(function(fetchedStream) {
			return(
				<EditStream fetchedStream={fetchedStream} key={fetchedStream._id} />
				);
			console.log("Zxcsasa",fetchedStream);
			}.bind(this));
		return(
		<div>
			{iterating}
		</div>
		);
	}
}
