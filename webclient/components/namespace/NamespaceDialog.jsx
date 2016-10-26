import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNamespace from './AddNamespace.jsx';
import ParsingButton from './ParsingButton.jsx';
import MediaQuery from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';
import {Link} from 'react-router';

const customContentStyle = {
 width: '60%',
 maxWidth: 'none',
};
export default class NamespaceDialog extends React.Component {
  constructor(props)
  {
       super(props);
       this.state = {numChildren:0,removeField:false,removeIndex:0,names:'',descript:'',parsedata:false};
   }
  namespace1 = (e) =>
   {
            this.setState({names:e.target.value});
            console.log({names:e.target.value});
   };
  description1 = (e) =>
   {
          this.setState({descript:e.target.value});
            console.log({descript:e.target.value});
   };
  submit = () =>       
  {
      console.log("inside adding");
      $.ajax({
      type: 'POST',
      url:"http://localhost:8081/namespace/post",
      dataType: 'json',
      data: {namespace:this.state.names,description:this.state.descript},
      success:function(res)
      {
        console.log(res);
      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });
  };
  
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
  handleParse = () =>{
   this.setState({parsedata:true});
  }
  render() {
    {/* calling AddNamespace component  */}

    var children = [];
        for (var i = 0; i < this.state.numChildren; i+=1) 
        {
            children.push(<AddNamespace key={i} index={i} remove={this.handleRemove}/>)
        };
        if (this.state.removeField==true) {
              console.log("field is removed.."+this.state.removeField+"..."+this.state.removeIndex)
              children.splice(this.state.removeIndex, 1);
              this.handlerenderagain();
        }
    {/* calling parsing button component */}  
    var pdata;
       if(this.state.parsedata){
         pdata=<ParsingButton />;
       }
    return (
      <div>
    {/* media query for mobile devices starts*/} 
          <MediaQuery query='(max-device-width: 487px)'>
                <MediaQuery query='(max-width: 487px)'>
                  <center>
                  <h1>Create Namespace Here </h1>
                      <TextField floatingLabelText="NAME OF NAMESPACE*" onChange={this.namespace1}/>&emsp;&emsp;
                      <TextField floatingLabelText="DESCRIPTION*" onChange={this.description1}/><br /><br />
                      <span><b>Define Data Schema For Namespace</b></span><br /><br /><br />
                      <RaisedButton label="Parse from sample data" onTouchTap={this.handleParse} secondary={true}/>
                         {pdata}
                  </center>
                         {children}       
                         <br />
                      <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right"}}>
                        <ContentAdd/>
                      </FloatingActionButton>
                      <center>
                        <Link to="/home">
                        <RaisedButton label="Cancel" secondary={true} style={{marginTop:"100px",marginLeft:"20px"}}/>
                        </Link>&emsp;
                        <RaisedButton label="Create" primary={true} onClick={this.submit}  /> 
                      </center>
                </MediaQuery> 
          </MediaQuery>
    {/* media query for mobile devices ends*/}

    {/* media query for Desktops starts */} 
          <MediaQuery query='(min-device-width: 487px)'>
                  <MediaQuery query='(min-width: 487px)'>
                    <center>
                    <h1> Create Namespace Here </h1>
                    <div className="container">
                      <div className="row">
                        <div className="col-xs">
                          <TextField floatingLabelText="NAME OF NAMESPACE*" onChange={this.namespace1}  /></div>
                          <div className="col-xs">
                          <TextField floatingLabelText="DESCRIPTION*" onChange={this.description1}/></div></div></div>
                          <div style={{fontSize:'24px',marginTop:"70px"}}>
                          <span >Define Data Schema For Namespace</span></div><br /><br /><br />
                          <RaisedButton label="Parse from sample data" onTouchTap={this.handleParse} secondary={true}/><br /><br />
                             {pdata}
                             <br/>
                        
                             {children} 
                             </center>  
                             <br />
                          <FloatingActionButton onClick={this.handleChild} mini={true} style={{float:"right",marginTop:"40px",marginRight:"62px"}}>
                            <ContentAdd/>
                          </FloatingActionButton>
                          <center>
                          <Link to="/home">
                          <RaisedButton label="Cancel" secondary={true} style={{marginTop:"120px",marginLeft:"100px"}}/>
                          </Link>&emsp;
                          <RaisedButton label="Create" primary={true} onClick={this.submit}  />                           
                          </center>
                  </MediaQuery> 
          </MediaQuery>
     {/* media query for Desktops ends */}

      </div>
    );
  }
}