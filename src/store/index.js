import { createStore } from "vuex";
import axios from "axios";
import router from "../router/";

export default createStore({
  state: {
    posts: [],
    comments: [],
    authors: [],
    loading: false,
  },
  mutations: {
    SET_LOADING(state, val) {
      state.loading = val;
    },
    SET_POSTS(state, data) {
      state.posts = data;
    },
    SET_POST(state, data) {
      state.posts.push(data);
    },
    SET_COMMENTS(state, data) {
      state.comments = data;
    },
    SET_AUTHORS(state, data) {
      state.authors = data;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_POSTS", data);
      } catch (e) {
        console.log(e.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchPost({ commit }, postId) {
      commit("SET_LOADING", true);
      try {
        const [post, comments, authors] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
          axios.get(
            `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
          ),
          axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);
        commit("SET_POST", post.data);
        commit("SET_COMMENTS", comments.data);
        commit("SET_AUTHORS", authors.data);
      } catch (e) {
        console.log(e.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchAuthors({ commit }) {
      commit("SET_LOADING", true);
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_AUTHORS", data);
      } catch (e) {
        console.log(e.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async createPost({ commit }, postData) {
      commit("SET_LOADING", true);
      try {
        const {
          data,
        } = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          JSON.stringify(postData),
          { headers: { "Content-type": "application/json; charset=UTF-8" } }
        );
        commit("SET_POST", data);
        router.push(`/post/${data.id}`);
      } catch (e) {
        console.log(e.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async updatePost({ commit }, postData) {
      commit("SET_LOADING", true);
      try {
        const {
          data,
        } = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${postData.id}`,
          JSON.stringify(postData),
          { headers: { "Content-type": "application/json; charset=UTF-8" } }
        );
        commit("SET_POST", data);
        router.push(`/post/${data.id}`);
      } catch (e) {
        console.log(e.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    loading: (state) => state.loading,
    posts: (state) => state.posts,
    post: (state) => (id) =>
      state.posts.find((post) => post.id === parseInt(id)),
    comments: (state) => state.comments,
    authors: (state) => state.authors,
    author: (state) => (id) => state.authors.find((author) => author.id === id),
  },
});
