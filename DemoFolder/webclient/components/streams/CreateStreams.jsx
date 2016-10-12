import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton'; 
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Mapsplace from 'material-ui/svg-icons/maps/place';
import Actiondescription from 'material-ui/svg-icons/action/description';
import Contentreport from 'material-ui/svg-icons/content/report';
import PermScanWifi from 'material-ui/svg-icons/action/Perm-Scan-Wifi';
import ViewStream from 'material-ui/svg-icons/action/view-stream';
import DropDownMenu from 'material-ui/DropDownMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddStream from './AddStream.jsx';
    const styles = {
     head: {
      background: '#004D40'
     },
     actionButton: {
      marginLeft: 1430
     },
     raisedButton: {
      marginLeft: 750,
      marginTop: 200
     },
     customWidth: {
      width: 200,
     },
    };
export default class CreateStreams extends React.Component {
   constructor(props){
        super(props);
        this.state = {value: 1,numChildren:0};
      }
   handleChange = (event, index, value) => this.setState({value});
   handleFlag = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
   };
   render() {
      const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddStream key={i}/>);
        };
      return (
        <MuiThemeProvider>
        <div>
        <AppBar title="Creating Streams" iconElementLeft ={<IconButton></IconButton>} style={styles.head}/>
        <DropDownMenu value={this.state.value} style={{marginLeft:'300px', marginTop:'80'}} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="SELECT NAMESPACE*" />
          <MenuItem value={2} primaryText="Namespace-1" />
          <MenuItem value={3} primaryText="Namespace-2" />
          <MenuItem value={4} primaryText="Namespace-3" />
          <MenuItem value={5} primaryText="Namespace-4" />
        </DropDownMenu>
        <ViewStream style={{marginLeft:"285px"}}/> <TextField floatingLabelText="NAME OF STREAM*" style={{marginLeft:'10px'}}/>&emsp;
        <Actiondescription style={{marginLeft:"200px"}}/> <TextField floatingLabelText="DESCRIPTION*" style={{marginLeft:'10px'}}/>
        <br></br>
        <br></br>
        <br></br>
        <PermScanWifi style={{marginLeft:"290px"}}/> <TextField floatingLabelText="ADDRESS*" style={{marginLeft:'10px'}}/>&emsp;
        <Contentreport style={{marginLeft:"220px"}}/>  <TextField floatingLabelText="PORT*" style={{marginLeft:'7px'}}/>
        <Mapsplace style={{marginLeft:"220px"}}/><TextField floatingLabelText="LOCATION*" style={{marginLeft:'10px'}}/>&emsp;
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span style={{fontSize:'24px',marginLeft:'700px'}}><b>Query Criteria - Build Your Query Here</b></span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {children}
        <br/>
        <FloatingActionButton onClick={this.handleFlag} mini={true} style={styles.actionButton}>
        <ContentAdd/>
        </FloatingActionButton>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <RaisedButton label="Cancel" primary={true} style={styles.raisedButton}/>&emsp;
        <RaisedButton label="Create" primary={true} disabled={true}/>
        </div>
        </MuiThemeProvider>
    );
  }
}

