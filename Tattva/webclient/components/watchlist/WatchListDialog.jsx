import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddWatchList from './AddWatchList.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import MediaQuery from 'react-responsive';

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class WatchListDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,
                      dataSource: []
                     };
   }

  handleChild = () =>
   {
       this.setState({
            numChildren: this.state.numChildren + 1
        });
   };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeWatch}
      />,
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeWatch}
      />,
    ];

    const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddWatchList key={i} />);
        };
    
    return (
      <div>
        <Dialog
          title="Create WatchList here"
          actions={actions}
          modal={false}
          open={this.props.openWatch}
          onRequestClose={this.props.closeWatch}
          autoScrollBodyContent={true}
          contentStyle={customContentStyle} >
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <center>
                <TextField floatingLabelText="NAME OF WATCHLIST*"/>
             	  <TextField floatingLabelText="PURPOSE*"/>
                
                <AutoComplete
                hintText="Select Namespace"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                />
                <AutoComplete
                hintText="Select Data Stream"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                />
                </center>
                {children}
                <br/><br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
            </MediaQuery> 
        </MediaQuery> 

        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
            <center>
                <TextField floatingLabelText="NAME OF WATCHLIST*"/>&emsp;
                <TextField floatingLabelText="PURPOSE*"/>
                <br />
                <AutoComplete
                hintText="Select Namespace"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                />&emsp;
                <AutoComplete
                hintText="Select Data Stream"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                />
                </center>
                <br/>
                {children}
                <br/><br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
            </MediaQuery> 
        </MediaQuery> 
        </Dialog>
      </div>
    );
  }
}