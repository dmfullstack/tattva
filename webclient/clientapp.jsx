import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Home from './views/home';
import {App} from './components/home';
import {ViewWatchList,WatchListDialog} from './components/watchlist';
import flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';
import {ViewStream,EditStream,StreamsDialog} from './components/streams';
import {NamespaceDialog,MoreNamespace} from './components/namespace';

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
		    <Route path="/" component={App} >
		    <IndexRoute component={Home} />
		    <Route path="/watchList" component={ViewWatchList}/>
		    <Route path="/home" component={Home} />
		    <Route path="/stream" component={ViewStream} />
		    <Route path="/createwatch" component={WatchListDialog} />
		    <Route path="/editStream" component={EditStream} />
		    <Route path="/createnamespace" component={NamespaceDialog} />
		    <Route path="/viewnamespace" component={MoreNamespace} />
		    <Route path="/createstream" component={StreamsDialog} />
			</Route>
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);