import React from 'react';
import $ from 'jquery';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import StreamsMap from './StreamsMap.jsx'
import {Link} from 'react-router';

export default class StreamsViewComp extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { StreamsData:[]
      
    };
  }
  refresh = () =>{
       $.ajax({
    type : 'GET',
    url:"/stream/get",
    dataType: 'json',
    success: function(res) {
     console.log(res);
     this.setState({StreamsData: res});
   }.bind(this),
   error: function(err){
     console.log(err);
   }.bind(this)
 });
  };
 componentDidMount = () => {
 	console.log("insadjkasdj");
  $.ajax({
    type : 'GET',
    url:"/stream/get",
    dataType: 'json',
    success: function(res) {
     console.log(res);
     this.setState({StreamsData: res});
   }.bind(this),
   error: function(err){
     console.log(err);
   }.bind(this)
 });
};

render() {
	return (
		<div>
		<center><h1>Available Streams</h1></center>
			<StreamsMap StreamsData={this.state.StreamsData} refresh={this.refresh}/>
		</div>
		);
}
}
