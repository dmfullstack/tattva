import React from 'react';
import MoreNamespace from './MoreNamespace.jsx';

export default class ViewMap extends React.Component {
	
	render() {

		var mapping = this.props.data2.map(function(data2) {
			return(
				<MoreNamespace data2={data2} key={data2._id}/>
				);
			console.log(data2);
		}.bind(this));
	return(
		<div>

			{mapping}
		</div>
		);
	}
}
