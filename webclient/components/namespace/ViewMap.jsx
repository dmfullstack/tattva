import React from 'react';
import MoreNamespace from './MoreNamespace.jsx';

export default class ViewMap extends React.Component {
	static get propTypes() {
    return(
    {
      data2: React.PropTypes.array.isRequired,
      DeleteNameSpace: React.PropTypes.string.isRequired,
      UpdateNameSpace: React.PropTypes.string.isRequired
    });
  }
	render() {
		let mapping = this.props.data2.map(function(data2) {
			return(
				<MoreNamespace data2={data2}
                               key={data2._id}
                               DeleteNameSpace={this.props.DeleteNameSpace}
                               UpdateNameSpace={this.props.UpdateNameSpace}/>
				);
		}.bind(this));
	return(
		<div>
           {mapping}
		</div>
		);
	}
}
