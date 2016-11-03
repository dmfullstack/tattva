import React from 'react';
import ViewMap from './ViewMap.jsx';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class NamespaceMainComp extends React.Component {  
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

RecallNamespace = () =>{
  this.setState({data2: []});
   $.ajax({
      type : 'GET',
      url:"http://localhost:8081/namespace/get",
      dataType: 'json',
      success: function(res) {
       
       this.setState({data2: res});
      }.bind(this),
      error: function(err){
       console.log(err);
      }.bind(this)
    });
};
componentDidMount = () => {
  console.log("view namespace");
  $.ajax({
     type : 'GET',
     url:"http://localhost:8081/namespace/get",
     dataType: 'json',
     success: function(res) { 
     this.setState({data2: res});
     }.bind(this),
    error: function(err){
     console.log(err);
    }.bind(this)
  });
};
render() {
        var obj = Object.keys(this.state.data2).length;
        if (Object.keys(this.state.data2).length==0)
        {
         return(
           <div>
              <center>
                <div style={{marginTop:"200px"}}><h2 >You are yet to create a namespace...</h2>
                  <h3>Namespace defines the format or schema of data generated at Data Source</h3>
                  <Link to="/createnamespace/create/new/id"><RaisedButton label="Create" /></Link>
                </div>
              </center>
           </div>
           );
        }
        else
        {
         return(
           <div>
             <Subheader style={{background:"#BA6694",fontSize:'28px',color:'white',marginTop:'1px',marginLeft:'-7px'}}>NameSpace</Subheader>
             <Link to="/createnamespace/create/new/id">
             <FloatingActionButton onClick={this.addTextField} mini={true} disabled={true} style={{float:"right",marginTop:'-45px',marginRight:'20px'}}>
                   <ContentAdd/>
              </FloatingActionButton>
             </Link>
              <ViewMap data2={this.state.data2} DeleteNameSpace={this.RecallNamespace} UpdateNameSpace={this.RecallNamespace} />            
           </div>
           );
        }
    }
}