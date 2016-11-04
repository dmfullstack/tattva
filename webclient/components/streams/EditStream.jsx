import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import $ from 'jquery';
import Subheader from 'material-ui/Subheader'; 
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentView from 'material-ui/svg-icons/action/view-list';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class EditStream extends React.Component {
constructor(props){
      super(props);
      this.state = {numChildren:0,value1:1,removeField:false,removeIndex:0,open:false,
                    propTypes:{search: React.PropTypes.bool,searchable:React.PropTypes.bool},
                    name:'values',city:'cities',disable: false,disabled: false,search:this.props.search,
                    searchable: this.props.searchable,selectValue: '',selectedValue:'',clear: true,
                    clearable: true,search:true,searchable: true,edit:true,queryCriteria:[],updateButton:false,
                    namespace:"",stream:'',description:'',source:'',ip_address:'',port:'',getnamespace:"",
                    getstream:'',getdescription:'',getsource:'',getip_address:'',dataSchemaName:[],
                    };
}
componentDidMount = () => {
    $.ajax({
        type : 'GET',
        url:"http://localhost:8081/stream/get/"+this.props.params.stream,
        dataType: 'json',
        success: function(res) {
          //console.log("response inside FetchingStreams",res.queryCriteria);
          this.setState({queryCriteria: res.queryCriteria,namespace:res.namespace,stream:res.stream,description:res.description,
                            source:res.source,ip_address:res.ip_address,port:res.port});
                      $.ajax({
                  type : 'GET',
                  url:"http://localhost:8081/namespace/get/"+this.state.namespace,
                  dataType: 'json',
                  success: function(res) {
                    this.setState({dataSchemaName: res.dataSchema});
                  }.bind(this),
                  error: function(err){
                    console.log("error",err);
                  }.bind(this)
               });
        }.bind(this),
        error: function(err){
          console.log("error",err);
        }.bind(this)
     }); 
};
// handleChild = () =>
// {
//       this.setState({
//          numChildren: this.state.numChildren + 1
//       });
// };
// handleRemove = (index) =>
// {
//       this.setState({removeField:true, removeIndex:index});
//       console.log("state is marked");
// };
// handlerenderagain = () =>
// {
//       console.log("called rerender again");
//       this.setState({numChildren: this.state.numChildren - 1, removeField:false});
// };
// updateValue =(newValue)=> 
// {
//      console.log('State changed to ' + newValue);
//      this.setState({
//      selectValue: newValue
//      });
// };
// updatedValue =(Value)=> {
//      console.log('Value changed to'+ Value);
//      this.setState({
//      selectedValue: Value
//      });
// };
handleEdit = () => {
      this.setState({edit:false})
      this.setState({updateButton:true})
};
handleFields = (event,index,value) =>{ 
    // console.log("value changed as expected", value);
    // this.setState({fieldValue:value});
    // this.props.handleFields({fieldValue:value,index:this.props.index});
};
handleOperators = (event,index,value) => {
    // this.setState({operatorValue:value});
    // this.props.handleOperators({operatorValue:value,index:this.props.index});
};
handleValue = (e) => {
    // this.setState({value:e.target.value});
    // this.props.handleValue({value:e.target.value,index:this.props.index});    
};
handleOpen = () =>
{
    this.setState({open:true});
};
handleClose = () =>
{
    this.setState({open:false});
};
handleDesp = (e) => {
    this.setState({getdescription:e.target.value});
    console.log(e.target.value);
};
handleSource = (e) => {
    this.setState({getsource:e.target.value});
};
handleName = (e) => {
    this.setState({getnamespace:e.target.value});
};
handleIP = (e) => {
    this.setState({getip_address:e.target.value});
};
handlePort = (e) => {
    this.setState({getport:e.target.value});
};
handleStream = (e) => {
    this.setState({getstream:e.target.value});
};
Submit = () => {
    this.handleOpen();
      $.ajax({
           type : 'PUT',
           url:"http://localhost:8081/stream/put/"+this.props.StreamsData._id,
           datatype: 'JSON',
           data:{namespace:this.state.namespace,stream:this.state.stream,description:this.state.description,source:this.state.source,
                  ip_address:this.state.ip_address,port:this.state.port,queryCriteria:this.state.queryCriteria},
           success: function(res) {
            console.log("response",res);
            this.handleOpen();
                }.bind(this),
           error: function(err){
            console.log("error",err);
          }.bind(this)
     });
};
render() {
      const actions = [
        <Link to="/stream">
        <FlatButton
          label="OK"
          primary={true}
          onTouchTap={this.handleClose}
        /></Link>
        ]; 
      var menuList  = this.state.dataSchemaName.map(function(listMenu){
    return(<MenuItem key={listMenu._id} value={listMenu.name} primaryText={listMenu.name} />);
            }.bind(this));
        var updateBtn =this.state.updateButton? <RaisedButton label="Update" onClick={this.submit} buttonStyle={{backgroundColor:"#5CA59F"}}/>:null;
        var Criteria  = this.state.queryCriteria.map(function(query){
        console.log(query);   
    return(
        <div>
            <DropDownMenu disabled={this.state.edit} value={query.fields} maxHeight={300}  onChange={this.handleFields} >                         
                  {menuList}
            </DropDownMenu>
            <DropDownMenu   disabled={this.state.edit}  value={query.operators} maxHeight={300} >      
                <MenuItem value="<" primaryText="<" />
                <MenuItem value=">" primaryText=">" />
                <MenuItem value="==" primaryText="==" />
                <MenuItem value=">=" primaryText=">=" />
                <MenuItem value="<=" primaryText="<=" />
                <MenuItem value="!=" primaryText="!=" />
                <MenuItem value="Like" primaryText="Like" />
                <MenuItem value="Not Like" primaryText="Not Like" />
            </DropDownMenu>
            <TextField disabled={this.state.edit} key={query._id} floatingLabelText="Value" value={query.value} />
        </div>
    ); 
    }.bind(this));
  {/* calling AddStreams component */}
   // var option = NAMES[this.state.name];
   //  var options = STATES[this.state.city];
    // const children = [];
    //     for (var i = 0; i < this.state.numChildren; i += 1) 
    //     {
    //         children.push(<AddStreams key={i} index={i} remove={this.handleRemove}/>);
    //     };
    //     if (this.state.removeField==true) {
    //           console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
    //           children.splice(this.state.removeIndex, 1);
    //           this.handlerenderagain();
    //     }
    return (
        <div>
  {/* media query for mobile devices starts*/}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <Subheader style={{background:"#E57373",fontSize:'28px',color:'white',marginTop:'1px'}}>Streams</Subheader>
                       <Link to="/stream">
                       <FloatingActionButton onClick={this.addTextField} mini={true} disabled={true} style={{float:"right",marginTop:'-45px',marginRight:'20px'}}>
                         <ContentView/>
                       </FloatingActionButton>
                      </Link>
              <center>
                <TextField floatingLabelText="NAME OF STREAM*" />&nbsp;
                <TextField floatingLabelText="DESCRIPTION*" />&nbsp;
                <TextField floatingLabelText="ADDRESS*" />&nbsp;
                <TextField floatingLabelText="PORT*"/>&nbsp;
                <br></br>
                <center>
                <br/><br/>
                <span><b>Query Criteria-Build your query here</b></span>
                </center>
                <br/>
                <br/>
                <Link to="/stream"><RaisedButton label="Cancel" /></Link>&emsp;
                <RaisedButton label="Edit" buttonStyle={{backgroundColor:"#5CA59F"}} style={{marginTop:"100px"}}/>&emsp;
                <RaisedButton label="Update" onClick={this.submit} buttonStyle={{backgroundColor:"#5CA59F"}} /> 
                </center>
            </MediaQuery> 
      </MediaQuery> 
  {/* media query for mobile devices ends*/}

  {/* media query for Desktops starts */}

      <MediaQuery query='(min-device-width: 487px)'>
          <MediaQuery query='(min-width: 487px)'>
           <Subheader style={{background:"#E57373",fontSize:'28px',color:'white',marginTop:'1px',marginLeft:"-7px"}}>Streams</Subheader>
                       <Link to="/stream">
                       <FloatingActionButton onClick={this.addTextField} mini={true} disabled={true} style={{float:"right",marginTop:'-45px',marginRight:'20px'}}>
                         <ContentView/>
                       </FloatingActionButton>
                      </Link>
                      <center>
                <div className="container">
                <div className="row center-xs">
                <div className="col-xs-3">
                      <TextField disabled={true}  value={this.state.namespace} floatingLabelText="Namespace" onChange={this.handleName}/> &emsp;    
                </div>
                <div className="col-xs-3">
                <TextField disabled={this.state.edit}  
                           value={this.state.stream} 
                           floatingLabelText="Stream" 
                           onChange={this.handleStream}/>
                </div>&emsp;
                <div className="col-xs-3">
                <TextField disabled={this.state.edit}  
                           value={this.state.description} 
                           floatingLabelText="Description" 
                           onChange={this.handleDesp}/>
                </div>&emsp;
                </div>
                <div className="row center-xs">
                <div className="col-xs-3">
                <TextField disabled={this.state.edit}  
                           value={this.state.source} 
                           floatingLabelText="Sourec" 
                           onChange={this.handleSource}/>
                </div>
                <div className="col-xs-3">                      
                <TextField disabled={this.state.edit}  
                           value={this.state.ip_address} 
                           floatingLabelText="IP Address" 
                           onChange={this.handleIP}/>
                </div>&emsp;
                <div className="col-xs-3">                   
                <TextField disabled={this.state.edit} 
                           value={this.state.port} 
                           floatingLabelText="Port" 
                           onChange={this.handlePort}/>
                </div>&emsp; 
                </div>
                </div>
                <br/><br/><br/>
                <span style={{fontSize:"18px"}}>Query Criteria</span>
                <br/>
                {Criteria}
                <br/>
                <Link to="stream"><RaisedButton label="Back"/></Link>&emsp;
                <RaisedButton label="Edit" onClick={this.handleEdit} buttonStyle={{backgroundColor:"#5CA59F"}}/> &emsp;
                {updateBtn}
                </center>
          </MediaQuery> 
      </MediaQuery> 
  {/* media query for Desktops ends*/}
            <Dialog
                title="Streams Updated successfully"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            ></Dialog>
      </div>
    );
  }
}