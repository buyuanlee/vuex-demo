<template>
  <div>
    我也也是来自全局的{{getNum}}
    <button @click="padd">我是outter组件改变状态</button>
  </div>
</template>

<script>
  export default {
    name: 'outter',
    computed: {
      getNum () {
        return this.$store.state.num
      }
    },
    methods: {
      padd () {
        this.$store.commit('increase')
      }
    }
  }
</script>

<style scoped>

</style>
