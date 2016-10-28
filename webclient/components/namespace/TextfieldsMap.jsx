import React from 'react';
import AddNamespace from './AddNamespace.jsx';

export default class TextfieldsMap extends React.Component {
	
	render() {
		var populatingFields=this.props.data3.map(function(field, index){

			return(
				<AddNamespace position={index} value={field} key={field.id} remove={this.props.removeTextField} changeAliasTextField={this.props.changeAliasTextField} changeNameTextField={this.props.changeNameTextField} changeSampleTextField={this.props.changeSampleTextField}/>);
		}.bind(this));
		return(
			<div>
			{populatingFields}
			</div>
			);
	}
}
