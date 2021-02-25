<template lang='pug'>
#App
  .container
    router-link(:to='{name: "Home"}') Home
    a  | 
    router-link(:to='{name: "Create"}') Create new post

  router-view 
</template>

<script>
export default {
  setup(){

    return{}
  }
}
</script>

<style lang="scss">



</style>
