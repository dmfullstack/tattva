import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
			<div>
			<AppBar style={{background:'#00ACC1',marginTop:"-8px"}}
			title="Tattva"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
			/>
			{this.props.children}
			</div>
			</MuiThemeProvider>
			);
	}
}