<template>
  <div>
    <h1>Posts list</h1>
    <div v-if="!loaded">Posts are loading...</div>
    <ul class="list-group">
      <li class="list-group-item" v-for="post in posts" :key="post.id">
        <Post :post="post"> </Post>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";

export default {
  name: "PostsList",
  components: { Post },
  data() {
    return {
      posts: [],
      loaded: false,
    };
  },

  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data;
      this.posts = posts;
      this.loaded = true;
    });
  },
};
</script>
