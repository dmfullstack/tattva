import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentView from 'material-ui/svg-icons/action/view-list';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import AddNamespace from './AddNamespace.jsx';
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

let obj = [];
// const customContentStyle = {
//  width: '60%',
//  maxWidth: 'none',
// };
export default class NamespaceDialog extends React.Component {
constructor(props)
{
   super(props);
   this.state = {
     operation: this.props.params.operation, descript: '', open: false, parsedata: false,
     BoxParsingValue: [], ParseFeilds: false, parseValues: [], names: '', message: '',
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
handleOpen =(res) =>
{
  this.setState({open: true});
};
handleClose =(res) =>
{
  this.setState({open: false});
};
handleOpen1 =(res) =>
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
       url: 'http://localhost:8081/namespace/put/' + this.props.params.id,
       dataType: 'json',
       data: {namespace: this.state.names,
              description: this.state.descript,
              dataSchema: this.state.parseValues},
       success: function(res)
       {
        this.handleOpen1();
       }.bind(this),
       error: function(err)
       {
         console.log(err);
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
          success: function(res)
          {
            this.handleOpen();
          }.bind(this),
          error: function(err)
          {
            console.log(err);
          }
      });
  }
};
addTextField = () =>
{
  let arr = this.state.parseValues;
  let id = arr.length + 1;
  this.setState({ParseFeilds: true});
  let add_object = {alias: '', name: '', sample: '', type: '', id: id };
  arr = this.state.parseValues;
  this.state.parseValues.splice(arr.length, 0, add_object);
  this.setState({parseValues: this.state.parseValues});
};
handleParse = () =>{
  this.setState({ParseFeilds: true});
};
parseSampleToJSON = (data) =>
{
  let id = -1;
  let outputData = [];
  let fieldCount = -1;
  for (let i in data) {
    fieldCount = fieldCount + 1;
    if (typeof data[i] === 'object') {
      let type;
      for (let j in data[i]) {
        if(moment(data[i][j], moment.ISO_8601).isValid()) {
          type = 'time';
        }
        else if (isNaN(data[i][j])) {
            type = 'dimension';
          } else {
            type = 'measure';
          }
        if(typeof data[i][j] === 'object' && !Array.isArray(data[i][j])) {
          for (let k in data[i][j]) {
            if(moment(data[i][j][k], moment.ISO_8601).isValid()) {
              type = 'time';
            }
            else if (isNaN(data[i][j][k])) {
                type = 'dimension';
              } else {
                type = 'measure';
              }
            id = id + 1;
            outputData.push({
              alias: j + '.' + k,
              name: j + '.' + k,
              sample: data[i][j][k],
              type: type,
              id: id
            });
          }
        }
        else{
          id = id + 1;
          outputData.push({
            alias: j,
            name: j,
            sample: data[i][j],
            type: type,
            id: id
          });
        }
      }
    }
    else if (typeof i === 'string' && fieldCount !== i) {
      let type;
      if(moment(data[i], moment.ISO_8601).isValid()) {
        type = 'time';
      }
      else if (typeof data[i] === 'string') {
          type = 'dimension';
        } else {
          type = 'measure';
        }
      if(typeof data[i] === 'object') {
        for (let j in data[i]) {
          if(moment(data[i][j], moment.ISO_8601).isValid()) {
            type = 'time';
          }
          else if (isNaN(data[i][j])) {
              type = 'dimension';
            } else {
              type = 'measure';
            }
          id = id + 1;
          outputData.push({
            alias: i + '.' + j,
            name: i + '.' + j,
            sample: data[i][j],
            type: type,
            id: id
          });
        }
      }
      else{
        id = id + 1;
        outputData.push({
          alias: i,
          name: i,
          sample: data[i],
          type: type,
          id: id
        });
      }
    }
  }
  obj = outputData;
  return outputData;
};
changeTextBox = (data) =>
{
  let result = {};
  for (let i = 0; i < data.length; i++) {
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
ParsingTextBoxValue = (e) =>
{
  let data = JSON.parse(e.target.value);
  let d = this.parseSampleToJSON(data);
  this.setState({parseValues: d, parsefield: e.target.value});
  d = this.changeTextBox(d);
  d = JSON.stringify(d, null, 4);
  this.setState({BoxParsingValue: d});
};
removeTextField=(index)=>{
  this.state.parseValues.splice(index, 1);
  this.setState({parseValues: this.state.parseValues}, function()
     {
        console.log(this.state.parseValues);
     });
};

fillData =(data)=> {
    this.setState({data2: data});
    let d = this.state.data2.dataSchema;
    d = this.changeTextBox(d);
    d = JSON.stringify(d, null, 4);
    this.setState({BoxParsingValue: d});
    let arr = this.state.data2.dataSchema;
    for (let i = 0; i < arr.length; i++) {
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
      error: function(err) {
       console.log(err);
       }
      });
  }
  else{
    this.setState({hideHeading: false});
  }
}
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
                        <Subheader style={{background: '#BA6694',
                                           fontSize: '28px',
                                           color: 'white',
                                           marginTop: '10px'}}>
                        NameSpace</Subheader>
                        <Link to="/viewnamespace">
                        <FloatingActionButton onClick={this.addTextField}
                                              mini={true} disabled={true}
                                              style={{float: 'right',
                                                      marginTop: '-45px',
                                                      marginRight: '20px'}}>
                         <ContentView/>
                        </FloatingActionButton>
                        </Link>
                        <center>
                        { this.state.hideHeading ? null : <h1>Create Namespace Here </h1>}
                        { this.state.hideHeading ? <h1>Edit Namespace Here </h1> : null}
                        <TextField disabled={this.state.hideHeading}
                                   floatingLabelText="NAME OF NAMESPACE*"
                                   value={this.state.names}
                                   errorText={this.state.namespaceerr}
                                   onChange={this.namespace1}/>&emsp;&emsp;
                        <TextField floatingLabelText="DESCRIPTION*"
                                   value={this.state.descript}
                                   errorText={this.state.descripterr}
                                   onChange={this.description1}/><br /><br />
                        <span><b>Define Data Schema For Namespace</b></span><br /><br /><br />
                        <TextField
                            id="ParsingValue"
                            multiLine={true}
                            rows={1}
                            placeholder="Paste Sample Data JSON Format Here"
                            textareaStyle={{color: '#33FF36'}}
                            style={{background: 'black', height: '100px', width: '375px'}}
                            underlineShow={false}
                            value={this.state.BoxParsingValue}
                            onChange={this.ParsingTextBoxValue}
                            errorText={this.state.parseerr}
                        /><br /><br />
                        <RaisedButton label="Parse" buttonStyle={{backgroundColor: '#5CA59F'}}
                                      onClick={this.handleParse}/>
                           {viewTextFields}
                        </center>
                        <br />
                        <FloatingActionButton onClick={this.addTextField}
                                              mini={true} style={{float: 'right'}}>
                            <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/home">
                        <RaisedButton label="Cancel" style={{marginTop: '100px',
                                                             marginLeft: '20px'}}/>
                        </Link>&emsp;
                        { this.state.hideHeading ? null : <RaisedButton label="Create"
                                                  buttonStyle={{backgroundColor: '#5CA59F'}}
                                                  onClick={this.submit}/>}
                        { this.state.hideHeading ? <RaisedButton label="Save"
                                                  buttonStyle={{backgroundColor: '#5CA59F'}}
                                                  onClick= {this.saveData}/>: null}
                    </center>
                </MediaQuery>
            </MediaQuery>
  {/* media query for mobile devices ends*/}
  {/* media query for Desktops starts */}
            <MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                 <Subheader style={{background: '#BA6694',
                                    fontSize: '28px',
                                    color: 'white',
                                    marginTop: '1px'}}>
                     NameSpace</Subheader>
                    <Link to="/viewnamespace">
                       <FloatingActionButton onClick={this.addTextField}
                                             mini={true} disabled={true}
                                             style={{float: 'right',
                                                     marginTop: '-45px',
                                                     marginRight: '20px'}}>
                         <ContentView/>
                       </FloatingActionButton>
                    </Link>
                    <center>
                        { this.state.hideHeading ? null : <h1>Create Namespace Here </h1>}
                        { this.state.hideHeading ? <h1>Edit Namespace Here </h1> : null}
                        <Paper zDepth={3} style={{width: '80%'}}>
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
                        <TextField
                            id="ParsingValue"
                            multiLine={true}
                            rows={1}
                            placeholder="Paste Sample Data JSON Format Here"
                            textareaStyle={{color: '#33FF36'}}
                            style={{background: 'black', height: '400px', width: '600px'}}
                            underlineShow={false}
                            value={this.state.BoxParsingValue}
                            onChange={this.ParsingTextBoxValue}
                            errorText={this.state.parseerr}
                        /><br /><br />
                        <RaisedButton label="Parse" onClick={this.handleParse}
                                      buttonStyle={{backgroundColor: '#5CA59F'}} />
                            {viewTextFields}
                        <br/>
                        </center>
                        <br />
                        <FloatingActionButton onClick={this.addTextField}
                                              mini={true}
                                              style={{float: 'right',
                                                      marginTop: '40px',
                                                      marginRight: '62px'}}>
                            <ContentAdd/>
                        </FloatingActionButton>
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
             />
            <Dialog
                title="Namespace Edited successfully"
                actions={actions}
                modal={false}
                open={this.state.open1}
                onRequestClose={this.handleClose}
             />
      </div>
    );
  }
}
