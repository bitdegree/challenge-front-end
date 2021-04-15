<template>
  <div class="container col-lg-12">
    <div class="post card mx-auto" style="width: 50rem">
      <div class="card-body">
        <h2 class="card-title">{{ post.title }}</h2>
        <p v-for="i in 10" :key="i" class="card-text">
          {{ post.body }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="comments card mx-auto mt-5" style="width: 50rem">
      <h2 class="card-title">Comments</h2>
      <ul class="list-group list-group-flush">
        <li
          v-for="comment in comments"
          :key="comment.id"
          class="list-group-item"
        >
          {{ comment.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  computed: {
    postId() {
      return this.$route.params.id;
    },
    post() {
      return this.$store.getters.post(this.postId);
    },
    comments() {
      return this.$store.getters.comments;
    },
  },
  async created() {
    if (!this.post) {
      await this.$store.dispatch("fetchPost", this.postId);
    }
    this.$store.dispatch("fetchComments", this.postId);
  },
};
</script>

<style></style>
