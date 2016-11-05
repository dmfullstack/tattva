import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentView from 'material-ui/svg-icons/action/view-list';
import AddStreams from './AddStreams.jsx';
import FetchingMap from './FetchingMap.jsx';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import Select from 'react-select';
import $ from 'jquery';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ViewList from 'material-ui/svg-icons/action/view-list';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none'
};
export default class StreamsDialog extends React.Component {
constructor(props) {
   super(props);
    this.state = {removeField: false, removeIndex: 0, nameerr: '', descripterr: '',
                  addresserr: '', porterr: '', sourceErr: '', names: '', descript: '', source: '',
                  address: '', location: '', port: '', open: false, open2: false, name: 'values',
                  disable: false, disabled: false, selectValue: '', queryCriteria: [],
                  selectedValue: 'Select namespace', updateStream: '', dataSchemaName: [],
                  namespace: '', stream: '', description: '', source: '', ip_address: '', port: '',
                  toggleDisplay: true, criteriaArray: [], viewCriteria: false
                  };
}
handleRemove = (index) =>
{
      this.setState({removeField: true, removeIndex: index});
};
handleNamespace = (event, index, value) =>
{
     this.setState({selectedValue: value});
     console.log(this.state.selectedValue);
};
handleOpen = () => {
     this.setState({open: true});
};
handleOpen2 = () => {
     this.setState({open2: true});
};
handleClose2 = () => {
     this.setState({open2: false});
};
handleStreamName = (e) =>
{
     this.setState({stream: e.target.value});
     console.log(this.state.stream);
};
handleDescription = (e) =>
{
     this.setState({description: e.target.value});
     console.log(this.state.description);
};
handleSource = (e) => {
     this.setState({source: e.target.value});
     console.log(this.state.source);
};
handleAddress = (e) =>
{
     this.setState({ip_address: e.target.value});
     console.log(this.state.address);
};
handlePort = (e) =>
{
     this.setState({port: e.target.value});
     console.log(this.state.port);
};

createStream = () =>
{
      if(this.state.stream == '') {
          this.setState({descripterr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({nameerr: 'Please fill the required fields'});
      }
      else if(!this.state.stream.match(/^[0-9A-Za-z\s]+$/))
      {
          this.setState({nameerr: 'Invalid Name for Streams'});
      }
      else if(this.state.description == '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({descripterr: 'Please fill the required fields'});
      }
      else if(this.state.source == '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: ''});
          this.setState({sourceErr: 'Please fill the required fields'});
      }
      else if(this.state.ip_address == '')
      {
          this.setState({nameerr: '', descripterr: '', porterr: '', sourceErr: ''});
          this.setState({addresserr: 'Please fill the required fields'});
      }
      else if(!this.state.ip_address.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  )) {
          this.setState({nameerr: '', descripterr: '', porterr: ''});
          this.setState({addresserr: 'Invalid IP address'});
      }
      else if(this.state.port == '')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: ''});
          this.setState({porterr: 'Please fill the required fields'});
      }
      else if(!this.state.port.match(/^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/))
      {
          this.setState({nameerr: '', addresserr: '', descripterr: ''});
          this.setState({porterr: 'Invalid Port Number'});
      }
      else if(this.state.selectedValue == 'Select namespace')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: '', porterr: ''});
          this.handleOpen2();
      }
      else
      {
          this.handleClose2();
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: '', sourceErr: ''});
          this.handleOpen();
                  $.ajax({
                    type: 'POST',
                    url: '/stream/post',
                    dataType: 'json',
                    data: {namespace: this.state.selectedValue, stream: this.state.stream, description: this.state.description,
                            source: this.state.source, ip_address: this.state.ip_address, port: this.state.port, queryCriteria: this.state.queryCriteria},
                    success: function(res)
                    {
                      console.log('sdc');
                      this.handleOpen();
                      console.log('res', res);
                    }.bind(this),
                    error: function(err)
                    {
                      console.log(err);
                    }
                });
              }
};
editStream = () =>
{
      if(this.state.stream == '') {
          this.setState({descripterr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({nameerr: 'Please fill the required fields'});
      }
      else if(!this.state.stream.match(/^[0-9A-Za-z\s]+$/))
      {
          this.setState({nameerr: 'Invalid Name for Streams'});
      }
      else if(this.state.description == '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({descripterr: 'Please fill the required fields'});
      }
      else if(this.state.source == '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: ''});
          this.setState({sourceErr: 'Please fill the required fields'});
      }
      else if(this.state.ip_address == '')
      {
          this.setState({nameerr: '', descripterr: '', porterr: '', sourceErr: ''});
          this.setState({addresserr: 'Please fill the required fields'});
      }
      else if(!this.state.ip_address.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  )) {
          this.setState({nameerr: '', descripterr: '', porterr: ''});
          this.setState({addresserr: 'Invalid IP address'});
      }
      else if(this.state.port == '')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: ''});
          this.setState({porterr: 'Please fill the required fields'});
      }
      else if(!this.state.port.match(/^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/))
      {
          this.setState({nameerr: '', addresserr: '', descripterr: ''});
          this.setState({porterr: 'Invalid Port Number'});
      }
      else if(this.state.selectedValue == 'Select namespace')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: '', porterr: ''});
          this.handleOpen2();
      }
      else
      {
          this.handleClose2();
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: '', sourceErr: ''});
          this.handleOpen();
                 $.ajax({
           type: 'PUT',
           url: 'http://localhost:8081/stream/put/' + this.props.stream,
           datatype: 'JSON',
           data: {namespace: this.state.selectedValue, stream: this.state.stream, description: this.state.description, source: this.state.source,
                  ip_address: this.state.ip_address, port: this.state.port, queryCriteria: this.state.queryCriteria},
           success: function(res) {
            console.log('response', res);
                },
           error: function(err) {
            console.log('error', err);
          }
     });
              }
};

handleOperators = (object) => {
     console.log('inside handleOperators', object);
     console.log(this.state.queryCriteria);
        this.state.queryCriteria[object.index].operators = object.operatorValue;
};
handleFields = (object) =>
{
     console.log('inside handleFields', object);
        this.state.queryCriteria[object.index].fields = object.fieldValue;
};
handleValue = (object) => {
     this.state.queryCriteria[object.index].value = object.value;
};
handleEditStream = () => {
    this.setState({viewCriteria: true});

    this.setState({selectedValue: this.state.updateStream.namespace});
    this.setState({stream: this.state.updateStream.stream});
    this.setState({description: this.state.updateStream.description});
    this.setState({source: this.state.updateStream.source});
    this.setState({ip_address: this.state.updateStream.ip_address});
    this.setState({port: this.state.updateStream.port});
    this.setState({queryCriteria: this.state.updateStream.queryCriteria});
};
componentDidMount = () =>{
if(this.props.operations == 'edit')
{
        console.log('sdfvfd', this.props.stream);
        this.setState({toggleDisplay: false});

        $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/stream/get/' + this.props.stream,
        dataType: 'json',
        success: function(res) {
          this.setState({updateStream: res});
                      $.ajax({
                  type: 'GET',
                  url: 'http://localhost:8081/namespace/get/' + this.state.updateStream.namespace,
                  dataType: 'json',
                  success: function(res) {
                    this.setState({dataSchemaName: res.dataSchema});
                    this.handleEditStream();
                  }.bind(this),
                  error: function(err) {
                    console.log('error', err);
                  }
               });
        }.bind(this),
        error: function(err) {
          console.log('error', err);
        }
     });
      }
};
handleChild = () =>
{
    if(this.state.selectedValue == 'Select namespace')
    {
        this.handleOpen2();
    }
    else
    {
        this.handleClose2();

        let arr = this.state.queryCriteria;
        this.setState({viewCriteria: false});
        console.log('one', this.state.queryCriteria);
        let addObject = {fields: 'Field', operators: '1', value: ' '};

        this.state.queryCriteria.push(addObject);
        this.setState({queryCriteria: this.state.queryCriteria});
        console.log('two', this.state.queryCriteria);
        this.setState({viewCriteria: true});
    }
};
handleRemove = (index) =>
{
      this.state.queryCriteria.splice(index, 1);
      this.setState({queryCriteria: this.state.queryCriteria});
};
render() {
      console.log(this.state.queryCriteria);
      let viewQuery = this.state.viewCriteria ? <FetchingMap queryCrit={this.state.queryCriteria} selectedValue={this.state.selectedValue}
                                                            remove={this.handleRemove} handleOperators={this.handleOperators}
                                                            handleFields={this.handleFields} handleValue={this.handleValue} operations={this.props.operations}/> : null;

      let menuList = this.props.data2.map(function(listMenu) {
      return<MenuItem key={listMenu._id} value={listMenu.namespace} primaryText={listMenu.namespace} />;
      });

    return (
      <div>
  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                    <Subheader style={{background: '#DB8C90', fontSize: '28px', color: 'white', marginTop: '1px', marginLeft: '-7px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <FloatingActionButton onClick={this.addTextField} mini={true} disabled={true} style={{float: 'right', marginTop: '-45px', marginRight: '20px'}}>
                         <ContentView/>
                       </FloatingActionButton>
                      </Link>

                     {this.state.toggleDisplay ? <center><h1>Create Streams Here </h1></center> : null}
                      {this.state.toggleDisplay ? null : <center><h1>Edit Streams Here </h1></center>}

                        <DropDownMenu value={this.state.selectedValue} maxHeight={300} onChange={this.handleNamespace} >
                          <MenuItem value="Select namespace" primaryText="Select namespace*" />
                             {menuList}
                        </DropDownMenu>
                        <TextField floatingLabelText="NAME OF STREAM*" errorText={this.state.nameerr} onChange={this.handleStreamName}/>&nbsp;
                        <TextField floatingLabelText="DESCRIPTION*" errorText={this.state.descripterr} onChange={this.handleDescription}/>&nbsp;
                        <TextField floatingLabelText="IP ADDRESS*" errorText={this.state.addresserr} onChange={this.handleAddress}/>&nbsp;
                        <TextField floatingLabelText="PORT*" errorText={this.state.porterr} onChange={this.handlePort}/>&nbsp;
                        <TextField floatingLabelText="SOURCE*" errorText={this.state.sourceErr} onChange={this.handleSource}/>
                        <br />
                        <center>
                        <span><b>Query Criteria-Build your query here</b></span>
                        </center>
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float: 'right', marginTop: '40px'}}>
                           <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/stream"><RaisedButton label="Cancel" style={{marginTop: '100px'}}/></Link>&emsp;
                        <RaisedButton label="Create" onClick={this.createStream} buttonStyle={{backgroundColor: '#DB8C90'}}/>
                        </center>
                    </MediaQuery>
        </MediaQuery>
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                    <Subheader style={{background: '#DB8C90', fontSize: '28px', color: 'white', marginTop: '1px', marginLeft: '-7px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <FloatingActionButton onClick={this.addTextField} mini={true} disabled={true} style={{float: 'right', marginTop: '-45px', marginRight: '20px'}}>
                         <ContentView/>
                       </FloatingActionButton>
                      </Link>
                    <center>
                          {this.state.toggleDisplay ? <center><h1>Create Streams Here </h1></center> : null}
                          {this.state.toggleDisplay ? null : <center><h1>Edit Streams Here </h1></center>}
                        <Paper zDepth={3} style={{width: '80%'}}>
                        <center>
                        <div className="container">
                        <div className="row center-xs">
                        <div className="col-xs-3">
                         {this.state.toggleDisplay ?
                                 <DropDownMenu value={this.state.selectedValue} maxHeight={300} onChange={this.handleNamespace} >
                                    <MenuItem value="Select namespace" primaryText="Select namespace*" />
                                       {menuList}
                                  </DropDownMenu>
                          : null}
                        {this.state.toggleDisplay ? null :
                              <DropDownMenu value={this.state.selectedValue} disabled={true} maxHeight={300} onChange={this.handleNamespace} >
                                <MenuItem value="Select namespace" primaryText="Select namespace*" />
                                   {menuList}
                              </DropDownMenu>
                        }
                        </div>
                        <div className="col-xs-3">
                        <TextField floatingLabelText="NAME OF STREAM*" value={this.state.stream} errorText={this.state.nameerr} onChange={this.handleStreamName}/>
                        </div>&emsp;
                        <div className="col-xs-3">
                        <TextField floatingLabelText="DESCRIPTION*" value={this.state.description} errorText={this.state.descripterr} onChange={this.handleDescription}/>
                        </div>&emsp;
                        </div>
                        <div className="row center-xs">
                        <div className="col-xs-3">
                        <TextField floatingLabelText="SOURCE*" value={this.state.source} errorText={this.state.sourceErr} onChange={this.handleSource}/>
                        </div>
                        <div className="col-xs-3">
                        <TextField floatingLabelText="IP ADDRESS*" value={this.state.ip_address} errorText={this.state.addresserr} onChange={this.handleAddress}/>
                        </div>&emsp;
                        <div className="col-xs-3">
                        <TextField floatingLabelText="PORT*" errorText={this.state.porterr} value={this.state.port} onChange={this.handlePort}/>
                        </div>&emsp;
                        </div>
                        </div>
                        <br />
                        <span style={{fontSize: '18px'}}>Query Criteria-Build your query here</span>
                      {viewQuery}</center>
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float: 'right', marginTop: '40px'}}>
                            <ContentAdd/>
                        </FloatingActionButton>
                        <center>
                        <Link to="/stream"><RaisedButton label="Cancel" style={{marginTop: '150px', marginBottom: '50px'}}/></Link> &emsp;
                        {this.state.toggleDisplay ? <RaisedButton label="Create" onClick={this.createStream} buttonStyle={{backgroundColor: '#DB8C90'}}/> : null}
                          {this.state.toggleDisplay ? null : <RaisedButton label="Update" onClick={this.editStream} buttonStyle={{backgroundColor: '#DB8C90'}}/>}
                        </center>
                        </Paper>
                      </center>
                    </MediaQuery>
        </MediaQuery>
  {/* media query for Desktops ends*/}
        <Snackbar
          open={this.state.open}
          message="Streams created successfully"
          autoHideDuration={2000}
          onRequestClose={this.handleClose}
        />
          <Snackbar
          open={this.state.open2}
          message="Select Namespace"
          autoHideDuration={2000}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}
