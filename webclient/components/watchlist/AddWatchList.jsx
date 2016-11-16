import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import MediaQuery from 'react-responsive';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class AddNamespace extends React.Component {
    static get propTypes() {
        return(
            {
                index: React.PropTypes.object.isRequired,
                remove: React.PropTypes.string.isRequired,
                expression7AndValue: React.PropTypes.string.isRequired,
                expression8AndValue: React.PropTypes.string.isRequired,
                expression5AndValue: React.PropTypes.string.isRequired,
                expression6AndValue: React.PropTypes.string.isRequired,
                selectedValue: React.PropTypes.string.isRequired,
                expression1AndValue: React.PropTypes.string.isRequired,
                expression2AndValue: React.PropTypes.string.isRequired,
                expression3AndValue: React.PropTypes.string.isRequired,
                expression4AndValue: React.PropTypes.string.isRequired,
                operators: React.PropTypes.string.isRequired
            });
    }
    constructor(props)
    {
        super(props);
        this.state =
        {
            constantOpen1: false, constantOpen2: false,
            accumulateOpen1: false, accumulateOpen2: false,
            constantDropValue1: 0, constantDropValue2: 0,
            accumulateDropFirst1: 1, accumulateDropSecond1: 1,
            accumulateDropThird1: 1, accumulateText1: '',
            accumulateDropFirst2: 1, accumulateDropSecond2: 1,
            accumulateDropThird2: 1, accumulateText2: '',
            input1: false, input2: false,
            textFieldInput1: '', textFieldInput2: '',
            Log1: false, Log2: false,
            fieldValue1: 'Field1', fieldValue2: 'Field2',
            dataSchemaName: [],
            expression1: 0,
            operators: 0,
            expression2: 0
        };
    }
  componentDidMount = () =>{
       $.ajax({
       type: 'GET',
       url: '/namespace/get/' + this.props.selectedValue,
       dataType: 'json',
       success: function(res) {
         this.setState({dataSchemaName: res.dataSchema});
       }.bind(this),
       error: function() {
       }
    });
  };
  LogData1 = () =>
  {
    this.setState({Log1: true});
  };
  LogData2 = () =>
  {
    this.setState({Log2: true});
  };
  handleFields1 = (event, index, value) =>
  {
    this.setState({fieldValue1: value});
  };
  handleFields2 = (event, index, value) =>
  {
    this.setState({fieldValue2: value});
  };
  handleSaveLogData1 = () =>
  {
    this.setState({Log1: false});
    this.props.expression7AndValue({expression1: this.state.expression1,
                                    fieldValue1: this.state.fieldValue1,
                                    position: this.props.index});
  };
  handleCloseLogData1 = () =>
  { 
    this.setState({expression1: 0});
    this.setState({Log1: false});
    this.setState({fieldValue1: 'Field1'});
  };
  handleSaveLogData2 = () =>
  {
    this.setState({Log2: false});
    this.props.expression8AndValue({expression2: this.state.expression2,
                                    fieldValue2: this.state.fieldValue2,
                                    position: this.props.index});
  };
  handleCloseLogData2 = () =>
  {
    this.setState({expression2: 0});
    this.setState({Log2: false});
    this.setState({fieldValue2: 'Field2'});
  };
  handleInputText1 = (e) =>
  {
    this.setState({textFieldInput1: e.target.value});
  };
  handleInputText2 = (e) =>
  {
    this.setState({textFieldInput2: e.target.value});
  };
  handleSaveInputText1 = () =>
  {
    this.setState({input1: false});
    this.props.expression5AndValue({expression1: this.state.expression1,
                                    textFieldInput1: this.state.textFieldInput1,
                                    position: this.props.index});
  };
  handleCloseInputText1 = () =>
  {
    this.setState({expression1: 0});
    this.setState({input1: false});
    this.setState({textFieldInput1: ''});
  };
  handleSaveInputText2 = () =>
  {
    this.setState({input2: false});
    this.props.expression6AndValue({expression2: this.state.expression2,
                                    textFieldInput2: this.state.textFieldInput2,
                                    position: this.props.index});
  };
  handleCloseInputText2 = () =>
  {
    this.setState({expression2: 0});
    this.setState({input2: false});
    this.setState({textFieldInput2: ''});
  };
  InputData1 = () =>
  {
  this.setState({input1: true});
  };
  InputData2 = () =>
  {
  this.setState({input2: true});
  };
  handleAccText1 = (e) =>
  {
    this.setState({accumulateText1: e.target.value});
  };
  handleAccText2 = (e) =>
  {
    this.setState({accumulateText2: e.target.value});
  };
  handleAccDropFirst1 = (event, index, value) =>
  {
    this.setState({accumulateDropFirst1: value});
  };
  handleAccDropSecond1 = (event, index, value) =>
  {
    this.setState({accumulateDropSecond1: value});
  };
  handleAccDropThird1 = (event, index, value) =>
  {
    this.setState({accumulateDropThird1: value});
  };
  handleAccDropFirst2 = (event, index, value) =>
  {
    this.setState({accumulateDropFirst2: value});
  };
  handleAccDropSecond2 = (event, index, value) =>
  {
    this.setState({accumulateDropSecond2: value});
  };
  handleAccDropThird2 = (event, index, value) =>
  {
    this.setState({accumulateDropThird2: value});
  };
  handleConstant1 = () =>
  {
    this.setState({constantOpen1: true});
  };
  handleConstant2 = () =>
  {
    this.setState({constantOpen2: true});
  };
  handleAccumulator1 = () =>
  {
    this.setState({accumulateOpen1: true});
  };
  handleAccumulator2 = () =>
  {
    this.setState({accumulateOpen2: true});
  };
  handleSaveAccumulate1 = () =>
  {
    this.setState({accumulateOpen1: false});
    this.props.expression3AndValue({expression1: this.state.expression1,
                                    accumulateDropFirst1: this.state.accumulateDropFirst1,
                                    accumulateDropSecond1: this.state.accumulateDropSecond1,
                                    accumulateText1: this.state.accumulateText1,
                                    accumulateDropThird1: this.state.accumulateDropThird1,
                                    position: this.props.index
                                    });
  };
  handleCloseAccumulate1 = () =>
  {
    this.setState({expression1: 0});
    this.setState({accumulateOpen1: false});
    this.setState({accumulateDropFirst1: 1});
    this.setState({accumulateDropSecond1: 1});
    this.setState({accumulateDropThird1: 1});
    this.setState({accumulateText1: ''});
  };
  handleSaveAccumulate2 = () =>
  {
    this.setState({accumulateOpen2: false});
    this.props.expression4AndValue({expression2: this.state.expression2,
                                    accumulateDropFirst2: this.state.accumulateDropFirst2,
                                    accumulateDropSecond2: this.state.accumulateDropSecond2,
                                    accumulateText2: this.state.accumulateText2,
                                    accumulateDropThird2: this.state.accumulateDropThird2,
                                    position: this.props.index
                                    });
  };
  handleCloseAccumulate2 = () =>
  {
    this.setState({expression2: 0});
    this.setState({accumulateOpen2: false});
    this.setState({accumulateDropFirst2: 1});
    this.setState({accumulateDropSecond2: 1});
    this.setState({accumulateDropThird2: 1});
    this.setState({accumulateText2: ''});
  };
  handleSaveConstant1 = () =>
  {
    this.setState({constantOpen1: false});
    this.props.expression1AndValue({expression1: this.state.expression1,
                                    constant1: this.state.constantDropValue1,
                                    position: this.props.index});
  };
  handleCloseConstant1 = () => 
  {
    this.setState({expression1: 0});
    this.setState({constantOpen1: false});
    this.setState({constantDropValue1: 0});
  };
  handleSaveConstant2 = () =>
  {
    this.setState({constantOpen2: false});
    this.props.expression2AndValue({expression2: this.state.expression2,
                                    constant2: this.state.constantDropValue2,
                                    position: this.props.index});
  };
  handleCloseConstant2 = () => {
    this.setState({expression2: 0});
    this.setState({constantOpen2: false});
    this.setState({constantDropValue2: 0});
  };
  handleExp1 = (event, index, value) =>
  {
    this.setState({expression1: value});
  };
  handleConstantDrop1 = (event, index, value) =>
  {
    this.setState({constantDropValue1: value});
  };
  handleExp2 = (event, index, value) =>
  {
    this.setState({expression2: value});
  };
  handleConstantDrop2 = (event, index, value) =>
  {
    this.setState({constantDropValue2: value});
  };
  handleOpr = (event, index, value) =>
  {
    this.setState({operators: value});
    this.props.operators({operators: value,
                          position: this.props.index});
  };
remove = () =>
{
    this.props.remove(this.props.index);
};
  render() {
    const constant1 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseConstant1}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveConstant1}
      />
    ];
    const constant2 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseConstant2}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveConstant2}
      />
    ];
    const accumulate1 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseAccumulate1}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveAccumulate1}
      />
    ];
    const accumulate2 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseAccumulate2}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveAccumulate2}
      />
    ];
    const ownValue1 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseInputText1}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveInputText1}
      />
    ];
    const ownValue2 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseInputText2}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveInputText2}
      />
    ];
    const logData1 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseLogData1}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveLogData1}
      />
    ];
    const logData2 = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseLogData2}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={this.handleSaveLogData2}
      />
    ];
    let menuList = this.state.dataSchemaName.map(function(listMenu)
    {
       return(<MenuItem key = {listMenu._id} value = {listMenu.name}
              primaryText = {listMenu.name} />);
        });
   return (
        <div>
    {/* media query for mobile devices starts */}
        <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <center>
                <DropDownMenu maxHeight={300} style={{width: '300px'}}
                               value={this.state.expression1} onChange={this.handleExp1} >
                      <MenuItem value={0} primaryText='Expressions'
                                style={{background: '#F5F5F5'}} />
                      <MenuItem value={'Accumulate'} primaryText='Accumulate'
                      onClick={this.handleAccumulator1} />
                      <MenuItem value={'Constants'} primaryText='Constants'
                      onClick={this.handleConstant1} />
                      <MenuItem value={'Log data'}
                                primaryText='Data fields from log data'
                                onClick={this.LogData1} />
                      <MenuItem value={'Input Value'} primaryText='Input Value'
                      onClick={this.InputData1}/>
                </DropDownMenu>
                    <DropDownMenu maxHeight={300} style={{width: '300px'}}
                               value={this.state.operators} onChange={this.handleOpr} >
                      <MenuItem value={0} primaryText='Operator' style={{background: '#F5F5F5'}} />
                      <MenuItem value='plus' primaryText={'+'}/>
                      <MenuItem value='minus' primaryText={'-'}/>
                      <MenuItem value='divideBy' primaryText={'/'}/>
                      <MenuItem value='multiplyBy' primaryText={'*'}/>
                      <MenuItem value='modeOf' primaryText={'%'}/>
                      <MenuItem value='raiseToPower' primaryText={'^'}/>
                      <MenuItem value='isEqualTo' primaryText={'=='}/>
                      <MenuItem value='notEqualTo' primaryText={'!='}/>
                      <MenuItem value='greaterThan' primaryText={'>'}/>
                      <MenuItem value='lessThan' primaryText={'<'}/>
                      <MenuItem value='lessThanOrEqualTo' primaryText={'<='}/>
                      <MenuItem value='greaterThanOrEqualTo' primaryText={'>='}/>
                      <MenuItem value='concat' primaryText={'concat'}/>
                      <MenuItem value='Like' primaryText={'Like'}/>
                      <MenuItem value='Not Like' primaryText={'Not Like'}/>
                      <MenuItem value='true' primaryText={'true'}/>
                      <MenuItem value='false' primaryText={'false'}/>
                </DropDownMenu>
                 <DropDownMenu maxHeight={300} style={{width: '300px'}}
                               value={this.state.expression2} onChange={this.handleExp2} >
                     <MenuItem value={0} primaryText='Expressions'
                               style={{background: '#F5F5F5'}} />
                      <MenuItem value='Accumulate' primaryText='Accumulate'
                      onClick={this.handleAccumulator2} />
                      <MenuItem value='Constants' primaryText='Constants'
                      onClick={this.handleConstant2} />
                      <MenuItem value='Data fields from log data'
                                primaryText='Log data'
                                onClick={this.LogData2} />
                      <MenuItem value='Input Value' primaryText='Input Value'
                      onClick={this.InputData2}/>
                </DropDownMenu>
            </center>
                <br />
                <IconButton tooltip= "Remove" onClick={this.remove} style={{float: 'right',
                        marginRight: '20px'}} iconStyle={{fontSize: '48px'}}>
                       <FontIcon className="material-icons" color={'#BBDEFB '}>
                        remove_circle</FontIcon>
                       </IconButton>
                <br/><br/><br/>
            </MediaQuery>
        </MediaQuery>
    {/* media query for mobile devices ends */}
    {/* media query for Desktops starts */}
        <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
            <center>
                <Paper zDepth={0} >
                <DropDownMenu maxHeight={300} style={{width: '200px'}}
                               value={this.state.expression1} onChange={this.handleExp1} >
                      <MenuItem value={0} primaryText='Expressions'
                                style={{background: '#F5F5F5'}} />
                      <MenuItem value={'Accumulate'} primaryText='Accumulate'
                      onClick={this.handleAccumulator1} />
                      <MenuItem value={'Constants'} primaryText='Constants'
                      onClick={this.handleConstant1} />
                      <MenuItem value={'Data fields from log data'}
                                primaryText='Log data'
                                onClick={this.LogData1} />
                      <MenuItem value={'Input Value'} primaryText='Input Value'
                      onClick={this.InputData1}/>
                </DropDownMenu>
                    <DropDownMenu maxHeight={300} style={{width: '200px'}}
                               value={this.state.operators} onChange={this.handleOpr} >
                      <MenuItem value={0} primaryText='Operator' style={{background: '#F5F5F5'}} />
                      <MenuItem value='plus' primaryText={'+'}/>
                      <MenuItem value='minus' primaryText={'-'}/>
                      <MenuItem value='divideBy' primaryText={'/'}/>
                      <MenuItem value='multiplyBy' primaryText={'*'}/>
                      <MenuItem value='modeOf' primaryText={'%'}/>
                      <MenuItem value='raiseToPower' primaryText={'^'}/>
                      <MenuItem value='isEqualTo' primaryText={'=='}/>
                      <MenuItem value='notEqualTo' primaryText={'!='}/>
                      <MenuItem value='greaterThan' primaryText={'>'}/>
                      <MenuItem value='lessThan' primaryText={'<'}/>
                      <MenuItem value='lessThanOrEqualTo' primaryText={'<='}/>
                      <MenuItem value='greaterThanOrEqualTo' primaryText={'>='}/>
                      <MenuItem value='concat' primaryText={'concat'}/>
                      <MenuItem value='Like' primaryText={'Like'}/>
                      <MenuItem value='Not Like' primaryText={'Not Like'}/>
                      <MenuItem value='true' primaryText={'true'}/>
                      <MenuItem value='false' primaryText={'false'}/>
                </DropDownMenu>
                 <DropDownMenu maxHeight={300} style={{width: '200px'}}
                               value={this.state.expression2} onChange={this.handleExp2} >
                     <MenuItem value={0} primaryText='Expressions'
                               style={{background: '#F5F5F5'}} />
                      <MenuItem value='Accumulate' primaryText='Accumulate'
                      onClick={this.handleAccumulator2} />
                      <MenuItem value='Constants' primaryText='Constants'
                      onClick={this.handleConstant2} />
                      <MenuItem value='Data fields from log data'
                                primaryText='Log data'
                                onClick={this.LogData2} />
                      <MenuItem value='Input Value' primaryText='Input Value'
                      onClick={this.InputData2}/>
                </DropDownMenu>
                
                <IconButton tooltip= "Remove" onClick={this.remove} style={{float: 'right'
                        }} iconStyle={{fontSize: '48px'}}>
                       <FontIcon className="material-icons" color={'#BBDEFB'}>
                        remove_circle</FontIcon>
                       </IconButton>
                       </Paper>
            </center>
                <br/><br/>
            </MediaQuery>
        </MediaQuery>
      {/* constant Dialog 1 */}
        <Dialog
           title="Constants"
           actions={constant1}
           modal={false}
           open={this.state.constantOpen1}
           titleStyle={{backgroundColor: '#5CA59F '}}>
           <center>
            <DropDownMenu maxHeight={400} style={{width: '300px'}}
                          value={this.state.constantDropValue1}
                          onChange={this.handleConstantDrop1} >
                     <MenuItem value={0} primaryText='Select Constant*'
                               style={{background: '#F5F5F5 '}} />
                     <MenuItem value={'Archimedes`s constant π : 3.14'}
                               primaryText={<pre>Archimedes's constant π : 3.14</pre>}/>
                     <MenuItem value={'Ramanujan constant K : 0.76'}
                               primaryText={<pre>Ramanujan constant K : 0.76</pre>}/>
                     <MenuItem value={'Omega Constant Ω : 0.567'}
                               primaryText={<pre>Omega Constant Ω : 0.567</pre>}/>
                     <MenuItem value={'Euler`s number e: 2.74'}
                               primaryText={<pre>Euler's number e: 2.74</pre>}/>
                     <MenuItem value={'The golden ratio Φ : 2.74'}
                               primaryText={<pre>The golden ratio  Φ : 2.74</pre>}/>
             </DropDownMenu>
             </center>
           </Dialog>
      {/* constant Dialog 2*/}
           <Dialog
           title="Constants"
           actions={constant2}
           modal={false}
           open={this.state.constantOpen2}
           titleStyle={{backgroundColor: '#5CA59F '}}>
           <center>
            <DropDownMenu maxHeight={400} style={{width: '300px'}}
                              value={this.state.constantDropValue2}
                              onChange={this.handleConstantDrop2} >
                     <MenuItem value={0} primaryText="Select Constant*"
                               style={{background: '#F5F5F5 '}} />
                     <MenuItem value={'Archimedes`s constant π : 3.14'}
                               primaryText={<pre>Archimedes's constant π: 3.14</pre>}/>
                     <MenuItem value={'Ramanujan constant K : 0.76'}
                               primaryText={<pre>Ramanujan constant K: 0.76</pre>}/>
                     <MenuItem value={'Omega Constant Ω : 0.567'}
                               primaryText={<pre>Omega Constant Ω: 0.567</pre>}/>
                     <MenuItem value={'Euler`s number e: 2.74'}
                               primaryText={<pre>Euler's number e: 2.74</pre>}/>
                     <MenuItem value={'The golden ratio Φ : 2.74'}
                               primaryText={<pre>The golden ratio  Φ: 2.74</pre>}/>
             </DropDownMenu>
             </center>
           </Dialog>
      {/* Accumulate Dialog 1 */}
      <Dialog
           title="Accumulate"
           actions={accumulate1}
           modal={false}
           open={this.state.accumulateOpen1}
           titleStyle={{backgroundColor: '#5CA59F '}}>
               <DropDownMenu maxHeight={300} style={{width: '300px'}}
                              value={this.state.accumulateDropFirst1}
                              onChange={this.handleAccDropFirst1} >
                     <MenuItem value={1} primaryText='Accumulate ON'
                               style={{background: '#F5F5F5 '}} />
                     <MenuItem value='Record' primaryText='Record'/>
                     <MenuItem value='Time' primaryText='Time'/>
               </DropDownMenu><br/>&emsp;&nbsp;
               <TextField floatingLabelText='Accumulate Till'
                          value={this.state.accumulateText1}
                          onChange={this.handleAccText1}/><br/>
               <DropDownMenu maxHeight={300} style={{width: '300px'}}
                             value={this.state.accumulateDropSecond1}
                             onChange={this.handleAccDropSecond1} >
                     <MenuItem value={1} primaryText='Function Post Accumulation'
                               style={{background: '#F5F5F5 '}} />
                     <MenuItem value='Sum' primaryText='Sum'/>
                     <MenuItem value='max' primaryText='max'/>
                     <MenuItem value='min' primaryText='min'/>
                     <MenuItem value='average' primaryText='average'/>
                     <MenuItem value='count' primaryText='count'/>
               </DropDownMenu><br/>
               <DropDownMenu maxHeight={300} style={{width: '300px'}}
                              value={this.state.accumulateDropThird1}
                              onChange={this.handleAccDropThird1} >
                     <MenuItem value={1} primaryText='Parameters'
                               style={{background: '#F5F5F5 '}} />
                     {menuList}
               </DropDownMenu>
        </Dialog>
      {/* Accumulate Dialog 2 */}
      <Dialog
           title="Accumulate"
           actions={accumulate2}
           modal={false}
           open={this.state.accumulateOpen2}
           titleStyle={{backgroundColor: '#5CA59F '}}>
               <DropDownMenu maxHeight={300} style={{width: '300px'}}
                              value={this.state.accumulateDropFirst2}
                              onChange={this.handleAccDropFirst2} >
                     <MenuItem value={1} primaryText='Accumulate ON'
                               style={{background: '#F5F5F5 '}} />
                     <MenuItem value='Record' primaryText='Record'/>
                     <MenuItem value='Time' primaryText='Time'/>
               </DropDownMenu><br/>&emsp;&nbsp;
               <TextField floatingLabelText='Accumulate Till'
                          value={this.state.accumulateText2}
                          onChange={this.handleAccText2}/><br/>
               <DropDownMenu maxHeight={300} style={{width: '300px'}}
                              value={this.state.accumulateDropSecond2}
                              onChange={this.handleAccDropSecond2} >
                     <MenuItem value={1} primaryText='Function Post Accumulation'
                               style={{background: '#F5F5F5 '}} />
                     <MenuItem value='Sum' primaryText='Sum'/>
                     <MenuItem value='max' primaryText='max'/>
                     <MenuItem value='min' primaryText='min'/>
                     <MenuItem value='average' primaryText='average'/>
                     <MenuItem value='count' primaryText='count'/>
               </DropDownMenu><br/>
               <DropDownMenu maxHeight={300} style={{width: '300px'}}
                              value={this.state.accumulateDropThird2}
                              onChange={this.handleAccDropThird2} >
                     <MenuItem value={1} primaryText='Parameters'
                               style={{background: '#F5F5F5 '}} />
                     {menuList}
               </DropDownMenu>
        </Dialog>
      {/* Input Data Dialog1 */}
        <Dialog
          title="Provide your own value"
          actions={ownValue1}
          modal={false}
          open={this.state.input1}
          titleStyle={{backgroundColor: '#5CA59F  '}}>
          <TextField floatingLabelText='Provide your own value'
                     value={this.state.textFieldInput1}
                     onChange={this.handleInputText1}/>
           </Dialog>
      {/* Input Data Dialog2 */}
        <Dialog
          title='Provide your own value'
          actions={ownValue2}
          modal={false}
          open={this.state.input2}
          titleStyle={{backgroundColor: '#5CA59F  '}}>
          <TextField floatingLabelText='Provide your own value'
                     value={this.state.textFieldInput2}
                     onChange={this.handleInputText2}/>
           </Dialog>
        {/* Data From Log Dialog */}
        <Dialog
          title='Log Data'
          actions={logData1}
          modal={false}
          open={this.state.Log1}
          titleStyle={{backgroundColor: '#5CA59F  '}}>
           <DropDownMenu value={this.state.fieldValue1} maxHeight={300}
                   onChange={this.handleFields1} >
                     <MenuItem value='Field1' primaryText='Select Field*' />
                         {menuList}
                   </DropDownMenu>
           </Dialog>
           {/* Data From Log Dialog */}
        <Dialog
          title='Log Data'
          actions={logData2}
          modal={false}
          open={this.state.Log2}
          titleStyle={{backgroundColor: '#5CA59F  '}}>

           <DropDownMenu value={this.state.fieldValue2} maxHeight={300}
                   onChange={this.handleFields2} >
                     <MenuItem value='Field2' primaryText='Select Field*' />
                         {menuList}
                   </DropDownMenu>
           </Dialog>
       </div>
       );
    }
}