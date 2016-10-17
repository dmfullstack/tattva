import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNamespace from './AddNamespace.jsx';

const styles = { 
     actionButton: {
     marginLeft: 1050
    }
   };
const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};
export default class NamespaceDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,removeField:false,removeIndex:0};
   }
  handleChild = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
   };
   handleRemove = (index) =>
   {
      this.setState({removeField:true, removeIndex:index});
      console.log("state is marked");
   };
   handlerenderagain = () =>
   {
    console.log("called rerender again");
    this.setState({numChildren: this.state.numChildren - 1, removeField:false});
   }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.close}
      />,
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.close}
      />,
    ];
    var children = [];
        for (var i = 0; i < this.state.numChildren; i+=1) 
        {
            children.push(<AddNamespace key={i} index={i} remove={this.handleRemove}/>)
        };
        if (this.state.removeField==true) {
              console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
        
    return (
      <div>
        <Dialog
          title="Create Namespace here"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.close}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle} >
          <TextField floatingLabelText="NAME OF NAMESPACE" style={{marginLeft:"200px"}}/>
       	  <TextField floatingLabelText="DESCRIPTION" style={{marginLeft:"100px"}}/><br/><br/>
       	  <span style={{fontSize:'24px',marginLeft:'350px'}}><b>Define Data Schema For Namespace</b></span>
       	  {children}
       	  <FloatingActionButton onClick={this.handleChild} mini={true} style={styles.actionButton}>
		       <ContentAdd/>
		  </FloatingActionButton>
        </Dialog>
      </div>
    );
  }
}