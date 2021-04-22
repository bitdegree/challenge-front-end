<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home page</router-link> |
      <router-link to="/post-creation-page">Post creation page</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  padding: 5%;
}
</style>
