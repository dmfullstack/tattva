import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';

export default class ParsingButton extends React.Component {
	 render() {
   return (
   	   <div>
   	    <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                    	<TextField
					      multiLine={true}
					      rows={1}
					      textareaStyle={{color:"#33FF36"}}
					      style={{background:"black",height:"100px",width:"200px"}}
					      underlineShow={false} /><br /><br />
				   	   <RaisedButton label="Parse" primary={true} />
                    </MediaQuery> 
        </MediaQuery> 
   	   	<MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                    	<TextField
					      multiLine={true}
					      rows={1}
					      textareaStyle={{color:"#33FF36"}}
					      style={{background:"black",height:"200px",width:"400px"}}
					      underlineShow={false}
					    /><br /><br />
				   	   <RaisedButton label="Parse" primary={true} />
                    </MediaQuery> 
        </MediaQuery>
   	   </div>
   	   );
	}
}
