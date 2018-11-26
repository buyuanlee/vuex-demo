import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 6
  },
  //定义状态改变函数
  mutations: {
    increase (state) {
      state.num++
    },
    decrease (state) {
      state.num--
    }
  },
  actions: {
    //context:上下文对象
    increaseAction (context) {
      //调用的方法必须在mutations中定义
      context.commit('decrease')
    }
  },
  getters: {
    getNum (state) {
      return state.num > 0 ? state.num : 0
    }
  }
})
