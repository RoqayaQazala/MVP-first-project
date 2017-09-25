var express= require('express');
var path = require('path');
var bodyParser= require('body-Parser');
var app= express();
var http= require('http');
var db=require('./db');
var mongoose = require('mongoose');

app.use(express.static(_dirname +'/../public'))
app.get('/', function(res, req){
	res.sendFile(_dirname+'/index.html')
})

var port=8000;

app.listen(port, function(){
	console.log(`listening on port ${port}`)
})
module.exports = app;