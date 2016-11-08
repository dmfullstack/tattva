import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import AVAvTimer from 'material-ui/svg-icons/av/av-timer';
import ImageStraighten from 'material-ui/svg-icons/image/straighten';
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
      changeAliasTextField: React.PropTypes.string.isRequired
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
     this.props.changeAliasTextField({aliasfieldData: this.state.aliasfieldData,
                                      position: this.props.position});
  };
  handleNameTextfields = (e) =>
  {
     this.setState({namefieldData: e.target.value});
     this.props.changeNameTextField({namefieldData: this.state.namefieldData,
                                      position: this.props.position});
  };
  handleSampleTextfields = (e) =>
  {
     this.setState({samplefieldData: e.target.value});
     this.props.changeSampleTextField({samplefieldData: this.state.samplefieldData,
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
                        <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.type} >
                        <RadioButton value="dimension"
                                     label={<span><i className="material-icons">
                                     3d_rotation</i></span>}/>
                        <RadioButton value="measure" label={<span><ImageStraighten/></span>} />
                        <RadioButton value="time" label={<span><AVAvTimer/></span>} />
                        </RadioButtonGroup>
                        <FloatingActionButton mini={true}
                                              default={true}
                                              onClick={this.remove}
                                              style={{float: 'right', marginTop: '-30px'}}>
                        <ContentRemove/>
                        </FloatingActionButton>
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
                                   onChange={this.handleSampleTextfields}/>
                        <div className="container">
                        <div className="row">
                        <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.type} style={{display: 'inline-flex'}}>
                        <RadioButton value="dimension"
                                     label={<span><i className="material-icons">
                                     3d_rotation</i></span>} />
                        <RadioButton value="measure" label={<span><ImageStraighten/></span>} />
                        <RadioButton value="time" label={<span><AVAvTimer/></span>} />
                        </RadioButtonGroup>
                        </div></div>
                        <FloatingActionButton mini={true}
                                              default={true}
                                              onClick={this.remove}
                                              style={{float: 'right',
                                                      marginRight: '60px',
                                                      marginTop: '70px'}}>
                        <ContentRemove/>
                        </FloatingActionButton>
                   </MediaQuery>
          </MediaQuery>
     {/* media query for Desktops ends */}
     </div>
       );
  }
}
