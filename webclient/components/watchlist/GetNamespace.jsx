import React from 'react';
import CreateWatchList from './CreateWatchList.jsx';
import $ from 'jquery';

export default class GetNamespace extends React.Component {
constructor(props) {
		super(props);
		this.state = {
			data2: []
		};
}
componentDidMount = () => {
        $.ajax({
           type: 'GET',
           url: 'http://localhost:8081/namespace/get',
           dataType: 'json',
           success: function(res) {
                    this.setState({data2: res});
                }.bind(this),
           error: function(err) {
            this.setState({data2: err});
          }
      });
};
render() {
            return(
            <div>
              <CreateWatchList data2={this.state.data2} />
            </div>
          );
	}
}
