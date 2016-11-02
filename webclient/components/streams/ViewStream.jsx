import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
export default class ViewStream extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            open:false,edit:true,desp:''
        };
}    
Editt = () => {
        this.setState({edit:false})
};
handleDesp = (e) => {
        this.setState({desp:e.target.value});
};
Submit = () => {
       $.ajax({
           type : 'PUT',
           url:"http://localhost:8081/stream/edit/"+guru,
           dataType: 'json',
           data:{description:this.state.desp},
           success: function(res) {
            console.log("response",res);
                }.bind(this),
           error: function(err){
            console.log("error",err);
          }.bind(this)
     });
};
delete = () => {
       $.ajax({
           url:"http://localhost:8081/stream/delete/"+this.props.StreamsData._id,
           type : 'Delete',
           datatype: 'JSON',
           success: function(res) {
            this.props.refresh({});
           console.log(" streams deleted");
                }.bind(this),
           error: function(err){
            console.log("efrchchrror",err);
          }.bind(this)
     });
};
render() {
      var texts = this.props.StreamsData.queryCriteria.map(function(criteria) {
      return(
        <div> 
            <TextField disabled={true}  value={criteria.fields} floatingLabelText="Fields"/> 
            <TextField disabled={true}  value={criteria.operators} floatingLabelText="Operators"/> 
            <TextField disabled={true}  value={criteria.value} floatingLabelText="Value"/> 
        </div>         
        );
     }.bind(this));
      return (
          <MuiThemeProvider>
          <center>    
          <div >
          <Paper zDepth={5} style={{width:"85%"}}> 
              <Card style={{marginTop:'5px',width:'100%'}}>
                   <CardHeader
                      title={this.props.StreamsData.stream}
                      actAsExpander={true}
                      showExpandableButton={true}
                      style={{padding:'5px'}}  />
                    <CardTitle style={{background: '#F8F9F9',padding:'0 0 0 16px'}} expandable={true}
                      title={<span style={{color:'004D40'}}>
                    <TextField disabled={true}  defaultValue={this.props.StreamsData.namespace} floatingLabelText="Namespace"/> &emsp; 
                    <TextField disabled={this.state.edit}  defaultValue={this.props.StreamsData.description} floatingLabelText="Description" onChange={this.handleDesp}/>
                    <TextField disabled={this.state.edit}  defaultValue={this.props.StreamsData.source} floatingLabelText="Sourec"/>
                    <TextField disabled={this.state.edit}  defaultValue={this.props.StreamsData.ip_address} floatingLabelText="IP Address"/>
                    <TextField disabled={this.state.edit}  defaultValue={this.props.StreamsData.port} floatingLabelText="Port"/>
                    </span>} />
                    <CardTitle style={{background: '#F8F9F9',padding:'0 0 0 16px'}} expandable={true}
                      title={<span style={{color:'004D40'}}>
                       {texts}
                    </span>} />                      
                    <CardTitle style={{padding:'0px'}}>{
                    <Link to="/editStream">
                    <FlatButton
                       label="Edit"
                       primary={true}
                       style={{color:'004D40'}}
                    /></Link>}
                    <FlatButton
                       label="Delete"
                       primary={true}
                       onClick={this.delete}
                       style={{color:'004D40'}}
                    />
                    <FlatButton
                       label="Editt"
                       primary={true}
                       onClick={this.Editt}
                       style={{color:'004D40'}}
                    />
                    <FlatButton
                       label="Save"
                       primary={true}
                       onClick={this.Submit}
                       style={{color:'004D40'}}
                    />
                    </CardTitle>
            </Card>    
        </Paper>  
      </div>      
      </center>    
    </MuiThemeProvider>
       );
  }
}