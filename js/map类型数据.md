## map数据处理

### 声明 let map = new Map()
   
   map为一个object，储存key-value键值对

### 遍历

1. 对key
   ```
   for(let key of map.keys()){
       console.log(map.get(key));
   }
   ```
2. 对value
   ```
   for(let value of map.values()){
       console.log(value));
   }
3. foreach
    ```
    map.foreach((value,key)=>{
        console.log(value,key);
    })
    ```
    foreach一般用于数组，map为对象

### 添加/更新  

1. set 更新/添加
   ```
   map.set('index1',1);
   ```
