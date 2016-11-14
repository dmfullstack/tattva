import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';
import {Link} from 'react-router';
import moment from 'moment';
import TextfieldsMap from './TextfieldsMap';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/xcode';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';
import 'brace/ext/language_tools';

export default class NamespaceDialog extends React.Component {
static get propTypes() {
  return(
  {
    params: React.PropTypes.object.isRequired
  });
 }constructor(props)
{
   super(props);
   this.state = {
     operation: this.props.params.operation, descript: '', open: false, parsedata: false,
     BoxParsingValue: '', ParseFeilds: false, parseValues: [], names: '', message: '',
     namespaceerr: '', descripterr: '', parsefield: '', parseerr: '', data2: ''
 };
}
namespace1 = (e) =>
{
  this.setState({names: e.target.value});
};
description1 = (e) =>
{
  this.setState({descript: e.target.value});
};
handleOpen =() =>
{
  this.setState({open: true});
};
handleClose =() =>
{
  this.setState({open: false});
};
handleOpen1 =() =>
{
  this.setState({open1: true});
};
saveData =()=>
{
     if(this.state.names === '')
     {
       this.setState({descripterr: ''});
       this.setState({namespaceerr: 'Please fill the required fields'});
     }
     else if(!this.state.names.match(/^[A-Za-z0-9\s]+$/))
     {
       this.setState({descripterr: ''});
       this.setState({namespaceerr: 'Invalid Name for Namespace'});
     }
     else if(this.state.descript === '')
     {
       this.setState({namespaceerr: ''});
       this.setState({descripterr: 'Please fill the required fields'});
     }
     else if(this.state.parseValues === '')
     {
       this.setState({namespaceerr: '', descripterr: ''});
       this.setState({parseerr: 'Please enter data to parse'});
     }
     else{
       this.setState({namespaceerr: ''});
       this.setState({descripterr: ''});
       this.setState({parseerr: ''});
       $.ajax({
       type: 'PUT',
       url: 'http://localhost:8081/namespace/put/' + this.props.params.name,
       dataType: 'json',
       data: {namespace: this.state.names,
              description: this.state.descript,
              dataSchema: this.state.parseValues},
       success: function()
       {
        this.handleOpen1();
       }.bind(this),
       error: function()
       {
        }
      });
  }
};
submit = () =>
{
     if(this.state.names === '')
     {
       this.setState({descripterr: ''});
       this.setState({namespaceerr: 'Please fill the required fields'});
     }
     else if(!this.state.names.match(/^[A-Za-z0-9\s]+$/))
     {
       this.setState({descripterr: ''});
       this.setState({namespaceerr: 'Invalid Name for Namespace'});
     }
     else if(this.state.descript === '')
     {
       this.setState({namespaceerr: ''});
       this.setState({descripterr: 'Please fill the required fields'});
     }
     else if(this.state.parseValues === '')
     {
       this.setState({namespaceerr: '', descripterr: ''});
       this.setState({parseerr: 'Please enter data to parse'});
     }
     else{
        this.setState({namespaceerr: ''});
        this.setState({descripterr: ''});
        this.setState({parseerr: ''});
        $.ajax({
          type: 'POST',
          url: 'http://localhost:8081/namespace/post',
          dataType: 'json',
          data: {namespace: this.state.names,
                 description: this.state.descript,
                 dataSchema: this.state.parseValues},
          success: function()
          {
            this.handleOpen();
          }.bind(this),
          error: function()
          {
          }
      });
  }
};
addTextField = () =>
{
  let arr = this.state.parseValues;
  let id = arr.length + 1;
  this.setState({ParseFeilds: true});
  let AddObject = {alias: '', name: '', sample: '', type: 'dimension', id: id };
  arr = this.state.parseValues;
  this.state.parseValues.splice(arr.length, 0, AddObject);
  this.setState({parseValues: this.state.parseValues});
};
handleParse = () =>{
  this.setState({ParseFeilds: true});
};

second = (data, i, j, iid) =>
{
  let id = iid;
  id = +1;
  let outputData = [];
  let type;
  for (let k in data[i][j])
          {
            if(moment(data[i][j][k], moment.ISO_8601).isValid())
            {
              type = 'time';
            }
            else
            if (isNaN(data[i][j][k]))
              {
                type = 'dimension';
              }
              else
              {
                type = 'measure';
              }
            id += 1;
            outputData.push({
              alias: j + '.' + k,
              name: j + '.' + k,
              sample: data[i][j][k],
              type: type,
              id: id
            });
          }
    return outputData;
};

first = (data, i, iid) =>
{
  let id = iid;
  let type;
  let outputData = [];
   for (let j in data[i])
      {
        if(moment(data[i][j], moment.ISO_8601).isValid())
        {
          type = 'time';
        }
        else
        if (isNaN(data[i][j]))
          {
            type = 'dimension';
          }
          else
          {
            type = 'measure';
          }
        if(typeof data[i][j] === 'object' && !Array.isArray(data[i][j]))
        {
          let por = this.second(data, i, j, id);
          for (let s = 0; s < por.length; s += 1)
          {
            outputData.push(por[s]);
          }
        }
        else
        {
          id += 1;
          outputData.push({
            alias: j,
            name: j,
            sample: data[i][j],
            type: type,
            id: id
          });
        }
      }
      return outputData;
};

parseSampleToJSON = (data) =>
{
  let id = -1;
  let outputData = [];
  let fieldCount = -1;
  for (let i in data)
  {
    fieldCount = fieldCount + 1;
    if (typeof data[i] === 'object')
    {
      outputData = this.first(data, i, id);
    }
  }
  return outputData;
};
changeTextBox = (data) =>
{
  let result = {};
  for (let i = 0; i < data.length; i += 1) {
    result[data[i].name] = data[i].sample;
}
  // result
  return result;
};
handleAliasTextBox =(valobj) =>
{
  let arr = this.state.parseValues;
  if (arr.indexOf(valobj.position) === -1) {
      arr[valobj.position].alias = valobj.aliasfieldData;
    }
};
handleNameTextBox =(valobj) =>
{
  this.state.parseValues[valobj.position].name = valobj.namefieldData;
};
handleSampleTextBox =(valobj) =>
{
  this.state.parseValues[valobj.position].sample = valobj.samplefieldData;
};
onChange = (newValue) =>
{
  let data = JSON.parse(newValue);
  let d = this.parseSampleToJSON(data);
  this.setState({parseValues: d, parsefield: newValue});
  d = this.changeTextBox(d);
  d = JSON.stringify(d, null, 4);
  this.setState({BoxParsingValue: d});
};
removeTextField=(index)=>{
  this.state.parseValues.splice(index, 1);
  this.setState({parseValues: this.state.parseValues});
};

fillData =(data)=> {
    this.setState({data2: data});
    let d = this.state.data2.dataSchema;
    d = this.changeTextBox(d);
    d = JSON.stringify(d, null, 4);
    this.setState({BoxParsingValue: d});
    let arr = this.state.data2.dataSchema;
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].id = i;
    }
    this.setState({parseValues: arr});
    this.setState({ParseFeilds: true});
    this.setState({names: this.state.data2.namespace});
    this.setState({descript: this.state.data2.description});
    };

componentDidMount= () =>
{
  if(this.state.operation === 'edit')
  {
    this.setState({hideHeading: true});
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8081/namespace/get/' + this.props.params.name,
      datatype: 'JSON',
      success: function(res) {
        this.setState({data2: res});
        this.fillData(res);
       }.bind(this),
      error: function() {
       }
      });
  }
  else{
    this.setState({hideHeading: false});
  }
};

render() {
    // populating text fields
     let viewTextFields = this.state.ParseFeilds ? <TextfieldsMap data3={this.state.parseValues}
                          removeTextField={this.removeTextField}
                          changeAliasTextField={this.handleAliasTextBox}
                          changeNameTextField={this.handleNameTextBox}
                          changeSampleTextField={this.handleSampleTextBox}/> : null;
     const actions = [
      <Link to="/viewnamespace">
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      /></Link>
    ];
       return (
         <div>
  {/* media query for mobile devices starts */}
            <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                        <Subheader style={{background: '#E1BEE7',
                                           fontSize: '28px',
                                           color: 'white',
                                           marginTop: '10px',
                                           marginLeft: '-7px'}}>
                        NameSpace</Subheader>
                        <Link to="/viewnamespace">
                        <IconButton tooltip="View Namespace" onClick={this.addTextField}
                        style={{float: 'right', marginTop: '-55px', marginRight: '20px'}}
                        iconStyle={{fontSize: '36px'}}>
                        <FontIcon className="material-icons" color= {'white'}>view_list</FontIcon>
                        </IconButton>
                        </Link>
                        <center>
                        { this.state.hideHeading ? null : <h2>Create Namespace Here </h2>}
                        { this.state.hideHeading ? <h2>Edit Namespace Here </h2> : null}
                        <TextField disabled={this.state.hideHeading}
                                   floatingLabelText="NAME OF NAMESPACE*"
                                   value={this.state.names}
                                   errorText={this.state.namespaceerr}
                                   onChange={this.namespace1}/>
                        <TextField floatingLabelText="DESCRIPTION*"
                                   value={this.state.descript}
                                   errorText={this.state.descripterr}
                                   onChange={this.description1}/><br /><br />
                        <span><b>Define Data Schema For Namespace</b></span><br /><br /><br />
                        <AceEditor
                             mode="java"
                             theme="xcode"
                             name="tattva-wlist-expr-007"
                             value={this.state.BoxParsingValue}
                             style={{textAlign: 'left', fontSize: '25px'}}
                             editorProps={{$blockScrolling: true}}
                             onChange={this.onChange}
                             style={{height: '400px', width: '320px',
                                     textAlign: 'left', fontSize: '20px',
                                     background: '#E0E0E0'}}
                             enableBasicAutocompletion={true}
                             editorProps={{$blockScrolling: true}}
                           /><br /><br />
                        <RaisedButton label="Parse" buttonStyle={{backgroundColor: '#5CA59F'}}
                                      onClick={this.handleParse}/>
                           {viewTextFields}
                        </center>
                        <br /><br/>
                        <IconButton tooltip= "Add Fields Manually"
                        style={{float: 'right', marginRight: '15px'}}
                        iconStyle={{fontSize: '48px'}} >
                        <FontIcon className="material-icons" color={'#5CA59F '}
                        onClick={this.addTextField}>add_circle</FontIcon>
                        </IconButton>
                        <center>
                        <Link to="/home">
                        <RaisedButton label="Cancel" style={{marginTop: '100px',
                                                             marginLeft: '20px'}}/>
                        </Link>&emsp;
                        { this.state.hideHeading ? null : <RaisedButton label="Create"
                                                  buttonStyle = {{backgroundColor: '#5CA59F'}}
                                                  onClick={this.submit}/>}
                        { this.state.hideHeading ? <RaisedButton label="Save"
                                                  buttonStyle = {{backgroundColor: '#5CA59F'}}
                                                  onClick = {this.saveData}/> : null}
                    </center>
                </MediaQuery>
            </MediaQuery>
  {/* media query for mobile devices ends*/}
  {/* media query for Desktops starts */}
            <MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                 <Subheader style={{background: '#E1BEE7',
                                    fontSize: '28px',
                                    color: 'white',
                                    marginTop: '1px',
                                    marginLeft: '-7px'}}>
                     NameSpace</Subheader>
                    <Link to="/viewnamespace">
                       <IconButton tooltip="View Namespace"style={{float: 'right', marginTop: '-55px',
                        marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                       <FontIcon className="material-icons" color={'white'}>
                       view_list</FontIcon>
                       </IconButton>
                    </Link>
                    <center>
                        { this.state.hideHeading ? null : <h1>Create Namespace Here </h1>}
                        { this.state.hideHeading ? <h1>Edit Namespace Here </h1> : null}
                        <Paper zDepth={0} style={{width: '80%'}}>
                        <center>
                        <div className="container">
                        <div className="row">
                        <div className="col-xs">
                        <TextField disabled={this.state.hideHeading}
                                    floatingLabelText="NAME OF NAMESPACE*"
                                    value={this.state.names}
                                    errorText={this.state.namespaceerr}
                                    onChange={this.namespace1} /></div>
                        <div className="col-xs">
                        <TextField floatingLabelText="DESCRIPTION*"
                                   value={this.state.descript}
                                   errorText={this.state.descripterr}
                                   onChange={this.description1}/></div></div></div>
                        <div style={{fontSize: '24px', marginTop: '70px'}}>
                        <span >Define Data Schema For Namespace</span></div><br /><br /><br />
                        <AceEditor
                             mode="java"
                             theme="xcode"
                             name="tattva-wlist-expr-007"
                             value={this.state.BoxParsingValue}
                             style={{textAlign: 'left', fontSize: '20px'}}
                             editorProps={{$blockScrolling: true}}
                             onChange={this.onChange}
                             style={{height: '400px', width: '600px',
                                     textAlign: 'left', fontSize: '20px',
                                     background: '#E0E0E0'}}
                             enableBasicAutocompletion={true}
                             editorProps={{$blockScrolling: true}}
                           /><br /><br />
                        <RaisedButton label="Parse" onClick={this.handleParse}
                                      buttonStyle={{backgroundColor: '#5CA59F'}} />
                            {viewTextFields}
                            </center>
                        <br/>
                        <br />
                        <IconButton tooltip= "Add Fields Manually"
                        style={{float: 'right', marginRight: '40px'}}
                        iconStyle={{fontSize: '48px'}} >
                        <FontIcon className="material-icons" color={'#5CA59F '}
                        onClick={this.addTextField}>add_circle</FontIcon>
                        </IconButton>
                        <center>
                        <Link to="/viewnamespace">
                        <RaisedButton label="Cancel"
                                      style={{marginTop: '120px',
                                              marginLeft: '100px',
                                              marginBottom: '50px'}}/>
                        </Link>&emsp;
                        { this.state.hideHeading ? null : <RaisedButton label="Create"
                                                    onClick={this.submit}
                                                    buttonStyle={{backgroundColor: '#5CA59F'}} /> }
                        { this.state.hideHeading ? <RaisedButton label="Save"
                                              onClick={this.saveData}
                                              buttonStyle={{backgroundColor: '#5CA59F'}} /> : null}
                        </center>
                        </Paper>
                    </center>
                </MediaQuery>
            </MediaQuery>
  {/* media query for Desktops ends */}
            <Dialog
                title="Namespace created successfully"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                titleStyle={{textAlign: 'center', fontSize: '30px'}}
             />
            <Dialog
                title="Namespace Edited successfully"
                actions={actions}
                modal={false}
                open={this.state.open1}
                onRequestClose={this.handleClose}
                titleStyle={{textAlign: 'center', fontSize: '30px'}}
             />
      </div>
    );
  }
}
