var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Details=new Schema({
 namespace:String,
 description:String
});

module.exports=mongoose.model('Namespace',Details);