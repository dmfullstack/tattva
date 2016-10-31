// import React from 'react';
// import $ from 'jquery';
// import AddStreams from './AddStreams.jsx';


// export default class MappingNamespace extends React.Component {

// 	constructor(props) {
// 		super(props);
// 			this.state = {
// 			data2:[]

// 			};
// 	}
// 	 componentDidMount = () => {
//        console.log(this.props.selectedValue);
//            $.ajax({
//            type : 'GET',
//            url:"http://localhost:8081/namespace/get/"+this.props.selectedValue,
//            dataType: 'json',
//            success: function(res) {
//             console.log("wqerf",res);
//                     this.setState({data2: res});
                    
//                 }.bind(this),
//            error: function(err){
//             console.log("error",err);
//           }.bind(this)
//      });
//   };
//   render() {
//   	return (

//   		<h1></h1>
//   		);
//   }
// }
