import React from 'react';
import AddStreams from './AddStreams.jsx';

export default class FetchingMap extends React.Component {
	static get propTypes() {
	return(
		{
			queryCrit: React.PropTypes.object.isRequired,
			selectedValue: React.PropTypes.string.isRequired,
			remove: React.PropTypes.string.isRequired,
			handleOperators: React.PropTypes.string.isRequired,
			handleFields: React.PropTypes.string.isRequired,
			handleValue: React.PropTypes.string.isRequired,
			operations: React.PropTypes.string.isRequired
			});
		}
	render() {
		let iterating = this.props.queryCrit.map(function(fetchedCriteria, index) {
	return(
		<AddStreams fetchedCriteria={fetchedCriteria}
			key={fetchedCriteria._id}
			selectedValue={this.props.selectedValue}
			index={index}	remove={this.props.remove}
			handleOperators={this.props.handleOperators}
			handleFields={this.props.handleFields}
			remove={this.props.remove}
			handleValue={this.props.handleValue}
			operations={this.props.operations}/>
			);
		}.bind(this));
	return(
		<div>
			{iterating}
		</div>
		);
	}
}
