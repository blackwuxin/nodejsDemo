#! /usr/bin/env node

var program = require('commander'),
    gs = require('../lib/generateStructure');

program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .option('-R, --reset <str | array>','reset & install')
  .parse(process.argv);

console.log(program.args);
console.log(program.reset);
var pname = program.args[0];
if(!pname){
  program.help();
}else {
  gs(pname);
}
