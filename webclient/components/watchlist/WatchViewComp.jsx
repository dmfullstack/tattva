import React from 'react';
import $ from 'jquery';
import WatchMap from './WatchMap.jsx';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class WatchViewComp extends React.Component {
constructor(props) {
   super(props);
   this.state = { WatchData: [], flag: false, dataEmpty: 0
   };
}

componentDidMount = () =>
{
   $.ajax({
       type: 'GET',
       url: '/watchlist/get',
       dataType: 'json',
       success: function(res) {
        this.setState({WatchData: res, dataEmpty: res.length, flag: true});
       }.bind(this),
       error: function() {
       }
   });
};
render() {
  return(
      <div>
          {this.state.flag && this.state.dataEmpty === 0 ?
          <div>
          <center>
               <div style={{marginTop: '200px'}}><h2 >You are yet to create a Watchlist...</h2>
                  <h3>Start with creating one...</h3>
                  <Link to="/createwatch"><RaisedButton label="Create"
                  buttonStyle={{backgroundColor: '#5CA59F   '}}/></Link>
               </div>
            </center> </div> :
          <div>
          <Subheader style={{background: '#BBDEFB', fontSize: '28px',
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
          </div>}
      </div>
        );
    }
}
