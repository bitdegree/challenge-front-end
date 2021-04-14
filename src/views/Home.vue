<template>
  <div class="home">
    <div class="list-group list-group-flush">
      <router-link
        v-for="post in posts"
        :key="post.id"
        class="list-group-item list-group-item-action"
        to="/about"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ post.title }}</h5>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({}),
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  methods: {},
  async mounted() {
    if (this.posts.length < 1) {
      await this.$store.dispatch("fetchPosts");
    }
  },
};
</script>
