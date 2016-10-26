import React from 'react';
import AddNamespace from './AddNamespace.jsx';

export default class TextfieldsMap extends React.Component {
	
	render() {
        var populatingFields=this.props.data3.map(function(field){
        	
        	return(
        		<AddNamespace value={field} key={field.name}/>);
		}.bind(this));
	return(
		<div>
			{populatingFields}
		</div>
		);
	}
}
