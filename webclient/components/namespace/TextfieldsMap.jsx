import React from 'react';
import AddNamespace from './AddNamespace.jsx';

export default class TextfieldsMap extends React.Component {
	
	render() {
		var index = 0;
        var populatingFields=this.props.data3.map(function(field){
        	
        	return(
        		<AddNamespace position={index++} value={field} key={index} remove={this.props.removeTextField} changeAliasTextField={this.props.changeAliasTextField}/>);
		}.bind(this));
	return(
		<div>
			{populatingFields}
		</div>
		);
	}
}
