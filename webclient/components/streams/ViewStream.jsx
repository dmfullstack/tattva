import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router';

const styles={
    avatar:{
        margin:"5px",
        marginTop:"50px"
    },
    label:{
        fontSize:"25px",
        color:"black"
    }
}
export default class ViewStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }
    // functions for opening dialog box
    openD = () => {
        this.setState({open:true});
    };
    closeD = () => {
        this.setState({open:false})
    };
    render() {
        return (
            <MuiThemeProvider>
            <center>
            <h1>Available Streams</h1>
            <div className="container">
                <div className="row flex-items-xs-middle">
                    <div className="col-xs">
                    <Link to="/editStream" style={{textDecoration: 'none'}}>
         	            <Avatar
                          color={"#FFFFFF"}
                          backgroundColor={"#81C784"}
                          size={80}
                          style={styles.avatar} 
                          > SN1
                        </Avatar>  
                          <span style={styles.label}>Stream Name - 1</span>  
                    </Link>     
                    </div>  
                    <div className="col-xs">
                    <Link to="/editStream" style={{textDecoration: 'none'}}>
                        <Avatar
                          color={"#FFFFFF"}
                          backgroundColor={"#81C784"}
                          size={80}
                          style={styles.avatar} > SN2
                        </Avatar>  
                          <span style={styles.label}>Stream Name - 2</span> 
                    </Link>   
                    </div>  
                    <div className="col-xs">
                    <Link to="/editStream" style={{textDecoration: 'none'}}>
                        <Avatar
                          color={"#FFFFFF"}
                          backgroundColor={"#81C784"}
                          size={80}
                          style={styles.avatar} > SN3
                        </Avatar>  
                          <span style={styles.label}>Stream Name - 3</span>
                    </Link>    
                    </div>  
                </div>
            </div>     
            </center>     
            </MuiThemeProvider>
            );
    }
}