<template>
  <div class="post-creation-page">
    <h1>Post creation page</h1>
    <PostNew></PostNew>
  </div>
</template>

<script>
import PostNew from "@/components/PostNew";
export default {
  name: "Post-creation-page",
  components: { PostNew },
  data() {
    return {
      post: { newUserId: "", newTitle: "", newBody: "" },
    };
  },
  methods: {
    addNewPost() {
      this.$emit(
        "addNewPost",
        this.post.newUserId,
        this.post.newTitle,
        this.post.newBody
      );
    },
  },
};
</script>
