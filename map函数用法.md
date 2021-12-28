## map()用法

1. ts中map()基本方法

    arr.map((item, index, array)=>{...})

    item：当前处理的元素，index：当前处理元素的索引，array：调用map或者filter方法数组本身

    map()取到数组中的每一条数据

2. 示例
   
    ```
    let arr = [1,2,3,4];
    let res1 = arr.map((item,index,array) => {
        return item>1;
    })
    // res1 = [false, true, true, true]