import React from 'react';
import TextField from 'material-ui/TextField';
import AddWatchList from './AddWatchList.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import 'react-select/dist/react-select.css';
import {Link} from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import $ from 'jquery';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class CreateWatchList extends React.Component {
    static get propTypes() {
   return(
   {
     data2: React.PropTypes.array.isRequired
       });
 }
constructor(props) {
       super(props);
       this.state = {numChildren: 0,
                      dataSource: [], removeField: false, removeIndex: 0,
                      open: false, openStreamSnackBar: false, openDialog: false, insert: false,
                      namespace1: 'values', streamdata: 'records', nameData: [],
                      watch: '', purpose: '', nameerr: '', selectedStream: 'Select Stream',
                      purposeerr: '', selectedValue: 'Select namespace', data: [],
                     };
                    }
handleChild = () =>
{
      this.setState({
            numChildren: this.state.numChildren + 1
      });
};
handleUpdateInput = (value) => {
      this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value
      ]
    });
};
handleRemove = (index) =>
{
      this.setState({removeField: true, removeIndex: index});
};
handlerenderagain = () =>
{
      this.setState({numChildren: this.state.numChildren - 1, removeField: false});
};
handleOpen = () => {
      this.setState({open: true});
};
handleOpen2 = () => {
      this.setState({openStreamSnackBar: true});
};
handleOpenDialog = () => {
      this.setState({openDialog: true});
};
handleCloseDialog = () => {
      this.setState({openDialog: false});
};
handleClose = () => {
      this.setState({open: false, openStreamSnackBar: false});
};
handleStream = (event, index, value) => {
      this.setState({selectedStream: value});
};
handleNamespace = (event, index, value) =>
{
       this.setState({selectedValue: value});
       $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/stream/get2/' + value,
        dataType: 'json',
        success: function(res) {
          this.setState({nameData: res});
        }.bind(this),
        error: function() {
        }
      });
};

updateValue =(newValue)=> {
     this.setState({
      selectValue: newValue
    });
};
updatedValue =(Value)=> {
     this.setState({
        selectedValue: Value
      });
};
handleWatchlist = (e) =>
{
     this.setState({watch: e.target.value});
};
handlePurpose = (e) =>
{
     this.setState({purpose: e.target.value});
};
createwatchlist = () =>
{
     if(this.state.watch === '')
      {
        this.setState({purposeerr: ''});
        this.setState({nameerr: 'Please fill the required fields'});
      }
      else if(!this.state.watch.match(/^[0-9A-Za-z\s]+$/))
      {
          this.setState({purposeerr: ''});
          this.setState({nameerr: 'Invalid Name for WatchList'});
      }
      else if(this.state.purpose === '')
      {
        this.setState({nameerr: ''});
        this.setState({purposeerr: 'Please fill the required fields'});
      }
      else if(this.state.selectedValue === 'Select namespace')
      {
        this.setState({nameerr: '', purposeerr: ''});
        this.handleOpen();
      }
      else if(this.state.selectedStream === 'Select Stream')
      {
        this.setState({nameerr: '', purposeerr: ''});
        this.handleOpen2();
      }
      else
      {
        this.setState({nameerr: '', purposeerr: ''});
            $.ajax({
            type: 'POST',
            url: 'http://localhost:8081/watchlist/post',
            dataType: 'json',
            data: {WatchList: this.state.watch, Purpose: this.state.purpose,
                   Namespace: this.state.selectedValue, Stream: this.state.selectedStream},
               success: function()
               {
                this.handleOpenDialog();
               }.bind(this),
               error: function()
               {
               }
            });
          }
};
render() {
      let gettingNamespace = this.props.data2.map(function(listMenu) {
      return(<MenuItem key={listMenu._id} value={listMenu.namespace}
      primaryText={listMenu.namespace} />);
      });
      let gettingStreams = this.state.nameData.map(function(listMenu) {
      return(<MenuItem key={listMenu._id} value={listMenu.stream}
      primaryText={listMenu.stream} />);
      });
    const children = [];
     let i = 0;
        for (i = 0; i < this.state.numChildren; i += 1)
        {
            children.push(<AddWatchList key={i} index={i} remove={this.handleRemove}/>);
        }
        if (this.state.removeField === true) {
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    const actions = [
      <Link to="/watchList">
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleCloseDialog}
      /></Link>
      ];
    return (
      <div>
      {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <div>
            <Subheader style={{background: '#6F71A5', fontSize: '28px', color: 'white',
            marginTop: '1px', marginLeft: '-7px'}}>WatchLists</Subheader>
                <Link to="/watchList">
                <IconButton tooltip="View Watchlist" style={{float: 'right',
                 marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                </IconButton>
                </Link>
            <center>
            <h2>Create WatchList Here </h2>
                <TextField floatingLabelText="NAME OF WATCHLIST*" errorText={this.state.nameerr}
                onChange={this.handleWatchlist}/>
                <TextField floatingLabelText="PURPOSE*" errorText={this.state.purposeerr}
                onChange={this.handlePurpose}/></center>

                <DropDownMenu value={this.state.selectedValue} maxHeight={300}
                 style={{width: '300px'}} onChange={this.handleNamespace} >
                      <MenuItem value="Select namespace"
                                primaryText="Select namespace*" />
                               {gettingNamespace}
                </DropDownMenu><br />
                <DropDownMenu value={this.state.selectedStream} maxHeight={300}
                  style={{width: '300px'}} onChange={this.handleStream} >
                      <MenuItem value="Select Stream"
                                primaryText="Select stream*" />
                               {gettingStreams}
                </DropDownMenu><br /><br /><br />
                <br/>
                {children}
                <br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
                <br/><br/>
                <center>
                <Link to="/watchList"><RaisedButton label="Cancel" /></Link>&emsp;
                <RaisedButton label="Create" onClick={this.createwatchlist}
                buttonStyle={{backgroundColor: '#5CA59F'}}/>
                </center>
                </div>
            </MediaQuery>
        </MediaQuery>
      {/* media query for mobile devices ends*/}
      {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
              <div>
                <Subheader style={{background: '#6F71A5', fontSize: '28px',
                color: 'white', marginTop: '1px', marginLeft: '-7px'}}>WatchLists</Subheader>
                <Link to="/watchList">
                <IconButton tooltip="View Watchlist" style={{float: 'right',
                marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                </IconButton>
                </Link>
                <center>
            <h1>Create WatchList Here </h1>
                <Paper style={{width: '80%'}} zDepth={0}>
                <div className="container" >
                <div className="row center-xs">
                <div className="col-xs-3">
                <TextField floatingLabelText="NAME OF WATCHLIST*" errorText={this.state.nameerr}
                onChange={this.handleWatchlist}/></div>
                <div className="col-xs-3">
                <TextField floatingLabelText="PURPOSE*" errorText={this.state.purposeerr}
                onChange={this.handlePurpose}/></div>
                </div><br/>
                <div className="row center-xs">
                <div className="col-xs-2.7">
                <DropDownMenu value={this.state.selectedValue} maxHeight={300}
                 style={{width: '300px'}} onChange={this.handleNamespace} >
                      <MenuItem value="Select namespace"
                                primaryText="Select namespace*" />
                               {gettingNamespace}
                </DropDownMenu>
                </div>
                <div className="col-xs-2.7">
                <DropDownMenu value={this.state.selectedStream} maxHeight={300}
                  style={{width: '300px'}} onChange={this.handleStream} >
                      <MenuItem value="Select Stream"
                                primaryText="Select stream*" />
                               {gettingStreams}
                </DropDownMenu>
                 </div>
                </div>
                </div>
                {/* {newcreate}*/}
                <br/>
                {children}
                <br/><br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild}
                style={{marginTop: '130px'}}/>
                <br/><br/><br/>
                <center>
                <Link to="/watchList"><RaisedButton label="Cancel" style={{marginBottom: '50px'}}/>
                </Link>&emsp;
                <RaisedButton label="Create" onClick={this.createwatchlist}
                buttonStyle={{backgroundColor: '#5CA59F'}}/>
                </center>
                </Paper>
                </center>
                </div>
            </MediaQuery>
        </MediaQuery>
      {/* media query for Desktops ends */}
        <Snackbar
            open={this.state.open}
            message="Namespace not Selected"
            autoHideDuration={2000}
            onRequestClose={this.handleClose}
          />
          <Snackbar
            open={this.state.openStreamSnackBar}
            message="Stream not Selected"
            autoHideDuration={2000}
            onRequestClose={this.handleClose}
          />
          <Dialog
            title="WatchList created successfully"
            actions={actions}
            modal={false}
            open={this.state.openDialog}
            onRequestClose={this.handleCloseDialog}
            titleStyle={{textAlign: 'center', fontSize: '30px'}}
             />
     </div>
    );
  }
}
