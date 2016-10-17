import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
import StreamsDialog from '../streams/StreamsDialog.jsx';
import WatchListDialog from '../watchlist/WatchListDialog.jsx';

const styles={marginTop:"50px",width:"400px",margin:"20px"};
const styleHeader={background:"gray",fontWeight:"bold"};
export default class HomeAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,openStream:false,openWatch:false
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
  }
  render() {
    return (
      <div style={{display:"inline-flex"}}>
            <Card style={styles}>
              <CardHeader
                title="NameSpace" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
              <CardTitle title="Total Number of NameSpace" />
              <CardText >
                
              </CardText>
              <CardActions>
                <FlatButton label="Create NameSpace" onTouchTap={this.handleOpen} />
                <FlatButton label="View NameSpace" />
              </CardActions>
            </Card>
            <NamespaceDialog  open={this.state.open} close={this.handleClose}/>
            <Card style={styles}>
              <CardHeader
                title="Streams" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
              <CardTitle title="Total Number of Streams" />
              <CardText >
                
              </CardText>
              <CardActions>
                <FlatButton label="Create Stream" onTouchTap={this.handleOpenStream}/>
                <FlatButton label="View Streams" />
              </CardActions>
            </Card>
            <StreamsDialog openStream={this.state.openStream} closeStream={this.handleCloseStream} />
            <Card style={styles}>
              <CardHeader
                title="Watch Lists" style={styleHeader} titleStyle={{fontSize:"30px"}}/>
              <CardTitle title="Total Number of Watch Lists" />
              <CardText >
                
              </CardText>
              <CardActions>
                <FlatButton label="Create Watch List" onTouchTap={this.handleOpenWatch}/>
                <FlatButton label="View Watch Lists" />
              </CardActions>
            </Card>
            <WatchListDialog openWatch={this.state.openWatch} closeWatch={this.handleCloseWatch} />
            </div>
      	);
  }
}
