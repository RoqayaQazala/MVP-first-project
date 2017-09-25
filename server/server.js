var express= require('express');
var app= express();
var mongoose = require('mongoose');

app.use(express.static(_dirname +'/../public'))
app.get('/', function(res, req){
	res.sendFile(_dirname+'/index.html')
})

var port=8000;


module.exports = app;