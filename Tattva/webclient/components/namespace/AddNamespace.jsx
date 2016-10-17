import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles={
  textfield:{marginLeft:70},
  radio:{
    marginLeft:730,
    marginTop:-40
  },
  button:{
    marginLeft:1050,
    marginBottom:20
  }
  };
export default class AddNamespace extends React.Component {

  remove =() =>
  {
    console.log("Hello")
    console.log(this.props.index);
    this.props.remove(this.props.index);
  }
  
  render() {
   return (
   	   <div >
   	   <TextField floatingLabelText="ALIAS" style={styles.textfield}/>
       <TextField floatingLabelText="DATA FIELD NAME" style={styles.textfield}/>
       <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={styles.radio}>
       <RadioButton value="not_light" label="Dimension(differentiates data)"  />
       <RadioButton value="light" label="Measure(measurable field)" />
       </RadioButtonGroup>
       <FloatingActionButton mini={true} default={true} style={styles.button} onClick={this.remove}>
       <ContentRemove/>
       </FloatingActionButton>
       </div>
       );
}
}