# VUE路由跳转

## 带参数跳转

1. $router.push拼接参数

    this.$router.push(`/home?appkey=com.css`)

2. name匹配路由，params传值
    ```
    this.$router.push({
        name: 'home',
        params: {
            appkey: 'com.css'
        }
    })
    ```

3. path匹配路由，query传值
   ```
    this.$router.push({
        path: '/home',
        query: {
            appkey: 'com.css'
        }
    })
    ```

注: path配query，name配params

## 跳转后触发事件

```
async mounted() {
        if (this.$route.query.appkey) {
            (this.$refs.machineDialog as any).show(this.$route.query.appkey);
            this.$router.replace({ query: {} });
        }
    }
```

1. 挂载在跳转后页面的mounted里

2. this.$route.query.appkey从query中取值

3. 使用后清空query：this.$router.replace({ query: {} });




    