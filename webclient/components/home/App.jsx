import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
            <div>
            <AppBar style={{background:'#66BB6A',marginTop:"-8px"}}
            title="Tattva"
            iconElementRight={<Link to='/home'>
           <IconButton tooltip=" Home " iconStyle={{width:"36px",height:"36px",color:"#FFFFFF",marginLeft:"-30px",marginTop:"-8px"}}>
           <ActionHome/>
           </IconButton>
           </Link>}
            />
            {this.props.children}
            </div>
            </MuiThemeProvider>
            );
    }
}