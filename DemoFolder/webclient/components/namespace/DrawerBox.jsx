import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {teal900,white,black,orange200,deepOrange300} from 'material-ui/styles/colors';

var ReactRouter=require('react-router');
var { Router,
     Route,
     IndexRoute,
     IndexLink,
     Link } = ReactRouter;
const style={marginTop:20,marginLeft:"25px"};
export default class DrawerBox extends React.Component {
	render() {
		return (
			<div>
		        <Drawer open={this.props.openDrawer} docked={false} onRequestChange={this.props.closeDrawer} containerStyle={{backgroundColor:teal900,marginTop:"70px",marginLeft:"8px"}}>
		        <Avatar
                    color={deepOrange300}
                    backgroundColor={white}
                    size={50}       
                    style={style}> NS </Avatar>
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
                    style={style}> WL 
                </Avatar>
		        <h2  style={{color:'white',marginLeft:"15px"}}>NameSpace </h2>
		          <MenuItem ><Link to="/CreateNamespace"  style={{color:'white'}}>Create Namespace</Link></MenuItem>
		          <MenuItem ><Link to="/EditNamespace"  style={{color:'white'}} >Edit Namespace</Link></MenuItem>
		          <MenuItem ><Link to="/SelectNamespace"  style={{color:'white'}}>Select Namespace</Link></MenuItem>
		          <MenuItem ><Link to="/DeleteNamespace"  style={{color:'white'}}>Delete Namespace</Link></MenuItem>
		          <div>
			        {this.props.children}        
			      </div>
        		</Drawer>
        	</div>
			);
	}
}