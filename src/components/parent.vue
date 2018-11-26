<template>
  <div>
    <span>我是父组件</span>---{{fromSonMsg}}
    <br>
    我也是来自全局的{{getNum}}
    <hr>
    <son v-bind:msg="toSonMsg" @handle="getMsgFromSon"></son>
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
      }
    },
    computed: {
      getNum: function () {
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>

</style>
