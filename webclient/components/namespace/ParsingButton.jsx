import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import ParseMap from './ParseMap.jsx';

export default class ParsingButton extends React.Component {
  constructor(props){
       super(props);
       this.state = {dataitem:"",insert:false};
   }
  dataname = (e) =>{
    this.setState({dataitem: e.target.value});
  }
  handleparse = () =>{
    console.log(this.state.dataitem);
    this.setState({insert:true});
  }
	 render() {
    var parsefunction;
    if (this.state.insert) {
      parsefunction=<ParseMap dataitem={this.state.dataitem}/>
    }
     return (
   		<div>
   	{/* media query for mobile devices starts*/}

   	    <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                  	<TextField
		   		           multiLine={true}
					           rows={1}
					           textareaStyle={{color:"#33FF36"}}
					           style={{background:"black",height:"100px",width:"200px"}}
                     value={this.state.dataitem}
                     onChange={this.dataname}
					           underlineShow={false} 
                     /><br /><br />
				   	        <RaisedButton label="Parse" primary={true} onClick={this.handleparse}/>
                    {parsefunction}
                </MediaQuery> 
        </MediaQuery>
    {/* media query for mobile devices ends*/}
    
    {/* media query for Desktops starts */}    
   	   	<MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                  	<TextField
			                multiLine={true}
					            rows={1}
					            textareaStyle={{color:"#33FF36"}}
					            style={{background:"black",height:"200px",width:"400px"}}
                      value={this.state.dataitem}
                      onChange={this.dataname}
					            underlineShow={false} 
                      />
					          <br /><br />
				   	        <RaisedButton label="Parse" primary={true} onClick={this.handleparse} />
                    {parsefunction}
                </MediaQuery> 
        </MediaQuery>
    {/* media query for Desktops ends */}
   	   </div>
   	   );
	}
}

