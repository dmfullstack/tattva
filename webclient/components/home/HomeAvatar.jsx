import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Link} from 'react-router';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
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
      open:false,openStream:false,insert:false,data:[]
    };
  }
  componentDidMount = () => {
           $.ajax({
           type : 'GET',
           url:"http://localhost:8081/namespace/get",
           dataType: 'json',
           cache: false,
           success: function(data2) {
            console.log("got");
                    this.setState({data2: data2});
                }.bind(this),
           error: function(err){
            console.log("error");
      }
     });
     console.log("didmount");
  };
   // namespace functions for dialog box
  // handleOpen = () => {
  //   this.setState({open: true});
  // };
  // handleClose = () => {
  //   this.setState({open: false});
  // };
  viewmore = () =>{
      this.setState({insert:true});
  };
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
  adding = (e) =>
  {
      $.ajax({
      type: 'POST',
      url:"http://localhost:8081/namespace/post",
      dataType: 'json',
      data: e,
      cache: false,
      success:function(data){
              console.log("done");
            }.bind(this)
       });
  };
  viewAll = () =>
  {
     $.ajax({
        type : 'GET',
        url:"http://localhost:8081/namespace/get",
        dataType: 'json',
        cache: false,
        success: function(data) {
                      this.setState({data: data});
                  }.bind(this),
        error: function(err){
          console.log("error");
        }
     });
  };   
  render() {
    // calling ViewMap component
    var view;
    if(this.state.insert){
      view=<ViewMap data={this.state.data}/>;
    }
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
                <CardTitle title="Total Number of NameSpace" />
                <CardActions>
                <Link to="/createnamespace">
                <IconButton tooltip="Create NameSpace" onTouchTap={this.handleOpen} iconStyle={styles.mediumIcon} style={{marginRight:'20px'}}>
                <Create/>
                </IconButton>
                </Link>
                <Link to="/viewnamespace">
                <IconButton tooltip="View NameSpace" onTouchTap={this.viewmore} onClick={this.viewAll} iconStyle={styles.mediumIcon} style={{marginLeft:'50px'}}>
                <ViewList/>
                </IconButton>
                </Link>
                </CardActions>
              </Card>
  {/*namespace card ends */}
           </div>
         {/* <NamespaceDialog  open={this.state.open} close={this.handleClose} name={this.adding}/>}

  specifying streams column*/}         
           <div className="col-xs-3.5">
  {/*streams card starts */}         
            <Card style={styles.card}>
              <CardHeader
                title="Streams" style={styleHeader} titleStyle={{fontSize:"30px",color:"#FFFFFF"}}/>
                <CardMedia>
                <img src='https://static1.squarespace.com/static/537a1f91e4b0ccfe943c6bc6/t/57c5e078b8a79bb8cb6e67bb/1472585859733/' style={{height:'220px',width:'5px'}}/>
                </CardMedia>
                <CardTitle title="Total Number of Streams" />
                <CardActions>
                <Link to="/createstream">
                <IconButton tooltip="Create Stream" onTouchTap={this.handleOpenStream} iconStyle={styles.mediumIcon} style={{marginRight:'20px'}}>
                <Create/>
                </IconButton>
                </Link>
                <Link to="/stream" >
                <IconButton tooltip="View Streams" onTouchTap={this.viewstream} iconStyle={styles.mediumIcon} style={{marginLeft:'50px'}}>
                <ViewList/>
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
              <CardTitle title="Total Number of WatchLists" />
              <CardActions>
              <Link to="/createwatch"><IconButton tooltip="Create Watchlist" iconStyle={styles.mediumIcon} style={{marginRight:'20px'}}>
              <Create/>
              </IconButton></Link>
              <Link to="/watchList"><IconButton tooltip="View WatchLists" iconStyle={styles.mediumIcon} style={{marginLeft:'50px'}}>
              <ViewList/>
              </IconButton>
              </Link>
              </CardActions>
            </Card>
  {/*watchlist card ends */}
          </div>
  {/*calling Morenamespace component */}
          <div>
            {view}
          </div>
        </div>
  {/*div for rows ends*/}
      </div>
  {/*div container starts*/}
  </center>
    );
  }
}
