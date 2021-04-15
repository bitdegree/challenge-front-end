<template>
  <div v-if="!$store.getters.loading" class="container col-lg-12">
    <router-link
      edit
      :to="{ path: `/post/${post.id}/edit` }"
      class="btn btn-primary my-3"
      >Edit</router-link
    >
    <div class="post card mx-auto" style="width: 50rem">
      <div class="card-body">
        <h2 class="card-title">{{ post.title }}</h2>
        <h3 class="card-subtitle">{{ author.username }}</h3>
        <p class="card-text">
          {{ post.body }}
        </p>
      </div>
    </div>
    <div
      v-if="comments.length > 0"
      class="comments card mx-auto mt-5"
      style="width: 50rem"
    >
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
    author() {
      return this.$store.getters.author(this.post.userId);
    },
  },
  created() {
    if (!this.post) {
      this.$store.dispatch("fetchPost", this.postId);
    }
  },
};
</script>

<style></style>
