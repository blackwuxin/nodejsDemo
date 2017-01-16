var util = require('util');
var async = require('async');

var notesdb = require('./notesdb-sqlite3');
notesdb.connect(function(err){
  if(err) throw err;
});
notesdb.setup(function(err){
  if(err){
      util.log('ERROR '+err);
  }
  async.series([function(cb){
    notesdb.add("blackwuxin","This is first notejs sqlite3",function(err){
      if(err) util.log('ERROR '+err);
      cb(err);
    });
  }],function(err,results){
    if(err) util.log('ERROR '+err);
    notesdb.disconnect(function(err){});
  });
});
