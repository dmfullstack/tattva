var express = require('express');
var router = express.Router();

var Detail=require('../namespaceDetails');

router.route("/post")

.post(function(req,res){
  console.log('saving data in Server.js');
  var detail = new Detail(req.body);
  console.log(detail);
  detail.save(function(err,data){
    if(err){
      console.log("error  in saving details");
      res.send('error has occured');
    }
    else{
      console.log("data saved in database");
    }
  });
});

module.exports = router;