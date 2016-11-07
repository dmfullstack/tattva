import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import MediaQuery from 'react-responsive';

export default class MoreNamespace extends React.Component {
  static get propTypes() {
    return(
    {
      data2: React.PropTypes.object.isRequired
    });
  }
constructor(props) {
    super(props);
    this.state = {
        opendia: false,
        namespace: this.props.data2.namespace,
        id: this.props.data2._id
    };
}
// functions for opening dialog box
openD = () =>
{
    this.setState({opendia: true});
};
closeD = () =>
{
    this.setState({opendia: false});
};
changeTextBox = (data) =>
{
    let result = {};
    let i = 0;
    for (i = 0; i < data.length; i += 1)
    {
      result[data[i].name] = data[i].sample;
    }
   // result
    return result;
};
// deleteNamespace =()=> {
//    $.ajax({
//        url: "http://localhost:8081/namespace/delete/"+this.props.data2._id,
//        type: 'Delete',
//        datatype: 'JSON',
//        success: function(res)
//         {
//          this.props.DeleteNameSpace({});lk
//          console.log("data Deleted");
//         }.bind(this),
//        error: function()
//         {
//          console.log("Error in deleted operation");
//         }.bind(this)
//     });
// };
componentDidMount = () =>
{
    let d = this.props.data2.dataSchema;
    d = this.changeTextBox(d);
    d = JSON.stringify(d, null, 4);
    this.setState({BoxParsingValue: d});
};
render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.closeD} />,
      <Link to=
      {'/createnamespace/edit/' + this.state.namespace}>
      <FlatButton
        label="Edit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        buttonStyle={{backgroundColor: '#5CA59F'}}
      /></Link>
    ];
    return (
      <MuiThemeProvider>
      <div>
       {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                      <div className="container" style={{width: '100%'}}>
                        <List >
                          <ListItem
                            primaryText={this.props.data2.namespace}
                            secondaryText={this.props.data2.description}
                            onTouchTap={this.openD}
                            leftAvatar={<Avatar style={{left: 8}}>
                                          {this.props.data2.namespace.substring(0, 2).toUpperCase()}
                                          </Avatar>
                                       }
                            rightIcon={<RemoveRedEye />}
                          />
                          <Divider inset={true} />
                        </List>
                        <Dialog
                            title={this.props.data2.namespace}
                            actions={actions}
                            modal={false}
                            open={this.state.opendia}
                            titleStyle={{background: '#BA6694',
                                         color: 'white',
                                         marginBottom: '20px'}}
                            autoScrollBodyContent={true}
                            style={{marginTop: '-150px'}}>
                          <center>
                          <TextField
                            id="ParsingValue"
                            multiLine={true}
                            textareaStyle={{color: '#33FF36', width: '100%'}}
                            style={{background: 'black', height: '100px', width: '250px'}}
                            underlineShow={false}
                            value={this.state.BoxParsingValue}
                            fullWidth={true}
                            disabled={true}
                            /><br/><br/>
                          </center>
                        </Dialog>
                    </div>
                </MediaQuery>
        </MediaQuery>
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts*/}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                      <div className="container" style={{width: '100%'}}>
                        <List >
                          <ListItem
                            primaryText={this.props.data2.namespace}
                            secondaryText={this.props.data2.description}
                            onTouchTap={this.openD}
                            leftAvatar={<Avatar style={{left: 8}}>
                                          {this.props.data2.namespace.substring(0, 2).toUpperCase()}
                                          </Avatar>
                                       }
                            rightIcon={<RemoveRedEye />}
                          />
                          <Divider inset={true} />
                        </List>
                        <Dialog
                            title={this.props.data2.namespace}
                            actions={actions}
                            modal={false}
                            open={this.state.opendia}
                            titleStyle={{background: '#BA6694',
                                         color: 'white',
                                         marginBottom: '20px'}}
                            autoScrollBodyContent={true}
                            style={{marginTop: '-150px'}}>
                          <center>
                          <TextField
                            id="ParsingValue"
                            multiLine={true}
                            textareaStyle={{color: '#33FF36', width: '100%'}}
                            style={{background: 'black', height: '100px', width: '500px'}}
                            underlineShow={false}
                            value={this.state.BoxParsingValue}
                            fullWidth={true}
                            disabled={true}
                            /><br/><br/>
                          </center>
                        </Dialog>
                    </div>
                </MediaQuery>
        </MediaQuery>
  {/* media query for Desktops ends*/}
  </div>
  </MuiThemeProvider>
    );
  }
}
