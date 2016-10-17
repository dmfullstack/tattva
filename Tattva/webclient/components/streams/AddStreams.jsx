import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles={
  textfield:{
    marginLeft:187
  },
  button:{
    marginLeft:190,
    marginBottom:20
  },
  drop:{
    marginLeft:150,
    marginTop: 80
  }
  };
export default class AddStreams extends React.Component {
  constructor(props){
       super(props);
       this.state = {value1:1};
   }
   handleChange1 = (event,index,value1) => this.setState({value1});
  render() {
   return (
   	   <div >
   	   <TextField floatingLabelText="Select Field" style={styles.textfield}/>
       <DropDownMenu value={this.state.value1} maxHeight={300} style={styles.drop} onChange={this.handleChange1}>
            <MenuItem value={1} primaryText="OPERATORS*" />
            <MenuItem value={2} primaryText="<" />
            <MenuItem value={3} primaryText=">" />
            <MenuItem value={4} primaryText="==" />
            <MenuItem value={5} primaryText=">=" />
            <MenuItem value={6} primaryText="<=" />
            <MenuItem value={7} primaryText="!=" />
            <MenuItem value={8} primaryText="Like" />
            <MenuItem value={9} primaryText="Not Like" />
          </DropDownMenu>
          <TextField floatingLabelText="Value" style={styles.textfield}/>
       <FloatingActionButton mini={true} default={true} style={styles.button}>
       <ContentRemove/>
       </FloatingActionButton>      
       </div>
       );
}
}