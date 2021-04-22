<template>
  <div>
    <router-link :to="{ name: 'Post-page', params: { id: post.id } }">
      <div>Post No. {{ post.id }} - {{ post.title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
  name: "Post",
};
</script>
