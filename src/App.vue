<template lang='pug'>
#App
  .wrapper
    Nav
    router-view 
  Footer
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Nav, Footer },
  setup(){

    return{}
  }
}
</script>

<style lang="scss">

#App{}
.wrapper{
  min-height: 95vh;
}

</style>
