import React from 'react';
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
import Snackbar from 'material-ui/Snackbar';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const NAMES = require('../../dist/rawdata');
const STATES = require('../../dist/cities');

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class StreamsDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,selectedValue:"Select namespace",removeField:false,removeIndex:0,
                      nameerr:"",descripterr:"",addresserr:"",porterr:"",names:"",descript:"",
                      address:"",location:"",port:"",open:false,
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
   };
  handlerenderagain = () =>
   {
    this.setState({numChildren: this.state.numChildren - 1, removeField:false});
   };
  handleNamespace = (event, index, value) => 
   {
    this.setState({selectedValue:value});
   };
   handleOpen = () => {
    this.setState({open:true});
   };
   nameerror = (e) =>
   {
    this.setState({names:e.target.value});
   };
   descripterror = (e) =>
   {
    this.setState({descript:e.target.value});
   };
   addresserror = (e) =>
   {
    this.setState({address:e.target.value});
   };
   porterror = (e) =>
   {
    this.setState({port:e.target.value});
   };
   updateValue =(newValue)=> {
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
   createStream = () =>
   {
    if(this.state.names==""){
        this.setState({descripterr:"",addresserr:"",porterr:""});
        this.setState({nameerr:"Please fill the required fields"});
    }
    else if(!(this.state.names.match(/^[0-9A-Za-z\s]+$/)))
    {
       this.setState({descripterr:"",addresserr:"",porterr:""});
       this.setState({nameerr:"Invalid Name for Streams"});
    }
    else if(this.state.descript=="")
    {
        this.setState({nameerr:"",addresserr:"",porterr:""});
        this.setState({descripterr:"Please fill the required fields"}); 
    }
    else if(this.state.address=="")
    {
        this.setState({nameerr:"",descripterr:"",porterr:""});
        this.setState({addresserr:"Please fill the required fields"}); 
    }
    else if(!(this.state.address.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
))){
        this.setState({nameerr:"",descripterr:"",porterr:""});
        this.setState({addresserr:"Invalid IP address"});
    }
    else if(this.state.port=="")
    {
        this.setState({nameerr:"",addresserr:"",descripterr:""});
        this.setState({porterr:"Please fill the required fields"}); 
    }
    else if(!(this.state.port.match(/^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/)))
    {
        this.setState({nameerr:"",addresserr:"",descripterr:""});
        this.setState({porterr:"Invalid Port Number"}); 
    }
    else
    {
        this.setState({nameerr:"",addresserr:"",porterr:"",descripterr:""});
        this.handleOpen();
    }
   }

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
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    return (
      <div>
  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                        <center><h1>Create Streams Here </h1></center>
                        <Select placeholder="Select Namespace*" 
                        options={option} clearable={this.state.clear} 
                        disabled={this.state.disable} value={this.state.selectValue} 
                        onChange={this.updateValue} searchable={this.state.search}/>
                        <TextField floatingLabelText="NAME OF STREAM*" errorText={this.state.nameerr} onChange={this.nameerror}/>&nbsp;
                        <TextField floatingLabelText="DESCRIPTION*" errorText={this.state.descripterr} onChange={this.descripterror}/>&nbsp;
                        <TextField floatingLabelText="IP ADDRESS*" errorText={this.state.addresserr} onChange={this.addresserror}/>&nbsp;
                        <TextField floatingLabelText="PORT*" errorText={this.state.porterr} onChange={this.porterror}/>&nbsp;
                        <Select placeholder="Location*" 
                        options={options} clearable={this.state.clearable} 
                        disabled={this.state.disabled} value={this.state.selectedValue} 
                        onChange={this.updatedValue} searchable={this.state.searchable}/>
                        <br></br>
                        <center>
                        <span><b>Query Criteria-Build your query here</b></span>
                        </center>{children}
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/home"><RaisedButton label="Cancel" secondary={true}/></Link>&emsp;
                        <RaisedButton label="Create" primary={true} style={{marginTop:"100px"}} onClick={this.createStream}/>
                        </center>
                    </MediaQuery> 
        </MediaQuery> 
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                    <center>
                        <h1>Create Streams Here </h1>
                        <div className="container">
                        <div className="row center-xs">
                        <div className="col-xs-3">
                        <Select placeholder="Select Namespace*" 
                        options={this.props.data2} clearable={this.state.clear} disabled={this.state.disable} 
                        value={this.state.selectValue} onChange={this.updateValue} errorText={this.state.locationerr}
                        searchable={this.state.search} style={{marginTop:'30px'}}/>
                        </div>
                        <div className="col-xs-3"><TextField floatingLabelText="NAME OF STREAM*" errorText={this.state.nameerr} onChange={this.nameerror}/></div>&emsp;
                        <div className="col-xs-3"><TextField floatingLabelText="DESCRIPTION*" errorText={this.state.descripterr} onChange={this.descripterror}/></div>&emsp;
                        </div>
                        <div className="row center-xs">
                        <div className="col-xs-3">
                        <Select placeholder="Location*" 
                        options={options} clearable={this.state.clearable} disabled={this.state.disabled} 
                        value={this.state.selectedValue} onChange={this.updatedValue} 
                        searchable={this.state.searchable} style={{marginTop:"30px"}}/>
                        </div>
                        <div className="col-xs-3"><TextField floatingLabelText="IP ADDRESS*" errorText={this.state.addresserr} onChange={this.addresserror}/></div>&emsp;
                        <div className="col-xs-3"><TextField floatingLabelText="PORT*" errorText={this.state.porterr} onChange={this.porterror}/></div>&emsp;
                        </div>
                        </div>
                        <br></br>
                        <span style={{fontSize:"18px"}}>Query Criteria-Build your query here</span>
                        {children}</center>
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/home"><RaisedButton label="Cancel" secondary={true}/></Link>&emsp;
                        <RaisedButton label="Create" primary={true} onClick={this.createStream} style={{marginTop:"150px"}}/>
                        </center>
                      </MediaQuery> 
        </MediaQuery> 
  {/* media query for Desktops ends*/}
        <Snackbar
          open={this.state.open}
          message="Streams created successfully"
          autoHideDuration={4000}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}