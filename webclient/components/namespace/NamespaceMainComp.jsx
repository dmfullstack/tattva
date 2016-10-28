import React from 'react';
import ViewMap from './ViewMap.jsx';
import $ from 'jquery';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Link} from 'react-router';export default class NamespaceMainComp extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      data2:[],
      open1:true
    };
  }
  handleOpen = () => {
   this.setState({open1: true});
 };
 handleClose = () => {
   this.setState({open1: false});
 };
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
  if (Object.keys(this.state.data2).length==0)
  {
    return(
      <div>
      <Link to="/home">
      <Dialog
      actions={ <Link to="/home"><FlatButton
      label="Ok"
      primary={true}
      onTouchTap={ this.handleClose}
      /></Link>}
      modal={true}
      open={this.state.open1}
      onRequestClose={this.handleClose}
      >
      <h2> You are yet to create a Namespace.
      Create new to continue</h2>
      </Dialog></Link>
      </div>
      );
  }
  else
  {
    return(
      <div>
      <ViewMap data2={this.state.data2} />            
      </div>
      );
  }
}
}