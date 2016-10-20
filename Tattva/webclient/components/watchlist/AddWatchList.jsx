import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';

const styles = {

  ppr:{
    height:200,
    width: 1450,
    margin: 10
  },

  tf:{
     marginLeft:20
  },

  rb:{
     margin:20,
     marginLeft:1370
  }
  
  };

export default class AddNamespace extends React.Component {
  
  render() {
   return (
   	   <div>
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <center>
                <Paper zDepth={2} >
                <TextField floatingLabelText="Left Hand Expression" />&emsp;
                <TextField floatingLabelText="Operator"/>&emsp;
                <TextField floatingLabelText="Right Hand Expression"/>
                <br />
                <TextField
                multiLine={true}
                rows={1}
                textareaStyle={{color:"#33FF36"}}
                style={{background:"black",height:"200px",width:"250px"}}
                underlineShow={false} />
                <br /><br /><br /><br />
                </Paper> 
            </center>
                <br />
                <RaisedButton label="Remove" style={{float:"right"}}/> 
                <br/><br/><br/>
            </MediaQuery>
        </MediaQuery>

        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
            <center>
                <Paper zDepth={2} >
                <TextField floatingLabelText="Left Hand Expression" />&emsp;
                <TextField floatingLabelText="Operator"/>&emsp;
                <TextField floatingLabelText="Right Hand Expression"/>
                <br />
                <TextField
                multiLine={true}
                rows={1}
                textareaStyle={{color:"#33FF36"}}
                style={{background:"black",height:"300px",width:"400"}}
                underlineShow={false} />
                <br /><br /><br /><br />
                </Paper> 
            </center>
                <br />
                <RaisedButton label="Remove" style={{float:"right"}}/> 
                <br/><br/><br/>
            </MediaQuery>
        </MediaQuery>
       </div>
       );
}
}