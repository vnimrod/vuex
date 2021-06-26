<template>
  <div>
    component3
    <Component4/>
    <History/>
  </div>
</template>

<script>
import Component4 from './Component4.vue'
import History from './History.vue'
  export default {
    components: {
      Component4,
      History
    }
  }
</script>

<style scoped>

</style>