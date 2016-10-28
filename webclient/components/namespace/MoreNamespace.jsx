import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

export default class MoreNamespace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open:false
		};
	}

	// functions for opening dialog box
	openD = () => {
		this.setState({open:true});
	};
	closeD = () => {
		this.setState({open:false})
	};

	render() {
		var cardTextFields = this.props.data2.dataSchema.map(function(dataSchema) {
			return(
			<div>	
				<TextField disabled={true}  value={dataSchema.alias} floatingLabelText="Alias"/> 
		        <TextField disabled={true}  value={dataSchema.name} floatingLabelText="Name"/> 
		        <TextField disabled={true}  value={dataSchema.sample} floatingLabelText="Sample"/> 
		        <TextField disabled={true}  value={dataSchema.type} floatingLabelText="Type"/> 
		     </div>       	
				);
			console.log(data2);
		}.bind(this));
		return (
			<MuiThemeProvider>
			<center><div className="container">
		{/*card for editable namespace starts */}
				<Card style={{marginTop:'5px',width:'100%'}}>
  		            <CardHeader
		             title={<span style={{fontSize:'24px'}}>{this.props.data2.namespace}</span>}
		             actAsExpander={true}
		             showExpandableButton={true}
		             style={{padding:'5px'}}  />
		            <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
		            {cardTextFields}
		            	</span>} />
		          
		            <CardTitle style={{padding:'0px'}}>{ 
		            <FlatButton
				        label="Edit"
				        primary={true}
				        style={{color:'004D40'}}
				        onClick={this.openD} />}
				    </CardTitle>
		        </Card>
		{/* card for editable namespace ends */}        
		        <Dialog
			        title={this.props.data2.namespace}
			        modal={false}
			        open={this.state.open}
			        onRequestClose={this.closeD}
			        titleStyle={{background:'#004D40',color:'white'}}
			        autoScrollBodyContent={true} >
			        <TextField hintText="" floatingLabelText="Alias" floatingLabelFixed={true} />
	  		        <TextField hintText="" floatingLabelText="Data Field" floatingLabelFixed={true} style={{marginLeft:'25px'}}/><br />
	  		        <RaisedButton
				        label="Cancel"		
				        onTouchTap={this.closeD} />,
				   	<RaisedButton
				        label="Submit" />,
		        </Dialog>
		
			</div>			</center>
			</MuiThemeProvider>
			);
	}
}
