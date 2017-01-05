var http = require('http');
var fs = require('fs');
var url = require('url');
var mine = require('mine').types;
var path = require('path');

var server = http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;
  var ext = path.extname(pathname);
  var query = url.parse(req.url,true).query;
  ext = ext ? ext.slice(1):'unknow';

  console.log(query);
  console.log("path:"+pathname+"\n ext:"+ext+"\n" );
  // fs.exists(pathname,function(exists){
  //   if(!exists){
  //     res.writeHead(404,{'Content-Type':'text/plain'});
  //     res.write('This request url '+ pathname+ ' was not found on this server');
  //     res.end();
  //   }else{
  //     fs.readFile(pathname,'binary',function(err,file){
  //       if(err){
  //         res.writeHead(500,{'Content-Type':'text/plain'});
  //         res.end();
  //       }else{
  //         var contentType = mine[ext] || 'text/plain';
  //         res.writeHead(200,{'Content-Type':contentType});
  //         res.write(file,'binary');
  //         res.end();
  //       }
  //     })
        fs.readFile('./index.html','binary',function(err,file){
          var contentType = 'text/html';
          res.writeHead(200,{'Content-Type':contentType});
          res.write(file,'binary');
          res.end();
        });

  //})
//  res.writeHead(200,{'Content-Type':'text/plain'});
//  res.end('Hello World! \n');
  //res.redirect("./index.html");
}).listen(1337,'127.0.0.1');

//客户端要求升级连接协议
server.on('upgrade',function(e){

});
console.log('Server running at http://127.0.0.1:1337');
