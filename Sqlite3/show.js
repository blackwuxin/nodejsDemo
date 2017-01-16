var util = require('util');
const notesdb = require('./notesdb-sqlite3');
notesdb.connect(function(err){
  if(err) throw error;
});

notesdb.forAll(function(err,row){
    util.log('ROW: '+util.inspect(row));
},function(err){
  if(err) throw error;
  util.log('ALL DONE');
  notesdb.disconnect(function(err){});
});
