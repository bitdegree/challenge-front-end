<template>
  <div class="post-page">
    <div v-if="!loaded">Post is loading...</div>
    <div v-if="loaded">
      <div class="card-body">
        <h5 class="card-title">Post No. {{ post.id }} - {{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <router-link :to="{ name: 'Post-edit-page', params: { id: post.id } }">
          <button class="btn btn-primary">Edit Post</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id", "updatedPost"],
  data() {
    return {
      post: {},
      loaded: false,
    };
  },
  created() {
    console.log(this.updatedPost);
    if (this.updatedPost !== undefined) {
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
          body: JSON.stringify({
            id: this.updatedPost.id,
            title: this.updatedPost.title,
            body: this.updatedPost.body,
            userId: this.updatedPost.userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          this.post = response.data;
        });
    } else {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((response) => {
          this.post = response.data;
          this.loaded = true;
        });
    }
  },
};
</script>
