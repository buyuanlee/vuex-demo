## vuex之store

### 是什么？

用来管理状态，共享数据，在各个组件之间管理外部状态（例如登陆状态）

### 安装与使用

1. npm安装

    ```shell
    npm install vuex	
    ```

2. 引入vuex，并通过use方法使用它(./src/router/main.js)

    ```javascript
    import Vuex from 'vuex'
    
    Vue.use(Vuex)
    ```

3. 创建状态仓库

   ```javascript
   var store = new Vuex.Store({
       state:{
           XXX:xxx
       }
   })
   ```

4. 通过this.$store.state.xxx直接拿到需要的数据

