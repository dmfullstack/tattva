import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import FetchingMap from './FetchingMap.jsx';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

export default class StreamsDialog extends React.Component {

 static get propTypes() {
   return(
   {
     stream: React.PropTypes.string.isRequired,
     operations: React.PropTypes.string.isRequired,
     data2: React.PropTypes.array.isRequired
      });
 }
constructor(props) {
   super(props);
    this.state = {removeField: false, removeIndex: 0, nameerr: '', descripterr: '',
                  addresserr: '', porterr: '', sourceErr: '', names: '', descript: '',
                  address: '', location: '', open: false, open2: false, name: 'values',
                  disable: false, disabled: false, selectValue: '', queryCriteria: [],
                  selectedValue: 'Select namespace', updateStream: '', dataSchemaName: [],
                  namespace: '', stream: '', description: '', source: '', IpAddress: '', port: '',
                  toggleDisplay: true, criteriaArray: [], viewCriteria: false, opencreate: false
                  };
}
// handleRemove = (index) =>
// {
//       this.setState({removeField: true, removeIndex: index});
// };
handleNamespace = (event, index, value) =>
{
     this.setState({selectedValue: value});
};
handleOpen = () => {
     this.setState({open: true});
};
handleOpen2 = () => {
     this.setState({open2: true});
};
handleCloseSnackBar = () => {
     this.setState({open2: false});
};
handleOpenCreate = () => {
     this.setState({opencreate: true});
};
handleClose2 = () => {
  this.setState({open2: false});
};
handleCloseDialog = () => {
     this.setState({open: false, opencreate: false});
};
handleStreamName = (e) =>
{
     this.setState({stream: e.target.value});
};
handleDescription = (e) =>
{
     this.setState({description: e.target.value});
};
handleSource = (e) => {
     this.setState({source: e.target.value});
};
handleAddress = (e) =>
{
     this.setState({IpAddress: e.target.value});
};
handlePort = (e) =>
{
     this.setState({port: e.target.value});
};

createStream = () =>
{
      if(this.state.stream === '') {
          this.setState({descripterr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({nameerr: 'Please fill the required fields'});
      }
      else if(!this.state.stream.match(/^[0-9A-Za-z\s]+$/))
      {
          this.setState({nameerr: 'Invalid Name for Streams'});
      }
      else if(this.state.description === '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({descripterr: 'Please fill the required fields'});
      }
      else if(this.state.source === '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: ''});
          this.setState({sourceErr: 'Please fill the required fields'});
      }
      else if(this.state.IpAddress === '')
      {
          this.setState({nameerr: '', descripterr: '', porterr: '', sourceErr: ''});
          this.setState({addresserr: 'Please fill the required fields'});
      }
      else if(!this.state.IpAddress.match('^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])$'))
      {
          this.setState({nameerr: '', descripterr: '', porterr: ''});
          this.setState({addresserr: 'Invalid IP address'});
      }
      else if(this.state.port === '')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: ''});
          this.setState({porterr: 'Please fill the required fields'});
      }
      else if(!this.state.port.match('^(102[4-9]|10[3-9]\\d|1[1-9]\\.' +
        'd{2}|[2-9]\\d{3}|[1-5]\\d{4}|6[0-4]\\.' +
        'd{3}|65[0-4]\\d{2}|655[0-2]\\d|6553[0-5])$'))
      {
          this.setState({nameerr: '', addresserr: '', descripterr: ''});
          this.setState({porterr: 'Invalid Port Number'});
      }
      else if(this.state.selectedValue === 'Select namespace')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: '', porterr: ''});
          this.handleOpen2();
      }
      else
      {
          this.handleClose2();
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: '', sourceErr: ''});
                  $.ajax({
                    type: 'POST',
                    url: '/stream/post',
                    dataType: 'json',
                    data: {namespace: this.state.selectedValue, stream: this.state.stream,
                      description: this.state.description, source: this.state.source,
                      IpAddress: this.state.IpAddress, port: this.state.port,
                      queryCriteria: this.state.queryCriteria},
                    success: function(res)
                    {
                      this.handleOpenCreate(res);
                    }.bind(this),
                    error: function()
                    {
                    }
                });
              }
};
editStream = () =>
{
      if(this.state.stream === '') {
          this.setState({descripterr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({nameerr: 'Please fill the required fields'});
      }
      else if(!this.state.stream.match(/^[0-9A-Za-z\s]+$/))
      {
          this.setState({nameerr: 'Invalid Name for Streams'});
      }
      else if(this.state.description === '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', sourceErr: ''});
          this.setState({descripterr: 'Please fill the required fields'});
      }
      else if(this.state.source === '')
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: ''});
          this.setState({sourceErr: 'Please fill the required fields'});
      }
      else if(this.state.IpAddress === '')
      {
          this.setState({nameerr: '', descripterr: '', porterr: '', sourceErr: ''});
          this.setState({addresserr: 'Please fill the required fields'});
      }
      else if(!this.state.IpAddress.match('^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.' +
    '([01]?\\d\\d?|2[0-4]\\d|25[0-5])$'))
      {
          this.setState({nameerr: '', descripterr: '', porterr: ''});
          this.setState({addresserr: 'Invalid IP address'});
      }
      else if(this.state.port === '')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: ''});
          this.setState({porterr: 'Please fill the required fields'});
      }
      else if(!this.state.port.match('^(102[4-9]|10[3-9]\\d|1[1-9]\\.' +
        'd{2}|[2-9]\\d{3}|[1-5]\\d{4}|6[0-4]\\.' +
        'd{3}|65[0-4]\\d{2}|655[0-2]\\d|6553[0-5])$'))
      {
          this.setState({nameerr: '', addresserr: '', descripterr: ''});
          this.setState({porterr: 'Invalid Port Number'});
      }
      else if(this.state.selectedValue === 'Select namespace')
      {
          this.setState({nameerr: '', addresserr: '', descripterr: '', sourceErr: '', porterr: ''});
          this.handleOpen2();
      }
      else
      {
          this.setState({nameerr: '', addresserr: '', porterr: '', descripterr: '', sourceErr: ''});
          this.handleOpen();
                 $.ajax({
           type: 'PUT',
           url: '/stream/put/' + this.props.stream,
           datatype: 'JSON',
           data: {namespace: this.state.selectedValue, stream: this.state.stream,
            description: this.state.description, source: this.state.source,
            IpAddress: this.state.IpAddress, port: this.state.port,
            queryCriteria: this.state.queryCriteria},
           success: function(res) {
                this.handleOpen(res);
                },
           error: function() {
          }
     });
              }
};

handleOperators = (object) => {
        this.state.queryCriteria[object.index].operators = object.operatorValue;
};
handleFields = (object) =>
{
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
    this.setState({IpAddress: this.state.updateStream.IpAddress});
    this.setState({port: this.state.updateStream.port});
    this.setState({queryCriteria: this.state.updateStream.queryCriteria});
};
componentDidMount = () =>{
if(this.props.operations === 'edit')
{
        this.setState({toggleDisplay: false});

        $.ajax({
        type: 'GET',
        url: '/stream/get/' + this.props.stream,
        dataType: 'json',
        success: function(res) {
          this.setState({updateStream: res});
                    $.ajax({
                  type: 'GET',
                  url: '/namespace/get/' + this.state.updateStream.namespace,
                  dataType: 'json',
                  success: function(res1) {
                    this.setState({dataSchemaName: res1.dataSchema});
                    this.handleEditStream();
                  }.bind(this),
                  error: function(err) {
                    this.setState(err);
                  }
               });
        }.bind(this),
        error: function() {
        }
     });
      }
};
handleChild = () =>
{
    if(this.state.selectedValue === 'Select namespace')
    {
        this.handleOpen2();
    }
    else
    {
        this.handleClose2();
        this.setState({viewCriteria: false});
        let addObject = {fields: 'Field', operators: 1, value: ''};

        this.state.queryCriteria.push(addObject);
        this.setState({queryCriteria: this.state.queryCriteria});
        this.setState({viewCriteria: true});
    }
};
handleRemove = (index) =>
{
      this.state.queryCriteria.splice(index, 1);
      this.setState({queryCriteria: this.state.queryCriteria});
};
render() {
      let viewQuery = this.state.viewCriteria ? <FetchingMap queryCrit={this.state.queryCriteria}
      selectedValue={this.state.selectedValue} remove={this.handleRemove}
      handleOperators={this.handleOperators}
      handleFields={this.handleFields} handleValue={this.handleValue}
      operations={this.props.operations}/> : null;

      let menuList = this.props.data2.map(function(listMenu) {
      return(<MenuItem key={listMenu._id} value={listMenu.namespace}
      primaryText={listMenu.namespace} />);
      });
      const actions = [
      <Link to="/stream">
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleCloseDialog}
      /></Link>
      ];
    return (
      <div>
  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                    <Subheader style={{background: '#DB8C90', fontSize: '28px', color: 'white',
                    marginTop: '1px', marginLeft: '-7px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <IconButton tooltip="View Streams" style={{float: 'right',
                       marginTop: '-55px', marginRight: '20px'}}
                       iconStyle={{fontSize: '36px'}}>
                      <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                      </IconButton>
                      </Link>
                     {this.state.toggleDisplay ?
                      <center><h2>Create Streams Here </h2></center> : null}
                      {this.state.toggleDisplay ? null :
                        <center><h2>Edit Streams Here </h2></center>}
                        {this.state.toggleDisplay ?
                                 <DropDownMenu value={this.state.selectedValue} maxHeight={300}
                                 style={{width: '280px'}} onChange={this.handleNamespace} >
                                    <MenuItem value="Select namespace"
                                              primaryText="Select namespace*" />
                                       {menuList}
                                  </DropDownMenu>
                          : null}
                        {this.state.toggleDisplay ? null :
                              <DropDownMenu value={this.state.selectedValue} disabled={true}
                              maxHeight={300} style={{width: '280px'}}
                              onChange={this.handleNamespace} >
                          <MenuItem value="Select namespace"
                                          primaryText="Select namespace*" />
                                   {menuList}
                              </DropDownMenu>
                        }
                        <TextField floatingLabelText="NAME OF STREAM*" value={this.state.stream}
                        errorText={this.state.nameerr} onChange={this.handleStreamName}/>&nbsp;
                        <TextField floatingLabelText="DESCRIPTION*" value={this.state.description}
                        errorText={this.state.descripterr} onChange={this.handleDescription}/>&nbsp;
                        <TextField floatingLabelText="SOURCE*" errorText={this.state.sourceErr}
                        onChange={this.handleSource} value={this.state.source}/>&nbsp;
                        <TextField floatingLabelText="IP ADDRESS*" errorText={this.state.addresserr}
                        onChange={this.handleAddress} value={this.state.IpAddress}/>&nbsp;
                        <TextField floatingLabelText="PORT*" errorText={this.state.porterr}
                        onChange={this.handlePort} value={this.state.port}/>
                        <br />
                        <center>
                        <span><b>Query Criteria-Build your query here</b></span>
                        </center>{viewQuery}
                        <br/>
                        <br/>
                        <IconButton tooltip= "Add Fields Manually" style={{float: 'right',
                        marginRight: '15px'}} iconStyle={{fontSize: '48px'}} >
                        <FontIcon className="material-icons" color={'#5CA59F '}
                        onClick={this.handleChild}>add_circle</FontIcon>
                       </IconButton>
                        <center>
                        <Link to="/stream"><RaisedButton label="Cancel"
                                                        style={{marginTop: '100px'}}/>
                        </Link>&emsp;
                      {this.state.toggleDisplay ? <RaisedButton label="Create"
                       onClick={this.createStream}
                       buttonStyle={{backgroundColor: '#DB8C90'}}/> : null}
                       {this.state.toggleDisplay ? null : <RaisedButton label="Update"
                       onClick={this.editStream} buttonStyle={{backgroundColor: '#DB8C90'}}/>}
                        </center>
                    </MediaQuery>
        </MediaQuery>
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}
  <MediaQuery query='(min-device-width: 487px)'>
<MediaQuery query='(min-width: 487px)'>
                    <Subheader style={{background: '#DB8C90', fontSize: '28px', color: 'white',
                    marginTop: '1px', marginLeft: '-7px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <IconButton tooltip="View Streams" style={{float: 'right',
                       marginTop: '-55px', marginRight: '20px'}}
                       iconStyle={{fontSize: '36px'}}>
                      <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                      </IconButton>
                      </Link>
                    <center>
                          {this.state.toggleDisplay ? <center><h1>Create Streams Here </h1>
                          </center> : null}
                          {this.state.toggleDisplay ? null : <center><h1>Edit Streams Here </h1>
                          </center>}
                        <Paper zDepth={0} style={{width: '70%'}}>
                        <center>
                        <div className="container">
                        <div className="row center-xs">
                        <div className="col-xs-2.8">
                         {this.state.toggleDisplay ?
                                 <DropDownMenu value={this.state.selectedValue} maxHeight={300}
                                 style={{width: '310px'}} onChange={this.handleNamespace} >
                                    <MenuItem value="Select namespace"
                                              primaryText="Select namespace*" />
                                       {menuList}
                                  </DropDownMenu>
                          : null}
                        {this.state.toggleDisplay ? null :
                              <DropDownMenu value={this.state.selectedValue} disabled={true}
                              maxHeight={300} style={{width: '310px'}}
                              onChange={this.handleNamespace} >
                          <MenuItem value="Select namespace"
                                          primaryText="Select namespace*" />
                                   {menuList}
                              </DropDownMenu>
                        }
                        </div>
                        <div className="col-xs-3">
                        <TextField floatingLabelText="NAME OF STREAM*" value={this.state.stream}
                        errorText={this.state.nameerr} onChange={this.handleStreamName}/>
                        </div>&emsp;
                        <div className="col-xs-3">
                        <TextField floatingLabelText="DESCRIPTION*" value={this.state.description}
                        errorText={this.state.descripterr} onChange={this.handleDescription}/>
                        </div>&emsp;
                        </div>
                        <div className="row center-xs">
                        <div className="col-xs-3">
                        <TextField floatingLabelText="SOURCE*" value={this.state.source}
                        errorText={this.state.sourceErr} onChange={this.handleSource}/>
                        </div>&emsp;
                        <div className="col-xs-3">
                        <TextField floatingLabelText="IP ADDRESS*" value={this.state.IpAddress}
                        errorText={this.state.addresserr} onChange={this.handleAddress}/>
                        </div>&emsp;
                        <div className="col-xs-3">
                        <TextField floatingLabelText="PORT*" errorText={this.state.porterr}
                        value={this.state.port} onChange={this.handlePort}/>
                        </div>
                        </div>
                        </div>
                        <br />
                        <span style={{fontSize: '18px'}}>Query Criteria-Build your query here</span>
                      {viewQuery}</center>
                        <br/>
                        <br/>
                        <IconButton tooltip= "Add Fields Manually" style={{float: 'right',
                        marginRight: '40px'}} iconStyle={{fontSize: '48px'}} >
                       <FontIcon className="material-icons" color={'#5CA59F '}
                       onClick={this.handleChild} >add_circle</FontIcon>
                       </IconButton>
                        <center>
                        <Link to="/stream"><RaisedButton label="Cancel" style={{marginTop: '150px',
                        marginBottom: '50px'}}/></Link> &emsp;
                    {this.state.toggleDisplay ? <RaisedButton label="Create"
                     onClick={this.createStream}
                     buttonStyle={{backgroundColor: '#DB8C90'}}/> : null}
                     {this.state.toggleDisplay ? null : <RaisedButton label="Update"
                     onClick={this.editStream} buttonStyle={{backgroundColor: '#DB8C90'}}/>}
                   </center>
                   </Paper>
               </center>
              </MediaQuery>
          </MediaQuery>
  {/* media query for Desktops ends*/}
        <Dialog
                title="Stream Created successfully"
                actions={actions}
                modal={false}
                open={this.state.opencreate}
                onRequestClose={this.handleCloseDialog}
                titleStyle={{textAlign: 'center', fontSize: '30px'}}
             />
         <Dialog
                title="Stream Updated successfully"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleCloseDialog}
                titleStyle={{textAlign: 'center', fontSize: '30px'}}
             />
          <Snackbar
          open={this.state.open2}
          message="Select Namespace"
          autoHideDuration={2000}
          onRequestClose={this.handleCloseSnackBar}
        />
      </div>
    );
  }
}
