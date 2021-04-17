<template>
  <div v-if="!loading" class="home bg-transparent">
    <div class="hero text-white px-3 px-md-4 px-lg-5">
      <Nav />
      <div class="view col-lg-8 col-xl-6 text-center text-lg-left">
        <h1>View.</h1>
        <p class="lead">
          Aenean nec massa vitae justo iaculis placerat. Suspendisse potenti.
        </p>
        <a
          class="btn btn-primary btn-lg"
          @click="$router.push('/create')"
          role="button"
          >Start Writing</a
        >
      </div>
    </div>
    <main class="content container py-5">
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="post in posts" :key="post.id">
          <article class="card shadow border-0">
            <div class="card-body">
              <div class="card-title">
                <router-link :to="{ path: `/post/${post.id}` }">
                  <h2>
                    {{ post.title }}
                  </h2></router-link
                >
              </div>
              <p class="card-text">{{ post.body }}</p>
              <router-link
                :to="{ path: `/post/${post.id}` }"
                class="float-right my-3 mr-3"
              >
                Read More &#xbb;
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </main>
    <Footer class="mt-3" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: { Nav, Footer },
  data: () => ({}),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
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
<style scoped lang="scss">
.hero {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.35)),
    url("../assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: right bottom;
}

.view {
  h1 {
    margin: 50px 0;
    font-weight: bold;
    font-size: 3.5rem;
    color: $secondary;
  }
  .btn {
    width: 175px;
    margin: 45px 0 70px;
  }
  p {
    color: $secondary;
  }
  @include tablet-and-up {
    margin-top: 150px;
  }
  @include laptop-and-up {
    h1,
    p {
      text-align: left;
    }
    h1 {
      margin: 325px 0 75px;
      font-size: 5.5rem;
    }
    p {
      color: $light;
      width: 450px;
    }
    .btn {
      margin-top: 15px;
    }
  }
}

main {
  .row > div {
    padding-bottom: 30px;
  }
  .card-body {
    a h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: $secondary;
      &:hover {
        color: $primary;
      }
      @include tablet-and-up {
        height: 5rem;
      }
    }
    p {
      line-height: 2rem;
      min-height: 8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      @include laptop-and-up {
        margin-top: 25px;
      }
    }
  }
}
</style>
