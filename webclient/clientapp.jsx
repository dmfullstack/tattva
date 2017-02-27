import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './views/home';
import {App} from './components/home';
import WatchViewComp from './components/watchlist/WatchViewComp';
import GetNamespace from './components/watchlist/GetNamespace';
import StreamsViewComp from './components/streams/StreamsViewComp';
import EditStream from './components/streams/EditStream';
import ViewNamespace from './components/streams/ViewNamespace';
import NamespaceDialog from './components/namespace/NamespaceDialog';
import NamespaceMainComp from './components/namespace/NamespaceMainComp';
import CreateWatchList from './components/watchlist/CreateWatchList';
import EditWatchlist from './components/watchlist/EditWatchlist'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={App} >
			<IndexRoute component={Home} />
			<Route path="/watchList" component={WatchViewComp}/>
			<Route path="/home" component={Home} />
			<Route path="/stream" component={StreamsViewComp} />
			<Route path="/createwatch" component={GetNamespace} />
			<Route path="/EditStream/:stream" component={EditStream} />
			<Route path="/createnamespace/:operation/:name" component={NamespaceDialog} />
			<Route path="/viewnamespace" component={NamespaceMainComp} />
			<Route path="/createstream/:operations/:stream" component={ViewNamespace} />
			<Route path="/createwatchlist" component={CreateWatchList} />
			<route path="/EditWatchlist/:WatchList" component={EditWatchlist}/>
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('mountapp')
);
