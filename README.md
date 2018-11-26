# Vuex

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

## Vuex的相关操作

### 状态管理流程

view=>actions=>mutations=>state=>view

### 改变状态的2种方法

1. mutations

   ```javascript
   var store = new Vuex.Store({
     state: {
       xxx: yyy
     },
     //定义状态改变函数
     mutations: {
   
     }
   })
   //调用(xxx为mucations中的方法名)
   this.$store.commit(xxx)
   
   ```

2. actions

   ```javascript
   var store = new Vuex.Store({
   	state:{
   		XXX：xxx
   },
   	mucations:{
   		a:function(state){
   		}
   },
   	actions:{
   		b:function(context){
   			context.commit('a');
   		}
   	}
   })
   如何调用
   this.$store.dispatch(XXX);
   ```

   > 注意：
   >
   > 1. actions提交的是mucations，而不是直接变更状态；
   > 2. actions中只能对mutation进行操作；
   > 3. actions可以包含异步操作，但是mutation只能包含同步操作

### getter

```javascript
getters:{
	getCount(){}
}
this.$store.getters.getCount
```

