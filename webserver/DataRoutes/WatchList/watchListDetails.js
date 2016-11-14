let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Details = new Schema({
 WatchList: String,
 Purpose: String,
 Namespace: String,
 Stream: String,
 Expressions: [
    {
      lhs: {type: Object},
      opr: {type: String},
      rhs: {type: Object}
    }
],
 Ace: String,
 YAxis: String,
 LogFormat: String,
 Graph: String,
 HistoricData: String
});

module.exports = mongoose.model('WatchList', Details);