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

const styles = { 
     actionButton: {
    marginLeft : 1400
    }
   };
const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};
export default class StreamsDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,value1:1};
   }
  handleChild = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
   };
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
      />,
    ];
    const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddStreams key={i} />);
        };
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
          <ViewStream /> <TextField floatingLabelText="NAME OF STREAM*" />&emsp;
          <Actiondescription /> <TextField floatingLabelText="DESCRIPTION*" />
          <PermScanWifi /> <TextField floatingLabelText="ADDRESS*" />&emsp;
          <Contentreport />  <TextField floatingLabelText="PORT*"/>
          <Mapsplace /><TextField floatingLabelText="LOCATION*" />&emsp;
          <br></br>
          <br></br>
          <br></br>
          <DropDownMenu value={this.state.value1} maxHeight={300} onChange={this.handleChange1}>
            <MenuItem value={1} primaryText="Select namespace*" />
            <MenuItem value={2} primaryText="Namespace-1" />
            <MenuItem value={3} primaryText="Namespace-2" />
            <MenuItem value={4} primaryText="Namespace-3" />
            <MenuItem value={5} primaryText="Namespace-4" />
            <MenuItem value={6} primaryText="Namespace-5" />
          </DropDownMenu>
          <span style={{marginLeft:'350px',marginTop:"400px"}} ><b>Query Criteria-Build your query here</b></span>
       	  {children}
       	  <FloatingActionButton onClick={this.handleChild} mini={true} style={styles.actionButton}>
		       <ContentAdd/>
		  </FloatingActionButton>
        </Dialog>
      </div>
    );
  }
}