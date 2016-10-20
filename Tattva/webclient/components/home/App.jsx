import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class First extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
			<div >
			<AppBar style={{background:'#009688'}}
			title="Tattva"
			// iconClassNameRight="muidocs-icon-navigation-expand-more"
			/>
			</div>
			</MuiThemeProvider>
			);
	}
}