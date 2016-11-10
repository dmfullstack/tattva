import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import $ from 'jquery';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class EditStream extends React.Component {
  static get propTypes() {
   return(
   {
     params: React.PropTypes.string.isRequired
   });
 }
constructor(props) {
      super(props);
      this.state = {value1: 1, removeField: false, removeIndex: 0, name: 'values', disable: false,
                    disabled: false, selectValue: '', selectedValue: '', edit: true,
                    queryCriteria: [], namespace: '', stream: '', description: '', source: '',
                    IpAddress: '', port: '', dataSchemaName: []
                    };
}

componentDidMount = () => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/stream/get/' + this.props.params.stream,
        dataType: 'json',
        success: function(res) {
          this.setState({queryCriteria: res.queryCriteria,
            namespace: res.namespace, stream: res.stream, description: res.description,
            source: res.source, IpAddress: res.IpAddress, port: res.port});
                      $.ajax({
                  type: 'GET',
                  url: 'http://localhost:8081/namespace/get/' + this.state.namespace,
                  dataType: 'json',
                  success: function(res1) {
                    this.setState({dataSchemaName: res1.dataSchema});
                  }.bind(this),
                  error: function(err) {
                    this.setState(err);
                  }
               });
        }.bind(this),
        error: function(err) {
          this.setState(err);
        }
     });
};

render() {
  // console.log("sdgcedgetget",this.state.namespace);
            let menuList = this.state.dataSchemaName.map(function(listMenu) {
              return(<MenuItem key={listMenu._id} value={listMenu.name}
              primaryText={listMenu.name} />);
            });

        let Criteria = this.state.queryCriteria.map(function(query) {
      return(
          <div>
              <DropDownMenu disabled={this.state.edit} value={query.fields} maxHeight={300}
              onChange={this.handleFields} >
                    {menuList}
              </DropDownMenu>
              <DropDownMenu disabled={this.state.edit} value={query.operators}
              maxHeight={300} style={{width: '275px'}} >
                      <MenuItem value="<" primaryText="<" />
                      <MenuItem value=">" primaryText=">" />
                      <MenuItem value="==" primaryText="==" />
                      <MenuItem value=">=" primaryText=">=" />
                      <MenuItem value="<=" primaryText="<=" />
                      <MenuItem value="!=" primaryText="!=" />
                      <MenuItem value="Like" primaryText="Like" />
                      <MenuItem value="Not Like" primaryText="Not Like" />
              </DropDownMenu>
              <TextField disabled={this.state.edit} key={query._id} floatingLabelText="Value"
              value={query.value} />
          </div>
        );
     }.bind(this));

  return (
      <div>
  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <Subheader style={{background: '#E57373', fontSize: '28px', color: 'white',
            marginTop: '1px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <IconButton tooltip="View Streams" style={{float: 'right',
                       marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                      <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                      </IconButton>
                      </Link>
              <center>
                <TextField disabled={true} value={this.state.namespace}
                floatingLabelText="Namespace" onChange={this.handleName}/> &nbsp;
                <TextField disabled={this.state.edit} value={this.state.stream}
                floatingLabelText="Stream" onChange={this.handleStream}/>&nbsp;
                <TextField disabled={this.state.edit} value={this.state.description}
                floatingLabelText="Description" onChange={this.handleDesp}/>&nbsp;
                <TextField disabled={this.state.edit} value={this.state.source}
                floatingLabelText="Sourec" onChange={this.handleSource}/>
                <TextField disabled={this.state.edit} value={this.state.IpAddress}
                floatingLabelText="IP Address" onChange={this.handleIP}/>&nbsp;
                <TextField disabled={this.state.edit} value={this.state.port}
                floatingLabelText="Port" onChange={this.handlePort}/>&nbsp;
                <br />
                <center>
                <br/><br/>
                <span><b>Query Criteria-Build your query here</b></span>
                </center>
                {Criteria}
                <br/>
                <br/>
                <Link to="/stream"><RaisedButton label="Cancel"/></Link>&emsp;
                <Link to={'createstream/edit/' + this.state.stream}>
                <RaisedButton label="Edit" buttonStyle={{backgroundColor: '#E57373'}}/>
                </Link>&emsp;
                {Criteria}
                <br/>
                </center>
            </MediaQuery>
      </MediaQuery>
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}

      <MediaQuery query='(min-device-width: 487px)'>
          <MediaQuery query='(min-width: 487px)'>
           <Subheader style={{background: '#E57373', fontSize: '28px', color: 'white',
           marginTop: '1px', marginLeft: '-7px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <IconButton tooltip="View Streams" style={{float: 'right',
                       marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
                      <FontIcon className="material-icons" color={'white'}>view_list</FontIcon>
                      </IconButton>
                      </Link>
                      <center>
                <div className="container">
                <div className="row center-xs">
                <div className="col-xs-3">
                <TextField disabled={true} value={this.state.namespace}
                floatingLabelText="Namespace" onChange={this.handleName}/> &emsp;
                </div>
                <div className="col-xs-3">
                <TextField disabled={this.state.edit} value={this.state.stream}
                floatingLabelText="Stream" onChange={this.handleStream}/></div>&emsp;
                <div className="col-xs-3">
                <TextField disabled={this.state.edit} value={this.state.description}
                floatingLabelText="Description" onChange={this.handleDesp}/></div>&emsp;
                </div>
                <div className="row center-xs">
                <div className="col-xs-3">
                <TextField disabled={this.state.edit} value={this.state.source}
                floatingLabelText="Sourec" onChange={this.handleSource}/>
                </div>
                <div className="col-xs-3">
                <TextField disabled={this.state.edit} value={this.state.IpAddress}
                floatingLabelText="IP Address" onChange={this.handleIP}/>
                </div>&emsp;
                <div className="col-xs-3">
                <TextField disabled={this.state.edit} value={this.state.port}
                floatingLabelText="Port" onChange={this.handlePort}/>
                </div>&emsp;
                </div>
                </div>
                <br/><br/><br/>
                <span style={{fontSize: '18px'}}>Query Criteria</span>

                 </center>
                <br/>

                <center>
                {Criteria}
                <br/>

                {/* <Link to="/stream"><RaisedButton label="Cancel" secondary={true}
                style={{marginTop:"200px"}}/></Link>&emsp; */}
                <Link to="stream"><RaisedButton label="Back"/></Link>&emsp;
                <Link to={'createstream/edit/' + this.state.stream}>
                <RaisedButton label="Edit" buttonStyle={{backgroundColor: '#E57373'}}/>
                </Link>&emsp;
            </center>
          </MediaQuery>
      </MediaQuery>
  {/* media query for Desktops ends*/}
      </div>
    );
  }
}
