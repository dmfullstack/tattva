import React from 'react';
import $ from 'jquery';
import FetchingMap from './FetchingMap.jsx';
import EditStream from './EditStream.jsx';


export default class FetchingStreams extends React.Component {
constructor(props) {
   super(props);
   this.state = { fetchedStream: [], namespace: ''
   };
}
componentDidMount = () => {
			console.log(this.props.params.stream);
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/stream/get/' + this.props.params.stream,
        dataType: 'json',
        success: function(res) {
          console.log('response inside FetchingStreams', res.namespace);
          this.setState({namespace: res.namespace});
        }.bind(this),
        error: function(err) {
          console.log('error', err);
        }
     });
};
render() {
	return (
		<h1 />
		);
}

}
