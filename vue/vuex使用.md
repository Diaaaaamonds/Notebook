# VueX

全局状态管理

简单理解：在state中定义一个数据后，可在项目任何一个组件里进行获取、修改，并且修改得到全局响应变更

1. 安装vueX
   ```
   npm install vuex --save
   ```

2. src下新建store，包含index.js
   ```
   import Vue from 'vue';
   import VueX from 'vuex';
   Vue.use(Vuex);
   const store = new Vuex.Store();

   export default store;
   ```

3. main.js中引入store，即可使用this.$store
   ```
   import store from './store'
   new Vue({
       el: '#app',
       router,
       store,
       template: '<App/>',
       components: { App }
   })

4. store index.js中声明变量
    ```
    import Vue from 'vue';
    import Vuex from 'vuex';
    Vue.use(Vuex);
    const state={//要设置的全局访问的state对象
        showFooter: true,
        changableNum:0
        //要设置的初始属性值
    };
    const store = new Vuex.Store({
        state
        });
    
    export default store;
    ```

5. getters实时监听state变化
    ```
    const state = {
    // 有读权限的appKey
    appkeyList: [],
    // 选择的appkey
    appkey: '',

    // 有写权限的appKey
    writeAppkeyList: [],
    writeAppkey: '',
    };
    const getters: GetterTree<ICommonState, any> = {
        getAppkeyList() {
            return state.appkeyList;
        },
        getAppkey() {
            return state.appkey;
        },
        getWriteAppkeyList() {
            return state.writeAppkeyList;
        },
        getWriteAppkey() {
            return state.writeAppkey;
        },
    };
    ```

6. mutations存放改变state初始值的方法，参数为state和其他
    ```
    const mutations: MutationTree<ICommonState> = {
        setAppkeyList(localState: ICommonState, appkeyList: any[]) {
            localState.appkeyList = appkeyList;
        },
        setAppkey(localState: ICommonState, appkey: string) {
            localState.appkey = appkey;
        },
        setWriteAppkeyList(localState: ICommonState, writeAppkeyList: any[]) {
            localState.writeAppkeyList = writeAppkeyList;
        },
        setWriteAppkey(localState: ICommonState, writeAppkey: string) {
            localState.writeAppkey = writeAppkey;
        },
    };
    ```

7. action异步触发mutations中的方法
    ```
    const actions: ActionTree<ICommonState, any> = {
        async fetchAppkeyList({ commit }: any, params: any) {
            const list: any = await api.app.getAppkey();
            commit('setAppkeyList', list);
            if (!state.appkey && list && list.length > 0) {
                commit('setAppkey', list[0].appkey);
            }
            return list;
        },
        async fetchWriteAppkeyList({ commit }: any, params: any) {
            const list: any = await api.app.getAppkey({ type: 2 });
            commit('setWriteAppkeyList', list);
            if (list && list.length > 0 && !state.writeAppkey) {
                commit('setWriteAppkey', list[0].appkey);
            }
            return list;
        },
    };
    ```

8. 最后export
    ```
    export default {
        state,
        getters,
        actions,
        mutations,
    }
    ```

9. 模块化
    ```
    import Vue from 'vue';
    import Vuex from 'vuex';
    import footerStatus from './modules/footerStatus'
    import collection from './modules/collection'
    Vue.use(Vuex);

    export default new Vuex.Store({
        modules:{
            footerStatus,
            collection
        }
    });
