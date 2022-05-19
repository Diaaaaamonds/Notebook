## vue-router创建及配置

vue项目创建时选择vue-router模式

### 创建vue-router对象

const routes = [],

export default new Router({routes})

history模式
```
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    }
]

export default new Router({
    routes,
    mode:'history'
})
```

### 配置组件和路由的映射

在vue-router的index.js中import组件

import home from '../home/index.vue'


### 使用路由

app.vue中router-view或router-link