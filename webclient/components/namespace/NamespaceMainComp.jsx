import React from 'react';
import ViewMap from './ViewMap.jsx';
import $ from 'jquery';

export default class NamespaceMainComp extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data2:[]
		};
	}
	  componentDidMount = () => {
	  	console.log("didmount");
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
     console.log("didmount");
  };
	render() {

		
	return(
		<div>
			<ViewMap data2={this.state.data2} />
			
		</div>
		);
	}
}
