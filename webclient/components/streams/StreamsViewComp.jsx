
import React from 'react';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import StreamsMap from './StreamsMap.jsx';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class StreamsViewComp extends React.Component {
constructor(props) {
 super(props);
 this.state = { StreamsData: [], dataEmpty: 0, flag: false
 };
}
refresh = () =>{
 $.ajax({
     type: 'GET',
     url: '/stream/get',
     dataType: 'json',
     success: function(res) {
      this.setState({StreamsData: res});
     }.bind(this),
     error: function() {
     }
 });
};
componentDidMount = () =>
{
 $.ajax({
     type: 'GET',
     url: '/stream/get',
     dataType: 'json',
     success: function(res) {
      this.setState({StreamsData: res, dataEmpty: res.length, flag: true});
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
               <div style={{marginTop: '200px'}}><h2 >You are yet to create a stream...</h2>
                  <h3>Start with creating one...</h3>
                  <Link to="/createstream/create/stream"><RaisedButton label="Create"
                  buttonStyle={{backgroundColor: '#5CA59F   '}}/></Link>
               </div>
            </center> </div> :
            <div>
              <Subheader
                style={{background: '#DB8C90  ', fontSize: '28px', color: 'white',
                marginTop: '1px', marginLeft: '-7px'}}>
                Streams</Subheader>
                  <Link to="/createstream/create/stream">
                  <IconButton tooltip="Add Streams"
                  style={{float: 'right', marginTop: '-55px', marginRight: '20px'}}
                  iconStyle={{fontSize: '36px'}}>
                  <FontIcon className="material-icons" color={'white'}>add_circle</FontIcon>
                  </IconButton>
                  </Link>
                <StreamsMap StreamsData={this.state.StreamsData} refresh={this.refresh}/>
                </div>}
        </div>
  );
}
}
