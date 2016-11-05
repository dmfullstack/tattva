let express = require('express');
let NamespaceRouter = express.Router();
let Detail = require('./namespaceDetails');

NamespaceRouter.get('/get', function(req, res) {
        Detail.find(function(err, output) {
            if (err) {
                res.send(err);
            } else {
                res.send(output);
            }
        });
    });
NamespaceRouter.post('/post', function(req, res) {
    let detail = new Detail(req.body);
    detail.save(function(err, data) {
        if (err)
        {
            res.send('error has occured');
        } else
        {
            return res.status(200).json(data);
        }
    });
});

NamespaceRouter.get('/get/:namespace', function(req, res) {
      Detail.findOne({namespace: req.params.namespace}, function(err, namespaceData) {
    if(err) {
      return res.status(500).json(err);
    } else{
      return res.status(200).json(namespaceData);
    }
        });
    });
NamespaceRouter.put('/put/:namespace_id', function (req, res) {
Detail.findById(req.params.namespace_id, function(err, updateDataById) {
  if(err)
  {
    res.send(err);
  }
  else
  {
    let namespace = req.body.namespace;
    let description = req.body.description;
    let dataSchema = req.body.dataSchema;
    updateDataById.namespace = namespace;
    updateDataById.description = description;
    updateDataById.dataSchema = dataSchema;
    updateDataById.save(function(err) {
      if(err)
      {
              res.send(err);
      }
      else
      {
              return res.status(200).json(updateDataById);
      }
    });
  }
  });
});

NamespaceRouter.delete('/delete/:namespace_id', function(req, res) {
  Detail.remove({_id: req.params.namespace_id}, function(err, deletedMovieById) {
    res.send('Data deleted');
  });
});
module.exports = NamespaceRouter;
