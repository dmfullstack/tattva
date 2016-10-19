import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
import StreamsDialog from '../streams/StreamsDialog.jsx';
import WatchListDialog from '../watchlist/WatchListDialog.jsx';
import MoreNamespace from '../namespace/MoreNamespace.jsx';
const styles={marginTop:"50px",margin:"10px",width:"350px",height:"250px"};
const styleHeader={background:"gray",fontWeight:"bold"};
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
      view=<MoreNamespace />;
    }
    return (
      <div className="container" style={{display:"flex"}}>
  <div className="row">
    <div className="col-xs-3.5">

            <Card style={styles}>
              <CardHeader
                title="NameSpace" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
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
            <Card style={styles}>
              <CardHeader
                title="Streams" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
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
            <Card style={styles}>
             <CardHeader
                title="Watch Lists" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
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
           
        );
  }
}
