import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class MoreNamespace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open:false,open2:false
		};
	}
	// functions for opening dialog box
	openD = () => {
		this.setState({open:true});
	};
	closeD = () => {
		this.setState({open:false})
	};
	// functions for showing description
	openDes = () => {
		this.setState({open2:true});
	};
	closeDes = () => {
		this.setState({open2:false})
	};

	render() {
		return (
			<MuiThemeProvider>
			<div className="container">
		{/*card for editable namespace starts */}
				<Card style={{marginTop:'5px',width:'60%'}}>
  		            <CardHeader
		             title={<span style={{fontSize:'24px'}}>{this.props.data.namespace}</span>}
		             actAsExpander={true}
		             showExpandableButton={true}
		             style={{padding:'5px'}}  />
		            <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
		            	<TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Alias"/> &emsp; 
		            	<TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Data Field"/>
		            	</span>} />
		            <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
                    	<TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Alias"/> &emsp; 
                    	<TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Data Field"/>
                    	</span>} />
		            <CardTitle style={{padding:'0px'}}>{ 
		            <FlatButton
				        label="Edit"
				        primary={true}
				        style={{color:'004D40'}}
				        onClick={this.openD} />}
			    	{<FlatButton
				    	label="Description"
				        primary={true}
				        style={{color:'004D40'}}
				        onClick={this.openDes} />}
				    </CardTitle>
		        </Card>
		{/* card for editable namespace ends */}        
		        <Dialog
			        title={this.props.data.namespace}
			        modal={false}
			        open={this.state.open}
			        onRequestClose={this.closeD}
			        titleStyle={{background:'#004D40',color:'white'}}
			        autoScrollBodyContent={true} >
			        <p>Discription : {this.props.data.description}</p>
			        <TextField hintText="" floatingLabelText="Alias" floatingLabelFixed={true} />
	  		        <TextField hintText="" floatingLabelText="Data Field" floatingLabelFixed={true} style={{marginLeft:'25px'}}/><br />
	  		        <RaisedButton
				        label="Cancel"		
				        onTouchTap={this.closeD} />,
				   	<RaisedButton
				        label="Submit" />,
		        </Dialog>
		        <Dialog
			        title={this.props.data.namespace}
		            modal={false}
		            open={this.state.open2}
	    	        onRequestClose={this.closeDes}
			        titleStyle={{background:'#004D40',color:'white'}}
			        autoScrollBodyContent={true} >
			        <p>{this.props.data.description}</p>
			    </Dialog>
			</div>			
			</MuiThemeProvider>
			);
	}
}
