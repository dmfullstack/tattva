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
       this.state = {numChildren:0,
                      removeField:false,
                      removeIndex:0,
                      names:'',
                      descript:'',
                      parsedata:false,
                      BoxParsingValue:[],
                      DataToFields:[],
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
      console.log("inside adding");
      $.ajax({
      type: 'POST',
      url:"http://localhost:8081/namespace/post",
      dataType: 'json',
      data: {namespace:this.state.names,description:this.state.descript},
      success:function(res)
      {
        console.log(res);
      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });
  };
  
  addTextField = () =>
   {
    var add_object={"alias":"",
                "name":"",
                "sample":"",
                "type":""};
    var arr=this.state.parseValues;
      this.state.parseValues.splice(arr.length,0,add_object);
       this.setState({parseValues:this.state.parseValues});
   };
  handleRemove = (index) =>
   {
      this.setState({removeField:true, removeIndex:index});
      console.log("state is marked");
   };
  handlerenderagain = () =>
   {
    console.log("called rerender again");
    this.setState({numChildren: this.state.numChildren - 1, removeField:false});
   };
  handleParse = () =>{
   this.setState({parsedata:true});
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

handleparse = () => {
    this.setState({ParseFeilds:true})
};
handleAliasTextBox =(valobj) =>
   {
    console.log("parent",valobj.aliasfieldData);
     console.log("parent",valobj.position);
    //   var arr=this.state.parseValues;
    //   for(var i=0;i<arr.length;i++){
    //   if(arr[i].Key==key){
    //       arr[i].Value=value; 
    //       break;
    //   }

    // }
   }
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
    {/* calling AddNamespace component  */}

    var children = [];
        for (var i = 0; i < this.state.numChildren; i+=1) 
        {
            children.push(<AddNamespace key={i} index={i} remove={this.handleRemove}/>)
        };
        if (this.state.removeField==true) {
              console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    {/* calling parsing button component */}  
    var pdata;
       if(this.state.parsedata){
         pdata=<ParsingButton />;
       }
    {/*populating text fields*/}
    var viewTextFields=this.state.ParseFeilds? <TextfieldsMap data3={this.state.parseValues} removeTextField={this.removeTextField} changeAliasTextField={this.handleAliasTextBox}/>:null;
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
                    <RaisedButton label="Parse" primary={true} onClick={this.handleparse}/>
                    {viewTextFields}
                  </center>
                         {children}       
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
                          <RaisedButton label="Parse" primary={true} onClick={this.handleparse}/>
                          {viewTextFields}
                             <br/>
                        
                             {children} 
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