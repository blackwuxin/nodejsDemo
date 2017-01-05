var net = require('net');

// var server = net.createServer(function(socket){
//     socket.on('data',function(data){
//       console.log(data);
//       socket.write('hello');
//     });
//
//     socket.on('end',function(){
//       console.log('连接断开')
//     });
//
//     socket.write('示例');
// });
//
// server.listen(8124,function(){
//   console.log('server bound');
// })

var server = net.createServer();
server.on('connection',function(socket){
  socket.on('data',function(data){
       console.log(data.toString());
       socket.write('hello');
     });

     socket.on('end',function(){
       console.log('连接断开')
     });

     socket.write('示例');
});
server.listen(8124);
