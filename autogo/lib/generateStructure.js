var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));

console.log(__dirname);
var root = __dirname.replace(/autogo\/lib/,'autogo/');
function generateStructure(project){
  return fs.copyAsync(root+ 'structure', project,{clobber: true})
    .then(function(err){
      if (err) return console.error(err)
      console.log('generate project success');
    })
}

module.exports = generateStructure;
