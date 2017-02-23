const exec = require('child_process').exec;

// exec('ls -al',function(error,stdout,stderr){
//   if(error){
//     console.error('error:'+error);
//     return;
//   }
//   console.log('stdout:'+stdout);
//   console.log('stderr:'+typeof stderr);
// });
//
// exec('ls hello.text',function(error,stdout,stderr){
//   if(error){
//     console.error('error:'+error);
//     return;
//   }
//   console.log('stdout:'+stdout);
//   console.log('stderr:'+typeof stderr);
// });

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
