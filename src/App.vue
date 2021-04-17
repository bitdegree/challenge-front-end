<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/post-page">Post page</router-link> |
      <router-link to="/post-creation-page">Post creation page</router-link> |
      <router-link to="/post-edit-page">Post edit page</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
