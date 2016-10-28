import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './views/home';
import {App} from './components/home';
import ViewWatchList from './components/watchlist/ViewWatchList';
import WatchListDialog from './components/watchlist/WatchListDialog';
import flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';
import ViewStream from './components/streams/ViewStream';
import EditStream from './components/streams/EditStream';
import ViewNamespace from './components/streams/ViewNamespace';
import NamespaceDialog from './components/namespace/NamespaceDialog';
import NamespaceMainComp from './components/namespace/NamespaceMainComp';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
		    <Route path="/viewnamespace" component={NamespaceMainComp} />
		    <Route path="/createstream" component={ViewNamespace} />
			</Route>
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);