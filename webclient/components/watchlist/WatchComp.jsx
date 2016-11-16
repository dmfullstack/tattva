// import React from 'react';
// import $ from 'jquery';
// import WatchMapping from './WatchMapping.jsx';
// import FontIcon from 'material-ui/FontIcon';

// export default class WatchComp extends React.Component {
// static get propTypes() {
//     return(
//     {
//       watchlistDetail: React.PropTypes.object.isRequired,
//       expression: React.PropTypes.array.isRequired,
//       publish: React.PropTypes.array.isRequired,
//       name: React.PropTypes.string.isRequired
//     });
//   }

// constructor(props) {
//    super(props);
//    this.state = { expression: []
//    };
// }

// componentDidMount = () =>
// {
//    $.ajax({
//        type: 'GET',
//        url: '/watchlist/get/'+this.props.params.WatchList,
//        dataType: 'json',
//        success: function(res) {
//         this.setState({expression: res.Expressions})
//         console.log(res);
//        }.bind(this),
//        error: function() {
//        }
//    });
// };
// render() {
//   return(
//       <div>
//           <WatchMapping expression={this.state.expression} 
                        //WatchList={this.props.params.WatchList}/>
//       </div>
//         );
//     }
// }
