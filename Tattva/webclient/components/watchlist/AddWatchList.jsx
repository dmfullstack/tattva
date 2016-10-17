import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

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
  },
  dv:{
      background:'#212121',
      marginLeft:900,
      height:120,
      width: 350,
      textColor:'#B71C1C'
    }
  };

export default class AddNamespace extends React.Component {
  
  render() {
   return (
   	   <div>
        <Paper style={styles.ppr} zDepth={2} >
        <TextField floatingLabelText="Left Hand Expression" style={styles.tf}/>&emsp;
        <TextField floatingLabelText="Operator"/>&emsp;
        <TextField floatingLabelText="Right Hand Expression"/>
        <TextField hintText="hi" style={styles.dv} underlineShow={false}/>
        </Paper> 
        <RaisedButton label="Remove" style={styles.rb}/> 
       </div>
       );
}
}