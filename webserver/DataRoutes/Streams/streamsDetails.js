var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Details=new Schema({
 namespace:String,
 stream: String,
 description:String,
 source:String,
 ip_address:String,
 port:String
//  dataSchema:[
//     {
//       "alias":{type: String},
//       "name":{type: String},
//       "sample":{type: String},
//       "type":{type: String}
//     }
// ]

});

module.exports=mongoose.model('Stream',Details);