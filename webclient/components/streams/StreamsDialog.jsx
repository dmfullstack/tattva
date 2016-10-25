import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddStreams from './AddStreams.jsx';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};
export default class StreamsDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,selectedValue:"Select namespace",removeField:false,removeIndex:0};
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
  handleNamespace = (event, index, value) => 
   {
    console.log(value);
    this.setState({selectedValue:value});
   }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeStream}
      />,
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeStream}
      />
    ];
  {/* calling AddStreams component */}

      var menuList  = this.props.data2.map(function(listMenu){
        return(<MenuItem key={listMenu._id} value={listMenu.namespace} primaryText={listMenu.namespace} />);
        }.bind(this));
        
    const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddStreams key={i} index={i} remove={this.handleRemove}/>);
        };
        if (this.state.removeField==true) {
              console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    return (
      <div>
        <Dialog
          title="Create Streams Here"
          actions={actions}
          modal={false}
          open={this.props.openStream}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle} >

  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                        <DropDownMenu value={this.state.selectedValue} maxHeight={300} onChange={this.handleNamespace} >
                          <MenuItem value="Select namespace" primaryText="Select namespace*" />
                           {menuList}
                        </DropDownMenu>
                        <TextField floatingLabelText="NAME OF STREAM*" />&nbsp;
                        <TextField floatingLabelText="DESCRIPTION*" />&nbsp;
                        <TextField floatingLabelText="ADDRESS*" />&nbsp;
                        <TextField floatingLabelText="PORT*"/>&nbsp;
                        <TextField floatingLabelText="LOCATION*" />
                        <br></br>
                        <center>
                        <span><b>Query Criteria-Build your query here</b></span>
                        </center>{children}
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                    </MediaQuery> 
        </MediaQuery> 
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
                    <MediaQuery query='(min-width: 487px)'>
                        <DropDownMenu value={this.state.selectedValue} maxHeight={300} onChange={this.handleNamespace} >
                          <MenuItem value="Select namespace" primaryText="Select namespace*" />
                           {menuList}
                        </DropDownMenu>
                        <center>
                        <div className="container">
                        <div className="row">
                        <div className="col-xs-2.4"><TextField floatingLabelText="NAME OF STREAM*" /></div>&emsp;
                        <div className="col-xs-2.4"><TextField floatingLabelText="DESCRIPTION*" /></div>&emsp;
                        <div className="col-xs-2.4"><TextField floatingLabelText="ADDRESS*" /></div>&emsp;
                        <div className="col-xs-2.4"><TextField floatingLabelText="PORT*" /></div>&emsp;
                        <div className="col-xs-2.4"><TextField floatingLabelText="LOCATION*" /></div>
                        </div>
                        </div>
                        <br></br>
                        <span style={{fontSize:"18px"}}>Query Criteria-Build your query here</span>
                        {children}</center>
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px"}}>
                         <ContentAdd/>
                        </FloatingActionButton>
                    </MediaQuery> 
        </MediaQuery> 
  {/* media query for Desktops ends*/}
        </Dialog>
      </div>
    );
  }
}