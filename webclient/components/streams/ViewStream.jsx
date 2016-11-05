import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';
import $ from 'jquery';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
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
          source: this.props.StreamsData.source, ip_address: this.props.StreamsData.ip_address,
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
         this.setState({ip_address: e.target.value});
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
                  ip_address: this.state.ip_address, port: this.state.port,
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
        <MuiThemeProvider>
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
                   rightIcon={<RemoveRedEye />}
                 />
              <Divider inset={true} />
            </List>
          </Link>
          </div>
          </MuiThemeProvider>
           );
     }
   