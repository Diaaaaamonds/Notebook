## JSON格式化
```
const arr = JSON.parse(config);
arr = JSON.stringify(arr, null, 4);

//用法
config = JSON.stringify(JSON.parse(config), null, 4);
```