import React from 'react';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import StreamsMap from './StreamsMap.jsx'
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
componentDidMount = () =>
{
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
 var obj = Object.keys(this.state.StreamsData).length;
 if (Object.keys(this.state.StreamsData).length==0)
 {
  return(
    <div>
    <center>
       <div style={{marginTop:"200px"}}><h2 >You are yet to create a stream...</h2>
          <h3>Start with creating one...</h3>
          <Link to="/createstream"><RaisedButton label="Create" buttonStyle={{backgroundColor:"#5CA59F"}}/></Link>
       </div>
    </center>
    </div>
    );
 }
else{
    return (
        <div>
          <Subheader style={{background:"#DB8C90",fontSize:'28px',color:'white',marginTop:'1px',marginLeft:'-7px'}}>Streams</Subheader>
            <Link to="/createstream">
            <FloatingActionButton mini={true} disabled={true} style={{float:"right",marginRight:"20px",marginTop:"-45px"}}>
              <ContentAdd />
            </FloatingActionButton>
            </Link>
          <StreamsMap StreamsData={this.state.StreamsData} refresh={this.refresh}/>
        </div>
        );
 }
}
}