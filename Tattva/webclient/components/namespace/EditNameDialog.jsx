import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class EditNameDialog extends React.Component {

	render(){
		return (
			<div>
		        <Dialog
		          title="Edit Namespace"
		          modal={false}
		          open={this.props.open}
		          onRequestClose={this.props.close}
		          titleStyle={{background:'#004D40',color:'white'}}
		          autoScrollBodyContent={true} >
		          <TextField hintText="" floatingLabelText="Alias" floatingLabelFixed={true} />
  		          <TextField hintText="" floatingLabelText="Discription" floatingLabelFixed={true} style={{marginLeft:'25px'}}/><br />
  		          <RaisedButton
				        label="Cancel"		
				         onTouchTap={this.props.close}
				         //titleStyle={{background:'#E8F8F5'}}		     
				      />,
				   <RaisedButton
				        label="Submit"
				       
				      />,
		        </Dialog>
      </div>
		);
	}
}