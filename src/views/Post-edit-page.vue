<template>
  <div class="post-edit-page">
    <h1>Edit the post {{ post.id }}</h1>
    <div v-if="!loaded">Post is loading...</div>
    <PostEdit v-if="loaded" :post="post"></PostEdit>
  </div>
</template>

<script>
import axios from "axios";
import PostEdit from "@/components/PostEdit";

export default {
  name: "Post-edit-page",
  components: { PostEdit },
  props: ["id"],
  data() {
    return {
      post: {},
      loaded: false,
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => {
        this.post = response.data;
        console.log(this.post);
        this.loaded = true;
      });
  },
};
</script>
