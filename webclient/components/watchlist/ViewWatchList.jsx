import React from 'react';
import {Card, CardHeader, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router';

export default class ViewWatchList extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <div>
            <Subheader style={{background: '#6F71A5', fontSize: '28px', color: 'white',
            marginTop: '1px', marginLeft: '-7px'}}>WatchLists</Subheader>
            <Link to="/createwatch">
            <FloatingActionButton mini={true} disabled={true} style={{float: 'right',
            marginRight: '20px', marginTop: '-45px'}}>
            <ContentAdd/>
            </FloatingActionButton>
            </Link>
            <center>
            <div className="container" style={{marginTop: '20px', width: '100%'}}>
        {/* card for editable namespace starts */}
            <Card style={{width: '100%'}}>
                <CardHeader
                    title="WatchList 1"
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={{padding: '5px'}} />
                <CardTitle style={{background: '#E8F8F5', padding: '0 0 0 16px'}} expandable={true}
                     title={<span style={{color: '004D40'}} />} />
                <CardTitle style={{padding: '0px'}}>
                    <FlatButton
                     label="Edit"
                     primary={true}
                     style={{color: '004D40'}}
                    />
                </CardTitle>
            </Card>
            </div>
             </center>
             </div>
            </MuiThemeProvider>
        );
    }
}
