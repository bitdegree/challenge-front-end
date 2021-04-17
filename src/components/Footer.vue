<template>
  <footer class="w-100 d-flex justify-content-center">
    <Nav footer />
  </footer>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Footer",
  components: { Nav },
};
</script>

<style scoped lang="scss">
footer {
  background: linear-gradient(0deg, $white 0%, $light 100%);
}
</style>
