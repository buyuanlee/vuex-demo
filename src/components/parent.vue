<template>
  <div>
    <span>我是父组件</span>---{{fromSonMsg}}
    <br>
    我也是来自全局的{{getNum}}
    <button @click="padd">我是父组件改变状态</button>
    <hr>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    <br>
  </div>
</template>

<script>
  import son from './son'

  export default {
    name: 'parent',
    components: {
      son
    },
    data: function () {
      return {
        toSonMsg: '我是你的父亲',
        fromSonMsg: ''
      }
    },
    methods: {
      getMsgFromSon: function (value) {
        this.fromSonMsg = value
      },
      padd () {
        this.$store.commit('decrease')
      }
    },
    computed: {
      getNum: function () {
        // return this.$store.state.num
        return this.$store.getters.getNum
      }

    }
  }
</script>

<style scoped>

</style>
