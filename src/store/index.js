import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  getters: {
    getImages: (state) => state.images,
  },
  mutations: {},
  actions: {},
  modules: {},
});
