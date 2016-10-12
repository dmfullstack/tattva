import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
export default class AddStream extends React.Component {
	   constructor(props){
        super(props);
        this.state = {value: 1,value1:1};
      }
   handleChange = (event, index, value) => this.setState({value});
   handleChange1 = (event, index, value1) => this.setState({value1});
   handleRemove = () => 
   {
      console.log("remove");
   };
   render() {
   	return (
   		<div>
		    <DropDownMenu value={this.state.value} maxHeight={300} style={{marginLeft:'300px', marginTop:'80'}} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="SELECT FIELD*" />
          <MenuItem value={2} primaryText="Namespace-1" />
          <MenuItem value={3} primaryText="Namespace-2" />
          <MenuItem value={4} primaryText="Namespace-3" />
          <MenuItem value={5} primaryText="Namespace-4" />         
          <MenuItem value={6} primaryText="Namespace-4" />
      	</DropDownMenu>
      	<DropDownMenu value={this.state.value1} maxHeight={300} style={{marginLeft:'300px', marginTop:'80'}} onChange={this.handleChange1}>
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

      <TextField floatingLabelText="Value*" style={{marginLeft:"220px"}} />
      <FloatingActionButton onClick={this.handleRemove} mini={true} default={true}>
       <ContentRemove/>
       </FloatingActionButton>
      </div>
      	);
   }
}
