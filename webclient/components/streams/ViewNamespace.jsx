import React from 'react';
import StreamsDialog from './StreamsDialog.jsx';
import $ from 'jquery';

export default class ViewNamespace extends React.Component {
  static get propTypes() {
   return(
   {
      params: React.PropTypes.object.isRequired
   });
 }
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
          if(this.props.params.operations === 'edit')
          {
            return(
              <div>
                <StreamsDialog data2={this.state.data2}
                                operations={this.props.params.operations}
                                stream={this.props.params.stream}/>
              </div>
            );
          }
            return(
            <div>
              <StreamsDialog data2={this.state.data2} />
            </div>
            );
	}
}
