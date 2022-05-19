## index.ts

```
import { ActionTree, GetterTree, MutationTree } from 'vuex';

declare interface ICommonState {
    [property: string]: any;
}

const getters: GetterTree<ICommonState, any> = {
    user() {
        return state.user;
    }
};

const state: ICommonState = {
    //总流量
    remain: 0,
    //各投放组使用流量
    used: new Map(),
    //当前可使用流量
    remainNow: null
};

const mutations: MutationTree<ICommonState> = {
    setRemain(state, params: any) {
        state.remain = params;
        state.remainNow = state.remain;
    },
    updateUsed(state, { index, use }: { index: string; use: number }) {
        state.used.set(index, use);
        let sum = 0;
        for (let key of state.used.keys()) {
            if (key !== index) {
                sum += state.used.get(key);
            }
        }
        state.remainNow = state.remain - sum;
    }
};

export default {
    state,
    mutations,
    getters,
    namespaced: true
};

```


## 使用

```
const remain = namespace('remain');


export default class Launch extends Vue {
    @remain.State('remainNow') remainNow!: number;
```

```
this.$store.commit('remain/updateUsed', { index: this.index, use: parseInt(newVal) || 0 });
```

用mutation中方法 commit

用action中方法 dispatch


## 其他

namespace：将store模块化，将单个模块变成带有命名空间的模块

### 获取命名空间state数据

1. this.$store.state.moduleA.countA
2. mapState
   ```
   ...mapState({
       count:state=>state.moduleB.countB
   })
   ```

### 调用命名空间模块中的getters

1. this.$store.getters['moduleA/moduleAGetter']
2. mapGetters
   ```
   ...mapGetters('moduleA',['moduleAGetter'])
   ```
3. 别名
   ```
   ...mapGetters({
    paramGetter:'moduleA/moduleAGetter'
   ```

### 调用mutation

1. this.$store.commit('moduleA/moduleAMutation')
2. ...mapMutations('moduleA',['moduleAMutation'])
3. ...mapMutations({changeNameMutation:'moduleA/moduleAMutation'})

### 调用action

1. this.$store.dispatch('moduleA/moduleAAction')
2. ...mapActions('moduleA',['moduleAAction'])
3. ...mapActions({changeNameAction:'moduleA/moduleAAction'})

