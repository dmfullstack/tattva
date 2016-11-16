let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Details = new Schema({
 namespace: {type: String},
 description: {type: String},
 dataSchema: [
    {
      alias: {type: String},
      name: {type: String},
      sample: {type: String},
      type: {type: String}
    }
]
});
module.exports = mongoose.model('Namespace', Details);
