var tls = require('tls');
var fs = require('fs');

var options = {
  key:fs.readFileSync('../httpserver/server.key'),
  cert:fs.readFileSync('../httpserver/server.crt'),
  requestCert:true,
  ca:[fs.readFileSync('../httpserver/ca.crt')]
};

var server = tls.createServer(options,function(stream){
  console.log('server connected',stream.authorized ? 'authorized':'unauthorized');
  stream.write("welcome!\n");
  stream.setEncoding('utf8');
  stream.pipe(stream);
});
server.listen(8000,function(){
  console.log('server bound');
})
