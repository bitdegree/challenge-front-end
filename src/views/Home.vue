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
                userID: post.userID,
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

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      showPosts: false,
      posts: [{ post: { userId: "", id: "", title: "", body: "" } }],
    };
  },
  methods: {
    getAllBlogPosts() {
      const jsonPosts = "https://jsonplaceholder.typicode.com/posts";
      let request = new XMLHttpRequest();
      request.open("GET", jsonPosts);
      request.responseType = "json";
      request.send();
      request.onload = function () {
        const posts = request.response;
        populatePosts(posts);
      };
      let that = this;
      function populatePosts(arr) {
        for (let n = 0; n < arr.length; n++) {
          const newGenericPost = {
            userId: arr[n].userId,
            id: arr[n].id,
            title: arr[n].title,
            body: arr[n].body,
          };
          that.posts.push(newGenericPost);
          that.showPosts = true;
        }
      }
    },
  },
};
</script>
