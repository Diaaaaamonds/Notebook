'use strict'

var fs = require('fs');


//读文本文件
fs.readFile('../1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

//读二进制文件
fs.readFile('../chart-pie.png',function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

//同步读文件，不接受回调函数，直接返回结果。发生错误用try catch捕捉
var data1 = fs.readFileSync('../1.txt','utf-8');
console.log('同步：' + data1);

//写文件 writeFile
var data2 = 'write file';
fs.writeFile('test.txt',data2,function(err){
    if(err){
        console.log(err);
    } else {
        console.log('ok');
    }
})

//获取文件信息 fs.stat() 
fs.stat('../1.txt',function(err,stat){
    if(err){
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if(stat.isFile){
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
})