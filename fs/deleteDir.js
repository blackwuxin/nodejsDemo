var fs = require('fs');
const FILEDIR ='./temp/1.js';
// var folder_exists  = fs.existsSync(FILEDIR);
//
// if(folder_exists == true){
//   var dirList = fs.readdirSync(FILEDIR);
//   dirList.forEach((fileName)=>{
//     fs.unlinkSync(FILEDIR +'/'+fileName);
//   });
// }

var emptyDir = function(fileUrl){
  try{
    var files = fs.readdirSync(fileUrl); //读取该文件夹
    files.forEach(function(file) {
        var stats = fs.statSync(fileUrl + '/' + file);
        if (stats.isDirectory()) {
            emptyDir(fileUrl + '/' + file);
        } else {
            fs.unlinkSync(fileUrl + '/' + file);
          //console.log("删除文件" + fileUrl + '/' + file + "成功");
        }
    });
  }catch(error){
      console.error(error);
  }
}
emptyDir(FILEDIR);
