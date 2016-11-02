import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EditNamespace from './EditNamespace';
import $ from 'jquery';
const customContentStyle = {
	width:'80%',
	maxWidth: '80%'
};

export default class MoreNamespace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opendia:false
		};
	}

    // functions for opening dialog box
    openD = () => {
    	this.setState({opendia:true});
    };
    
    closeD = () => {
    	console.log(this.state.opendia);
    	this.setState({opendia:false})
    };
    changeTextBox = (data) =>
    {
    	var result = {};
    	for (var i=0; i<data.length; i++) {
    		result[data[i].name] = data[i].sample;
    	}

      //result
      return result;
  };
  deleteNamespace =()=> {
    $.ajax({
    url:"http://localhost:8081/namespace/delete/"+this.props.data2._id,
    type: 'Delete',
    datatype: 'JSON',
    success: function(res)
    {
      console.log("data Deleted");
    }.bind(this),
    error: function()
    {
      console.log("Error in deleted operation");
    }.bind(this)
  });
    this.props.DeleteNameSpace({});
  };
  componentDidMount=()=>  
  {
  	console.log("ParsingTextBoxValue");
  	var d = (this.props.data2.dataSchema);
  	var d=this.changeTextBox(d);
  	d=JSON.stringify(d,null, 4);
  	this.setState({BoxParsingValue:d});
  };
  render() {
        // var cardTextFields = this.props.data2.dataSchema.map(function(dataSchema) {
        //     return(
        //     <div>    
        //         <TextField disabled={true}  value={dataSchema.alias} floatingLabelText="Alias"/> 
        //         <TextField disabled={true}  value={dataSchema.name} floatingLabelText="Name"/> 
        //         <TextField disabled={true}  value={dataSchema.sample} floatingLabelText="Sample"/> 
        //         <TextField disabled={true}  value={dataSchema.type} floatingLabelText="Type"/> 
        //      </div>           
        //         );
        // }

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
        <CardTitle style={{background: '#E8F8F5 ',padding:'0 0 0 16px'}} expandable={true} title={<span style={{color:'004D40'}}> 
        <TextField
        id="ParsingValue"
        multiLine={true}
        rows={1}
        textareaStyle={{color:"#33FF36 "}}
        style={{background:"black",height:"100px",width:"375px"}}
        underlineShow={false}
        value={this.state.BoxParsingValue}
        /><br />
        </span>} />

        <CardTitle style={{padding:'0px'}}>{ 
            <div>
        	<FlatButton
        	label="Edit"
        	primary={true}
        	style={{color:'004D40'}}
        	onClick={this.openD} />
            <FlatButton
            label="Delete"
            primary={true}
            style={{color:'004D40'}}
            onClick={this.deleteNamespace} />
            </div>
        }
            </CardTitle>
        	</Card>
        {/* card for editable namespace ends */}        
        <Dialog
        title={this.props.data2.namespace}
        modal={false}
        open={this.state.opendia}
        titleStyle={{background:'#004D40 ',color:'white'}}
        autoScrollBodyContent={true} 
        contentStyle={customContentStyle}
        actions={  
        	<RaisedButton
        	label="Cancel"        
        	onTouchTap={this.closeD} />}
        	 >
        	<EditNamespace dataToEdit={this.props.data2} closeDia={this.closeD} UpdateNameSpace={this.props.UpdateNameSpace}/>

        	</Dialog>
        	</div> </center>
        	</MuiThemeProvider>
        	);
    }
}