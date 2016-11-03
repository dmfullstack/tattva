import React from 'react';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import StreamsMap from './StreamsMap.jsx'
import {Link} from 'react-router';
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
          <Link to="/createstream"><RaisedButton label="Create" buttonStyle={{backgroundColor:"#66BB6A "}}/></Link>
       </div>
    </center>
    </div>
    );
 }
else{
    return (
        <div>
         <center>
       <h1>Available Streams</h1>
     </center>
       <Link to="/createstream">
             <FloatingActionButton mini={true} iconClassName="Create" style={{float:"right",marginRight:"100px",marginTop:"-50px"}}>
               <ContentAdd />
             </FloatingActionButton>
       </Link>
             <StreamsMap StreamsData={this.state.StreamsData} refresh={this.refresh}/>
        </div>
        );
 }
}
}