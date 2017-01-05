var https =require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('../httpserver/server.key'),
  cert: fs.readFileSync('../httpserver/server.crt')
};

https.createServer(options,function(req,res){
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
