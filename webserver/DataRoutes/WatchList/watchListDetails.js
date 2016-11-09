let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Details = new Schema({
 WatchList: String,
 Purpose: String,
 Namespace: String,
 Stream: String
});

module.exports = mongoose.model('WatchList', Details);
