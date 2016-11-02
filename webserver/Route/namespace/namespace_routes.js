var express = require('express');
var namespace_router = require('express').Router();
var NameSpace = require('../namespace');

namespace_router.get('/', function(req, res){
  NameSpace.find(function(err, namespaceListData){
    if(err){
      return res.status(400).json(err);
    }
    else{
      return res.status(200).json(namespaceListData);
    }
  });
});
namespace_router.post('/Addnamespace', function (req, res) {
  var namespace=new NameSpace(req.body);
  namespace.save(function(err, savedNamespaceData){
    if(err){
      console.log("error  in saving details");
      return res.status(400).json(err);
    }
    else{
      console.log("data saved in database");
      return res.status(200).json(savedNamespaceData);
    }
  });
});

namespace_router.put('/EditNamespace/:namespace_id',  function (req, res) {
  NameSpace.update({_id:req.params.namespace_id}, req.body},req.body, {}, function(err, updatedNamespaceData){
    if(err){
      return res.status(400).json(err);
    }
    else{
      return res.status(200).json(updatedNamespaceData);
    }
  });
});

namespace_router.get('/FindNamespace/:namespace_name', function(req, res){
  var namespace=new NameSpace(req.body);
  namespace.findOne({name:req.params.namespace_name}, function(err, namespaceData){
    if(err){
      console.log("Error in getting namespace ", req.params.namespaceName, " error: ", err);
      //   return res.status(500).json({error:"Intentional error for testing erro scenario"});
      return res.status(500).json(err);
    } else{
      return res.status(200).json(namespaceData);
    }
  });
});

module.exports = namespace_router;
