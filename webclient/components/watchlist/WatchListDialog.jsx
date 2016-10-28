import React from 'react';
import TextField from 'material-ui/TextField';
import AddWatchList from './AddWatchList.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import MenuItem from 'material-ui/MenuItem';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Link} from 'react-router';
import Snackbar from 'material-ui/Snackbar';

const NAMES = require('../../dist/rawdata');
const STREAMS = require('../../dist/rawstreamdata'

  );

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class WatchListDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,
                      dataSource: [],removeField:false,removeIndex:0,
                      open:false,openStream:false,openWatch:false,insert:false,data:[],
                      propTypes:{search: React.PropTypes.bool,searchable:React.PropTypes.bool},
                      namespace1:'values',
                      streamdata:'records',
                      disable: false,
                      disabled: false,
                      search:this.props.search,
                      searchable: this.props.searchable,
                      selectValue: '',
                      selectedValue:'',
                      clear: true,
                      clearable: true,
                      search:true,
                      searchable: true,                        
                      name:"",purpose:"",nameerr:"",
                      purposeerr:"",open:false
                     };
                    }
  handleChild = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
   };
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
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
  handleOpen = () => {
    this.setState({open:true});
   };
  adding = (e) =>
  {
      $.ajax({
      type: 'POST',
      url:"http://localhost:3001/namespace/",
      dataType: 'json',
      data: e,
            cache: false,
            success:function(){
              console.log("done");
            }.bind(this)
       });
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
  nameerror = (e) =>
  {
    this.setState({name:e.target.value});
  };
  purposeerror = (e) =>
  {
    this.setState({purpose:e.target.value});
  };
  createwatchlist = () =>
  {
    if(this.state.name=="")
    {
      this.setState({purposeerr:""});
      this.setState({nameerr:"Please fill the required fields"});
    }
    else if(!(this.state.name.match(/^[0-9A-Za-z\s]+$/)))
    {
        this.setState({purposeerr:""});
        this.setState({nameerr:"Invalid Name for WatchList"});
    }
    else if(this.state.purpose=="")
    {
      this.setState({nameerr:""});
      this.setState({purposeerr:"Please fill the required fields"});
    }
    else
    {
      this.setState({nameerr:"",purposeerr:""});
      this.handleOpen();
    }
  }
  render() {
    var option = NAMES[this.state.namespace1];
    var options = STREAMS[this.state.streamdata];
    var newcreate;
    if(this.state.open){
      newcreate= <NamespaceDialog  open={this.state.open} close={this.handleClose} name={this.adding}/>;
    }
    const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddWatchList key={i} index={i} remove={this.handleRemove}/>);
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
            <center>
            <h1>Create WatchList Here </h1>
            </center>
                <Select placeholder="Select Namespace*" 
                        options={option} clearable={this.state.clear} 
                        disabled={this.state.disable} value={this.state.selectValue} 
                        onChange={this.updateValue} searchable={this.state.search}/>
                <Select placeholder="Select Stream*" 
                        options={options} clearable={this.state.clearable} 
                        disabled={this.state.disabled} value={this.state.selectedValue} 
                        onChange={this.updatedValue} searchable={this.state.searchable}/>
                <center> 
                <TextField floatingLabelText="NAME OF WATCHLIST*" errorText={this.state.nameerr} onChange={this.nameerror}/>
                <TextField floatingLabelText="PURPOSE*" errorText={this.state.purposeerr} onChange={this.purposeerror}/></center>
                <br/>
                {children}
                <br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
                <br/><br/>
                <center>
                <Link to="/home"><RaisedButton label="Cancel" secondary={true} /></Link>&emsp;
                <RaisedButton label="Create" primary={true} onClick={this.createwatchlist} />
                </center>
            </MediaQuery> 
        </MediaQuery> 
      {/* media query for mobile devices ends*/}

      {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
                <center>
                <h1>Create WatchList Here </h1></center>
                <div className="container" >
                <div className="row center-xs">
                <div className="col-xs-3"></div>
                <div className="col-xs-4">
                <TextField floatingLabelText="NAME OF WATCHLIST*" errorText={this.state.nameerr} onChange={this.nameerror}/></div>
                <div className="col-xs-1"></div>
                <div className="col-xs-4">
                <TextField floatingLabelText="PURPOSE*" errorText={this.state.purposeerr} onChange={this.purposeerror}/></div>
                </div><br/>
                <div className="row center-xs">
                <div className="col-xs-3"></div>
                <div className="col-xs-4">
                <Select placeholder="Select Namespace*" 
                        options={option} clearable={this.state.clear} 
                        disabled={this.state.disable} value={this.state.selectValue} 
                        onChange={this.updateValue} searchable={this.state.search}/>
                </div>
                <div className="col-xs-1"></div>
                <div className="col-xs-4">
                <Select placeholder="Select Stream*" 
                        options={options} clearable={this.state.clearable} 
                        disabled={this.state.disabled} value={this.state.selectedValue} 
                        onChange={this.updatedValue} searchable={this.state.searchable}/>
                 </div>
                </div>
                </div>
                {newcreate}
                <br/>
                {children}
                <br/><br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} style={{marginTop:"130px"}}/>
                <br/><br/><br/>
                <center>
                <Link to="/home"><RaisedButton label="Cancel" secondary={true} /></Link>&emsp;
                <RaisedButton label="Create" primary={true} onClick={this.createwatchlist} />
                </center>
            </MediaQuery> 
        </MediaQuery> 
      {/* media query for Desktops ends */}
        <Snackbar
            open={this.state.open}
            message="WatchList created successfully"
            autoHideDuration={4000}
            onRequestClose={this.handleClose}
          />
      </div>
    );
  }
}