import React from 'react';
import MoreNamespace from './MoreNamespace.jsx';

export default class ViewMap extends React.Component {
	
	render() {
		var mapping = this.props.data.map(function(data) {
			return(
				<MoreNamespace data={data} key={data._id}/>
				);
		}.bind(this));
	return(
		<div>
			{mapping}
		</div>
		);
	}
}
