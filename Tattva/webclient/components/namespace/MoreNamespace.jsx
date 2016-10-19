import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import EditNameDialog from './EditNameDialog.jsx';

export default class MoreNamespace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open:false
		};
	}
	openD = () => {
		this.setState({open:true});
	};
	closeD = () => {
		this.setState({open:false})
	};

	render() {
		return (
			<MuiThemeProvider>
			<div >
			{/* <AppBar style={{background:'#004D40'}}
			 title="Tattva"
			/>*/}
				 <Card style={{marginTop:'5px'}}>

		            <CardHeader
		              title={<span style={{fontSize:'24px'}}>Name of namespace</span>}
		              actAsExpander={true}
		              showExpandableButton={true}
		              style={{padding:'9px'}}
		              
		            />
		            <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
		                  <TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Alias"/> &emsp; 
		                  <TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Discripton"/>
		                  </span>} />
		            <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
		                  <TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Alias"/> &emsp; 
		                  <TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Discripton"/>
		                  </span>} />
		            <CardTitle style={{padding:'0px'}}>{ <FlatButton
			        label="Edit"
			        primary={true}
			        style={{color:'004D40'}}
			        onClick={this.openD}
			        />}</CardTitle>
		     
		          </Card>
		          <EditNameDialog open={this.state.open} close={this.closeD}/>
		          <Card style={{marginTop:'2px'}}>

		            <CardHeader
		              title={<span style={{fontSize:'24px',color:'004D40'}}>Name of namespace2</span>}
		              actAsExpander={true}
		              showExpandableButton={true}
		              style={{padding:'9px'}}
		              
		            />
		            <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
		                  <TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Alias"/> &emsp; 
		                  <TextField disabled={true}  defaultValue="Data to be fetched" floatingLabelText="Discripton"/>
		                  </span>} />
		            <CardTitle style={{padding:'0px'}}>{ <FlatButton
			        label="Edit"
			        primary={true}
			        style={{color:'004D40'}}
			        onClick={this.openD}

			        />}</CardTitle>
		          </Card>

			</div>

			</MuiThemeProvider>
			);
	}
}
