var express = require('express');
var fs = require('fs');
var app = express();

var cookieParser =require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
// var errorHandler = require('express-error-handler');
// var errorHander = errorHandler({dumpExceptions:true});

//创建 application/x-wwww-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended:false});

//访问静态文件,js css image
//示例 ： 127.0.0.1:8081/images/im_default.png
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({
  dest:'/tmp/',
  limits:{
    fileSize:1000
  },
  onFileSizeLimit:function(file){
    if(file.size > 1000){
      fs.unlink('./'+file.path)
    }
  }
  }).array('image'));
app.use(cookieParser());
// app.use(errorHandler({dumpExceptions:true}));

app.get('/',function(req,res,next){
  console.log("cookies:",req.cookies);
  //es.send('Hello World');
  next();
});
app.get('/',function(req,res){
  console.log('next');
  res.send('next');
})
app.get('/process_get',function(req,res){

  var response ={
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));

});

app.post('/process_post',urlencodedParser,function(req,res){
  var response ={
    first_name:req.body.first_name,
    last_name:req.body.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));

});
app.get('/index.htm',function(req,res){
  res.sendFile(__dirname + "/" + "index.html");
});
app.get('/khaa+n',function(req,res){
  console.log('/khaan');
  res.render('/index.html');
});

app.post('/file_upload',function(req,res){

    console.log(req.files);

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
      fs.writeFile(des_file,data,function(err){
        if(err){
          console.log(err);
        }else{
          response = {
            message:'File uploaded successfully',
            filename:req.files[0].originalname
          };
        }
         console.log(response);
         res.end(JSON.stringify(response));
      })
    });
});
app.get('/error',function(req,res){
  var notAllowed = null;
  notAllowed.delete();
});
//所有路由都没有匹配后，执行通配符，返回404
app.get('*', function(req, res){
      res.sendFile(__dirname + "/" + "404.html");
});

// app.error(function(err,req,res){
//   res.sendFile(__dirname+"/error.html");
// })
var server = app.listen(8081,function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为htt://%s:%s',host,port);
});
