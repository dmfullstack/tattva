import React from 'react';
import AddNamespace from './AddNamespace.jsx';

export default class TextfieldsMap extends React.Component {
	static get propTypes() {
    return(
    {
      data3: React.PropTypes.array.isRequired,
      removeTextField: React.PropTypes.string.isRequired,
      changeAliasTextField: React.PropTypes.string.isRequired,
      changeNameTextField: React.PropTypes.string.isRequired,
      changeSampleTextField: React.PropTypes.string.isRequired
    });
  }
	render() {
		let index = 0;
		let populatingFields = this.props.data3.map(function(field) {
		return(
				<AddNamespace position={index ++}
                              value={field}
                              key={field.id}
                              remove={this.props.removeTextField}
                              changeAliasTextField={this.props.changeAliasTextField}
                              changeNameTextField={this.props.changeNameTextField}
                              changeSampleTextField={this.props.changeSampleTextField}/>);
                }.bind(this));
		return(
			<div>
				{populatingFields}
			</div>
			);
	}
}
