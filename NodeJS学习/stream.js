'use strict';

var fs = require('fs');

var rs = fs.createReadStream('test.txt');
var ws = fs.createWriteStream('test2.txt');

rs.pipe(ws);