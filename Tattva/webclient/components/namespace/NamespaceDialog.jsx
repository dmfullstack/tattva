import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNamespace from './AddNamespace.jsx';
import ParsingButton from './ParsingButton.jsx';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
};
export default class NamespaceDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,removeField:false,removeIndex:0,parsedata:false
        // ,expanded: false
      };
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
   };
   handleParse = () =>{
    this.setState({parsedata:true});
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
    var pdata;
    if(this.state.parsedata){
      pdata=<ParsingButton />;
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
          <MediaQuery query='(max-device-width: 487px)'>
                  <MediaQuery query='(max-width: 487px)'>
                    <center>
                        <TextField floatingLabelText="NAME OF NAMESPACE"
                            />&emsp;&emsp;
                        <TextField floatingLabelText="DESCRIPTION" /><br />
                        <span style={{fontSize:'18px'}}><b>Define Data Schema For Namespace</b></span><br />
                        <RaisedButton label="Parse from sample data" onTouchTap={this.handleParse} secondary={true}/>
                          {pdata}
                    </center>
                          {children}
                          
                          <br />
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                  </MediaQuery> 
          </MediaQuery> 
          <MediaQuery query='(min-device-width: 487px)'>
                  <MediaQuery query='(min-width: 487px)'>
                    <center>
                        <TextField floatingLabelText="NAME OF NAMESPACE" 
                           />&emsp;
                        <TextField floatingLabelText="DESCRIPTION" /><br/><br />
                        <span style={{fontSize:'24px'}}><b>Define Data Schema For Namespace</b></span><br />
                        <RaisedButton label="Parse from sample data" onTouchTap={this.handleParse} secondary={true}/>
                          {pdata}
                    </center>
                          {children}
                          
                          <br />
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                  </MediaQuery> 
          </MediaQuery>  
           </Dialog>
      </div>      
    );
  }
}