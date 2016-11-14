import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MediaQuery from 'react-responsive';
let arr = [];
let obj = {};
let flag = true;
let ind = 0;
export default class AddNamespace extends React.Component {
  static get propTypes() {
    return(
    {
      value: React.PropTypes.object.isRequired,
      remove: React.PropTypes.string.isRequired,
      position: React.PropTypes.string.isRequired,
      changeNameTextField: React.PropTypes.string.isRequired,
      changeSampleTextField: React.PropTypes.string.isRequired,
      changeAliasTextField: React.PropTypes.string.isRequired,
      changeSampleTypeButton: React.PropTypes.string.isRequired
    });
  }
  constructor(props) {
    super(props);
    this.state = {
            name: this.props.value.name,
            alias: this.props.value.alias,
            sample: this.props.value.sample,
            type: this.props.value.type,
            aliasfieldData: '',
            namefieldData: '',
            samplefieldData: ''
    };
  }
  remove =() =>
  {
    this.props.remove(this.props.position);
  };
  handleAliasTextfields = (e) =>
  {
     this.setState({aliasfieldData: e.target.value});
     this.props.changeAliasTextField({aliasfieldData: e.target.value,
                                      position: this.props.position});
  };
  handleNameTextfields = (e) =>
  {
     this.setState({namefieldData: e.target.value});
     this.props.changeNameTextField({namefieldData: e.target.value,
                                      position: this.props.position});
  };
  handleSampleTextfields = (e) =>
  {
     this.setState({samplefieldData: e.target.value});
     this.props.changeSampleTextField({samplefieldData: e.target.value,
                                      position: this.props.position});
  };
  handleTypeButton=(e)=>
 {
      this.setState({type: e.target.value});
    this.props.changeSampleTypeButton({type: e.target.value,
                                     position: this.props.position});
 };
  componentWillMount =() => {
    if(flag) {
    obj .name = this.state.name;
    obj .alias = this.state.alias;
    if (this.state.sample === [])
      {
        obj.sample = 'null';
      }
    else
      {
        obj.sample = this.state.sample;
      }
    obj.type = this.state.type;
    arr.push(obj);
    obj = {};
    ind = ind + 1;
  }
  };
  render() {
      return (
        <div>
      {/* media query for mobile device starts */}
          <MediaQuery query='(max-device-width: 487px)'>
                   <MediaQuery query='(max-width: 487px)'>
                        <TextField floatingLabelText="ALIAS*"
                                   defaultValue={this.state.alias}
                                   onChange={this.handleAliasTextfields}/>&emsp;&emsp;
                        <TextField floatingLabelText="DATA FIELD NAME*"
                                   defaultValue={this.state.name}
                                   onChange={this.handleNameTextfields}/>&emsp;
                        <TextField floatingLabelText="SAMPLE*"
                                   defaultValue={this.state.sample}
                                   onChange={this.handleSampleTextfields}/>&emsp;
                        <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.type}
                                        onChange={this.handleTypeButton}>
                        <RadioButton value="dimension"
                                     label="Dimensions"/>
                        <RadioButton value="measure" label="Measurable"/>
                        <RadioButton value="time" label="Time" />
                        </RadioButtonGroup>
                        <IconButton tooltip= "Remove" onClick={this.remove} style={{float: 'right',
                        marginTop: '-13px', marginRight: '15px'}} iconStyle={{fontSize: '48px'}}>
                       <FontIcon className="material-icons" color={'#5CA59F '}>
                        remove_circle</FontIcon>
                       </IconButton>
                   </MediaQuery>
          </MediaQuery>
     {/* media query for mobile device ends */}
     {/* media query for Desktops starts */}
          <MediaQuery query='(min-device-width: 487px)'>
                   <MediaQuery query='(min-width: 487px)'>
                        <TextField floatingLabelText="ALIAS*"
                                   defaultValue={this.state.alias}
                                   onChange={this.handleAliasTextfields}/>&emsp;&emsp;
                        <TextField floatingLabelText="DATA FIELD NAME*"
                                   defaultValue={this.state.name}
                                   onChange={this.handleNameTextfields}/>&emsp;
                        <TextField floatingLabelText="SAMPLE*"
                                   defaultValue={this.state.sample}
                                   onChange={this.handleSampleTextfields}/><br /><br />

                        <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.type}
                                          style={{display: 'inline-flex', padding: '20px',
                                                  marginLeft: '-400px'}}
                                          onChange={this.handleTypeButton}>
                        <RadioButton value="dimension"
                                     label="Dimensions" />
                        <RadioButton value="measure" label="Measurable" />
                        <RadioButton value="time" label="Time" />
                        </RadioButtonGroup>
                        <IconButton tooltip= "Remove" onClick={this.remove} style={{float: 'right',
                        marginTop: '20px', marginRight: '40px'}} iconStyle={{fontSize: '48px'}}>
                       <FontIcon className="material-icons" color={'#5CA59F '}>
                       remove_circle</FontIcon>
                       </IconButton><br /><br />
                   </MediaQuery>
          </MediaQuery>
     {/* media query for Desktops ends */}
     </div>
       );
  }
}
