var mysql = require('mysql');
var util = require('./util');


var dbConfig = util.get('config.json', 'db');
console.log(dbConfig);

//
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root'
});

connection.connect(function(err){
  //connected
  if(err){
      console.log(err);
  }
  console.log('successfully');
});
//
// connection.end(function(err){
//
// });
// //connection.destroy();
//
// function querySql(callback){
//   connection.query('SELECT * FROM test.test1',function(err,rows){
//       if(err){
//         console.log(err);
//         return;
//       }
//       callback(rows);
//   });
// }
// //
// function callback(rows){
//   console.log(rows);
// }
//
//INSERT INTO posts SET title = 'test'
// connection.query("INSERT INTO test.test1 SET ?",{id:1,name:'test'},function(err,result){
//   if(err) throw err;
//   console.log(result.insertId);
// })
connection.query('SELECT * FROM test.test1',function(err,rows){
      if(err){
        console.log(err);
        return;
      }
      console.log(rows);
  });
//
// //mysql.escapedId 防止MySQL注入，转义字符方法。
// var sorter = 'date';
// var query = 'SELECT * FROM posts ORDER BY ' + mysql.escapedId(sorter);
// console.log(query);
