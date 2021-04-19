<template>
  <div class="post-creation-page">
    <h1>Post creation page</h1>
    <form @submit.prevent="addNewPost">
      <div class="mb-3">
        <label for="userId" class="form-label">Author name</label>
        <input
          v-model="post.newUserId"
          type="text"
          class="form-control"
          id="userId"
          placeholder="Name"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">Post title</label>
        <input
          v-model="post.newTitle"
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Post content</label>
        <textarea
          v-model="post.newBody"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>
      <button>Submit New Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Post-creation-page",
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

<style scoped></style>
