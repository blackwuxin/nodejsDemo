var fs = require('fs');
var path = require('path');
// const FILEDIR ='./temp/test/2.js';
// var src = './temp/1.js'
// var dir = path.resolve(FILEDIR, '..');
// if(!fs.existsSync(FILEDIR)){
//   try{
//
//       var s = fs.mkdirSync(dir);
//       copy(src,FILEDIR);
//   }catch(ex){
//     console.log(ex);
//   }
//
// }else{
//     copy(src,FILEDIR);
// }
//
// function copy(src, dest) {
// 	if (fs.lstatSync(src).isDirectory()) {
// 		if (!fs.existsSync(dest)) {
// 			fs.mkdirSync(dest);
// 		}
// 	} else {
// 		var content = fs.readFileSync(src, 'utf8');
// 		fs.writeFileSync(dest, content);
// 	}
// }


  // var _crn_constant_val_bu = {
  //      'version': '0.41.0',
  //      'buildID': 2008116,
  //      'buildTime': new Date()
  //   }
  // let content = '\n var _crn_constant_val_bu = ' + JSON.stringify(_crn_constant_val_bu);
  // let targetFileDir = './common_ios.js';
  // fs.appendFile(targetFileDir, content, function (err) {
  //   if(err){
  //     console.error('添加全局配置信息失败');
  //     console.log(err);
  //   }
  //   console.log('添加全局配置信息完成');
  // });

  		 //var content = fs.readFileSync('0.js', 'utf8');

      // if(content.indexOf('\n var _crn_constant_val_bu = {"version":"0.41.0","buildID":2008116,"buildTime":"2017-05-02T08:59:27.862Z"}') == -1){
      //   console.log('not find');
      // }
        try{
           let babelRCFile = path.resolve(process.cwd(), '.babelrc');
                    if (fs.existsSync(babelRCFile)) {
                        // fs.unlinkSync(babelRCFile);
                        var content = fs.readFileSync(babelRCFile, 'utf8');
                        var js = JSON.parse(content);
                        if (!js.presets) {
                            js.presets = ["react-native"];
                        } else {
                            var rnflag = false;
                            js.presets.forEach(function (item) {
                                if (item === 'react-native') {
                                    rnflag = true;
                                }
                            });
                            if (!rnflag) {
                                js.presets.push("react-native");
                            }
                        }

                        if (!js.plugins) {
                            js.plugins = ["transform-remove-debugger", "transform-remove-console"];
                        } else {
                            var consoleflag = false;
                            var debuggerflag = false;
                            js.plugins.forEach(function (item) {
                                if (item === 'transform-remove-console') {
                                    consoleflag = true;
                                }
                                if (item === 'transform-remove-debugger') {
                                    debuggerflag = true;
                                }
                            });
                            if (!consoleflag) {
                                js.plugins.push("transform-remove-console");
                            }
                            if (!debuggerflag) {
                                js.plugins.push("transform-remove-debugger");
                            }
                        }
                        fs.writeFileSync(babelRCFile, JSON.stringify(js));
                    }else{
                        
                    }
        }catch(ex){
          console.error(ex);
        }
       

       