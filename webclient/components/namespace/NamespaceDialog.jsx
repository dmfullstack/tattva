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

const customContentStyle = {
 width: '60%',
 maxWidth: 'none',
};
export default class NamespaceDialog extends React.Component {
  constructor(props)
  {
   super(props);
   this.state = { descript:'',
   parsedata:false,
   BoxParsingValue:[],
   ParseFeilds:false,
   parseValues:[]
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
submit = () =>       
{
  console.log(this.state.parseValues);
  // console.log("inside adding");
  // $.ajax({
  //   type: 'POST',
  //   url:"http://localhost:8081/namespace/post",
  //   dataType: 'json',
  //   data: {namespace:this.state.names,description:this.state.descript},
  //   success:function(res)
  //   {
  //     console.log(res);
  //   }.bind(this),
  //   error:function(err)
  //   {
  //     console.log(err);
  //   }.bind(this)
  // });
};

addTextField = () =>
{
  this.setState({ParseFeilds:true});
  var add_object={"alias":"",
  "name":"",
  "sample":"",
  "type":""};
  var arr=this.state.parseValues;
  this.state.parseValues.splice(arr.length,0,add_object);
  this.setState({parseValues:this.state.parseValues});
};
handleParse = () =>{
 this.setState({ParseFeilds:true});
};
parseSampleToJSON = (data) =>
{
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
            outputData.push({
              "alias": j+"."+k,
              "name": j+"."+k,
              "sample": data[i][j][k],
              "type": type
            });
          }
        }
        else{
          outputData.push({
            "alias": j,
            "name": j,
            "sample": data[i][j],
            "type": type
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
          outputData.push({
            "alias": i+"."+j,
            "name": i+"."+j,
            "sample": data[i][j],
            "type": type
          });
        }
      }
      else{
        outputData.push({
          "alias": i,
          "name": i,
          "sample": data[i],
          "type": type
        });
      }
    }
  }
  console.log(outputData);
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
  console.log("parent",valobj.aliasfieldData);
  console.log("parent",valobj.position);

  var arr=this.state.parseValues;
  if (arr.indexOf(valobj.position) === -1) {
      arr[valobj.position].alias=valobj.aliasfieldData;
      console.log(arr[valobj.position].alias);
      // this.setState({parseValues:arr});
    }
    console.log(this.state.parseValues); 
};
handleNameTextBox =(valobj) =>
{
  console.log("parent",valobj.namefieldData);
  console.log("parent",valobj.position);
  this.state.parseValues[valobj.position].name=valobj.namefieldData;

  // this.state.parseValues[valobj.position]={"alias":this.state.parseValues[valobj.position].alias,"name":valobj.namefieldData,"sample":this.state.parseValues[valobj.position].sample,"type":this.state.parseValues[valobj.position].type};
 // this.setState({parseValues:this.state.parseValues});
      // arr[valobj.position]= {"alias":this.,"name":,"sample":,"type":};
      // console.log(arr[valobj.position].name);
      // // this.setState({parseValues:arr}); 
    //}
    console.log(this.state.parseValues); 
};
handleSampleTextBox =(valobj) =>
{
  console.log("parent",valobj.samplefieldData);
  console.log("parent",valobj.position);
  this.state.parseValues[valobj.position].sample=valobj.samplefieldData;
  //this.state.parseValues[valobj.position]={"alias":this.state.parseValues[valobj.position].alias,"name":valobj.namefieldData,"sample":this.state.parseValues[valobj.position].sample,"type":this.state.parseValues[valobj.position].type};
 // this.setState({parseValues:this.state.parseValues});
      // arr[valobj.position]= {"alias":this.,"name":,"sample":,"type":};
      // console.log(arr[valobj.position].name);
      // // this.setState({parseValues:arr}); 
    //}
    console.log(this.state.parseValues); 
};

  ParsingTextBoxValue = (e) =>
  {
    var data = JSON.parse(e.target.value);
    console.log(data);
    var d=this.parseSampleToJSON(data);
    this.setState({parseValues:d})
    var d=this.changeTextBox(d);
    console.log(d);
    d=JSON.stringify(d,null, 4);
    console.log(d);
    this.setState({BoxParsingValue:d});
  };
  removeTextField=(index)=>{

    this.state.parseValues.splice(index,1);

    this.setState({parseValues:this.state.parseValues},function()
     {   console.log(this.state.parseValues);
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
  <TextField floatingLabelText="NAME OF NAMESPACE*" onChange={this.namespace1}/>&emsp;&emsp;
  <TextField floatingLabelText="DESCRIPTION*" onChange={this.description1}/><br /><br />
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
<div className="container">
<div className="row">
<div className="col-xs">
<TextField floatingLabelText="NAME OF NAMESPACE*" onChange={this.namespace1}  /></div>
<div className="col-xs">
<TextField floatingLabelText="DESCRIPTION*" onChange={this.description1}/></div></div></div>
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
<RaisedButton label="Create" primary={true} onClick={this.submit}  />                           
</center>
</MediaQuery> 
</MediaQuery>
{/* media query for Desktops ends */}

</div>
);
}
}