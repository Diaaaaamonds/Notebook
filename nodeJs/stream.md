## stream模块

Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位

### pipe

两个流串起来，数据自动从一个流进入另一个流，这种操作叫pipe。

```
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
```

