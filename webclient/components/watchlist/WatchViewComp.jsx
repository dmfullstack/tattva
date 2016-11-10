import React from 'react';
import $ from 'jquery';
import WatchMap from './WatchMap.jsx';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class WatchViewComp extends React.Component {
constructor(props) {
   super(props);
   this.state = { WatchData: []
   };
}

componentDidMount = () =>
{
   $.ajax({
       type: 'GET',
       url: '/watchlist/get',
       dataType: 'json',
       success: function(res) {
        this.setState({WatchData: res});
       }.bind(this),
       error: function() {
       }
   });
};
render() {
  return(
    <div>
          <Subheader style={{background: '#6F71A5', fontSize: '28px',
                               color: 'white', marginTop: '1px',
                               marginLeft: '-7px'}}>WatchLists</Subheader>
            <Link to="/createwatch">
            <div>
            <IconButton tooltip="Add Watchlist" style={{float: 'right',
            marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
            <FontIcon className="material-icons" color={'white'}>add_circle</FontIcon>
            </IconButton>
            </div>
            </Link>
          <WatchMap WatchData={this.state.WatchData} />
      </div>
        );
}
}
