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
streams_router.put('/put/:stream_id',  function (req, res) {
StreamsSchema.findById(req.params.stream_id, function(err, updateDataById){
  if(err)
  {
    res.send(err);
  }
  else
  {
    var namespace = req.body.namespace;
    var stream = req.body.stream;
    var source = req.body.source;
    var ip_address = req.body.ip_address;
    var port = req.body.port;
    var queryCriteria=req.body.queryCriteria;
    updateDataById.namespace = namespace;
    updateDataById.stream = stream;
    updateDataById.source = source;
    updateDataById.ip_address = ip_address;
    updateDataById.port = port;
    updateDataById.queryCriteria = queryCriteria;


    updateDataById.save(function(err){
      if(err)
      {
        console.log(err);
        res.send(err);
      }
      else
      {
        console.log("data updated");
        return res.status(200).json(updateDataById);
      }

    });
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

streams_router.get('/get/:stream',function(req, res){
        console.log(req.params.stream);  
      StreamsSchema.findOne({stream:req.params.stream}, function(err, streamData){
    if(err){
      console.log("Error in getting stream ", req.params.stream, " error: ", err);
      //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
      return res.status(500).json(err);
    } else{
        console.log(streamData);
      return res.status(200).json(streamData);
    }

        });
    });

module.exports = streams_router;
