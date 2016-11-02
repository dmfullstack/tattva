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
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const NAMES = require('../../dist/rawdata');
const STATES = require('../../dist/cities');

export default class EditStream extends React.Component {
constructor(props){
      super(props);
      this.state = {numChildren:0,value1:1,removeField:false,removeIndex:0,
                    propTypes:{search: React.PropTypes.bool,searchable:React.PropTypes.bool},
                    name:'values',
                    city:'cities',
                    disable: false,
                    disabled: false,
                    search:this.props.search,
                    searchable: this.props.searchable,
                    selectValue: '',
                    selectedValue:'',
                    clear: true,
                    clearable: true,
                    search:true,
                    searchable: true         
                    };
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
updateValue =(newValue)=> 
{
     console.log('State changed to ' + newValue);
     this.setState({
     selectValue: newValue
     });
};
updatedValue =(Value)=> {
     console.log('Value changed to'+ Value);
     this.setState({
     selectedValue: Value
     });
};
render() {
  {/* calling AddStreams component */}
    var option = NAMES[this.state.name];
    var options = STATES[this.state.city];
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
                <Select placeholder="Select Namespace*" 
                  options={option} clearable={this.state.clear} 
                  disabled={this.state.disable} value={this.state.selectValue} 
                  onChange={this.updateValue} searchable={this.state.search}/>
                <TextField floatingLabelText="NAME OF STREAM*" />&nbsp;
                <TextField floatingLabelText="DESCRIPTION*" />&nbsp;
                <TextField floatingLabelText="ADDRESS*" />&nbsp;
                <TextField floatingLabelText="PORT*"/>&nbsp;
                <Select placeholder="Location*" 
                  options={options} clearable={this.state.clearable} disabled={this.state.disabled} 
                  value={this.state.selectedValue} onChange={this.updatedValue} 
                  searchable={this.state.searchable} style={{marginTop:'30px'}}/>
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
                <Link to="/stream"><RaisedButton label="Cancel" secondary={true}/></Link>&emsp;
                <RaisedButton label="Edit" primary={true} style={{marginTop:"100px"}}/>
                </center>
            </MediaQuery> 
      </MediaQuery> 
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}

      <MediaQuery query='(min-device-width: 487px)'>
          <MediaQuery query='(min-width: 487px)'><center>
                <h1> Edit Streams </h1>
                <div className="container">
                <div className="row center-xs">
                <div className="col-xs-3">
                <Select placeholder="Select Namespace*" 
                  options={option} clearable={this.state.clear} disabled={this.state.disable} 
                  value={this.state.selectValue} onChange={this.updateValue} 
                  searchable={this.state.search} style={{marginTop:'30px'}}/>
                </div>
                <div className="col-xs-3"><TextField floatingLabelText="NAME OF STREAM*" /></div>&emsp;
                <div className="col-xs-3"><TextField floatingLabelText="DESCRIPTION*" /></div>&emsp;
                </div>
                <div className="row center-xs">
                <div className="col-xs-3">
                <Select placeholder="Location*" 
                  options={options} clearable={this.state.clearable} disabled={this.state.disabled} 
                  value={this.state.selectedValue} onChange={this.updatedValue} 
                  searchable={this.state.searchable} style={{marginTop:'30px'}}/>
                </div>
                <div className="col-xs-3"><TextField floatingLabelText="ADDRESS*" /></div>&emsp;
                <div className="col-xs-3"><TextField floatingLabelText="PORT*" /></div>&emsp;
                </div>
                </div>
                <br/><br/><br/>
                <span style={{fontSize:"18px"}}>Query Criteria-Build your query here</span>
                 {children}</center>
                <br/>
                <br/>
                <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                  <ContentAdd/>
                </FloatingActionButton>
                <center>
                <Link to="/stream"><RaisedButton label="Cancel" secondary={true} style={{marginTop:"200px"}}/></Link>&emsp;
                <RaisedButton label="Edit" primary={true} />
                </center>
          </MediaQuery> 
      </MediaQuery> 
  {/* media query for Desktops ends*/}
      </div>
    );
  }
}