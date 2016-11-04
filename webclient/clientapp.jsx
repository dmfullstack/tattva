import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './views/home';
import {App} from './components/home';
import ViewWatchList from './components/watchlist/ViewWatchList';
import WatchListDialog from './components/watchlist/WatchListDialog';
import flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';
import StreamsViewComp from './components/streams/StreamsViewComp';
import EditStream from './components/streams/EditStream';
import ViewNamespace from './components/streams/ViewNamespace';
import NamespaceDialog from './components/namespace/NamespaceDialog';
import NamespaceMainComp from './components/namespace/NamespaceMainComp';
import EditNamespace from './components/namespace/EditNamespace'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
		    <Route path="/" component={App} >
		    <IndexRoute component={Home} />
		    <Route path="/watchList" component={ViewWatchList}/>
		    <Route path="/home" component={Home} />
		    <Route path="/stream" component={StreamsViewComp} />
		    <Route path="/createwatch" component={WatchListDialog} />
		    <Route path="/EditStream/:stream" component={EditStream} />
		    <Route path="/createnamespace/:operation/:name/:id" component={NamespaceDialog} />
		    <Route path="/viewnamespace" component={NamespaceMainComp} />
		    <Route path="/createstream/:operations/:stream" component={ViewNamespace} />
		   	<Route path="/editnamespace" component={EditNamespace} />
			</Route>
		</Router>
	</MuiThemeProvider>,
  	document.getElementById('mountapp')
);