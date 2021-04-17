<template>
  <div v-if="!loading" class="container">
    <Nav />
    <form>
      <div class="d-flex flex-column my-3">
        <h1 v-if="!edit" class="form-title">New Post</h1>
        <h1 v-else class="form-title">Edit Post</h1>
        <label for="authorSelect">Author</label>
        <select
          v-model="userId"
          id="authorSelect"
          class="custom-select mb-3 col-12 col-md-5 col-lg-4"
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
          type="button"
          class="btn btn-primary mt-4 mx-auto bg-primary"
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
import Nav from "@/components/Nav.vue";
export default {
  name: "Create",
  components: { Nav },
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
    loading() {
      return this.$store.getters.loading;
    },
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

<style scoped lang="scss">
form .btn {
  width: 150px;
}
</style>
