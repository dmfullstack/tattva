import React from 'react';
import $ from 'jquery';
import WatchMapping from './WatchMapping.jsx';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class WatchComp extends React.Component {
constructor(props) {
   super(props);
   this.state = { expression: []
   };
}

componentDidMount = () =>
{
   $.ajax({
       type: 'GET',
       url: '/watchlist/get/'+this.props.params.WatchList,
       dataType: 'json',
       success: function(res) {
        this.setState({expression: res.Expressions})
        console.log(res);
       }.bind(this),
       error: function() {
       }
   });
};
render() {
  return(
      <div>
          <WatchMapping expression={this.state.expression} WatchList={this.props.params.WatchList}/>
      </div>
        );
    }
}