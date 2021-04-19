<template>
  <div class="post-page">
    <h1>Post - {{ id }}</h1>
    <div>
      <div>{{ userId }}</div>
      <div>{{ title }}</div>
      <div>{{ body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "userId", "title", "body"],
};
</script>
