import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddStreams from './AddStreams.jsx';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
export default class EditStream extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,value1:1,removeField:false,removeIndex:0};
   }
  handleChild = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
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
  render() {
  {/* calling AddStreams component */}
    const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddStreams key={i} index={i} remove={this.handleRemove}/>);
        };
        if (this.state.removeField==true) {
              console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    return (
      <div>
  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                        <center>
                        <h1> Edit Streams </h1>
                        <DropDownMenu value={this.state.value1} maxHeight={300} onChange={this.handleChange1} >
                          <MenuItem value={1} primaryText="Select namespace*" />
                          <MenuItem value={2} primaryText="Namespace-1" />
                          <MenuItem value={3} primaryText="Namespace-2" />
                          <MenuItem value={4} primaryText="Namespace-3" />
                          <MenuItem value={5} primaryText="Namespace-4" />
                          <MenuItem value={6} primaryText="Namespace-5" />
                        </DropDownMenu>
                        <TextField floatingLabelText="NAME OF STREAM*" />&nbsp;
                        <TextField floatingLabelText="DESCRIPTION*" />&nbsp;
                        <TextField floatingLabelText="ADDRESS*" />&nbsp;
                        <TextField floatingLabelText="PORT*"/>&nbsp;
                        <TextField floatingLabelText="LOCATION*" />
                        <br></br>
                        <center>
                        <br/><br/>
                        <span><b>Query Criteria-Build your query here</b></span>
                        </center>{children}
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                        <RaisedButton label="Edit" primary={true} style={{marginTop:"100px"}}/>&emsp;
                        <Link to="/stream"><RaisedButton label="Cancel" primary={true}/></Link>
                        </center>
                    </MediaQuery> 
        </MediaQuery> 
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'><center>
                        <h1> Edit Streams </h1>
                        <DropDownMenu value={this.state.value1} maxHeight={300} onChange={this.handleChange1}>
                          <MenuItem value={1} primaryText="Select namespace*" />
                          <MenuItem value={2} primaryText="Namespace-1" />
                          <MenuItem value={3} primaryText="Namespace-2" />
                          <MenuItem value={4} primaryText="Namespace-3" />
                          <MenuItem value={5} primaryText="Namespace-4" />
                          <MenuItem value={6} primaryText="Namespace-5" />
                        </DropDownMenu>&emsp;
                        <TextField floatingLabelText="NAME OF STREAM*" />&emsp;&emsp;
                        <TextField floatingLabelText="DESCRIPTION*" /><br/>
                        <TextField floatingLabelText="ADDRESS*" />&emsp;
                        <TextField floatingLabelText="PORT*" />&emsp;
                        <TextField floatingLabelText="LOCATION*" />
                        
                        <br/><br/><br/>
                        <span style={{fontSize:"25px"}}><b>Query Criteria-Build your query here</b></span>
                        {children}</center>
                        <br/>
                        <br/>
                        <center>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                        <RaisedButton label="Edit" primary={true} style={{marginTop:"200px"}}/>&emsp;
                        <Link to="/stream"><RaisedButton label="Cancel" primary={true}/></Link>
                        </center>
                    </MediaQuery> 
        </MediaQuery> 
  {/* media query for Desktops ends*/}
      </div>
    );
  }
}