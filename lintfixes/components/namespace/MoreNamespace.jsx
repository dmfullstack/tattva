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
export default class MoreNamespace extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        opendia: false
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
    for (i = 0; i < data.length; i++)
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
//          this.props.DeleteNameSpace({});
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
      <Link to= {'/createnamespace/edit/' + this.props.data2.namespace + '/' + this.props.data2._id}>
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
            titleStyle={{background: '#BA6694', color: 'white', marginBottom: '20px'}}
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
    </MuiThemeProvider>
    );
  }
}
