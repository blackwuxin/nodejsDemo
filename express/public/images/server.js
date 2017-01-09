var express = require('express');
var app = express();

app.get('/',function(req,res){
  // console.log(req);
  console.log('home get request');
  res.send('hello get');
});


//POST
app.post('/',function(req,res){
  console.log('home post request');
  res.send('hello post');
});

//DELETE
app.delete('/',function(req,res){
  console.log('home delete request');
  res.send('hello delete');
});
//OPTION
app.options('/',function(req,res){
  console.log('home options request');
  res.send('hello options');
});
//
app.get('/ab*cd',function(req,res){
    console.log('/ab*cd get request');
    res.send('正则匹配');
});


var server = app.listen(8081,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log(server.address());
  console.log("应用程序访问地址为 http://%s:%s",host,port);
});
