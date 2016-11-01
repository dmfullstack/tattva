import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import {Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
export default class ViewStream extends React.Component {
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
       return (
           <MuiThemeProvider>
           <center>
           <h1>Available Streams</h1>
           <div >
           <Paper zDepth={5} style={{width:"60%"}}>
               <Link to="/editStream" style={{textDecoration: 'none'}}>
                    <Card style={{width:'60%'}}>
                   <CardHeader
                    title="stream 1"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{padding:'5px'}}  />
                    <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true}
                     title={<span style={{color:'004D40'}}>
                     </span>} />                      
                     <CardTitle style={{padding:'0px'}}>{
                     <Link to="/editStream"><FlatButton
                     label="Edit"
                     primary={true}
                     style={{color:'004D40'}}
                    /></Link>}
                    </CardTitle>
                 </Card>
               </Link>    
               <Link to="/editStream" style={{textDecoration: 'none'}}>
                 <Card style={{marginTop:'5px',width:'60%'}}>
                   <CardHeader
                    title="stream 1"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{padding:'5px'}}  />
                   <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true}
                    title={<span style={{color:'004D40'}}>
                   </span>} />      
                   <CardTitle style={{padding:'0px'}}>{
                   <Link to="/editStream"><FlatButton
                    label="Edit"
                    primary={true}
                    style={{color:'004D40'}}
                   /></Link>}
                   </CardTitle>
                 </Card>
               </Link>  
               </Paper>  
           </div>      
           </center>    
           </MuiThemeProvider>
           );
     }
   }