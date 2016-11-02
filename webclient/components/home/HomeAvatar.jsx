import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router';
import StreamsDialog from '../streams/StreamsDialog.jsx';
import ViewMap from '../namespace/ViewMap.jsx';
import $ from 'jquery';
import {ViewWatchList} from '../watchlist/ViewWatchList.jsx';
import ViewStream from '../streams/ViewStream.jsx';
import IconButton from 'material-ui/IconButton';
import Create from 'material-ui/svg-icons/content/create';
import ViewList from 'material-ui/svg-icons/action/view-list';
import WatchListDialog from '../watchlist/WatchListDialog.jsx';
import ViewNamespace from '../streams/ViewNamespace.jsx';

const styles=
{
card:{
      margin:"10px", 
      width:"350px",
      height:"450px"
    },
mediumIcon:{
  width:36,
  height:36
}
};
const styleHeader={background:"#66BB6A"};
export default class HomeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,openStream:false,insert:false,data:[],num:false,num2:false,streams:[]
    };
  }
componentDidMount = () => {
  
  $.ajax({
    type : 'GET',
    url:"http://localhost:8081/namespace/get",
    dataType: 'json',
    success: function(res) {

     this.setState({data2: res});
     this.setState({num: true});
   }.bind(this),
   error: function(err){
     console.log(err);
   }.bind(this)
 });

    $.ajax({
    type : 'GET',
    url:"http://localhost:8081/stream/get",
    dataType: 'json',
    success: function(res) {

     this.setState({streams: res});
     this.setState({num2: true});
   }.bind(this),
   error: function(err){
     console.log(err);
   }.bind(this)
 });
   
};
   // namespace functions for dialog box
  // handleOpen = () => {

  //   this.setState({open: true});
  // };
  // handleClose = () => {
  //   this.setState({open: false});
  // };
  // viewmore = () =>{
  //     this.setState({insert:true});
  // };
  // streams functions for dialog box
  handleOpenStream =() =>
  {
    this.setState({openStream:true});
  };
  handleCloseStream = () => {
    this.setState({openStream: false});
  };
  viewstream = () =>{
      this.setState({insert:false});
  };

  
  render() {
      var obj=this.state.num? Object.keys(this.state.data2).length:null;
       console.log("obj",obj);
       var obj2= this.state.num2? Object.keys(this.state.streams).length:null;
    // calling ViewMap component
    return (
      <center>
  { /*div container starts*/}
      <div className="container" style={{display:"flex"}}>
  {/*div for rows starts*/}
        <div className="row">
  {/*specifying namespace column*/}    
           <div className="col-xs-3.5">
  {/*namespace card starts */}
              <Card style={styles.card}>
                <CardHeader
                title="NameSpace" style={styleHeader} titleStyle={{fontSize:"30px",color:"#FFFFFF"}}/>
                <CardMedia >
                <img src='http://www.marvelitech.com/images/web-data-mining-services/data%20and%20web%20mining%20services%20dallas.gif' style={{height:'220px',width:'5px'}}/>
                </CardMedia>
                <CardTitle title="Total Number of NameSpace" subtitle={obj} subtitleStyle={{fontSize:'25px'}}/>
                
                <CardActions style={{background:"#EEEEEE"}}>
                <Link to="/createnamespace">
                <IconButton tooltip="Create NameSpace" onTouchTap={this.handleOpen} iconStyle={styles.mediumIcon} style={{marginRight:'20px'}}>
                <Create color={"#666"}/>
                </IconButton>
                </Link>
                <Link to="/viewnamespace">
                <IconButton tooltip="View NameSpace" onTouchTap={this.viewmore} onClick={this.viewAll} iconStyle={styles.mediumIcon} style={{marginLeft:'50px'}}>
                <ViewList color={"#666"}/>
                </IconButton>
                </Link>
                </CardActions>
              </Card>
  {/*namespace card ends */}
           </div>
   

  {/*specifying streams column*/}         
           <div className="col-xs-3.5">
  {/*streams card starts */}         
            <Card style={styles.card}>
              <CardHeader
                title="Streams" style={styleHeader} titleStyle={{fontSize:"30px",color:"#FFFFFF"}}/>
                <CardMedia>
                <img src='https://static1.squarespace.com/static/537a1f91e4b0ccfe943c6bc6/t/57c5e078b8a79bb8cb6e67bb/1472585859733/' style={{height:'220px',width:'5px'}}/>
                </CardMedia>
                <CardTitle title="Total Number of Streams" subtitle={obj2} subtitleStyle={{fontSize:'25px'}}/>
                <CardActions style={{background:"#EEEEEE"}}>
                <Link to="/createstream">
                <IconButton tooltip="Create Stream" onTouchTap={this.handleOpenStream} iconStyle={styles.mediumIcon} style={{marginRight:'20px'}}>
                <Create color={"#666"}/>
                </IconButton>
                </Link>
                <Link to="/stream" >
                <IconButton tooltip="View Streams" onTouchTap={this.viewstream} iconStyle={styles.mediumIcon} style={{marginLeft:'50px'}}>
                <ViewList color={"#666"}/>
                </IconButton></Link>
                </CardActions>
            </Card>
  {/*streams card ends */}          
          </div>
           {/* {this.state.openStream ? <StreamsDialog openStream={this.state.openStream} data2={this.state.data2} closeStream={this.handleCloseStream} />: null}  

specifying watchlists column*/}          
          <div className="col-xs-3.5">
  {/*watchlist card starts */}
            <Card style={styles.card}>
              <CardHeader
               title="WatchLists" style={styleHeader} titleStyle={{fontSize:"30px",color:"#FFFFFF"}}/>
              <CardMedia>
              <img src='http://blog.stata.com/wp-content/uploads/2014/03/ChangeMeans.gif' style={{height:'220px',width:'5px'}}/>
              </CardMedia>
              <CardTitle title="Total Number of WatchLists" subtitle='`' subtitleStyle={{fontSize:'25px'}}/>
              <CardActions style={{background:"#EEEEEE"}}>
              <Link to="/createwatch"><IconButton tooltip="Create Watchlist" iconStyle={styles.mediumIcon} style={{marginRight:'20px'}}>
              <Create color={"#666"}/>
              </IconButton></Link>
              <Link to="/watchList"><IconButton tooltip="View WatchLists" iconStyle={styles.mediumIcon} style={{marginLeft:'50px'}}>
              <ViewList color={"#666"}/>
              </IconButton>
              </Link>
              </CardActions>
            </Card>
  {/*watchlist card ends */}
          </div>
  {/*calling Morenamespace component */}
          <div>
       
          </div>
        </div>
  {/*div for rows ends*/}
      </div>
  {/*div container starts*/}
  </center>
    );
  }
}
