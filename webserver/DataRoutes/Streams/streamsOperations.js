let express = require('express');
let StreamsRouter = express.Router();

let StreamsSchema = require('./streamsDetails');

StreamsRouter.post('/post', function(req, res) {
    let streamsSchema = new StreamsSchema(req.body);
    streamsSchema.save(function(err, data) {
        if (err)
        {
           return res.send('error has occured');
        } 
        return res.status(200).json(data);
    });
});
StreamsRouter.put('/put/:stream', function (req, res) {
StreamsSchema.findOne({stream: req.params.stream}, function(err, updateDataById) {
  if(err)
  {
    res.send(err);
  }
  else
  {
    let namespace = req.body.namespace;
    let stream = req.body.stream;
    let description = req.body.description;
    let source = req.body.source;
    let IpAddress = req.body.IpAddress;
    let port = req.body.port;
    let queryCriteria = req.body.queryCriteria;
    updateDataById.namespace = namespace;
    updateDataById.stream = stream;
    updateDataById.description = description;
    updateDataById.source = source;
    updateDataById.IpAddress = IpAddress;
    updateDataById.port = port;
    updateDataById.queryCriteria = queryCriteria;


    updateDataById.save(function(err1) {
      if(err1)
      {
        return res.send(err1);
      }
        return res.status(200).json(updateDataById);
    });
     }
  });
});
StreamsRouter.delete('/delete/:stream_id', function(req, res) {
 StreamsSchema.remove({_id: req.params.stream_id}, function(err) {
    if(err) {
        res.send('error');
    }
    else{
   res.send('Data deleted');
}
 });
});

StreamsRouter.get('/get', function(req, res) {
         StreamsSchema.find(function(err, output) {
            if (err) {
                res.send(err);
            } else {
                res.send(output);
            }
        });
});

StreamsRouter.get('/get/:stream', function(req, res) {
      StreamsSchema.findOne({stream: req.params.stream}, function(err, streamData) {
    if(err) {
      //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
      return res.status(500).json(err);
    }
      return res.status(200).json(streamData);
        });
    });

StreamsRouter.get('/get2/:namespace', function(req, res) {
    StreamsSchema.find({namespace: req.params.namespace}, function(err, streamData) {
  if(err) {
    //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
    return res.status(500).json(err);
  }
    return res.status(200).json(streamData);
      });
  });
module.exports = StreamsRouter;
