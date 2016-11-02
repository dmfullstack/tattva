import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
const styleHeader={background:"#00ACC1 ",fontWeight:"bold"};
export default class ViewWatchList extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <center>
            <div className="container">
        {/*card for editable namespace starts */}
            <h1>Available WatchLists</h1>
            <Paper zDepth={3}>
            <Card style={{width:'100%'}}>
                <CardHeader
                    title="WatchList 1"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{padding:'5px'}}  />
                <CardTitle style={{background: '#E8F8F5',padding:'0 0 0 16px'}} expandable={true}
                     title={<span style={{color:'004D40'}}>
                     </span>} />                      
                <CardTitle style={{padding:'0px'}}>
                    <FlatButton
                     label="Edit"
                     primary={true}
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