import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';

export default class AddStreams extends React.Component {
  constructor(props){
       super(props);
       this.state = {value1:1};
   }
  remove =() =>
  {
    console.log(this.props.index);
    this.props.remove(this.props.index);
  }
  handleChange1 = (event,index,value1) => this.setState({value1});
  render() {
  return (
   	    <div >
      {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
                <TextField floatingLabelText="Select Field*" />&emsp;
                <DropDownMenu value={this.state.value1} maxHeight={300} style={{width:"275px"}} onChange={this.handleChange1}>
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
                <TextField floatingLabelText="Value*"/>
                <br/>
                <FloatingActionButton mini={true} default={true} onClick={this.remove} style={{float:"right",marginTop:"30px",marginLeft:"-40px"}}>
                  <ContentRemove/>
                </FloatingActionButton>
                <br /><br /><br /> 
            </MediaQuery> 
        </MediaQuery>  
      {/* media query for mobile devices ends*/}

      {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
                <TextField floatingLabelText="Select Field*" />&emsp;&emsp;
                <DropDownMenu value={this.state.value1} maxHeight={300} onChange={this.handleChange1}>
                    <MenuItem value={1} primaryText="OPERATORS*" />
                    <MenuItem value={2} primaryText="<" />
                    <MenuItem value={3} primaryText=">" />
                    <MenuItem value={4} primaryText="==" />
                    <MenuItem value={5} primaryText=">=" />
                    <MenuItem value={6} primaryText="<=" />
                    <MenuItem value={7} primaryText="!=" />
                    <MenuItem value={8} primaryText="Like" />
                    <MenuItem value={9} primaryText="Not Like" />
                </DropDownMenu>&emsp;&emsp; 
                <TextField floatingLabelText="Value*"/>
                <FloatingActionButton mini={true} default={true} onClick={this.remove} style={{float:"right",marginTop:"30px"}}>
                  <ContentRemove/>
                </FloatingActionButton> 
            </MediaQuery> 
        </MediaQuery>  
      {/* media query for Desktops ends */}     
        </div>
       );
}
}