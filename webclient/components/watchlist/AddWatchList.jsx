import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';

export default class AddNamespace extends React.Component {
  remove =() =>
  {
    console.log(this.props.index);
    this.props.remove(this.props.index);
  }
  render() {
   return (
   	   <div>
    {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <center>
                <Paper zDepth={2} >
                <TextField floatingLabelText="Left Hand Expression*" />&emsp;
                <TextField floatingLabelText="Operator*"/>&emsp;
                <TextField floatingLabelText="Right Hand Expression*"/>
                <br />
                <TextField
                    multiLine={true}
                    rows={1}
                    textareaStyle={{color:"#33FF36"}}
                    style={{background:"black",height:"200px",width:"250px"}}
                    underlineShow={false} />
                <br /><br /><br /><br />
                </Paper> 
            </center>
                <br />
                <RaisedButton label="Remove" onClick={this.remove} style={{float:"right"}}/> 
                <br/><br/><br/>
            </MediaQuery>
        </MediaQuery>
    {/* media query for mobile devices ends*/}

    {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
            <center>
                <Paper zDepth={2} >
                <TextField floatingLabelText="Left Hand Expression*" />&emsp;
                <TextField floatingLabelText="Operator*"/>&emsp;
                <TextField floatingLabelText="Right Hand Expression*"/>
                <br />
                <TextField
                    multiLine={true}
                    rows={1}
                    textareaStyle={{color:"#33FF36"}}
                    style={{background:"black",height:"300px",width:"400px"}}
                    underlineShow={false} />
                <br /><br /><br /><br />
                </Paper> 
            </center>
                <br />
                <RaisedButton label="Remove" onClick={this.remove} style={{float:"right"}}/> 
                <br/><br/><br/>
            </MediaQuery>
        </MediaQuery>
    {/* media query for Desktops ends */}
       </div>
       );
    }
}