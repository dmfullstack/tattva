import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {teal900,white,orange200,
  deepOrange300,} from 'material-ui/styles/colors';
var ReactRouter=require('react-router');
var { Router,
    Route,
    IndexRoute,
    IndexLink,
    Link } = ReactRouter;
const style = {marginTop:20,marginLeft:"25px"};
export default class StreamDrawer extends React.Component {
     render() {
        return (
            <div>
                <Drawer open={this.props.openStream} docked={false} onRequestChange={this.props.closeDrawer} containerStyle={{backgroundColor:teal900,marginTop:"70px",marginLeft:"8px"}}>
                <Avatar
                    color={deepOrange300}
                    backgroundColor={white}
                    size={50}       
                    style={style}> NS 
                </Avatar>
                <Avatar
                    color={deepOrange300}
                    backgroundColor={white}
                    size={50}       
                    style={style}> S 
                </Avatar>
                <Avatar
                    color={deepOrange300}
                    backgroundColor={white}
                    size={50}       
                    style={style}
                    onTouchTap={this.handleToggle}> WL
                </Avatar>
                <h2  style={{color:'white',marginLeft:"15px"}}> Streams</h2>
                <MenuItem><Link to="/CreateStreams"  style={{color:'white'}}>Create Streams</Link></MenuItem>
                <MenuItem><Link to="/EditStreams"  style={{color:'white'}} >Edit Streams</Link></MenuItem>
                <MenuItem><Link to="/SelectStreams"  style={{color:'white'}}>Select Streams</Link></MenuItem>
                <MenuItem><Link to="/DeleteStreams"  style={{color:'white'}}>Delete Streams</Link></MenuItem>
                <div>
                   {this.props.children}        
                </div>
                </Drawer>
            </div>
            );
    }
}