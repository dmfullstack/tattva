import React from 'react';
import AddStreams from './AddStreams.jsx'

export default class FetchingMap extends React.Component {
		render() {
			
		var index=0;
		var iterating = this.props.queryCrit.map(function(fetchedCriteria) {
			return(
				<AddStreams fetchedCriteria={fetchedCriteria} key={fetchedCriteria._id} selectedValue={this.props.selectedValue} 
							index={index++}	remove={this.props.remove} handleOperators={this.props.handleOperators} handleFields={this.props.handleFields} 
							remove={this.props.remove}	handleValue={this.props.handleValue} operations={this.props.operations}/>
				);
			
			}.bind(this));
		return(
		<div>
			{iterating}
		</div>
		);
	}
}
