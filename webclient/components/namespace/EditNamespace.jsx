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

var obj=[];
export default class NamespaceDialog extends React.Component {
  constructor(props)
  {
   super(props);
   this.state = { descript:this.props.dataToEdit.description,
   parsedata:false,
   BoxParsingValue:[],
   ParseFeilds:false,
   parseValues:[],
   names:this.props.dataToEdit.namespace,
   message:'',
   namespaceerr:"",
   descripterr:"",parsefield:"",parseerr:"",
   do:false
 };
}
handleOpen =() =>
{
  this.setState({open:true});
};
closeDialog = (e) =>
{
  this.props.closeDia({});
};
namespace1 = (e) =>
{
  this.setState({names:e.target.value});
};
description1 = (e) =>
{
  this.setState({descript:e.target.value});
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
     else{     
       this.setState({namespaceerr:""});
       this.setState({descripterr:""});
       this.setState({parseerr:""});
       $.ajax({
       type: 'PUT',
       url:"http://localhost:8081/namespace/put/"+this.props.dataToEdit._id,
       dataType: "json",
       data: {namespace:this.state.names,description:this.state.descript,dataSchema:this.state.parseValues},
       success:function(res)
       {
          this.props.UpdateNameSpace({});
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
    {   console.log(this.state.parseValues);
    });
};
componentDidMount() 
{
  console.log(this.props.dataToEdit._id);
  var d = (this.props.dataToEdit.dataSchema);
  var d=this.changeTextBox(d);
  d=JSON.stringify(d,null, 4);
  this.setState({BoxParsingValue:d});
  var arr=this.props.dataToEdit.dataSchema;
  for (var i = 0; i < arr.length; i++) {
     arr[i]["id"]=i;
  }
  this.setState({parseValues:arr});
  this.setState({ParseFeilds:true});
}
render() {
{/*populating text fields*/}
  var viewTextFields=this.state.ParseFeilds? <TextfieldsMap data3={this.state.parseValues} removeTextField={this.removeTextField} changeAliasTextField={this.handleAliasTextBox} changeNameTextField={this.handleNameTextBox} changeSampleTextField={this.handleSampleTextBox}/>:null;
return (
    <div>
  {/* media query for mobile devices starts*/} 
      <MediaQuery query='(max-device-width: 487px)'>
          <MediaQuery query='(max-width: 487px)'>
              <center>
                  <h1>Edit Namespace Here </h1>
                  <TextField floatingLabelText="NAME OF NAMESPACE*" value={this.state.names} errorText={this.state.namespaceerr} onChange={this.namespace1}/>&emsp;&emsp;
                  <TextField floatingLabelText="DESCRIPTION*" value={this.state.descript} errorText={this.state.descripterr} onChange={this.description1}/><br /><br />
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
                  <RaisedButton label="Save" primary={true} onClick={this.submit} onTouchTap={this.closeDialog} /> 
                  </center>
          </MediaQuery> 
      </MediaQuery>
{/* media query for mobile devices ends*/}

{/* media query for Desktops starts */} 
      <MediaQuery query='(min-device-width: 487px)'>
          <MediaQuery query='(min-width: 487px)'>
              <center>
                  <h1> Edit Namespace Here </h1>
                  <div className="container">
                  <div className="row">
                  <div className="col-xs">
                  <TextField floatingLabelText="NAME OF NAMESPACE*" value={this.state.names} errorText={this.state.namespaceerr} onChange={this.namespace1}  /></div>
                  <div className="col-xs">
                  <TextField floatingLabelText="DESCRIPTION*" value={this.state.descript} errorText={this.state.descripterr} onChange={this.description1}/></div></div></div>
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
                  <RaisedButton label="Cancel" secondary={true} style={{marginTop:"120px",marginLeft:"100px"}}/>
                  </Link>&emsp;
                  <Link to="/viewnamespace">
                  <RaisedButton label="Save" primary={true} onClick={this.submit} onTouchTap={this.closeDialog}/>  
                  </Link>&emsp;                         
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