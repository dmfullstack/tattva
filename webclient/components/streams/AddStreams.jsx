import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

export default class AddStreams extends React.Component {
constructor(props){
       super(props);
       this.state = {operatorValue:1,fieldValue:'Field',dataSchemaName:[],value:''
};
}
remove =() =>
{
    console.log(this.props.index);
    this.props.remove(this.props.index);
};
componentDidMount = () => {
    console.log("slted value",this.props.fetchedCriteria.fields);
    $.ajax({
        type : 'GET',
        url:"http://localhost:8081/namespace/get/"+this.props.selectedValue,
        dataType: 'json',
        success: function(res) {
          console.log("response",res.dataSchema);
          this.setState({dataSchemaName: res.dataSchema});
        }.bind(this),
        error: function(err){
          console.log("error",err);
        }.bind(this)
     });
};
handleFields = (event,index,value) =>{ 
    console.log("value changed as expected", value);
    this.setState({fieldValue:value});
  
    //this.props.handleFields({fieldValue:value,index:this.props.index});
};
handleOperators = (event,index,value) => {
    this.setState({operatorValue:value});

  //  this.props.handleOperators({operatorValue:value,index:this.props.index});
};
handleValue = (e) => {
    this.setState({value:e.target.value});
  //  this.props.handleValue({value:e.target.value,index:this.props.index});    
};
render() {

    var menuList  = this.state.dataSchemaName.map(function(listMenu){
        return(<MenuItem key={listMenu._id} value={listMenu.name} primaryText={listMenu.name} />);
         }.bind(this));
        return (
   	       <div >
      {/* media query for mobile devices starts*/}
            <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                    <DropDownMenu value={this.props.fetchedCriteria.fields} maxHeight={300} onChange={this.handleFields}>
                    <MenuItem value="Field" primaryText="Select Field*" />
                          {menuList}
                    </DropDownMenu>
                    <DropDownMenu  value={this.state.operatorValue} maxHeight={300} style={{width:"275px"}} onChange={this.handleOperators}>
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
                    <TextField floatingLabelText="Value*" onChange={this.handleValue}/>
                    <br/>
                    <FloatingActionButton mini={true} default={true} onClick={this.remove} style={{float:"right",marginTop:"30px",marginLeft:"-40px"}}>
                        <ContentRemove/>
                    </FloatingActionButton>
                    <br /><br /><br /> 
                </MediaQuery> 
            </MediaQuery>  
      {/* media query for mobile devices ends*/}

      {/* media query for Desktops starts */}
            <MediaQuery query='(min-device-width: 487px)'>
                <MediaQuery query='(min-width: 487px)'>
                    <DropDownMenu value={this.state.fieldValue} maxHeight={300}  onChange={this.handleFields} >
                      <MenuItem value="Field" primaryText="Select Field*" />
                          {menuList}
                    </DropDownMenu>
                    <DropDownMenu value={this.state.operatorValue} maxHeight={300} onChange={this.handleOperators}>
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
                    <TextField floatingLabelText="Value*" onChange={this.handleValue}/>
                    <FloatingActionButton mini={true} default={true} onClick={this.remove} style={{float:"right",marginTop:"30px"}}>
                        <ContentRemove/>
                    </FloatingActionButton> 
                </MediaQuery> 
            </MediaQuery>  
      {/* media query for Desktops ends */}     
        </div>
       );
    }
}