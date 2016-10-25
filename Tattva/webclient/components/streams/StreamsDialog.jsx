import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Mapsplace from 'material-ui/svg-icons/maps/place';
import Actiondescription from 'material-ui/svg-icons/action/description';
import Contentreport from 'material-ui/svg-icons/content/report';
import PermScanWifi from 'material-ui/svg-icons/action/Perm-Scan-Wifi';
import ViewStream from 'material-ui/svg-icons/action/view-stream';
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
       this.state = {numChildren:0,value1:1,removeField:false,removeIndex:0};
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
  render() {
    const actions = [
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeStream}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeStream}
      />,
    ];
  {/* calling AddStreams component */}
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
          title="Create Streams here"
          actions={actions}
          modal={false}
          open={this.props.openStream}
          onRequestClose={this.props.closeStream}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle} >

  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
                    <MediaQuery query='(max-width: 487px)'>
                        <ViewStream /> <TextField floatingLabelText="NAME OF STREAM*" />&nbsp;
                        <Actiondescription /> <TextField floatingLabelText="DESCRIPTION*" />&nbsp;
                        <PermScanWifi /> <TextField floatingLabelText="ADDRESS*" />&nbsp;
                        <Contentreport />  <TextField floatingLabelText="PORT*"/>&nbsp;
                        <Mapsplace /><TextField floatingLabelText="LOCATION*" />
                        <br></br>
                        <DropDownMenu value={this.state.value1} maxHeight={300} onChange={this.handleChange1} >
                          <MenuItem value={1} primaryText="Select namespace*" />
                          <MenuItem value={2} primaryText="Namespace-1" />
                          <MenuItem value={3} primaryText="Namespace-2" />
                          <MenuItem value={4} primaryText="Namespace-3" />
                          <MenuItem value={5} primaryText="Namespace-4" />
                          <MenuItem value={6} primaryText="Namespace-5" />
                        </DropDownMenu>
                        <br /><br/>
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
                        <div className="container">
                        <div className="row">
                        <div className="col-xs-2.4"><ViewStream/><TextField floatingLabelText="NAME OF STREAM*" /></div>
                        <div className="col-xs-2.4"><Actiondescription/><TextField floatingLabelText="DESCRIPTION*" /></div>
                        <div className="col-xs-2.4"><PermScanWifi/><TextField floatingLabelText="ADDRESS*" /></div>
                        <div className="col-xs-2.4"><Contentreport/><TextField floatingLabelText="PORT*" /></div>
                        <div className="col-xs-2.4"><Mapsplace/><TextField floatingLabelText="LOCATION*" /></div>
                        </div>
                        </div>
                        <br></br>
                        <DropDownMenu value={this.state.value1} maxHeight={300} onChange={this.handleChange1} >
                          <MenuItem value={1} primaryText="Select namespace*" />
                          <MenuItem value={2} primaryText="Namespace-1" />
                          <MenuItem value={3} primaryText="Namespace-2" />
                          <MenuItem value={4} primaryText="Namespace-3" />
                          <MenuItem value={5} primaryText="Namespace-4" />
                          <MenuItem value={6} primaryText="Namespace-5" />
                        </DropDownMenu>
                        <br /><br/>
                        <center>
                        <span ><b>Query Criteria-Build your query here</b></span>
                        </center>
                        {children}
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