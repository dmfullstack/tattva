import React from 'react';
import $ from 'jquery';
import WatchMap from './WatchMap.jsx';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
            <FloatingActionButton mini={true} disabled={true} style={{float: 'right',
            marginRight: '20px', marginTop: '-45px'}}>
            <ContentAdd/>
            </FloatingActionButton>
            </div>
            </Link>
          <WatchMap WatchData={this.state.WatchData} />
      </div>
        );
}
}
