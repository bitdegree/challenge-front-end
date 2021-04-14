import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("SET_POSTS", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    posts: (state) => state.posts,
  },
});
