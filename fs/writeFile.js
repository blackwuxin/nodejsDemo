var fs = require('fs');
// var extend = require('node.extend');
var path = 'text.config';

// fs.appendFile(path,"{}")

//fs.writeFileSync(path,JSON.stringify({a:1,b:2}));
var JsonObj ={};
if(fs.existsSync(path)){
  JsonObj=JSON.parse(fs.readFileSync(path));
}
var newObj = {websocket:'ws://10.32.14.11:53811223'};
var destObject = Object.assign(JsonObj,newObj)
console.log(destObject);
fs.writeFileSync(path,JSON.stringify(destObject));
