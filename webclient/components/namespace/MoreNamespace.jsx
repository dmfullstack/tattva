import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import EditNamespace from './EditNamespace';
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router';

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
         this.props.DeleteNameSpace({});
         console.log("data Deleted");
        }.bind(this),
       error: function()
        {
         console.log("Error in deleted operation");
        }.bind(this)
    });
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
    return (
      	<MuiThemeProvider>
        <div className="container" style={{marginTop:"20px", width:'100%'}}>
        <Paper zDepth={3} >
        {/*card for editable namespace starts */}
        <List style={{marginTop:'5px'}}>
          <ListItem
            primaryText={this.props.data2.namespace}
            secondaryText={this.props.data2.description}
            leftAvatar={
          <Avatar style={{left: 8}} >
            {this.props.data2.namespace.substring(0, 2).toUpperCase()}
          </Avatar>
        }
            rightIcon={<RemoveRedEye onClick={this.openD}/>}
          />
        </List>        
        <Dialog
            title={this.props.data2.namespace}
            modal={false}
            open={this.state.opendia}
            titleStyle={{background:'#BA6694',color:'white',marginBottom:"20px"}}
            autoScrollBodyContent={true} 
            style={{marginTop:"-150px"}}
             >
          <center>
        	<TextField
                    id="ParsingValue"
                    multiLine={true}
                    textareaStyle={{color:"#33FF36",width:'100%'}}
                    style={{background:"black",height:"100px",width:"375px"}}
                    underlineShow={false}
                    value={this.state.BoxParsingValue}
                    fullWidth={true}
                    disabled={true}
                 /><br/><br/>
                 <RaisedButton label="Cancel" onTouchTap={this.closeD} />&emsp;
                 <Link to={"/createnamespace/edit/"+this.props.data2.namespace+"/"+this.props.data2._id}>
                 <RaisedButton label="Edit" buttonStyle={{backgroundColor:"#BA6694"}}/>  
                 </Link>
          
          </center>
        </Dialog>
        </Paper>
    	</div> 
        
	</MuiThemeProvider>
    );
  }
}