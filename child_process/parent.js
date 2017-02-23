var child_process = require('child_process');

/**
 * 默认silent为false,子进程的stdio从父进程继承，如果是true,则直接pipe向子进程的child.stdin,child.stdout
 *
 */
// child_process.fork('./child.js',{
//   silent:false
// });
//
// //不会打印
// child_process.fork('./silentChild.js',{
//   silent:true
// });
//
// var child = child_process.fork('./anotherSilentChild.js',{
//   silent:true
// });
//
// child.stdout.setEncoding('utf-8');
// child.stdout.on('data',function(data){
//   console.log(data);
// });

var child = child_process.fork('./child.js');

child.on('message',function(m){
  console.log('message from child ' + JSON.stringify(m));
});

child.send({from:'parent'});

process.on('message',function(m){
  console.log('message from parent:'+ JSON.stringify(m));
});
process.send({from:'child'});
