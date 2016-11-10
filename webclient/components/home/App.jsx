import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

const styles =
{
    menu: {
        color: 'white',
        // fontFamily: 'Open Sans',
        fontSize: '20'
    },
    app: {
        background: '#5CA59F ',
        marginTop: '-8px',
        marginLeft: '-8px'
    },
    apptitle: {
        fontSize: '35px'
        // fontFamily: 'Open Sans'
    }

};
export default class App extends React.Component {
static get propTypes() {
    return(
        {
        children: React.PropTypes.object.isRequired
    }
    );
}
constructor(props) {
 super(props);
 this.state = {open: false};
}
handleToggle = () => this.setState({open: !this.state.open});
handleClose = () => this.setState({open: false});
render() {
   return (
     <div>
       <MuiThemeProvider>
         <div style={{marginRight: '-15px'}}>
         <AppBar style={styles.app} titleStyle={styles.apptitle} title='TATTVA'
         onLeftIconButtonTouchTap={this.handleToggle}/>
        {this.props.children}
         </div>
         </MuiThemeProvider>
         <div>
       <Drawer
         width={200}
         docked={false}
         // containerStyle={{marginTop: '63px', background: '#5CA59F', fontFamily: 'Open Sans'}}
         containerStyle={{marginTop: '63px', background: '#5CA59F'}}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open})}
       >
         <Link to='/home' style={{textDecoration: 'none'}}>
         <MenuItem style={styles.menu} onTouchTap={this.handleClose}>Home</MenuItem>
         </Link>
         <Link to='/viewnamespace' style={{textDecoration: 'none'}}>
         <MenuItem style={styles.menu} onTouchTap={this.handleClose}>NameSpace</MenuItem>
         </Link>
         <Link to='/stream' style={{textDecoration: 'none'}}>
         <MenuItem style={styles.menu} onTouchTap={this.handleClose}>Streams</MenuItem>
         </Link>
         <Link to='/watchlist' style= {{textDecoration: 'none'}}>
         <MenuItem style={styles.menu} onTouchTap={this.handleClose}>WatchList</MenuItem>
         </Link>
       </Drawer>
       </div>
     </div>
 );
}
}
