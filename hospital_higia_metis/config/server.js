var express=require('express');
var consign=require('consign');
var bodyParser = require('body-parser'); 
var path = require('path');
var busboy = require('then-busboy');
var fileUpload = require('express-fileupload');

var app=express(); 
app.set('view engine','ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("./app/public/"));

app.use(fileUpload());

consign()
.include('app/routes')
.then('app/controllers')
.into(app);

module.exports = app;