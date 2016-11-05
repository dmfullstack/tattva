import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';
import $ from 'jquery';
import Avatar from 'material-ui/Avatar';
<<<<<<< HEAD
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
=======
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import FileFolder from 'material-ui/svg-icons/file/folder';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
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
<<<<<<< HEAD
          open: false, edit: true, namespace: this.props.StreamsData.namespace,
          stream: this.props.StreamsData.stream, description: this.props.StreamsData.description,
          source: this.props.StreamsData.source, ip_address: this.props.StreamsData.ip_address,
          port: this.props.StreamsData.port, queryCriteria: this.props.StreamsData.queryCriteria
        };
    }
=======
            open: false, edit: true, desp: '', sour: '', name: '', ip: '', port: '', stream: '',
            namespace: this.props.StreamsData.namespace,
            stream: this.props.StreamsData.stream,
            description: this.props.StreamsData.description,
            source: this.props.StreamsData.source,
            ip_address: this.props.StreamsData.ip_address,
            port: this.props.StreamsData.port,
            queryCriteria: this.props.StreamsData.queryCriteria

        };
    }

>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
    Editt = () => {
        this.setState({edit: false});
    };
    handleDesp = (e) => {
        this.setState({description: e.target.value});
<<<<<<< HEAD
=======
        console.log(e.target.value);
>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
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
<<<<<<< HEAD
           data: {namespace: this.state.namespace, stream: this.state.stream,
                  description: this.state.description, source: this.state.source,
                  ip_address: this.state.ip_address, port: this.state.port,
                  queryCriteria: this.state.queryCriteria},
           success: function() {
                },
           error: function() {
=======
           data: {namespace: this.state.namespace, stream: this.state.stream, description: this.state.description, source: this.state.source,
                  ip_address: this.state.ip_address, port: this.state.port, queryCriteria: this.state.queryCriteria},
           success: function(res) {
            console.log('response', res);
                },
           error: function(err) {
            console.log('error', err);
>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
          }
     });
    };
    delete = () => {
              $.ajax({
           url: 'http://localhost:8081/stream/delete/' + this.props.StreamsData._id,
           type: 'Delete',
           datatype: 'JSON',
<<<<<<< HEAD
           success: function() {
                },
           error: function() {
=======
           success: function(res) {
            this.props.refresh({});
           console.log(' streams deleted');
                }.bind(this),
           error: function(err) {
            console.log('error', err);
>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
          }
     });
    };
    render() {
<<<<<<< HEAD
     return (
        <MuiThemeProvider>
          <div>
          <Link to={'EditStream/' + this.props.StreamsData.stream}
                         style={{textDecoration: 'none'}}>
=======
       let texts = this.props.StreamsData.queryCriteria.map(function(criteria) {
      return(
      <div>
        <TextField disabled={true} value={criteria.fields} floatingLabelText="Fields"/>
            <TextField disabled={true} value={criteria.operators} floatingLabelText="Operators"/>
            <TextField disabled={true} value={criteria.value} floatingLabelText="Value"/>
         </div>
        );
    });
       return (
           <MuiThemeProvider>
           <div>
           <Link to={'EditStream/' + this.props.StreamsData.stream} style={{textDecoration: 'none'}}>
>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
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
<<<<<<< HEAD
          </Link>
          </div>
          </MuiThemeProvider>
           );
     }
   
=======
            </Link>
           </div>
           </MuiThemeProvider>
           );
     }
   }
>>>>>>> b4e57e7d159ac7ae4dbc7d14b4168014e44e3fdc
