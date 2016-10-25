import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const styleHeader={background:"#00ACC1 ",fontWeight:"bold"};

export default class ViewWatchList extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
            <div className="container">
            <Link to='/back'><RaisedButton label="Back" buttonStyle={{backgroundColor:"#00ACC1",marginTop:"5px"}}/></Link>
        {/*card for editable namespace starts */}
            <center>
            <Card style={{marginTop:'5px',width:'30%',}}>
                <CardHeader title="WatchList-1" style={styleHeader} titleStyle={{fontSize:"20px"}} />
                <CardTitle title="Expressions used:" />
                <CardTitle title="Namespace used:" />
                <CardTitle title="Streams used:" />
                <CardActions>
                <FlatButton label="Edit" secondary={true} />}
                </CardActions>
            </Card>
            </center>
            </div>            
            </MuiThemeProvider>
            );
    }
}