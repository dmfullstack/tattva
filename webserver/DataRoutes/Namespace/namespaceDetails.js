var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Details=new Schema({
 namespace:String,
 description:String,
 dataSchema:[
    {
      "alias":{type: String},
      "name":{type: String},
      "sample":{type: String},
      "type":{type: String}
    }
]

});

module.exports=mongoose.model('Namespace',Details);