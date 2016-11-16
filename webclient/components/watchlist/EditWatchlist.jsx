import React from 'react';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import 'react-select/dist/react-select.css';
import {Link} from 'react-router';

import Subheader from 'material-ui/Subheader';
import $ from 'jquery';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import AceEditor from 'react-ace';

import Checkbox from 'material-ui/Checkbox';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import ExpressionsView from './ExpressionsView.jsx';

export default class EditWatchlist extends React.Component {
static get propTypes() {
  return(
  {
    params: React.PropTypes.object.isRequired,
    watchlistDetail: React.PropTypes.object.isRequire,
    publish: React.PropTypes.object.isRequire
  });
}

constructor(props) {
       super(props);
       this.state = {
                      Watch: '', namespace: 'Select namespace',
                      stream: 'Select Stream', expression: [],
                      expression1: 'ex1', operators: 'op',
                      expression2: 'ex2', open1: false
                     };
                    }
componentDidMount = () =>
{
   $.ajax({
       type: 'GET',
       url: '/watchlist/get/' + this.props.params.WatchList,
       dataType: 'json',
       success: function(res) {
        this.setState({expression: res.Expressions});
        this.setState({Watch: res});
       }.bind(this),
       error: function() {
       }
   });
};
handleClose1 = () =>
{
        this.setState({open1: false});
};
handleOpen1 = () =>
{
        this.setState({open1: true});
};
render() {
        let menuList = this.state.expression.map(function(listMenu) {   
      return <ExpressionsView key={listMenu._id} listMenu={listMenu} />;
      });

      // let menuList2 = this.state.expression.map(function(listMenu) {
      // return(<MenuItem key={listMenu._id} value='op'
      // primaryText={listMenu.opr} />);
      // });
      // let menuList3 = this.state.expression.map(function(listMenu) {
      // return(<MenuItem key={listMenu._id} value='ex2'
      // primaryText={listMenu.rhs.oprType} />);
      // });
    const actions1 = [

      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose1}
      />
      ];


    return (
       <div>
      {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
                <Subheader style={{background: '#BBDEFB', fontSize: '28px',
                color: 'white', marginTop: '1px', marginLeft: '-7px'}}>WatchLists</Subheader>
                <Link to="/watchList">
                <IconButton tooltip="View Watchlist" style={{float: 'right',
                marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                </IconButton>
                </Link>
                <center>
            <h1>Viewing WatchList </h1>
                  <TextField floatingLabelText="NAME OF WATCHLIST"
                              disabled={true}
                              value={this.state.Watch.WatchList}/>
                  <br/>
                  <TextField floatingLabelText="PURPOSE"
                              disabled={true}
                              value={this.state.Watch.Purpose}/>
                <br/>
                  <TextField floatingLabelText="Namespace"
                              disabled={true}
                              value={this.state.Watch.Namespace}/>
                  <TextField floatingLabelText="Stream"
                              disabled={true}
                              value={this.state.Watch.Stream}/>
                  {menuList}
                <RaisedButton label="Publish" onTouchTap={this.handleOpen1}
                style={{marginTop: '20px'}}
                buttonStyle={{backgroundColor: '#BBDEFB'}}/>
                <br/><br/>
                       <AceEditor
                        mode="java"
                        theme="github"
                        name="UNIQUE_ID_OF_DIV"
                        value={this.state.Watch.Ace}
                        editorProps={{$blockScrolling: true}}
                        readOnly={true}
                        style={{height: '300px', width: '340px',
                        textAlign: 'left', fontSize: '20px',
                        background: '#E0E0E0'}}
                        /></center>
          </MediaQuery>
        </MediaQuery>
      {/* media query for mobile devices ends*/}

      {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
                <Subheader style={{background: '#BBDEFB', fontSize: '28px',
                color: 'white', marginTop: '1px', marginLeft: '-7px'}}>WatchLists</Subheader>
                <Link to="/watchList">
                <IconButton tooltip="View Watchlist" style={{float: 'right',
                marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                </IconButton>
                </Link>
                <center>
            <h1>Viewing WatchList </h1></center>
            <div style={{marginLeft: '180px'}}>
              <div className="row ">
                <div className="col-xs">
                  <TextField floatingLabelText="NAME OF WATCHLIST"
                              disabled={true}
                              value={this.state.Watch.WatchList}/>
                </div>


                <div className="col-xs">
                  <TextField floatingLabelText="PURPOSE"
                              disabled={true}
                              value={this.state.Watch.Purpose}/>
                </div>
              </div><br/>
              <div className="row">
                <div className="col-xs" >
                  <TextField floatingLabelText="Namespace"
                              disabled={true}
                              value={this.state.Watch.Namespace} />
                </div>
                

                <div className="col-xs" >
                  <TextField floatingLabelText="Stream"
                              disabled={true}
                              value={this.state.Watch.Stream}/>

                </div>
              </div>
               <div className="row">
                <div className="col-xs">

                <center>
                  {menuList}
            </center>
            <br/>
                <RaisedButton label="Publish" onTouchTap={this.handleOpen1}
                style={{marginTop: '10px', float: 'right'}}
                buttonStyle={{backgroundColor: '#BBDEFB'}}/>
                </div>
               <div className="col-xs">
                       <AceEditor
                        mode="java"
                        theme="github"
                        name="UNIQUE_ID_OF_DIV"
                        value={this.state.Watch.Ace}
                        editorProps={{$blockScrolling: true}}
                        readOnly={true}
                        style={{height: '300px', width: '500px',
                        textAlign: 'left', fontSize: '20px',
                        background: '#E0E0E0'}}
                        />
                </div>
               </div>
            </div>
          </MediaQuery>
        </MediaQuery>
         <Dialog title="Watchlist - UI Publish" actions={actions1} modal={false}
               open={this.state.open1} titleStyle={{background: '#5CA59F',
                                        color: 'white',
                                        marginBottom: '20px'}}>
               <div className="row">
               <div className="col-xs-1">
               <label>Watch Tabs</label>
               </div>
               <div className="col-xs">
               <Checkbox label="Graph" checked={this.state.Watch.Graph}
                         style={{display: 'inline-flex'}}/>
               </div>
               <div className="col-xs">
               <Checkbox label="Historic Data" checked={this.state.HistoricData}
                       style={{display: 'inline-flex'}}/>
               </div>
               </div>
               <br/>
               <div className="row">
               <div className="col-xs-1">
               <label>Scale</label>
               </div>
               <div className="col-xs">
               <TextField hintText="Time" disabled={true}/>
               </div>
               <div className="col-xs">
                  <TextField floatingLabelText="Y-Axis"
                              disabled={true}
                              disabled={true}
                              value={this.state.Watch.YAxis}/>
               <br/><br/>
               </div>
               </div>
               <br/>
               <br/>
               <div className="row">
               <div className="col-xs-1">
               <label>Watch Log Data Display Type</label>
               </div>
               <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.Watch.LogFormat}
                                         style={{display: 'flex'}}>
               <RadioButton value="json" label="JSON" style={{marginRight: '-35px'}}/>
               <RadioButton value="rawdata" label="Raw Data"/>
               <RadioButton value="table" label="Table"/>
               </RadioButtonGroup>
               </div>
               </Dialog>
        </div>
    );
  }
}