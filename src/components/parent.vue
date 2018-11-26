<template>
  <div>
    <span>我是父组件</span>---{{fromSonMsg}}
    <hr>
    <son v-bind:msg="toSonMsg" @handle="getMsgFromSon"></son>
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
    }
  }
</script>

<style scoped>

</style>
