let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Details = new Schema({
 namespace: String,
 stream: String,
 description: String,
 source: String,
 ip_address: String,
 port: String,
 queryCriteria: [
    {
      fields: {type: String},
      operators: {type: String},
      value: {type: String}
    }
]
});

module.exports = mongoose.model('Stream', Details);
