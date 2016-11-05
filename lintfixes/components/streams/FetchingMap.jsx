import React from 'react';
import AddStreams from './AddStreams.jsx';

export default class FetchingMap extends React.Component {
		render() {
			console.log('fffffffffffff');
		let iterating = this.props.queryCriteria.map(function(fetchedCriteria) {
			return(
				<AddStreams fetchedCriteria={fetchedCriteria} key={fetchedCriteria._id} selectedValue={this.props.selectedValue}/>
				);
			console.log('Zxcsasammm', fetchedCriteria);
			}.bind(this));
		return(
		<div>
			{iterating}
		</div>
		);
	}
}
