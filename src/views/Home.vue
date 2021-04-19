<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button v-if="!showPosts" @click="getAllBlogPosts">
      Show all blog posts
    </button>
    <h1 v-if="showPosts">All blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span>{{ post.userId }}</span>
        <span>{{ post.title }}</span>
        <span>{{ post.body }}</span>
        <button>
          <router-link
            :to="{
              name: 'Post-page',
              params: {
                id: post.id,
                userId: post.userId,
                title: post.title,
                body: post.body,
              },
            }"
          >
            Check post No. {{ post.id }}
          </router-link>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      showPosts: false,
      posts: [],
      newPost: "",
    };
  },
  methods: {
    getAllBlogPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          const posts = response.data;
          this.posts = posts;
        });
    },
  },
};
</script>
