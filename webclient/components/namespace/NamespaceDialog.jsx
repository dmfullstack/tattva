import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNamespace from './AddNamespace.jsx';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';
import {Link} from 'react-router';
import moment from 'moment';
import TextfieldsMap from './TextfieldsMap';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';

var obj=[];
const customContentStyle = {
 width: '60%',
 maxWidth: 'none',
};
export default class NamespaceDialog extends React.Component {
constructor(props)
{
   super(props);
   this.state = { descript:'',open:false,
   parsedata:false,
   BoxParsingValue:[],
   ParseFeilds:false,
   parseValues:[],
   names:'',
   message:'',
   namespaceerr:"",
   descripterr:"",parsefield:"",parseerr:""
 };
}
namespace1 = (e) =>
{
  this.setState({names:e.target.value});
};
description1 = (e) =>
{
  this.setState({descript:e.target.value});
};
handleOpen =() =>
{
  this.setState({open:true});
};
submit = () =>       
{
     if(this.state.names=="")
     {
       this.setState({descripterr:""});
       this.setState({namespaceerr:"Please fill the required fields"});
     }
     else if(!(this.state.names.match(/^[A-Za-z0-9\s]+$/)))
     {
       this.setState({descripterr:""});
       this.setState({namespaceerr:"Invalid Name for Namespace"});
     }
     else if(this.state.descript=="")
     {
       this.setState({namespaceerr:""});
       this.setState({descripterr:"Please fill the required fields"});
     }
     else if(this.state.parsefield=="")
     {
       this.setState({namespaceerr:"",descripterr:""});
       this.setState({parseerr:"Please enter data to parse"});
     }
     else{     
        this.setState({namespaceerr:""});
        this.setState({descripterr:""});
        this.setState({parseerr:""});
        $.ajax({
          type: 'POST',
          url:"http://localhost:8081/namespace/post",
          dataType: "json",
          data: {namespace:this.state.names,description:this.state.descript,dataSchema:this.state.parseValues},
          //data: {"hamespace":"nameSpace","description":"Description","dataSchema":"Schema"},
          success:function(res)
          {
            <Link to="/home">this.handleOpen();</Link>
            // this.handleOpen();
          }.bind(this),
          error:function(err)
          {
            console.log(err);
          }.bind(this)
      });
  }
};
addTextField = () =>
{ 
  var arr=this.state.parseValues;
  var id=arr.length+1;
  this.setState({ParseFeilds:true});
  var add_object={"alias":"",
  "name":"",
  "sample":"",
  "type":"",
  "id" :id
  };
  var arr=this.state.parseValues;
  this.state.parseValues.splice(arr.length,0,add_object);
  this.setState({parseValues:this.state.parseValues});
};
handleParse = () =>{
  this.setState({ParseFeilds:true});
};
parseSampleToJSON = (data) =>
{
  var id=-1;
  var outputData=[];
  var fieldCount = -1;
  for (var i in data){
    fieldCount = fieldCount+1;
    if ((typeof data[i]) === 'object') {
      var type;
      for (var j in data[i]) {
        if(moment(data[i][j],moment.ISO_8601).isValid()){
          type = "time"
        }
        else{
          if (isNaN(data[i][j])) {
            type = "dimension"
          } else {
            type = "measure"
          }
        }
        if(typeof data[i][j] == 'object' && !(Array.isArray(data[i][j]))){
          for (var k in data[i][j]){
            if(moment(data[i][j][k],moment.ISO_8601).isValid()){
              type = "time"
            }
            else{
              if (isNaN(data[i][j][k])){
                type = "dimension"
              } else {
                type = "measure"
              }
            }
            id=id+1;
            outputData.push({
              "alias": j+"."+k,
              "name": j+"."+k,
              "sample": data[i][j][k],
              "type": type,
              "id":id
            });
          }
        }
        else{
          id=id+1;
          outputData.push({
            "alias": j,
            "name": j,
            "sample": data[i][j],
            "type": type,
            "id":id
          });
        }
      }
    }
    else if ((typeof i) === 'string' && fieldCount != i) {
      var type;
      if(moment(data[i],moment.ISO_8601).isValid()){
        type = "time"
      }
      else{
        if (typeof data[i] === 'string') {
          type = "dimension"
        } else {
          type = "measure"
        }
      }
      if(typeof data[i] == 'object'){
        for (var j in data[i]){
          if(moment(data[i][j],moment.ISO_8601).isValid()){
            type = "time"
          }
          else{
            if (isNaN(data[i][j])) {
              type = "dimension"
            } else {
              type = "measure"
            }
          }
          id=id+1;
          outputData.push({
            "alias": i+"."+j,
            "name": i+"."+j,
            "sample": data[i][j],
            "type": type,
            "id":id
          });
        }
      }
      else{
        id=id+1;
        outputData.push({
          "alias": i,
          "name": i,
          "sample": data[i],
          "type": type,
          "id":id
        });
      }
    }
  }
  obj=outputData;
  return outputData;
};
changeTextBox = (data) =>
{
  var result = {};
  for (var i=0; i<data.length; i++) {
    result[data[i].name] = data[i].sample;
}

  //result
  return result;
};
handleAliasTextBox =(valobj) =>
{
  var arr=this.state.parseValues;
  if (arr.indexOf(valobj.position) === -1) {
      arr[valobj.position].alias=valobj.aliasfieldData;
      // this.setState({parseValues:arr});
    }
};
handleNameTextBox =(valobj) =>
{
  this.state.parseValues[valobj.position].name=valobj.namefieldData;
};
handleSampleTextBox =(valobj) =>
{
  this.state.parseValues[valobj.position].sample=valobj.samplefieldData;
};
ParsingTextBoxValue = (e) =>
{
  var data = JSON.parse(e.target.value);
  var d=this.parseSampleToJSON(data);
  this.setState({parseValues:d,parsefield:e.target.value})
  var d=this.changeTextBox(d);
  d=JSON.stringify(d,null, 4);
  this.setState({BoxParsingValue:d});
};
removeTextField=(index)=>{
  this.state.parseValues.splice(index,1);
  this.setState({parseValues:this.state.parseValues},function()
     {   
        console.log(this.state.parseValues);
    });
};
render() {
  {/*populating text fields*/}
     var viewTextFields=this.state.ParseFeilds? <TextfieldsMap data3={this.state.parseValues} removeTextField={this.removeTextField} changeAliasTextField={this.handleAliasTextBox} changeNameTextField={this.handleNameTextBox} changeSampleTextField={this.handleSampleTextBox}/>:null;
       return (
         <div>
  {/* media query for mobile devices starts*/} 
            <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                    <center>
                        <h1>Create Namespace Here </h1>
                        <TextField floatingLabelText="NAME OF NAMESPACE*" errorText={this.state.namespaceerr} onChange={this.namespace1}/>&emsp;&emsp;
                        <TextField floatingLabelText="DESCRIPTION*" errorText={this.state.descripterr} onChange={this.description1}/><br /><br />
                        <span><b>Define Data Schema For Namespace</b></span><br /><br /><br />
                        <TextField
                            id="ParsingValue"
                            multiLine={true}
                            rows={1}
                            textareaStyle={{color:"#33FF36"}}
                            style={{background:"black",height:"100px",width:"375px"}}
                            underlineShow={false}
                            value={this.state.BoxParsingValue}
                            onChange={this.ParsingTextBoxValue} 
                            errorText={this.state.parseerr}
                        /><br /><br />
                        <RaisedButton label="Parse" primary={true} onClick={this.handleParse}/>
                           {viewTextFields}
                        </center>       
                        <br />
                        <FloatingActionButton onClick={this.addTextField} mini={true} style={{float:"right"}}>
                            <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/home">
                        <RaisedButton label="Cancel" secondary={true} style={{marginTop:"100px",marginLeft:"20px"}}/>
                        </Link>&emsp;
                        <RaisedButton label="Create" primary={true} onClick={this.submit}  /> 
                    </center>
                </MediaQuery> 
            </MediaQuery>
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */} 
            <MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                    <center>
                        <h1> Create Namespace Here </h1>
                        <Paper zDepth={3} style={{width:"80%"}}>
                        <center>
                        <div className="container">
                        <div className="row">
                        <div className="col-xs">
                        <TextField floatingLabelText="NAME OF NAMESPACE*" errorText={this.state.namespaceerr} onChange={this.namespace1}  /></div>
                        <div className="col-xs">
                        <TextField floatingLabelText="DESCRIPTION*"  errorText={this.state.descripterr} onChange={this.description1}/></div></div></div>
                        <div style={{fontSize:'24px',marginTop:"70px"}}>
                        <span >Define Data Schema For Namespace</span></div><br /><br /><br />
                        <TextField
                            id="ParsingValue"
                            multiLine={true}
                            rows={1}
                            textareaStyle={{color:"#33FF36"}}
                            style={{background:"black",height:"50px",width:"475px"}}
                            underlineShow={false}
                            value={this.state.BoxParsingValue}
                            onChange={this.ParsingTextBoxValue} 
                            errorText={this.state.parseerr}
                        /><br /><br />
                        <RaisedButton label="Parse" primary={true} onClick={this.handleParse}/>
                            {viewTextFields}
                        <br/>
                        </center>  
                        <br />
                        <FloatingActionButton onClick={this.addTextField} mini={true} style={{float:"right",marginTop:"40px",marginRight:"62px"}}>
                            <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/home">
                        <RaisedButton label="Cancel" secondary={true} style={{marginTop:"120px",marginLeft:"100px",marginBottom:"50px"}}/>
                        </Link>&emsp;
                        <RaisedButton label="Create" primary={true} onClick={this.submit}  />                           
                        </center>
                        </Paper>
                    </center>
                </MediaQuery> 
            </MediaQuery>
  {/* media query for Desktops ends */}
            <Snackbar
                  open={this.state.open}
                  message="Namespace created successfully"
                  autoHideDuration={4000}
                  onRequestClose={this.handleClose}
            />
      </div>
    );
  }
}