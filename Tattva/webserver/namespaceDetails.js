var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Details=new Schema({
 namespace:String,
 description:String,
 arrayForData:[{
 	
 }]
});

module.exports=mongoose.model('Namespace',Details);