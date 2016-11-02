import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';
export default class App extends React.Component {
  render() {
      return (
          <MuiThemeProvider>
            <div>
            <Link to='/home' style={{textDecoration:"none"}}>
            <AppBar style={{background:'#66BB6A',marginTop:"-8px"}}
              title="TATTVA"
              iconElementLeft={<Link to='/home'>
              </Link>}
            />
            </Link>
            {this.props.children}            
            </div>
          </MuiThemeProvider>
          );
  }
}