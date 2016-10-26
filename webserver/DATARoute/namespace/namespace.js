var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var namespaceSchema = new mongoose.Schema({
  "name":{type : String, required : true, unique:true, min:2, max:30},
  "description":{ type : String},
  "dataSchema":[
    {
      "alias":{type: String, required : true},
      "name":{type: String, required : true},
      "sample":{type: String,required : true},
      "type":{type: String, default:"dimension"}
    }
  ],
  "createdOn": { type : Date, default : Date.now },
  "editedOn": { type : Date, default : Date.now }
});
module.exports=mongoose.model('namespace',Details);