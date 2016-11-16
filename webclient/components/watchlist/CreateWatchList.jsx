import React from 'react';
import TextField from 'material-ui/TextField';
import ExpressionMapping from './ExpressionMapping.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import 'react-select/dist/react-select.css';
import {Link} from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import Subheader from 'material-ui/Subheader';
import $ from 'jquery';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Editor from './Editor.jsx';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
let string;
let idd=0;
export default class CreateWatchList extends React.Component {
    static get propTypes() {
   return(
   {
     data2: React.PropTypes.array.isRequired
       });
 }
constructor(props) {
       super(props);
       this.state = {viewExpressions:false, expressionCriteria: [],
                      dataSource: [], removeField: false, removeIndex: 0,
                      open: false, openStreamSnackBar: false,
                      openDialog: false, insert: false,
                      namespace1: 'values', streamdata: 'records',
                      nameData: [],
                      watch: '', purpose: '', nameerr: '',
                      selectedStream: 'Select Stream',
                      purposeerr: '', selectedValue: 'Select namespace', 
                      data: [], openDropDialog: false,
                      constant1: false, Log: false, input: false, 
                      parseValueToEditor: '',
                      expressionParsing:[], watchlistObject: {}, 
                      open1: false, value1: 1, dataSchemaName: [],
                      type: '', publish: [], isChecked: false, 
                      isChecked1: false
                     };
                    }
handleChild = () =>
{   
         if(this.state.selectedValue === 'Select namespace')
         {
                this.setState({open: true});
         }
         else if(this.state.selectedStream === 'Select Stream')
         {
                this.setState({openStreamSnackBar: true});
         }
         else
         {
          this.state.expressionParsing.push({tag:"expression:"+idd,
                                    lhs:{},
                                    rhs:{},
                                    opr:'',
                                    position:idd});
          let addObject = {expression1: 0, operators: 1, expression2: 0, id: idd};
          this.state.expressionCriteria.push(addObject);
          this.setState({expressionCriteria: this.state.expressionCriteria});
          this.setState({viewExpressions: true});
          idd= idd + 1;
        }
};
handleRemove = (index) =>
{
     this.state.expressionParsing.splice(index, 1);
     this.state.expressionCriteria.splice(index, 1);
     this.setState({expressionCriteria: this.state.expressionCriteria});
};
handleChange1 = (event, index, value) => 
{
         this.setState({value1: value});
};
handleTypeButton = (e) =>
{
     this.setState({type:e.target.value});
     console.log(this.state.type);
};
toggleChange =(event, checked) =>
{
   this.setState({isChecked: checked});
};
toggleChange1 =(event, checked) =>
{
   this.setState({ isChecked1: checked});
};
handleOpen1 = () =>
{
        this.setState({open1: true});
};
handleClose1 = () =>
{
        this.setState({open1: false});
};
handleSave1 = () =>
{
 console.log(this.state.isChecked);
 this.state.publish.xAxis="Time";
 this.state.publish.yAxis=this.state.value1;
 this.state.publish.logFormat=this.state.type;
 this.state.publish.graph=this.state.isChecked;
 this.state.publish.historicData=this.state.isChecked1;
 this.setState({publish:this.state.publish});
 this.setState({open1: false});
};
expression1AndValue= (value) =>
{ 
  this.state.expressionParsing[value.position].lhs={};
  this.state.expressionParsing[value.position].lhs.oprType=value.expression1;
  this.state.expressionParsing[value.position].lhs.constant=value.constant1;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression2AndValue= (value) =>
{
  this.state.expressionParsing[value.position].rhs={};
  this.state.expressionParsing[value.position].rhs.oprType=value.expression2;
  this.state.expressionParsing[value.position].rhs.constant=value.constant2;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression3AndValue = (value) =>
{
  this.state.expressionParsing[value.position].lhs={};
  this.state.expressionParsing[value.position].lhs.oprType=value.expression1;
  this.state.expressionParsing[value.position].lhs.accumulateOn=value.accumulateDropFirst1;
  this.state.expressionParsing[value.position].lhs.accumulateTill=value.accumulateText1;
  this.state.expressionParsing[value.position].lhs.funcPostAccmulate=value.accumulateDropSecond1;
  this.state.expressionParsing[value.position].lhs.funcPostAccmulateParm=value.accumulateDropThird1;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression4AndValue = (value) =>
{ 
  this.state.expressionParsing[value.position].rhs={};
  this.state.expressionParsing[value.position].rhs.oprType=value.expression2;
  this.state.expressionParsing[value.position].rhs.accumulateOn=value.accumulateDropFirst2;
  this.state.expressionParsing[value.position].rhs.accumulateTill=value.accumulateText2;
  this.state.expressionParsing[value.position].rhs.funcPostAccmulate=value.accumulateDropSecond2;
  this.state.expressionParsing[value.position].rhs.funcPostAccmulateParm=value.accumulateDropThird2;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression5AndValue = (value) =>
{ 
  this.state.expressionParsing[value.position].lhs={};
  this.state.expressionParsing[value.position].lhs.oprType=value.expression1;
  this.state.expressionParsing[value.position].lhs.inputValue=value.textFieldInput1;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression6AndValue = (value) =>
{
  this.state.expressionParsing[value.position].rhs={};
  this.state.expressionParsing[value.position].rhs.oprType=value.expression2;
  this.state.expressionParsing[value.position].rhs.inputValue=value.textFieldInput2;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression7AndValue = (value) =>
{
  this.state.expressionParsing[value.position].lhs={};
  this.state.expressionParsing[value.position].lhs.oprType=value.expression1;
  this.state.expressionParsing[value.position].lhs.dataField=value.fieldValue1;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
expression8AndValue = (value) =>
{
  this.state.expressionParsing[value.position].rhs={};
  this.state.expressionParsing[value.position].rhs.oprType=value.expression2;
  this.state.expressionParsing[value.position].rhs.dataField=value.fieldValue2;
  this.setState({expressionParsing:this.state.expressionParsing});
  console.log(this.state.expressionParsing);
};
operators= (value) =>
{
this.state.expressionParsing[value.position].opr=value.operators;
this.setState({expressionParsing:this.state.expressionParsing});
console.log(this.state.expressionParsing);
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
      this.state.watchlistObject.Stream=value;
      this.setState({watchlistObject:this.state.watchlistObject});
};
Accumulator = () => {
          this.setState({openDropDialog: true});       
};
handleConstant = () => {
      this.setState({constant1: true});
};
LogData = () => {
      this.setState({Log: true});
};
InputData = () => {
      this.setState({input: true});
};
handleNamespace = (event, index, value) =>
{
       this.setState({selectedValue: value});
       $.ajax({
      type: 'GET',
      url: 'http://localhost:8081/namespace/get/' + value,
      dataType: 'json',
      success: function(res) {
        this.setState({dataSchemaName: res.dataSchema});
      }.bind(this),
      error: function() {
      }
   });
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
    this.state.watchlistObject.NameSpace=value;
    this.setState({watchlistObject:this.state.watchlistObject});
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
     this.state.watchlistObject.watchlist=e.target.value;
     this.setState({watchlistObject:this.state.watchlistObject});
};
handlePurpose = (e) =>
{
     this.setState({purpose: e.target.value});
};
handleDropDown = (event,index,value) => {
    this.setState({value});
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
        console.log(string);
        console.log(this.state.expressionParsing);
        this.setState({nameerr: '', purposeerr: ''});
            $.ajax({
            type: 'POST',
            url: 'http://localhost:8081/watchlist/post',
            dataType: 'json',
            data: {WatchList: this.state.watch, Purpose: this.state.purpose,
                   Namespace: this.state.selectedValue, Stream: this.state.selectedStream,
                   Expressions: this.state.expressionParsing, Ace: string, YAxis:this.state.value1,
                   LogFormat: this.state.type, Graph: this.state.isChecked,
                   HistoricData:this.state.isChecked1
                 },
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
name = (str) =>{
 string=str;

};
render() {
  //console.log(this.state.watch);
      let menuList = this.state.dataSchemaName.map(function(listMenu)
          {
             return(<MenuItem key = {listMenu._id} value = {listMenu.name}
             primaryText = {listMenu.name} />);
         });
      let gettingNamespace = this.props.data2.map(function(listMenu) {
      return(<MenuItem key={listMenu._id} value={listMenu.namespace}
      primaryText={listMenu.namespace} />);
      });
      let gettingStreams = this.state.nameData.map(function(listMenu) {
      return(<MenuItem key={listMenu._id} value={listMenu.stream}
      primaryText={listMenu.stream} />);
      });

      let expandExpression = this.state.viewExpressions ? <ExpressionMapping expressionCriteria=
                                {this.state.expressionCriteria} 
                                remove={this.handleRemove}
                                expression1AndValue={this.expression1AndValue}
                                expression2AndValue={this.expression2AndValue}
                                expression3AndValue={this.expression3AndValue}
                                expression4AndValue={this.expression4AndValue}
                                expression5AndValue={this.expression5AndValue}
                                expression6AndValue={this.expression6AndValue}
                                expression7AndValue={this.expression7AndValue}
                                expression8AndValue={this.expression8AndValue}
                                operators={this.operators}
                                selectedValue={this.state.selectedValue}
                                />:null
    const actions = [
      <Link to="/watchList">
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleCloseDialog}
      /></Link>
      ];
      const actions1 = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose1}
      />,
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleSave1}
      />
      ];
    return (
      <div>
      {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <div>
            <Subheader style={{background: '#BBDEFB', fontSize: '28px', color: 'white',
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
                        onChange={this.handlePurpose}/>
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
                {expandExpression}
                <br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
                <br/><br/>
                <RaisedButton label="Publish" onTouchTap={this.handleOpen1}
                buttonStyle={{backgroundColor: '#BBDEFB'}}/><br/><br/>
               <Dialog title="Watchlist - UI Publish" actions={actions1} modal={false}
               open={this.state.open1} titleStyle={{background: '#5CA59F',
                                        color: 'white',
                                        marginBottom: '20px'}}>
               <label>Watch Tabs</label>
               <Checkbox label="Graph" checked={this.state.isChecked}
                         onChange={this.toggleChange.bind(this)}/>
               <Checkbox label="Historic Data" checked={this.state.isChecked1}
                         onChange={this.toggleChange1.bind(this)}/>
               <br/>
               <label>Scale</label><br/>
               <TextField hintText="X-Axis" disabled={true}/>
               <DropDownMenu value={this.state.value1} 
               onChange={this.handleChange1} style={{width: '200px'}}>
               <MenuItem value={1} primaryText="Y-Axis"/>
               </DropDownMenu>
               <br/><br/>
               <br/>
               <br/>
               <label>Watch Log Data Display Type</label>
               <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.type}
                                         onChange={this.handleTypeButton}>
               <RadioButton value="json" label="JSON" style={{marginRight: '-35px'}}/>
               <RadioButton value="rawdata" label="Raw Data"/>
               <RadioButton value="table" label="Table" />
               </RadioButtonGroup>
               </Dialog>
                <Editor watchlistDetail={this.state.watchlistObject} 
                expression={this.state.expressionParsing}
                publish={this.state.publish} name={this.name}/>
                <br/><br/>
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
                <Subheader style={{background: '#BBDEFB', fontSize: '28px',
                color: 'white', marginTop: '1px', marginLeft: '-7px'}}>WatchLists</Subheader>
                <Link to="/watchList">
                <IconButton tooltip="View Watchlist" style={{float: 'right',
                marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                </IconButton>
                </Link>
                <center>
            <h1>Create WatchList Here </h1></center>
            <div style={{marginLeft: '180px'}}>
                <div className="row ">
                <div className="col-xs">
                <TextField floatingLabelText="NAME OF WATCHLIST*" 
                            errorText={this.state.nameerr}
                            onChange={this.handleWatchlist}/></div>

                <div className="col-xs">
                <TextField floatingLabelText="PURPOSE*" 
                            errorText={this.state.purposeerr}
                            onChange={this.handlePurpose}/>
                </div></div><br/>
                <div className="row">
                <div className="col-xs" style={{marginLeft: '-22px'}}>
                <DropDownMenu value={this.state.selectedValue} maxHeight={300}
                 style={{width: '310px'}} onChange={this.handleNamespace} >
                      <MenuItem value="Select namespace"
                                primaryText="Select namespace*" />
                               {gettingNamespace}
                </DropDownMenu>
                </div>
                
                <div className="col-xs" style={{marginRight: '20px'}}>
                <DropDownMenu value={this.state.selectedStream} maxHeight={300}
                  style={{width: '310px'}} onChange={this.handleStream} >
                      <MenuItem value="Select Stream"
                                primaryText="Select stream*" />
                               {gettingStreams}
                </DropDownMenu>
                 </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-xs">
                {expandExpression}<br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild}
                />
                <RaisedButton label="Publish" onTouchTap={this.handleOpen1}
                style={{marginTop: '20px', float: 'right'}}
                buttonStyle={{backgroundColor: '#BBDEFB'}}/>
               <Dialog title="Watchlist - UI Publish" actions={actions1} modal={false}
               open={this.state.open1} titleStyle={{background: '#5CA59F',
                                        color: 'white',
                                        marginBottom: '20px'}}>
               <div className="row">
               <div className="col-xs-1">
               <label>Watch Tabs</label>
               </div>
               <div className="col-xs">
               <Checkbox label="Graph" checked={this.state.isChecked}
               onCheck={this.toggleChange.bind(this)} style={{display: 'inline-flex'}}/>
               </div>
               <div className="col-xs">
               <Checkbox label="Historic Data" checked={this.state.isChecked1}
               onCheck={this.toggleChange1.bind(this)} style={{display: 'inline-flex'}}/>
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
               <DropDownMenu value={this.state.value1} maxHeight={300}
                           onChange={this.handleChange1} style={{width: '200px'}}>
               <MenuItem value={1} primaryText="Y-Axis"/>
                    {menuList}
               </DropDownMenu>
               <br/><br/>
               </div>
               </div>
               <br/>
               <br/>
               <div className="row">
               <div className="col-xs-1">
               <label>Watch Log Data Display Type</label>
               </div>
               <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.type}
                                         style={{display: 'flex'}}
                                         onChange={this.handleTypeButton}>
               
               <RadioButton value="json" label="JSON" style={{marginRight: '-35px'}}/>
               <RadioButton value="rawdata" label="Raw Data"/>
               <RadioButton value="table" label="Table" />
               </RadioButtonGroup>
               </div>
               </Dialog>
                </div>
                <div className="col-xs">
                <Editor watchlistDetail={this.state.watchlistObject} 
                        expression={this.state.expressionParsing}
                        publish={this.state.publish} name={this.name}/>
                </div>
                </div></div>
                <br/><br/><br/>
                <center>
                <Link to="/watchList"><RaisedButton label="Cancel" style={{marginBottom: '50px'}}/>
                </Link>&emsp;
                <RaisedButton label="Create" onClick={this.createwatchlist}
                buttonStyle={{backgroundColor: '#5CA59F'}}/>
                </center>
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




