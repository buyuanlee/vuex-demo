<template>
  <div>
    我也也是来自全局的{{getNum}}
  </div>
</template>

<script>
  export default {
    name: 'outter',
    computed: {
      getNum () {
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>

</style>
