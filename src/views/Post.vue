<template>
  <div v-if="!loading" class="container">
    <Nav />

    <article>
      <h1 class="article-title my-3">{{ post.title }}</h1>
      <div class="author my-4 d-flex">
        <div class="written-by">
          Written by
          <span class="name"
            ><i>{{ author.username }}</i></span
          >
        </div>
      </div>
      <hr />
      <p v-for="n in 7" :key="n" class="article-body text-justify">
        {{ post.body }}
      </p>
      <hr class="w-75 my-4" />
      <div class="row">
        <div class="col-sm-4 col-md-3 col-lg-2">
          <div class="author-picture mx-auto"></div>
        </div>
        <div class="about-author col-sm-8 col-md-6 col-lg-8 d-flex">
          <div
            class="info mx-auto mx-sm-0 mt-3 mt-sm-0 text-center text-sm-left"
          >
            <h4 class="name">{{ author.name }}</h4>
            <span>Company: {{ author.company.name }}</span>
            <span>{{ author.company.catchPhrase }}</span>
            <span
              >Contact:
              <a :href="`mailto:${author.email}`">{{ author.email }}</a></span
            >
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-2">
          <router-link
            edit
            :to="{ path: `/post/${post.id}/edit` }"
            class="btn btn-outline-primary float-md-right mt-3 mr-3 mt-md-5 btn-block"
            ><i class="bi bi-pencil-fill mr-2"></i>Edit</router-link
          >
        </div>
      </div>
    </article>

    <!-- Comments -->

    <div v-if="comments.length > 0" class="comments-card shadow mt-5 p-4">
      <h2 class="comments-title my-3">Comments</h2>
      <hr />
      <ul class="list-group list-group-flush">
        <li
          v-for="comment in comments"
          :key="comment.id"
          class="list-group-item bg-transparent p-0"
        >
          <div class="comment mt-2">
            <div class="commenter d-flex align-items-center">
              <div class="commenter-picture"></div>
              <h5 class="m-3">{{ comment.name }}</h5>
            </div>
            <p class="mt-2">{{ comment.body }}</p>
          </div>
        </li>
      </ul>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Post",
  components: { Nav, Footer },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
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
    this.$store.dispatch("fetchPost", this.postId);
  },
};
</script>

<style scoped lang="scss">
.author {
  font-size: 1.125rem;
}
.author-picture {
  width: 125px;
  height: 125px;
  background-image: url("../assets/images/user-placeholder.svg");
}
.info {
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.commenter-picture {
  flex: 0 0 50px;
  height: 50px;
  background-image: url("../assets/images/commenter-placeholder.svg");
}
</style>
