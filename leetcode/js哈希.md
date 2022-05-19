## js哈希表声明及用法

声明：let map = new Map();

获取value：map.get(key);

value为数组：let list = map.get(key) || new Array()

设置值：map.set(key, list);

数组形式返回所有value：return [...map.values()]; 或  return Object.values(map);

### 遍历对象
```
let map = {};
for(let [key,value] of Object.entries(map))    //Obeject.entries()
```