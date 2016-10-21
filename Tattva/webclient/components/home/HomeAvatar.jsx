import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
import StreamsDialog from '../streams/StreamsDialog.jsx';
import WatchListDialog from '../watchlist/WatchListDialog.jsx';
import ViewMap from '../namespace/ViewMap.jsx';
import $ from 'jquery';

const styles=
{
card:{
      margin:"10px", 
      width:"350px",
      height:"450px"
    },
 // ca:{
 //      marginLeft:"20px"
 //    },
 // ca1:{
 //      marginLeft:"45px"
 //    }
};
const styleHeader={background:"#009688 ",fontWeight:"bold",textAlign:"center"};
export default class HomeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,openStream:false,openWatch:false,insert:false,data:[]
    };
  }
   // namespace functions for dialog box
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
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
  // watchlist functions for dialog box
  handleOpenWatch =() =>{
    this.setState({openWatch: true});
  };
  handleCloseWatch =() =>{
    this.setState({openWatch: false});
  };
  viewstream = () =>{
      this.setState({insert:false});
  };
  //  ajax call for creating namespace
  adding = (e) =>
  {
      $.ajax({
      type: 'POST',
      url:"http://localhost:3001/namespace/",
      dataType: 'json',
      data: e,
            cache: false,
            success:function(){
              console.log("done");
            }.bind(this)
       });
    };
  //  ajax call for viewing namespace
  viewAll = () =>
  {
     $.ajax({
       type : 'GET',
       url:"http://localhost:3001/namespace/",
      dataType: 'jsonp',
      cache: false,
      success: function(data) {
                    this.setState({data: data});
                }.bind(this)
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
                title="NameSpace" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
                <CardMedia >
                <img src='https://visualstudiomagazine.com/~/media/ECG/visualstudiomagazine/Images/IntroImages2016/0616vsm_pvogelPTypeScript.jpg' style={{height:'220px',width:'5px'}}/>
                </CardMedia>
                <CardTitle title="Total Number of NameSpace" />
                <CardActions>
                <FlatButton label="Create NameSpace" labelStyle={{fontSize:'12.5px'}} onTouchTap={this.handleOpen} />
                <FlatButton label="View NameSpace" labelStyle={{fontSize:'12.5px'}} onTouchTap={this.viewmore} onClick={this.viewAll}/>
                </CardActions>
              </Card>
  {/*namespace card ends */}
           </div>
           <NamespaceDialog  open={this.state.open} close={this.handleClose} name={this.adding}/>
  {/*specifying streams column*/}         
           <div className="col-xs-3.5">
  {/*streams card starts */}         
            <Card style={styles.card}>
              <CardHeader
                title="Streams" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
                <CardMedia>
                <img src='https://static1.squarespace.com/static/537a1f91e4b0ccfe943c6bc6/t/57c5e078b8a79bb8cb6e67bb/1472585859733/' style={{height:'220px',width:'5px'}}/>
                </CardMedia>
                <CardTitle title="Total Number of Streams" />
                <CardActions>
                <FlatButton label="Create Stream" onTouchTap={this.handleOpenStream}/>&emsp;
                <FlatButton label="View Streams" onTouchTap={this.viewstream}/>
                </CardActions>
            </Card>
  {/*streams card ends */}          
          </div>
          <StreamsDialog openStream={this.state.openStream} closeStream={this.handleCloseStream} />
  {/*specifying watchlists column*/}          
          <div className="col-xs-3.5">
  {/*watchlist card starts */}
            <Card style={styles.card}>
              <CardHeader
               title="WatchLists" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
              <CardMedia>
              <img src='http://blog.stata.com/wp-content/uploads/2014/03/ChangeMeans.gif' style={{height:'220px',width:'5px'}}/>
              </CardMedia>
              <CardTitle title="Total Number of WatchLists" />
              <CardActions>
              <FlatButton label="Create WatchList" labelStyle={{fontSize:'12.5px'}} onTouchTap={this.handleOpenWatch}/>
              <FlatButton label="View  WatchLists" labelStyle={{fontSize:'12.5px'}}/>
              </CardActions>
            </Card>
  {/*watchlist card ends */}
          </div>
          <WatchListDialog openWatch={this.state.openWatch} closeWatch={this.handleCloseWatch} />
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
