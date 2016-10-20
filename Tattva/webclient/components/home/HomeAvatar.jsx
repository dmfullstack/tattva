import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
import StreamsDialog from '../streams/StreamsDialog.jsx';
import WatchListDialog from '../watchlist/WatchListDialog.jsx';
import MoreNamespace from '../namespace/MoreNamespace.jsx';
const styles=
{
 card:{
        margin:"10px", 
        width:"350px",
        height:"450px"
      },
   ca:{
        marginLeft:"20px"
      },
   ca1:{
        marginLeft:"45px"
      }
};
const styleHeader={background:"#009688",fontWeight:"bold",textAlign:"center"};
export default class HomeAvatar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     open:false,openStream:false,openWatch:false,insert:false
   };
 }
 handleOpen = () => {
   this.setState({open: true});
 };
 handleOpenStream =() =>
 {
   this.setState({openStream:true});
 };
 handleClose = () => {
   this.setState({open: false});
 };
 handleCloseStream = () => {
   this.setState({openStream: false});
 };
 handleOpenWatch =() =>{
   this.setState({openWatch: true});
 };
 handleCloseWatch =() =>{
   this.setState({openWatch: false});
 };
 viewmore = () =>{
     this.setState({insert:true});
 };
 render() {
   var view;
   if(this.state.insert){
     view=<MoreNamespace/>;
   }
   return (
   <center>
     <div className="container" style={{display:"flex"}}>
 <div className="row">
   <div className="col-xs-3.5">
     <Card style={styles.card}> 
        <CardHeader title="NameSpace" style={styleHeader} titleStyle={{fontSize:"30px"}} />
        <CardMedia>
          <img src='https://visualstudiomagazine.com/~/media/ECG/visualstudiomagazine/Images/IntroImages2016/0616vsm_pvogelPTypeScript.jpg' style={{height:'220px',width:'5px'}}/>
        </CardMedia>
             <CardTitle title="Total Number of NameSpace" />
             <CardText >
               
             </CardText>
             <CardActions>
               <FlatButton label="Create NameSpace" labelStyle={{fontSize:'12.5px'}} onTouchTap={this.handleOpen} />
               <FlatButton label="View NameSpace" labelStyle={{fontSize:'12.5px'}} onTouchTap={this.viewmore}/>
             </CardActions>
           </Card>
        </div>
           <NamespaceDialog  open={this.state.open} close={this.handleClose}/>
                <div className="col-xs-3.5">
           <Card style={styles.card}>
             <CardHeader
               title="Streams" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
                <CardMedia>
          <img src='https://static1.squarespace.com/static/537a1f91e4b0ccfe943c6bc6/t/57c5e078b8a79bb8cb6e67bb/1472585859733/' style={{height:'220px',width:'5px'}}/>

         </CardMedia>
             <CardTitle title="Total Number of Streams" />
             <CardText >
             </CardText>
             <CardActions>
               <FlatButton label="Create Stream" onTouchTap={this.handleOpenStream}/>&emsp;
               <FlatButton label="View Streams" />
             </CardActions>
           </Card>
         </div>
            <StreamsDialog openStream={this.state.openStream} closeStream={this.handleCloseStream} />
           <div className="col-xs-3.5">
           <Card style={styles.card}>
            <CardHeader
               title="Watch Lists" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
                <CardMedia
      
      >
          <img src='http://blog.stata.com/wp-content/uploads/2014/03/ChangeMeans.gif' style={{height:'220px',width:'5px'}}/>
    </CardMedia>
             <CardTitle title="Total Number of WatchLists" />
             <CardText >
             </CardText>
             <CardActions>
               <FlatButton label="Create WatchList" labelStyle={{fontSize:'12.5px'}} onTouchTap={this.handleOpenWatch}/>
               <FlatButton label="View  WatchLists" labelStyle={{fontSize:'12.5px'}}/>
             </CardActions>
           </Card>
           </div>
         
           <WatchListDialog openWatch={this.state.openWatch} closeWatch={this.handleCloseWatch} />
          
           <div>
           {view}
           </div>
           </div>
           </div>
           </center>
          
       );
 }
}