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

export default class ExpressionsView extends React.Component {
    static get propTypes() {
        return(
            {

            });
    }
    constructor(props)
    {
        super(props);
        this.state =
        {

        };
    }


  render() {


   return (
        <div>
    {/* media query for mobile devices starts */}
      <MediaQuery query='(max-device-width: 487px)'>
            <MediaQuery query='(max-width: 487px)'>
            <center>
                <Paper zDepth={0} >
                <DropDownMenu maxHeight={300} disabled={true} style={{width: '200px'}}
                               value={this.props.listMenu.lhs.oprType} onChange={this.handleExp1} >
                      <MenuItem value={this.props.listMenu.lhs.oprType} primaryText={this.props.listMenu.lhs.oprType}
                                style={{background: '#F5F5F5'}} />

                </DropDownMenu>
                    <DropDownMenu maxHeight={300} disabled={true} style={{width: '200px'}}
                               value={this.props.listMenu.opr}  >
                      <MenuItem value={this.props.listMenu.opr} primaryText={this.props.listMenu.opr} style={{background: '#F5F5F5'}} />

                </DropDownMenu>
                 <DropDownMenu maxHeight={300} disabled={true} style={{width: '200px'}}
                               value={this.props.listMenu.rhs.oprType}  >
                     <MenuItem value={this.props.listMenu.rhs.oprType} primaryText={this.props.listMenu.rhs.oprType}
                               style={{background: '#F5F5F5'}} />

                </DropDownMenu>

                       </Paper>
            </center>
                <br/><br/>
            </MediaQuery>
        </MediaQuery>
      
    {/* media query for mobile devices ends */}
    {/* media query for Desktops starts */}
     <MediaQuery query='(min-device-width: 487px)'>
            <MediaQuery query='(min-width: 487px)'>
            <center>
                <Paper zDepth={0} >
                <DropDownMenu maxHeight={300} disabled={true} style={{width: '200px'}}
                               value={this.props.listMenu.lhs.oprType} onChange={this.handleExp1} >
                      <MenuItem value={this.props.listMenu.lhs.oprType} primaryText={this.props.listMenu.lhs.oprType}
                                style={{background: '#F5F5F5'}} />

                </DropDownMenu>
                    <DropDownMenu maxHeight={300} disabled={true} style={{width: '200px'}}
                               value={this.props.listMenu.opr}  >
                      <MenuItem value={this.props.listMenu.opr} primaryText={this.props.listMenu.opr} style={{background: '#F5F5F5'}} />

                </DropDownMenu>
                 <DropDownMenu maxHeight={300} disabled={true} style={{width: '200px'}}
                               value={this.props.listMenu.rhs.oprType}  >
                     <MenuItem value={this.props.listMenu.rhs.oprType} primaryText={this.props.listMenu.rhs.oprType}
                               style={{background: '#F5F5F5'}} />

                </DropDownMenu>

                       </Paper>
            </center>
                <br/><br/>
            </MediaQuery>
        </MediaQuery>
      

       </div>
       );
    }
}