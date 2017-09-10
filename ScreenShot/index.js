// const screenshot = require('screenshot-desktop')

// screenshot().then((img) => {
//  // img: Buffer filled with jpg goodness 
//  // ... 
//     console.log(img);
// }).catch((err) => {
//  // ... 
//  console.log('err',err);
// })

var screencapture = require('screencapture');
screencapture('./output.png',function(err,imagePath){

    if(err){
        console.log('err',err);
    }
    console.log(imagePath);
});