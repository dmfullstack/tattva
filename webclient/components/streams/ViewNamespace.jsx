import React from 'react';
import StreamsDialog from './StreamsDialog.jsx';
import $ from 'jquery';

export default class ViewNamespace extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data2:[]
		};
	}
	  componentDidMount = () => {
           $.ajax({
           type : 'GET',
           url:"http://localhost:8081/namespace/get",
           dataType: 'json',
           success: function(res) {
            console.log(res);
                    this.setState({data2: res});
                }.bind(this),
           error: function(err){
            console.log(err);
      		}.bind(this)
     });
  };
	render() {

		
	return(
		<div>
			<StreamsDialog data2={this.state.data2} />
			
		</div>
		);
	}
}
