import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Home from './views/home';
import {CreateNamespace,DrawerBox} from './components/namespace';
import {CreateStreams,StreamDrawer,EditStreams} from './components/streams';

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path="CreateNamespace" component={CreateNamespace} />
			<Route path="CreateStreams" component={CreateStreams} />
			<Route path="EditStreams" component={EditStreams} />
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);