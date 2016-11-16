import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import $ from 'jquery';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class AddStreams extends React.Component {
  static get propTypes() {
   return(
   {
     value: React.PropTypes.object.isRequired,
     remove: React.PropTypes.string.isRequired,
     index: React.PropTypes.string.isRequired,
     operations: React.PropTypes.string.isRequired,
     fetchedCriteria: React.PropTypes.string.isRequired,
     selectedValue: React.PropTypes.string.isRequired,
     handleFields: React.PropTypes.string.isRequired,
     handleOperators: React.PropTypes.string.isRequired,
     handleValue: React.PropTypes.string.isRequired,
     changeNameTextField: React.PropTypes.string.isRequired,
     changeSampleTextField: React.PropTypes.string.isRequired,
     changeAliasTextField: React.PropTypes.string.isRequired
   });
 }
constructor(props) {
       super(props);
       this.state = {operatorValue: 1, fieldValue: 'Field', dataSchemaName: [],
                      value: ''
};
}
remove =() =>
{
    this.props.remove(this.props.index);
};
componentDidMount = () => {
  if(this.props.operations === 'edit') {
    this.setState({operatorValue: this.props.fetchedCriteria.operators,
      fieldValue: this.props.fetchedCriteria.fields, value: this.props.fetchedCriteria.value});
  }
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8081/namespace/get/' + this.props.selectedValue,
        dataType: 'json',
        success: function(res) {
          this.setState({dataSchemaName: res.dataSchema});
        }.bind(this),
        error: function() {
        }
     });
};
handleFields = (event, index, value) =>{
    this.setState({fieldValue: value});
    this.props.handleFields({fieldValue: value, index: this.props.index});
};
handleOperators = (event, index, value) => {
    this.setState({operatorValue: value});
    this.props.handleOperators({operatorValue: value, index: this.props.index});
};
handleValue = (e) => {
    this.setState({value: e.target.value});
    this.props.handleValue({value: e.target.value, index: this.props.index});
};
render() {
    let menuList = this.state.dataSchemaName.map(function(listMenu) {
        return<MenuItem key={listMenu._id} value={listMenu.name} primaryText={listMenu.name} />;
         });
        return (
        <div>
      {/* media query for mobile devices starts*/}
            <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                    <DropDownMenu value={this.state.fieldValue} maxHeight={300}
                    style={{width: '275px'}} onChange={this.handleFields}>
                    <MenuItem value="Field" primaryText="Select Field*" />
                          {menuList}
                    </DropDownMenu>
                    <DropDownMenu value={this.state.operatorValue} maxHeight={300}
                     style={{width: '275px'}} onChange={this.handleOperators}>
                      <MenuItem value={1} primaryText="OPERATORS*" />
                      <MenuItem value="<" primaryText="<" />
                      <MenuItem value=">" primaryText=">" />
                      <MenuItem value="==" primaryText="==" />
                      <MenuItem value=">=" primaryText=">=" />
                      <MenuItem value="<=" primaryText="<=" />
                      <MenuItem value="!=" primaryText="!=" />
                      <MenuItem value="Like" primaryText="Like" />
                      <MenuItem value="Not Like" primaryText="Not Like" />
                    </DropDownMenu>
                    <TextField floatingLabelText="Value*"
                    onChange={this.handleValue}/>
                    <br/>
                    <IconButton tooltip= "Remove" onClick={this.remove} style={{float: 'right',
                    marginTop: '-13px', marginRight: '15px'}} iconStyle={{fontSize: '48px'}}>
                   <FontIcon className="material-icons" color={'#5CA59F '}>remove_circle</FontIcon>
                   </IconButton>
                    <br /><br /><br />
                </MediaQuery>
            </MediaQuery>
      {/* media query for mobile devices ends*/}
            <MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                    <DropDownMenu value={this.state.fieldValue} maxHeight={300}
                    style={{width: '275px'}} onChange={this.handleFields} >
                      <MenuItem value="Field" primaryText="Select Field*" />
                          {menuList}
                    </DropDownMenu>
                    <DropDownMenu value={this.state.operatorValue} maxHeight={300}
                    style={{width: '275px'}} onChange={this.handleOperators}>
                      <MenuItem value={1} primaryText="OPERATORS*" />
                      <MenuItem value="<" primaryText="<" />
                      <MenuItem value=">" primaryText=">" />
                      <MenuItem value="==" primaryText="==" />
                      <MenuItem value=">=" primaryText=">=" />
                      <MenuItem value="<=" primaryText="<=" />
                      <MenuItem value="!=" primaryText="!=" />
                      <MenuItem value="Like" primaryText="Like" />
                      <MenuItem value="Not Like" primaryText="Not Like" />
                    </DropDownMenu>&emsp;&emsp;
                    <TextField floatingLabelText="Value*" value={this.state.value}
                    onChange={this.handleValue}/>
                    <IconButton tooltip= "Remove" onClick={this.remove}
                    style={{float: 'right', marginRight: '40px'}}
                    iconStyle={{fontSize: '48px'}}>
                   <FontIcon className="material-icons" color={'#5CA59F '}>remove_circle</FontIcon>
                   </IconButton>
                </MediaQuery>
            </MediaQuery>
      {/* media query for Desktops ends */}
        </div>
       );
    }
}
