import React from 'react';
import ViewMap from './ViewMap.jsx';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class NamespaceMainComp extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    data2: [], dataEmpty: 0, flag: false
  };
}
RecallNamespace = () =>{
 $.ajax({
   type: 'GET',
   url: 'http://localhost:8081/namespace/get',
   dataType: 'json',
   success: function(res) {
   this.setState({data2: res, dataEmpty: res.length, flag: true });
   }.bind(this),
   async: false,
   error: function() {
  }
});
};
componentDidMount = () => {
this.RecallNamespace();
};
render() {
       return(

         <div>
          {this.state.flag && this.state.dataEmpty === 0 ?
          <div>
            <center>
              <div style={{marginTop: '200px'}}><h2 >You are yet to create a namespace...</h2>
                <h3>Namespace defines the format or schema of data generated at Data Source</h3>
                <Link to="/createnamespace/create/new"><RaisedButton label="Create"
                      buttonStyle={{backgroundColor: '#5CA59F  '}}/></Link>
              </div>
            </center> </div> :
            <div>
            <Subheader style={{background: '#BA6694  ',
                              fontSize: '28px',
                              color: 'white',
                              marginTop: '1px',
                              marginLeft: '-7px'}}>
                              NameSpace</Subheader>
           <Link to="/createnamespace/create/new">
           <IconButton tooltip="Add Namespace" style={{float: 'right',
            marginTop: '-55px', marginRight: '20px'}} iconStyle={{fontSize: '36px'}}>
            <FontIcon className="material-icons" color={'white'}>add_circle</FontIcon>
            </IconButton>
           </Link>
            <ViewMap data2={this.state.data2}
                     DeleteNameSpace={this.RecallNamespace}
                     UpdateNameSpace={this.RecallNamespace} /></div>}
         </div>

         );
  }
}
