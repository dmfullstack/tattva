import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import AddNamespace from './AddNamespace.jsx';

   const styles = { 
    head: {
     background: '#004D40'
    },
     actionButton: {
     marginLeft: 1070
    },
     raisedButton: {
     marginLeft: 700
    }
   };
export default class CreateNamespace extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0};
   }
  handleChild = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
   };
  render() {
   const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddNamespace key={i}/>);
        };
   return (
       <MuiThemeProvider>
       <div>
       <AppBar title="Creating Namespace" iconElementLeft={<IconButton></IconButton>} style={styles.head}/>
       <TextField floatingLabelText="NAME OF NAMESPACE" style={{marginLeft:'300px', marginTop:'80px'}}/>&emsp;
       <TextField floatingLabelText="DESCRIPTION" style={{marginLeft:'500px'}}/>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <span style={{fontSize:'24px',marginLeft:'650px'}}><b>Define Data Schema For Namespace</b></span>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       {children}
       <FloatingActionButton onClick={this.handleChild} mini={true} style={styles.actionButton}>
       <ContentAdd/>
       </FloatingActionButton>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <RaisedButton label="Cancel" style={styles.raisedButton}/>&emsp;
       <RaisedButton label="Create" primary={true}/>
       </div>
       </MuiThemeProvider>
     );
 }
}