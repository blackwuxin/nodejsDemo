var WebSocketServer  = require('ws').Server,
wss = new WebSocketServer({port:8181});

var clients =[];
wss.on('connection',function(ws){
  clients.push(ws);
  console.log('client connected');
  ws.on('message',function(message){
    console.log(message);
    console.log(clients.length);
  })
})
