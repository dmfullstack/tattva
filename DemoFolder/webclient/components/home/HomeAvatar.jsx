import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import DrawerBox from '../namespace/DrawerBox.jsx';
import StreamDrawer from '../streams/StreamDrawer.jsx';
import {
	orange200,
	deepOrange300,
	teal900,
} from 'material-ui/styles/colors';

const style = {marginTop:150};
export default class HomeAvatar extends React.Component {
  constructor(props) 
  {
        super(props);
        this.state = {open: false, openS: false};
  }

  // handleClose = () =>
  // {
  //   console.log("close fxn");
  //   this.setState({open: false});
  // };
  // handleCloseStream = () =>
  // {
  //   this.setState({openS: false});
  // };
  handleToggle = () =>
  {
      // this.handleCloseStream();
      this.setState({open: !this.state.open});
  };
  handleToggle2 = () => 
  {
      // this.handleClose();
      this.setState({openS: !this.state.openS});
  };
  render() {
    return (
    	<div style={{display: 'flex',justifyContent:"center"}}>
      <DrawerBox openDrawer={this.state.open} closeDrawer={(open) => this.setState({open})} ></DrawerBox>
    	<div><center>
        <Avatar
          color={deepOrange300}
          backgroundColor={teal900}
          size={200}       
          style={style}
          onTouchTap={this.handleToggle}
          > NS </Avatar>
       	  <h2> Namespace </h2>
          <h4>Namespace specifies data format
          <br></br> of data coming from data source.
          <br></br>It does parsing of data.
          </h4> </center>
        </div>
        <div style={{paddingLeft:"90px", paddingRight:"90px"}}>
        <StreamDrawer openStream={this.state.openS} closeDrawer={(openS) => this.setState({openS})}></StreamDrawer>
        <center>
        <Avatar
          color={deepOrange300}
          backgroundColor={teal900}
          size={200}       
          style={style}
          onTouchTap={this.handleToggle2}> S </Avatar>
          <h2> Streams </h2>
          <h4> Streams takes data from data 
          <br></br> source and filters 
          <br></br> the data.
          </h4></center>
        </div>

        <div><center>
        <Avatar
          color={deepOrange300}
          backgroundColor={teal900}
          size={200}
          marginTop={100}
          style={style}> WL </Avatar>   
          <h2> WatchList</h2>
          <h4> Watchlist uses expresssions 
          <br></br>to display the data in json
          <br></br> format on the data flow map 
          <br></br>and the 
          corresponding graph for it.
          </h4></center>
        </div>
        </div>
      	);
  }
}
