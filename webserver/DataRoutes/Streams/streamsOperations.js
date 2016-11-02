var express = require('express');
var streams_router = express.Router();

var StreamsSchema = require('./streamsDetails');

streams_router.post("/post",function(req, res) {

    console.log("body",req.body);
    console.log('saving data in Server.jsHello**********');
    var streamsSchema = new StreamsSchema(req.body);
    console.log("detail",streamsSchema);
    streamsSchema.save(function(err, data) {
        if (err) 
        {
            console.log(err);
            console.log("error  in saving details");
            res.send('error has occured');
        } else 
        {
            console.log(data);
            console.log("data saved in database");
            res.send('data saved');
        }
    });
});

streams_router.delete('/delete/:stream_id',function(req, res){
 StreamsSchema.remove({_id: req.params.stream_id}, function(err, deletedMovieById){
    if(err){
        res,send("error");

    }
    else{
   res.send("Data deleted");
}
 });
});

streams_router.get("/get",function(req,res){
            
            console.log("fetching streams");
         StreamsSchema.find(function(err, output) {
            if (err) {
                res.send(err);
            } else {
                res.send(output);
            }

        });
});
streams_router.put('/edit/:stream',  function (req, res) {
  StreamsSchema.update({stream:req.params.stream}, function(err, updatedNamespaceData){
    if(err){
      return res.status(400).json(err);
    }
    else{
      return res.status(200).json(updatedNamespaceData);
    }
  });
});
module.exports = streams_router;