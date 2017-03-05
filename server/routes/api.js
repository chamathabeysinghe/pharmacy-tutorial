var express=require('express');
var router=express.Router();
var config      = require('../config/database'); // get db config file
var Drug=require('../models/Drug');

router.get('/',function(req, res,next) {
  res.send("Initial Page")
});

router.get('/drugs',function (req, res,next) {
  Drug.find(function (err, drugs) {
    if(err){
      return res.send(err);
    }
    return res.json(drugs);
  })
});

router.post('/save-drugs',function (req, res, next) {
  var drug=new Drug({
    name:req.body.name,
    details:req.body.details,
    availableQuantity:req.body.availableQuantity

  });
  drug.save(function (err) {
    if(err){
      return res.send(err);
    }
    return res.json({success:true,msg:"successfully inserted the drug"});
  })
});

router.delete('/delete-drug/:id',function (req, res, next) {
  Drug.remove({_id:req.params.id},function (err, drug) {
    if(err){
      return res.send(err);
    }
    return res.json({success:true,msg:"successfully deleted the drug"});
  })
});


module.exports=router;
