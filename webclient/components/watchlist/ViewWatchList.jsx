import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

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
        return (
            <MuiThemeProvider>
            <div>
            <center>
            <div className="container" style={{marginTop: '20px', width: '100%'}}>
        {/* card for editable watchlists starts */}
             <List>
                 <ListItem
                  primaryText={this.state.watchlist}
                   secondaryText={this.state.purpose}
                   leftAvatar={
                     <Avatar style={{left: 8}} >
                     {this.state.watchlist.substring(0, 2).toUpperCase()}
                     </Avatar>
               }
                  // rightIcon={}
                 />
              <Divider inset={true} />
            </List>
            </div>
             </center>
             </div>
            </MuiThemeProvider>
        );
    }
}
