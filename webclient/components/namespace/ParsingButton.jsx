import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import ParseMap from './ParseMap.jsx';
import moment from 'moment';
export default class ParsingButton extends React.Component {
  constructor(props){
       super(props);
       this.state = {BoxParsingValue:[],DataToFields:[],ParseFeilds:false};
   }
  handleParseTextBox = (e) =>
 {
  this.state = {ParseFeilds:true}; 
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
          return (outputData);
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
}

ParsingTextBoxValue = (e) =>
   {
          var data = JSON.parse(e.target.value);

          console.log(data);
          var d=this.parseSampleToJSON(data);
          var d=this.changeTextBox(d);
          console.log(d);
          d=JSON.stringify(d,null, 4);
          console.log(d);
          this.setState({BoxParsingValue:d});
   };
	 render() {
     return (
   		<div>
   	{/* media query for mobile devices starts*/}

   	    <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                  	<TextField
                    id="ParsingValue"
		   		           multiLine={true}
					           rows={1}
					           textareaStyle={{color:"#33FF36"}}
					           style={{background:"black",height:"100px",width:"200px"}}
					           underlineShow={false}
                     value={this.state.BoxParsingValue}
                     onChange={this.ParsingTextBoxValue} 
                     /><br /><br />
				   	        <RaisedButton label="Parse" primary={true} onClick={this.handleparse}/>
                </MediaQuery> 
        </MediaQuery>
    {/* media query for mobile devices ends*/}
    
    {/* media query for Desktops starts */}    
   	   	<MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                  	<TextField
                      id="ParsingValue"
			                multiLine={true}
					            rows={1}
					            textareaStyle={{color:"#33FF36"}}
					            style={{background:"black",height:"200px",width:"400px"}}
					            underlineShow={false} 
                      value={this.state.BoxParsingValue}
                      onChange={this.ParsingTextBoxValue}
                      />
					          <br /><br />
				   	        <RaisedButton label="Parse" primary={true} onClick={this.handleparse} />
                </MediaQuery> 
        </MediaQuery>
    {/* media query for Desktops ends */}
   	   </div>
   	   );
	}
}

