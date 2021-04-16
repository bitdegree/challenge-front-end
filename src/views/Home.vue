<template>
  <div v-if="!$store.getters.loading" class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome!</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a
        class="btn btn-primary btn-lg"
        @click="$router.push('/create')"
        role="button"
        >Create New</a
      >
    </div>
    <div class="list-group list-group-flush">
      <router-link
        v-for="post in posts"
        :key="post.id"
        class="list-group-item list-group-item-action"
        :to="{ path: `/post/${post.id}` }"
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
  async created() {
    if (this.posts.length < 99) {
      await this.$store.dispatch("fetchPosts");
    }
  },
};
</script>
