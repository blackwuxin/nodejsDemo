const spawnSync = require('child_process').spawnSync;
const path = require('path');
var dir =path.resolve(__dirname,'./tmp/');
// path.resolve(process.cwd(), conf.filePath);
// spawn('rm',['-rf',dir])

var result = spawnSync('rm',['-rf',dir],{stdio: 'inherit'});
