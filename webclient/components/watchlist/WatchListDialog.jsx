import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddWatchList from './AddWatchList.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import NamespaceDialog from '../namespace/NamespaceDialog.jsx';
import Select from 'react-select';

const STATES = require('./states');

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

const items = [];
for(let i=0;i<1;i++){
  items.push(<MenuItem value={i} key={i} primaryText={`Select NameSpace*`}/>);
    for(i=1; i<100; i++){
      items.push(<MenuItem value={i} key={i} primaryText={`NameSpace ${i}`}/>);
    }
}

const item = [];
for (let j = 0; j < 1; j++ ){
  item.push(<MenuItem value={j} key={j} primaryText={`Select DataStream*`}/>);
    for(j=1;j<100;j++){
      item.push(<MenuItem value={j} key={j} primaryText={`DataStream ${j}`} />);
    }
}

export default class WatchListDialog extends React.Component {
  constructor(props){
       super(props);
       this.state = {numChildren:0,
                      dataSource: [],
                      removeField:false,removeIndex:0,
                      value1:0,
                      open:false,openStream:false,openWatch:false,insert:false,data:[],
                      displayName: 'StatesField',
                      propTypes:{label: React.PropTypes.string,searchable: React.PropTypes.bool},
                      country: 'AU',
                      disabled: false,
                      searchable: this.props.searchable,
                      selectValue: '',
                      clearable: true,
                      label: 'States:',
                      searchable: true
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
  
  handleChange = (event, index, value1) => 
   {
    this.setState({value1});
   };
  
  handleOpen = () => {
    this.setState({open: true});
   };
  
  handleClose = () => {
    this.setState({open: false});
   };
  
  adding = (e) =>
  {
      $.ajax({
      type: 'POST',
      url:"http://localhost:3001/namespace/",
      dataType: 'json',
      data: e,
            cache: false,
            success:function(){
              console.log("done");
            }.bind(this)
       });
    };
   
  switchCountry= (e)=> {
    var newCountry = e.target.value;
    console.log('Country changed to ' + newCountry);
    this.setState({
      country: newCountry,
      selectValue: null
    });
  };

  updateValue =(newValue)=> {
    console.log('State changed to ' + newValue);
    this.setState({
      selectValue: newValue
    });
  };

  focusStateSelect =()=> {
    this.refs.stateSelect.focus();
  };

  toggleCheckbox =(e)=> {
    let newState = {};
    newState[e.target.name] = e.target.checked;
    this.setState(newState);
  };
  
  render() {
    var options = STATES[this.state.country];

    var newcreate;
    if(this.state.open){
      newcreate= <NamespaceDialog  open={this.state.open} close={this.handleClose} name={this.adding}/>;
    }
    const actions = [
      <FlatButton
        label="Create"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeWatch}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeWatch}
      />,
    ];
  
    const children = [];
        for (var i = 0; i < this.state.numChildren; i += 1) 
        {
            children.push(<AddWatchList key={i} index={i} remove={this.handleRemove}/>);
        };
        if (this.state.removeField==true) {
              console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    return (
      <div>
      {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <center>
            <h1>Create WatchList Here </h1>
                <TextField floatingLabelText="NAME OF WATCHLIST*"/>
                <TextField floatingLabelText="PURPOSE*"/>
                <Select ref="stateSelect" placeholder="states" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

        <div style={{ marginTop: 14 }}>
          <button type="button" onClick={this.focusStateSelect}>Focus Select</button>
        </div>
      




                <DropDownMenu maxHeight={300} value={this.state.value1} onChange={this.handleChange}>
                {items}
                </DropDownMenu>
                <DropDownMenu maxHeight={300} value={this.state.value1} onChange={this.handleChange}>
                {item}
                </DropDownMenu>
                <FlatButton label="Default" />
                </center>
                {children}
                <br/><br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
            </MediaQuery> 
        </MediaQuery> 
      {/* media query for mobile devices ends*/}
      {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
            <center>
                <h1>Create WatchList Here </h1>
                <TextField floatingLabelText="NAME OF WATCHLIST*"/>&emsp;
                <TextField floatingLabelText="PURPOSE*"/>
                <br/>
                <Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable}
                 name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} 
                 onChange={this.updateValue} searchable={this.state.searchable}/>
                <div style={{ marginTop: 14 }}>
                <button type="button" onClick={this.focusStateSelect}>Focus Select</button>
                </div>
                <DropDownMenu maxHeight={300} value={this.state.value1} onChange={this.handleChange}>
                {items}
                </DropDownMenu>
                <DropDownMenu maxHeight={300} value={this.state.value1} onChange={this.handleChange}>
                {item}
                </DropDownMenu>
                <FlatButton label="New NameSpace" onClick={this.handleOpen}></FlatButton>
                {newcreate}
                </center>
                <br/>
                {children}
                <br/><br/><br/>
                <RaisedButton label="Add Expression" fullWidth={true} onClick={this.handleChild} />
            </MediaQuery> 
        </MediaQuery> 
      {/* media query for Desktops ends */}
      </div>
    );
  }
}