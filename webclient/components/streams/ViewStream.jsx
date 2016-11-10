import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import MediaQuery from 'react-responsive';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class ViewStream extends React.Component {

    static get propTypes() {
   return(
   {
     StreamsData: React.PropTypes.array.isRequired
       });
 }
    constructor(props) {
        super(props);
        this.state = {
          open: false, edit: true, namespace: this.props.StreamsData.namespace,
          stream: this.props.StreamsData.stream, description: this.props.StreamsData.description,
          source: this.props.StreamsData.source, IpAddress: this.props.StreamsData.IpAddress,
          port: this.props.StreamsData.port, queryCriteria: this.props.StreamsData.queryCriteria
        };
    }
    Editt = () => {
        this.setState({edit: false});
    };
    handleDesp = (e) => {
        this.setState({description: e.target.value});
    };
    handleSource = (e) => {
         this.setState({source: e.target.value});
    };
    handleName = (e) => {
         this.setState({namespace: e.target.value});
    };
    handleIP = (e) => {
         this.setState({IpAddress: e.target.value});
    };
    handlePort = (e) => {
         this.setState({port: e.target.value});
    };
    handleStream = (e) => {
        this.setState({stream: e.target.value});
    };
    Submit = () => {
       $.ajax({
           type: 'PUT',
           url: 'http://localhost:8081/stream/put/' + this.props.StreamsData._id,
           datatype: 'JSON',
           data: {namespace: this.state.namespace, stream: this.state.stream,
                  description: this.state.description, source: this.state.source,
                  IpAddress: this.state.IpAddress, port: this.state.port,
                  queryCriteria: this.state.queryCriteria},
           success: function() {
                },
           error: function() {
          }
     });
    };
    delete = () => {
              $.ajax({
           url: 'http://localhost:8081/stream/delete/' + this.props.StreamsData._id,
           type: 'Delete',
           datatype: 'JSON',
           success: function() {
                },
           error: function() {
          }
     });
    };
    render() {
     return (
      <div>
          {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                      <div>
                        <Link to={'EditStream/' + this.props.StreamsData.stream}
                                       style={{textDecoration: 'none'}}>
                          <List>
                               <ListItem
                                primaryText={this.state.stream}
                                 secondaryText={this.state.description}
                                 leftAvatar={
                                   <Avatar style={{left: 8}} >
                                   {this.state.stream.substring(0, 2).toUpperCase()}
                                   </Avatar>
                             }
                                 rightIcon={<IconButton tooltip="View" style={{marginRight: '30px',
                                 marginTop: '-10px'}} iconStyle={{fontSize: '24px'}}>
                                          <FontIcon className="material-icons">
                                          remove_red_eye</FontIcon>
                                          </IconButton>}
                               />
                            <Divider inset={true} />
                          </List>
                        </Link>
                      </div>
                    </MediaQuery>
        </MediaQuery>
        {/* media query for mobile devices ends*/}
        {/* media query for Desktops starts*/}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                      <div>
                        <Paper style={{width: '85%', marginLeft: '7%'}} zDepth={0} >
                        <Link to={'EditStream/' + this.props.StreamsData.stream}
                                       style={{textDecoration: 'none'}}>
                          <List>
                               <ListItem
                                primaryText={this.state.stream}
                                secondaryText={this.state.description}
                                style={{fontSize: '25px'}}
                                 leftAvatar={
                                   <Avatar style={{left: 8}} >
                                   {this.state.stream.substring(0, 2).toUpperCase()}
                                   </Avatar>
                             }
                                 rightIcon={<IconButton tooltip="View" style={{marginRight: '30px',
                                 marginTop: '-10px'}} iconStyle={{fontSize: '24px'}}>
                                          <FontIcon className="material-icons">
                                          remove_red_eye</FontIcon>
                                          </IconButton>}
                               />
                            <Divider inset={true} />
                          </List>
                        </Link>
                        </Paper>
                      </div>
                    </MediaQuery>
        </MediaQuery>
        {/* media query for Desktops ends*/}
        </div>
           );
     }
   }
