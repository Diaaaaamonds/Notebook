<<<<<<< HEAD:js/数组sort方法.md
## sort

对于两个元素x和y，如果认为x < y，则返回-1，如果认为x == y，则返回0，如果认为x > y，则返回1。最后返回 1 0 -1。

正序：x < y，返回-1，x > y，返回1

倒序：x < y，返回1，x > y，返回-1

### 其他

对于字符串，默认ASCII码进行排序

对于数字，先转换为string再排序，'10'排在'2'的前面，因为字符'1'比字符'2'的ASCII码小。对于数字数组不能直接.sort，可自定义一个比较函数

sort会对当前数组进行修改，返回的仍是当前数组

### 示例

1. id从小到大排序
```
.sort((a: any, b: any) => a.id - b.id)
```

2. sort中函数自定义，return
```
list.sort((a, b) => {
                let aVal = formatData(a[prop]);
                let bVal = formatData(b[prop]);
                if (order === 'ascending') {
                    return aVal - bVal;
                } else {
                    return bVal - aVal;
                }
            });
=======
## sort

对于两个元素x和y，如果认为x < y，则返回-1，如果认为x == y，则返回0，如果认为x > y，则返回1。最后返回 1 0 -1。

正序：x < y，返回-1，x > y，返回1

倒序：x < y，返回1，x > y，返回-1

### 其他

对于字符串，默认ASCII码进行排序

对于数字，先转换为string再排序，'10'排在'2'的前面，因为字符'1'比字符'2'的ASCII码小。对于数字数组不能直接.sort，可自定义一个比较函数

sort会对当前数组进行修改，返回的仍是当前数组

### 示例

1. id从小到大排序
```
.sort((a: any, b: any) => a.id - b.id)
```

2. sort中函数自定义，return
```
list.sort((a, b) => {
                let aVal = formatData(a[prop]);
                let bVal = formatData(b[prop]);
                if (order === 'ascending') {
                    return aVal - bVal;
                } else {
                    return bVal - aVal;
                }
            });
```

3. 对象数组按某一属性排序
```
let shareArr = shareIds
.sort((a, b) => a - b)
.map((key) => {
    let shares = map.get(key) || [];
    if (shares) {
        //按每个分片的序号排序（seq）
        shares = shares.sort((a, b) => a.seq - b.seq);
    }

    return {
        shardId: key,
        shares,
    };
});
>>>>>>> e8d1d848ac92ddb54602570cfe1c2d2ead006a64:数组sort方法.md
```