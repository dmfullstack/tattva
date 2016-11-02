var express = require('express');
var namespace_router = express.Router();

var Detail = require('./namespaceDetails');

namespace_router.get('/get',function(req, res){
    
        console.log("fetching data");
        Detail.find(function(err, output) {
            if (err) {
                res.send(err);
            } else {
                res.send(output);
            }

        });
    });
namespace_router.post("/post",function(req, res) {

    console.log("body",req.body);
    console.log('saving data in Server.jsHello**********');
    var detail = new Detail(req.body);
    console.log("detail",detail);
    detail.save(function(err, data) {
        if (err) 
        {
            console.log(err);
            console.log("error  in saving details");
            res.send('error has occured');
        } else 
        {
            console.log(data);
            console.log("data saved in database");
            return res.status(200).json(data);
        }
    });
});

namespace_router.get('/get/:namespace',function(req, res){
        console.log(req.params.namespace);  
      Detail.findOne({namespace:req.params.namespace}, function(err, namespaceData){
    if(err){
      console.log("Error in getting namespace ", req.params.namespaceName, " error: ", err);
      //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
      return res.status(500).json(err);
    } else{
        console.log(namespaceData);
      return res.status(200).json(namespaceData);
    }

        });
    });
namespace_router.put('/put/:namespace_id',  function (req, res) {
Detail.findById(req.params.namespace_id, function(err, updateDataById){
  if(err)
  {
    res.send(err);
  }
  else
  {
    var namespace = req.body.namespace;
    var description = req.body.description;
    var dataSchema=req.body.dataSchema;
    updateDataById.namespace = namespace;
    updateDataById.description = description;
    updateDataById.dataSchema = dataSchema;
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

namespace_router.delete('/delete/:namespace_id',function(req, res){
  Detail.remove({_id: req.params.namespace_id}, function(err, deletedMovieById){
    res.send("Data deleted");
  });
});


module.exports = namespace_router;
