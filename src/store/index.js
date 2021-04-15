import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    comments: [],
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data;
    },
    SET_POST(state, data) {
      state.posts.push(data);
    },
    SET_COMMENTS(state, data) {
      state.comments = data;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_POSTS", data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchPost({ commit }, postId) {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        commit("SET_POST", data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchComments({ commit }, postId) {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        commit("SET_COMMENTS", data);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  getters: {
    posts: (state) => state.posts,
    post: (state) => (id) => state.posts.find((post) => post.id == id),
    comments: (state) => state.comments,
  },
});
