<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/post/">Post page</router-link> |
      <router-link to="/post-creation-page">Post creation page</router-link> |
      <router-link to="/post-edit-page">Post edit page</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
