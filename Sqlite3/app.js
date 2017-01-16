var util = require('util');
var url  = require('url');
var express = require('express');
var nmDBEngine = 'sqlite3';
var notesdb = require('./notesdb-'+nmDBEngine);
var bodyParser = require('body-parser');
var app = express();
// app.use(express.logger());
app.use(bodyParser());
app.register(".html",require('ejs'));
app.set("views",__dirname +'/views-'+nmDBEngine);
app.set('view engine','ejs');

//路由中间件
var parseUrlParams = function(req,res,next){
  req.urlP = url.parse(req.url,true);
  next();
}

notesdb.connect(function(err){
  if(err) throw error;
});
app.on('close',function(err){
  notesdb.disconnect(function(err){});
});

app.get('/',function(req,res){
  res.redirect('/view');
});

app.get('/view',function(req,res){
  notesdb.allNotes(function(err,notes){
    if(err){
      util.log('ERROR '+err);
      throw err;
    }else{
      res.render('viewnotes.html',{title:"Notes ("+nmDBEngine+")",notes:notes});
    }
  });
});

app.listen(3000);
