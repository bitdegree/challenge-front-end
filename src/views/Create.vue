<template>
  <div class="container">
    <form class="needs-validation">
      <div class="d-flex flex-column mb-3">
        <label for="authorSelect">Author</label>
        <select
          v-model="userId"
          id="authorSelect"
          class="custom-select mb-3"
          required
        >
          <option
            v-for="(author, index) in authors"
            :key="index"
            :value="author.id"
          >
            {{ author.name }}
          </option>
        </select>
        <label for="titleInput">Title</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          id="titleInput"
          required
        />
        <textarea
          v-model="body"
          class="form-control mt-4"
          id="bodyTextarea"
          placeholder="Your story starts here..."
          required
          @change="onBodyChange"
          rows="7"
        ></textarea>
        <button
          type="submit"
          class="btn btn-primary w-25 mt-2"
          @click="onSubmit"
          :disabled="!formValid"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      userId: "",
      title: "",
      body: "",
    };
  },
  computed: {
    authors() {
      return this.$store.getters.authors;
    },
    post() {
      return this.$store.getters.post(this.id);
    },
    formValid() {
      return this.userId && this.title.length && this.body.length;
    },
  },
  methods: {
    onSubmit() {
      if (this.edit) {
        this.$store.dispatch("updatePost", {
          id: this.id,
          userId: this.userId,
          title: this.title,
          body: this.body,
        });
      } else {
        this.$store.dispatch("createPost", {
          userId: this.userId,
          title: this.title,
          body: this.body,
        });
      }
    },
  },
  async created() {
    if (this.edit) {
      await this.$store.dispatch("fetchPost", this.id);
      this.userId = this.post.userId;
      this.title = this.post.title;
      this.body = this.post.body;
    } else {
      this.$store.dispatch("fetchAuthors");
    }
  },
};
</script>

<style></style>
