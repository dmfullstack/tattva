import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AVAvTimer from 'material-ui/svg-icons/av/av-timer';
import ImageStraighten from 'material-ui/svg-icons/image/straighten';

const styles = { 
     radioButton: {
     marginBottom: 16,
     marginLeft: 250
    }    
   };
export default class AddNamespace extends React.Component {
  render() {
   return (
   	   <div>
   	   <TextField floatingLabelText="ALIAS" style={{marginLeft:'250px'}}/>&emsp;
       <TextField floatingLabelText="DATA FIELD NAME"/>&emsp;
       <TextField floatingLabelText="SAMPLE DATA"/>&emsp;
       <FloatingActionButton mini={true} default={true}>
       <ContentRemove/>
       </FloatingActionButton>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" >
       <RadioButton value="not_light" label={<span><i className="material-icons">3d_rotation</i></span>}  style={styles.radioButton}/>
       <RadioButton value="light" label={<span><ImageStraighten/></span>} style={styles.radioButton}/>
       <RadioButton value="light1" label={<span><AVAvTimer/></span>} style={styles.radioButton}/>
       </RadioButtonGroup>
       </div>
       );
}
}