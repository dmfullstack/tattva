import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';

export default class ParsingButton extends React.Component {

    constructor(props){
       super(props);
       this.state = {parsed:''};
   }
    paresedData = () => {
        console.log("asdc");
    };
	 render() {
     return (
   		<div>
   	{/* media query for mobile devices starts*/}

   	    <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                  	<TextField
		   		           multiLine={true}
					           rows={10}
					           textareaStyle={{color:"#33FF36"}}
					           style={{background:"black",height:"100px",width:"200px"}}
					           underlineShow={false} /><br /><br />
				   	        <RaisedButton onTouchTap={this.paresedData} label="Parse" primary={true} />
                </MediaQuery> 
        </MediaQuery> 
    {/* media query for mobile devices ends*/}
    
    {/* media query for Desktops starts */}    
   	   	<MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                  	<TextField
			                multiLine={true}
					            rows={10}
					            textareaStyle={{color:"#33FF36"}}
					            style={{background:"black",height:"200px",width:"400px"}}
					            underlineShow={false} />
					          <br /><br />
				   	        <RaisedButton label="Parse" onTouchTap={this.paresedData} primary={true} />
                </MediaQuery> 
        </MediaQuery>
    {/* media query for Desktops ends */}
   	   </div>
   	   );
	}
}
