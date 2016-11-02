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
            res.send('data saved in database');
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



module.exports = namespace_router;