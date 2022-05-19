## map()用法

将函数作用在Array的每一个元素并把结果生成一个新Array

1. ts中map()基本方法

    arr.map((item, index, array)=>{...})

    item：当前处理的元素，index：当前处理元素的索引，array：调用map或者filter方法数组本身

    map()取到数组中的每一条数据


2. 示例用法
   
   1. 
   
        ```
        let arr = [1,2,3,4];
        let res1 = arr.map((item,index,array) => {
            return item>1;
        })
        // res1 = [false, true, true, true]
        ``` 

    2. 所有数字转字符串
        ```
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        ```

    3. 每个元素首字母大写，其余小写
        ```
        arr.map(s=>{
            s[0].toUpperCase() + s.substring(1).toLowerCase();
        })
        ```

## reduce用法

把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：

[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

1. 示例用法

    1. 数组变整数
        ```
        var arr = [1, 3, 5, 7, 9];
        arr.reduce(function (x, y) {
            return x * 10 + y;
        }); // 13579
        ```
        
    2. 求积
        ```
        arr.reduce(function (x, y) {
            return x*y;
        });
        ```
    


