<template>
  <div>
    <form @submit.prevent="">
      <div class="mb-3">
        <label for="userId" class="form-label">Author name</label>
        <input
          v-model="post.userId"
          type="text"
          class="form-control"
          id="userId"
          placeholder="Name"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">Post title</label>
        <input
          v-model="post.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Post content</label>
        <textarea
          v-model="post.body"
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
  name: "PostNew",
  data() {
    return {
      post: {
        id: 999,
        userId: 1111,
        title: "",
        body: "",
      },
    };
  },
};
</script>
