var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var mongoose    = require('mongoose');

var config      = require('./config/database'); // get db config file
// var User        = require('./app/models/user'); // get the mongoose model


var api=require('./routes/api');
var port = 3000;


var app=express();




//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect(config.database);



app.use('/api',api);

app.listen(port,function () {
  console.log("Server started on port "+port);
});


