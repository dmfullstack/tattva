import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import $ from 'jquery';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import FileFolder from 'material-ui/svg-icons/file/folder';
//import RemoveRedEye from 'marterial-ui/svg-icons/image/remove-red-eye';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';


export default class ViewStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false,edit:true,desp:'',sour:'',name:'',ip:'',port:"",stream:"",
            namespace:this.props.StreamsData.namespace,
            stream:this.props.StreamsData.stream,
            description:this.props.StreamsData.description,
            source:this.props.StreamsData.source,
            ip_address:this.props.StreamsData.ip_address,
            port:this.props.StreamsData.port,
            queryCriteria:this.props.StreamsData.queryCriteria

        };
    }
    
    Editt = () => {
        this.setState({edit:false})
    };
    handleDesp = (e) => {
        this.setState({description:e.target.value});
        console.log(e.target.value);
    };
    handleSource = (e) => {
         this.setState({source:e.target.value});
    };
    handleName = (e) => {
         this.setState({namespace:e.target.value});
    };
    handleIP = (e) => {
         this.setState({ip_address:e.target.value});
    };
    handlePort = (e) => {
         this.setState({port:e.target.value});
    };
    handleStream = (e) => {
        this.setState({stream:e.target.value});
    };
    Submit = () => {
       $.ajax({
           type : 'PUT',
           url:"http://localhost:8081/stream/put/"+this.props.StreamsData._id,
           datatype: 'JSON',
           data:{namespace:this.state.namespace,stream:this.state.stream,description:this.state.description,source:this.state.source,
                  ip_address:this.state.ip_address,port:this.state.port,queryCriteria:this.state.queryCriteria},
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
            console.log("error",err);
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
           <Paper zDepth={3} style={{width:"85%",padding:'0px'}}>
           
            <List style={{padding:'0px 0px'}}>
                 <ListItem
                 style={{padding:'0px 0px'}}
                 nestedListStyle={{padding:'0px 0px'}}
//                   primaryText={<span style={{textAlign:'left'}} nestedListStyle={{textAlign:'left'}}>{this.state.stream}</span>}
                   primaryText={this.state.stream}
                   secondaryText={this.state.description}
                   leftAvatar={
                     <Avatar style={{left: 8}} >
                     {this.state.stream.substring(0, 2).toUpperCase()}
                     </Avatar>
               }
                   rightIcon={<Link to={"EditStream/"+this.props.StreamsData.stream}><RemoveRedEye /></Link>}
                 />
            </List>
            
                {/*}    <Card style={{marginTop:'5px',width:'100%'}}>
                   <CardHeader
                    title={this.state.stream}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{padding:'5px'}}  />
                    <CardTitle style={{background: '#F8F9F9',padding:'0 0 0 16px'}} expandable={true}
                     title={<span style={{color:'004D40'}}>
                     <TextField disabled={true}  defaultValue={this.state.namespace} floatingLabelText="Namespace" onChange={this.handleName}/> &emsp; 
                     <TextField disabled={this.state.edit}  defaultValue={this.state.stream} floatingLabelText="Stream" onChange={this.handleStream}/>
                      <TextField disabled={this.state.edit}  defaultValue={this.state.description} floatingLabelText="Description" onChange={this.handleDesp}/>
                      <TextField disabled={this.state.edit}  defaultValue={this.state.source} floatingLabelText="Sourec" onChange={this.handleSource}/>
                      <TextField disabled={this.state.edit}  defaultValue={this.state.ip_address} floatingLabelText="IP Address" onChange={this.handleIP}/>
                      <TextField disabled={this.state.edit}  defaultValue={this.state.port} floatingLabelText="Port" onChange={this.handlePort}/>
                     </span>} />
                     <CardTitle style={{background: '#F8F9F9',padding:'0 0 0 16px'}} expandable={true}
                     title={<span style={{color:'004D40'}}>
                     {texts}
                     </span>} />                      
                     <CardTitle style={{padding:'0px'}}>
                  {/*   <Link to="/editStream">
                     <FlatButton
                     label="Editt"
                     primary={true}
                     style={{color:'004D40'}}
                    /></Link>} */}
                {/*    <FlatButton
                     label="Delete"
                     primary={true}
                     onClick={this.delete}
                     style={{color:'004D40'}}
                    />
                    <FlatButton
                     label="Edit"
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
                 </Card> */}
                
               </Paper>  
           </div>      
           </center>    
           </MuiThemeProvider>
           );
     }
   }