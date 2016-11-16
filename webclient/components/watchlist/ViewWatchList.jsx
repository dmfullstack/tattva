import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class ViewWatchList extends React.Component {

    static get propTypes() {
   return(
   {
     WatchData: React.PropTypes.array.isRequired
       });
 }
     constructor(props) {
        super(props);
        this.state = {
          watchlist: this.props.WatchData.WatchList,
          purpose: this.props.WatchData.Purpose
      };
    }
    render() {
      console.log(this.state.watchlist);
        return (
            <MuiThemeProvider>
            <div>
            {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                        <div className="container" style={{marginTop: '20px', width: '100%'}}>
                    {/* card for editable watchlists starts */}
                        <Link to={'/EditWatchlist/'+this.props.WatchData.WatchList} 
                          style={{textDecoration: 'none'}}>
                         <List>
                             <ListItem
                              primaryText={this.state.watchlist}
                               secondaryText={this.state.purpose}
                               leftAvatar={
                                 <Avatar style={{left: 8}} >
                                 {this.state.watchlist.substring(0, 2).toUpperCase()}
                                 </Avatar>
                           }
                           rightIcon={<IconButton tooltip="View" style={{marginRight: '30px',
                                 marginTop: '-10px'}} iconStyle={{fontSize: '24px'}}>
                                          <FontIcon className="material-icons">
                                          remove_red_eye</FontIcon>
                                          </IconButton>}
                             />
                          <Divider inset={true} />
                        </List>
                        </Link>
                        </div>
                    </MediaQuery>
        </MediaQuery>
        {/* media query for mobile devices ends*/}
        {/* media query for Desktops starts*/}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                        <div className="container" style={{marginTop: '20px', width: '100%'}}>
                    {/* card for editable watchlists starts */}
                         <Paper style={{width: '85%', marginLeft: '7%'}} zDepth={0} >
                         <Link to={'/EditWatchlist/'+this.props.WatchData.WatchList} 
                                style={{textDecoration: 'none'}}>
                         <List>
                             <ListItem
                              primaryText={this.state.watchlist}
                              secondaryText={this.state.purpose}
                              style={{fontSize: '25px'}}
                               leftAvatar={
                                 <Avatar style={{left: 8}} >
                                 {this.state.watchlist.substring(0, 2).toUpperCase()}
                                 </Avatar>
                           }
                            rightIcon={<IconButton tooltip="View" style={{marginRight: '30px',
                                 marginTop: '-10px'}} iconStyle={{fontSize: '24px'}}>
                                          <FontIcon className="material-icons">
                                          remove_red_eye</FontIcon>
                                          </IconButton>}
                             />
                          <Divider inset={true} />
                        </List>
                        </Link>
                        </Paper>
                        </div>
                    </MediaQuery>
        </MediaQuery>
        {/* media query for Desktops ends*/}
             </div>
            </MuiThemeProvider>
        );
    }
}
