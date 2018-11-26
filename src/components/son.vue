<template>
  <div>
    <span>我是子组件</span>------{{msg}}
    <button @click="sendMsgToFather">传递数据至父组件</button>
  </div>
</template>

<script>
  export default {
    name: 'son',
    data: function () {
      return {
        toFartherMsg: '我是你的儿子'
      }
    },
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    methods: {
      sendMsgToFather: function () {
        this.$emit('handle', this.toFartherMsg)
      }
    }
  }
</script>

<style scoped>

</style>
