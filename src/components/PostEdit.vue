<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">Post title</label>
        <input
          v-model="updatedPost.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Post content</label>
        <textarea
          v-model="updatedPost.body"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>
      <router-link :to="{ name: 'Post-page', params: { updatedPost } }">
        <button class="btn btn-primary">Update Post</button>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostEdit",
  props: ["post"],
  data() {
    return {
      updatedPost: {
        id: this.post.id,
        userId: this.userId,
        title: this.post.title,
        body: this.post.body,
      },
    };
  },
};
</script>
